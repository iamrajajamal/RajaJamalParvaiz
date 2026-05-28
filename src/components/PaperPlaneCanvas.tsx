import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function PaperPlaneCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- SCENE SETUP ---
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    
    // Transparent or matching sky gradient
    // We will keep scene background transparent so it sits perfectly over the CSS gradient
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // --- PROCEDURAL 3D PAPER PLANE MODEL ---
    const planeGeom = new THREE.BufferGeometry();
    
    // Procedural coordinates for low-poly folded paper plane
    // Tip is at (0, 0, 1.2), center tail at (0, 0, -1.2)
    const vertices = new Float32Array([
      // Left Wing (Top face)
      0, 0, 1.2,
      -1.4, 0.15, -0.6,
      -0.08, -0.05, -0.6,

      // Right Wing (Top face)
      0, 0, 1.2,
      0.08, -0.05, -0.6,
      1.4, 0.15, -0.6,

      // Left Keel (Under side fold)
      0, 0, 1.2,
      -0.08, -0.05, -0.6,
      0, -0.35, -0.6,

      // Right Keel (Under side fold)
      0, 0, 1.2,
      0, -0.35, -0.6,
      0.08, -0.05, -0.6,
    ]);

    planeGeom.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    planeGeom.computeVertexNormals();

    // Semi-matte paper material with flat-shading for sharp fold creases
    const paperMat = new THREE.MeshStandardMaterial({
      color: 0xfaf6ec,
      roughness: 0.9,
      metalness: 0.1,
      side: THREE.DoubleSide,
      flatShading: true,
    });

    const planeMesh = new THREE.Mesh(planeGeom, paperMat);
    scene.add(planeMesh);

    // Add a dark paper-outline wireframe to highlight folds
    const wireframeGeom = new THREE.WireframeGeometry(planeGeom);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x4b3f2f, linewidth: 1.5 });
    const wireframe = new THREE.LineSegments(wireframeGeom, lineMat);
    planeMesh.add(wireframe);

    // Scale up the plane mesh for visibility
    planeMesh.scale.set(0.9, 0.9, 0.9);

    // --- DYNAMIC TRAJECTORY PATH ---
    const maxPathPoints = 50;
    const trajectoryPoints: THREE.Vector3[] = [];
    const trajectoryGeom = new THREE.BufferGeometry();
    const trajectoryPositions = new Float32Array(maxPathPoints * 3);
    trajectoryGeom.setAttribute("position", new THREE.BufferAttribute(trajectoryPositions, 3));

    const trajectoryMat = new THREE.LineDashedMaterial({
      color: 0x5c4613,
      dashSize: 0.3,
      gapSize: 0.2,
      linewidth: 2,
    });
    
    const trajectoryLine = new THREE.Line(trajectoryGeom, trajectoryMat);
    scene.add(trajectoryLine);

    // --- CONTROLS / PHYSICS VARIABLES ---
    const state = {
      pos: new THREE.Vector3(-6, 2, 0),
      vel: new THREE.Vector3(0.08, 0.03, 0),
      target: new THREE.Vector3(0, 0, 0),
      hasTarget: false,
      speed: 0.07,
      maxSpeed: 0.12,
      minSpeed: 0.05,
      glideTime: 0,
      bankingAngle: 0,
      pitchAngle: 0,
      yawAngle: 0,
    };

    // Initialize plane position
    planeMesh.position.copy(state.pos);

    // --- RAYCASTING FOR TARGET CLICKING ---
    const raycaster = new THREE.Raycaster();
    const mouse2D = new THREE.Vector2();
    // Intersection plane at Z = 0
    const targetPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

    const onPointerDown = (event: PointerEvent) => {
      // Calculate normal mouse coords
      const rect = renderer.domElement.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      mouse2D.set(x, y);
      raycaster.setFromCamera(mouse2D, camera);

      const intersectionPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(targetPlane, intersectionPoint);

      if (intersectionPoint) {
        state.target.copy(intersectionPoint);
        state.hasTarget = true;

        // Draw trajectory to target
        drawTrajectory(state.pos, state.target);
      }
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);

    const drawTrajectory = (start: THREE.Vector3, end: THREE.Vector3) => {
      trajectoryPoints.length = 0;
      
      // Generate quadratic bezier path for a smooth flight trajectory curve
      const pStart = start.clone();
      const pEnd = end.clone();
      
      // Control point is mid point offset vertically or horizontally to create a nice swoop
      const midPoint = new THREE.Vector3().addVectors(pStart, pEnd).multiplyScalar(0.5);
      midPoint.y += (pEnd.y > pStart.y ? 1 : -1) * 2;
      
      const curve = new THREE.QuadraticBezierCurve3(pStart, midPoint, pEnd);
      const points = curve.getPoints(maxPathPoints - 1);
      
      const positions = trajectoryGeom.attributes.position.array as Float32Array;
      for (let i = 0; i < maxPathPoints; i++) {
        const pt = points[i] || pEnd;
        positions[i * 3] = pt.x;
        positions[i * 3 + 1] = pt.y;
        positions[i * 3 + 2] = pt.z;
      }
      trajectoryGeom.attributes.position.needsUpdate = true;
      trajectoryLine.computeLineDistances();
      trajectoryLine.visible = true;
    };

    // --- ANIMATION / PHYSICS LOOP ---
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.1);
      state.glideTime += delta;

      // Camera aspect/bounds tracking
      const aspect = containerRef.current ? containerRef.current.clientWidth / containerRef.current.clientHeight : 1.6;
      const xBound = aspect * 8.5;
      const yBound = 5.5;

      if (state.hasTarget) {
        // --- STEER TO CLICK TARGET ---
        const toTarget = new THREE.Vector3().subVectors(state.target, state.pos);
        const dist = toTarget.length();

        if (dist < 0.5) {
          state.hasTarget = false;
          trajectoryLine.visible = false;
        } else {
          // Calculate heading steering force
          toTarget.normalize();
          
          // Interpolate velocity towards target direction
          const steerSpeed = 2.5 * delta;
          state.vel.lerp(toTarget.multiplyScalar(state.maxSpeed), steerSpeed);
        }
      } else {
        // --- AUTONOMOUS GLIDING PATTERN (Idle) ---
        // Gently swoop back and forth
        const targetVelX = Math.sin(state.glideTime * 0.4) * 0.05 + 0.04;
        const targetVelY = Math.cos(state.glideTime * 0.7) * 0.02 + 0.005;
        
        state.vel.x = THREE.MathUtils.lerp(state.vel.x, targetVelX, 0.03);
        state.vel.y = THREE.MathUtils.lerp(state.vel.y, targetVelY, 0.03);
        
        // Wrap screen edges if flying off-screen autonomously
        if (state.pos.x > xBound + 2) {
          state.pos.x = -xBound - 2;
        } else if (state.pos.x < -xBound - 2) {
          state.pos.x = xBound + 2;
        }

        if (state.pos.y > yBound + 1.5) {
          state.pos.y = -yBound - 1.5;
        } else if (state.pos.y < -yBound - 1.5) {
          state.pos.y = yBound + 1.5;
        }
      }

      // Add small wind turbulence jitter
      state.pos.add(state.vel);
      state.pos.y += Math.sin(state.glideTime * 8) * 0.002;

      // Update mesh position
      planeMesh.position.copy(state.pos);

      // --- CALCULATE BANKING AND PITCH ROTATION (PHYSICS SENSE) ---
      // Yaw angle (heading direction)
      const currentYaw = Math.atan2(state.vel.y, state.vel.x);
      
      // Pitch angle (climbing / descending)
      const speed2D = Math.sqrt(state.vel.x * state.vel.x + state.vel.y * state.vel.y);
      const currentPitch = Math.atan2(state.vel.z, speed2D);

      // Banking angle (roll) proportional to rate of change in heading
      const diffYaw = currentYaw - state.yawAngle;
      // Normalize difference between -PI and PI
      const normalizedDiffYaw = Math.atan2(Math.sin(diffYaw), Math.cos(diffYaw));
      
      const targetRoll = -normalizedDiffYaw * 8.0; // roll intensity
      state.bankingAngle = THREE.MathUtils.lerp(state.bankingAngle, targetRoll, 0.1);
      state.yawAngle = currentYaw;
      state.pitchAngle = THREE.MathUtils.lerp(state.pitchAngle, currentPitch, 0.1);

      // Apply orientations
      // The default mesh points down the Z axis (0, 0, 1)
      // Reset rotation, then apply heading yaw, pitch, and banking roll
      planeMesh.rotation.set(0, 0, 0);
      planeMesh.rotateY(-state.yawAngle + Math.PI / 2); // face forward along flight direction
      planeMesh.rotateX(state.pitchAngle);
      planeMesh.rotateZ(state.bankingAngle);

      // Render scene
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // --- RESIZE LISTENER ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.dispose();
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-[2] opacity-85"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
