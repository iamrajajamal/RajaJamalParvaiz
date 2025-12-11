import {
  Code,
  Zap,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  tech: string[];
  color: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseStudyChallenge {
  challenge: string;
  solution: string;
}

export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudyGalleryItem {
  type: "image" | "video";
  url: string;
  caption: string;
}

export interface CaseStudyData {
  overview: string;
  role: string;
  duration: string;
  team: string;
  platform: string;
  features: CaseStudyFeature[];
  challenges: CaseStudyChallenge[];
  results: CaseStudyResult[];
  gallery: CaseStudyGalleryItem[];
  producerMetrics?: CaseStudyResult[];
}

const defaultFeatures: CaseStudyFeature[] = [
  {
    title: "Advanced Multiplayer System",
    description: "Real-time synchronization with lag compensation and prediction algorithms for smooth gameplay across different network conditions.",
    icon: Users,
  },
  {
    title: "Optimized Performance",
    description: "Achieved 60 FPS on mid-range devices through advanced optimization techniques including object pooling and LOD systems.",
    icon: Zap,
  },
  {
    title: "Scalable Architecture",
    description: "Modular codebase with clean architecture patterns, making it easy to add new features and maintain the project long-term.",
    icon: Code,
  },
  {
    title: "Player Engagement",
    description: "Implemented progression systems, achievements, and social features that keep players coming back.",
    icon: Trophy,
  },
];

const defaultChallenges: CaseStudyChallenge[] = [
  {
    challenge: "Network Latency Issues",
    solution: "Implemented client-side prediction and server reconciliation to provide smooth gameplay even with 150ms+ latency.",
  },
  {
    challenge: "Cross-Platform Compatibility",
    solution: "Created platform-specific build pipelines and abstraction layers to handle differences between mobile, PC, and web versions.",
  },
  {
    challenge: "Performance on Low-End Devices",
    solution: "Developed dynamic quality settings and aggressive optimization techniques including texture atlasing and draw call batching.",
  },
];

const defaultResults: CaseStudyResult[] = [
  { metric: "10K+", label: "Active Players" },
  { metric: "4.8★", label: "Average Rating" },
  { metric: "85%", label: "Retention Rate" },
  { metric: "60 FPS", label: "Performance" },
];

const defaultProducerMetrics: CaseStudyResult[] = [
  { metric: "On Time", label: "Delivery" },
  { metric: "Under Budget", label: "Resource Mgmt" },
  { metric: "Agile", label: "Methodology" },
  { metric: "100%", label: "Team Satisfaction" },
];

export const getCaseStudyData = (project: Project): CaseStudyData => {
  // Define specific data for each project
  const specificData: Record<string, Partial<CaseStudyData>> = {
    "Clown Town": {
      overview: "Clown Town is a high-energy multiplayer brawler where players compete in chaotic, physics-based combat. The project required a robust networking solution to handle fast-paced interactions and a scalable backend for matchmaking and leaderboards.",
      role: "Lead Developer & Technical Architect",
      duration: "6 months",
      team: "5 developers, 2 designers, 1 QA",
      features: [
        {
          title: "Predictive Networking",
          description: "Implemented custom rollback netcode to ensure hit registration felt instant and fair, even on unstable mobile connections.",
          icon: Users,
        },
        {
          title: "Dynamic Physics",
          description: "Created a deterministic physics system that syncs perfectly across clients, allowing for complex object interactions.",
          icon: Zap,
        },
        {
          title: "Matchmaking Logic",
          description: "Developed skill-based matchmaking using Elo rating ensures competitive balance for all players.",
          icon: Target,
        },
        {
          title: "Live Ops Tools",
          description: "Built a dashboard for game masters to monitor server health, ban cheaters, and trigger in-game events.",
          icon: Code,
        },
      ],
      challenges: [
        {
          challenge: "Physics Synchronization",
          solution: "Solved desync issues by implementing a deterministic lockstep simulation for critical gameplay physics objects.",
        },
        {
          challenge: "Mobile Performance",
          solution: "Heavily optimized character rigs and shaders to maintain 60FPS on iPhone 8 and equivalent Android devices.",
        },
      ],
      results: [
        { metric: "50K+", label: "Downloads" },
        { metric: "4.7★", label: "App Store Rating" },
        { metric: "12m", label: "Avg Session Time" },
        { metric: "99.9%", label: "Uptime" },
      ],
      producerMetrics: [
        { metric: "2 Weeks", label: "Ahead of Schedule" },
        { metric: "$15K", label: "Under Budget" },
        { metric: "12", label: "Sprints Completed" },
        { metric: "0", label: "Critical Bugs at Launch" },
      ],
      gallery: [
        { type: "image", url: project.image, caption: "Chaotic Brawls" },
        { type: "image", url: project.image, caption: "Character Customization" },
        { type: "image", url: project.image, caption: "Lobby System" },
        { type: "image", url: project.image, caption: "Victory Screen" },
      ]
    },
    
    // SECOND EXAMPLE: Alive AR
    "Alive AR": {
      overview: "Alive AR pushes the boundaries of mobile augmented reality by turning the real world into a tactical battlefield. It uses GPS and camera data to create a shared spatial coordinate system for 5v5 combat.",
      role: "AR Systems Engineer",
      duration: "8 months",
      team: "4 developers, 3 artists",
      features: [
        {
          title: "Shared AR Space",
          description: "Developed a system to align coordinate spaces between multiple users instantly using cloud anchors.",
          icon: Users,
        },
        {
          title: "Real-World Occlusion",
          description: "Utilized depth APIs to allow virtual objects to hide behind real-world obstacles like cars and trees.",
          icon: Target,
        },
        {
          title: "Geo-Fencing",
          description: "Integrated GPS limits to ensure gameplay only happens in safe, designated public park areas.",
          icon: Trophy,
        },
      ],
      challenges: [
        {
          challenge: "Drift Correction",
          solution: "Implemented continuous relocalization using visual feature points to prevent AR objects from drifting over time.",
        },
        {
          challenge: "Battery & Heat",
          solution: "Created a custom thermal management system that dynamically lowers resolution and frame rate to prevent overheating.",
        },
      ],
      results: [
        { metric: "Top 10", label: "AR App Contest" },
        { metric: "20+", label: "Parksmapped" },
        { metric: "15min", label: "Avg Battle Time" },
        { metric: "30 FPS", label: "Stable AR" },
      ],
      producerMetrics: [
        { metric: "4", label: "Partnerships Managed" },
        { metric: "100%", label: "Milestone Delivery" },
        { metric: "SCRUM", label: "Methodology Used" },
        { metric: "3", label: "Design Iterations" },
      ],
      // Custom gallery with specific captions for this project
      gallery: [
        { type: "image", url: project.image, caption: "AR Combat View" },
        { type: "image", url: project.image, caption: "Map Selection" },
        { type: "image", url: project.image, caption: "Equipment Setup" },
      ]
    }
  };

  const data = specificData[project.title] || {};

  return {
    overview: data.overview || `${project.description} This project showcases advanced game development techniques. Built with scalability and player experience in mind.`,
    role: data.role || "Lead Developer",
    duration: data.duration || "N/A",
    team: data.team || "N/A",
    platform: data.platform || project.tags.join(", "),
    // Use specific features if available, otherwise fall back to defaults
    features: data.features || defaultFeatures,
    challenges: data.challenges || defaultChallenges,
    results: data.results || defaultResults,
    producerMetrics: data.producerMetrics || defaultProducerMetrics,
    // Gallery fallback
    gallery: data.gallery || [
      { type: "image", url: project.image, caption: "Gameplay Screenshot" },
      { type: "image", url: project.image, caption: "UI Overview" },
      { type: "image", url: project.image, caption: "Key Feature" },
    ],
  };
};
