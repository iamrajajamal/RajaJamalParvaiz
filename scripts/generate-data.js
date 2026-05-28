
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPRESSED_DIR = path.join(__dirname, '../src/assets/Portfolio-Compressed');
const OUTPUT_FILE = path.join(__dirname, '../src/data/caseStudies.ts');

const projects = [
  {
    dirName: 'ClownTown',
    title: 'Clown Town',
    overview: "Clown Town is a fast-paced, physics-driven multiplayer brawler built for competitive mobile play. The project focused on delivering responsive, fair combat in chaotic scenarios while integrating a scalable backend for matchmaking, player sessions, and leaderboards using Mirror and Nakama.",
    role: "Lead Developer & Technical Architect",
    duration: "6 months",
    team: "2 developers, 1 designer, 1 QA, 1 3D Artist",
    platform: "Mobile",
    features: [
      {
        title: "Authoritative Multiplayer Networking",
        description: "Built real-time multiplayer gameplay using Mirror with client-side prediction and server authority to ensure responsive controls and fair combat during high-action physics-based encounters.",
        icon: "Users",
      },
      {
        title: "Custom Matchmaking via Nakama",
        description: "Integrated Nakama to provide skill-based matchmaking, player sessions, and lobby flow, compensating for Mirror’s lack of native matchmaking support.",
        icon: "Target",
      },
      {
        title: "Modular Factory Architecture",
        description: "Designed a Factory Pattern covering 10 gameplay departments including player movement, weapons, economy, and game rules, enabling scalable feature development and rapid iteration.",
        icon: "Code",
      },
      {
        title: "ScriptableObject Architecture (SOAP)",
        description: "Implemented a ScriptableObject-driven architecture for player states, weapons, and departments, allowing clean separation of data and logic while improving multiplayer state consistency.",
        icon: "Zap",
      }
    ],
    challenges: [
       {
        challenge: "Lack of Built-In Matchmaking in Mirror",
        solution: "Solved by integrating Nakama as an external matchmaking and session authority, synchronizing room creation and player assignment with Mirror’s networking layer.",
      },
      {
        challenge: "Team Balance & Boss Clown Gameplay",
        solution: "Implemented dynamic team balancing logic to support an asymmetrical design where one team contains a single Boss Clown, ensuring fairness without sacrificing gameplay identity.",
      },
      {
        challenge: "Player Synchronization During High Chaos",
        solution: "Developed deterministic synchronization for critical physics and gameplay systems to prevent desync during fast-paced multiplayer interactions.",
      },
      {
        challenge: "Backend & Client State Consistency",
        solution: "Created a clean synchronization interface between Nakama and Mirror to keep backend data and real-time gameplay state aligned without duplicated authority.",
      },
    ],
    results: [
      { metric: "50K+", label: "Downloads" },
      { metric: "4.7★", label: "App Store Rating" },
      { metric: "12m", label: "Avg Session Time" },
      { metric: "99.9%", label: "Server Uptime" },
    ],
    producerMetrics: [
      { metric: "2 Weeks", label: "Ahead of Schedule" },
      { metric: "$15K", label: "Under Budget" },
      { metric: "12", label: "Sprints Completed" },
      { metric: "0", label: "Critical Bugs at Launch" },
    ]
  },
  {
    dirName: 'AliveAR',
    title: 'Alive AR',
    overview: "Alive AR is a real-time augmented reality multiplayer shooter that brings competitive FPS gameplay into the physical world. Built using Unity with ARCore and ARKit, the project delivers stable 5v5 multiplayer matches, persistent player progression, and multiple competitive game modes supported by a scalable backend.",
    role: "Lead AR & Multiplayer Developer",
    duration: "6 months",
    team: "2 developers, 2 designers, 1 QA, 1 3D Artist",
    platform: "AR (Mobile)",
     features: [
      { title: "5v5 AR Multiplayer Combat", description: "Developed real-time 5v5 multiplayer gameplay using Photon, enabling fast-paced team combat synchronized across multiple AR devices.", icon: "Users" },
      { title: "AR World Mapping & Anchoring", description: "Implemented shared AR world alignment using ARCore and ARKit, allowing all players to see and interact with the same virtual map placed in the real environment.", icon: "Map" },
      { title: "Multiple Competitive Game Modes", description: "Added several multiplayer modes including Deathmatch, Team Deathmatch, and Capture the Flag to support varied competitive playstyles.", icon: "Target" },
      { title: "Custom Weapon Loadouts", description: "Built a flexible weapon system allowing players to select custom weapon loadouts before each match, supporting balance and strategic variety.", icon: "Zap" },
      { title: "PlayFab Backend Integration", description: "Integrated PlayFab for player persistence, progression tracking, inventory management, and profile data across sessions.", icon: "Database" },
      { title: "In-Game Shop System", description: "Implemented an in-game shop tied to PlayFab inventories, enabling players to unlock and manage weapons and upgrades.", icon: "ShoppingCart" },
    ],
    challenges: [
      { challenge: "Multiplayer Synchronization in AR", solution: "Optimized Photon synchronization to handle both player state and AR spatial data, ensuring consistent gameplay across all connected devices." },
      { challenge: "Stable AR Map Placement", solution: "Used shared anchors and world origin alignment to ensure the virtual map appeared consistently in the real world for all players without drifting." },
      { challenge: "Maintaining Map Stability During Gameplay", solution: "Implemented continuous AR tracking validation and correction to keep the virtual environment stable throughout extended play sessions." },
      { challenge: "Custom Weapon Loadouts Per Match", solution: "Designed a pre-match configuration system allowing players to select weapons per game while maintaining server-authoritative validation." },
    ],
    results: [
      { metric: "5v5", label: "AR Multiplayer Matches" },
      { metric: "3+", label: "Game Modes" },
      { metric: "Stable", label: "Shared AR Map" },
      { metric: "Persistent", label: "Player Progression" },
    ],
    producerMetrics: [
      { metric: "Cross-Platform", label: "ARCore & ARKit" },
      { metric: "Scalable", label: "Multiplayer Backend" },
      { metric: "Optimized", label: "AR Performance" },
      { metric: "Competitive", label: "Game Design" },
    ],
  },
  {
    dirName: 'SpadesWithFriends',
    title: 'Spades With Friends',
    overview: "Spades With Friends is a real-time multiplayer card game built around classic and competitive Spades gameplay. The project focused on delivering a smooth 2v2 online experience with reliable card synchronization, social features, and support for multiple rule variations.",
    role: "Multiplayer Game Developer",
    duration: "5 months",
    team: "2 developers, 1 designer, 1 QA",
    platform: "Web & Mobile",
     features: [
      { title: "2v2 Real-Time Multiplayer", description: "Developed real-time 2v2 multiplayer gameplay with authoritative room management, ensuring fair turn-based logic and consistent game flow across all players.", icon: "Users" },
      { title: "Custom Matchmaking System", description: "Implemented custom matchmaking logic to pair players into balanced 2v2 matches, supporting both quick play and invite-based sessions.", icon: "Target" },
      { title: "Party & Custom Rooms", description: "Built a party system allowing players to create private rooms, invite friends, and rejoin matches seamlessly after disconnections.", icon: "Code" },
      { title: "Multiple Spades Rule Sets", description: "Implemented flexible rule configurations including Blind Nil, Big Joker, Little Joker, and other variations, allowing dynamic rule selection per room.", icon: "Zap" },
      { title: "In-Game Chat System", description: "Integrated a real-time chat system enabling communication between players during matches and within party lobbies.", icon: "MessageCircle" },
    ],
    challenges: [
      { challenge: "Room Leave & Rejoin Handling", solution: "Designed a robust room state recovery system that allows players to safely leave and rejoin ongoing matches without disrupting gameplay." },
      { challenge: "Custom Matchmaking Logic", solution: "Built a custom matchmaking flow to manage player pairing, team assignment, and session initialization outside of engine-provided solutions." },
      { challenge: "Private & Custom Room Management", solution: "Implemented custom room creation with unique room codes, access validation, and controlled player entry to support private games." },
      { challenge: "Real-Time Card Synchronization", solution: "Ensured consistent card state across all clients using authoritative turn handling and event-based synchronization to prevent desync or cheating." },
      { challenge: "Multiplayer Chat Synchronization", solution: "Optimized chat message delivery and ordering to maintain reliable, low-latency communication during live matches." },
    ],
    results: [
      { metric: "2v2", label: "Multiplayer Mode" },
      { metric: "5+", label: "Rule Variations" },
      { metric: "100%", label: "Authoritative Card Sync" },
      { metric: "Low Latency", label: "Real-Time Gameplay" },
    ],
    producerMetrics: [
      { metric: "On Time", label: "Delivery" },
      { metric: "Stable", label: "Live Multiplayer" },
      { metric: "Scalable", label: "Room System" },
      { metric: "Secure", label: "Game State Sync" },
    ],
  },
  {
    dirName: 'PocketShop',
    title: 'Pocket Shop',
    overview: "Pocket Shop is a garage management and racing simulation game that blends drift and drag racing with narrative-driven progression. The project combines competitive racing, an in-game auction economy, and a full visual novel system, all supported by a robust backend for matchmaking, bidding, and leaderboards.",
    role: "Lead Gameplay & Systems Developer",
    duration: "7 months",
    team: "2 developers, 1 designers, 1 3D Artist, 1 QA",
    platform: "Mobile",
    features: [
      { title: "Drift & Drag Racing Modes", description: "Built multiple racing modes including drift and drag races, each with distinct physics tuning, scoring systems, and progression mechanics.", icon: "Zap" },
      { title: "Auction System & Matchmaking", description: "Implemented a real-time auction system using Nakama to handle auto-bidding logic, synchronized item ownership, and race room matchmaking.", icon: "Target" },
      { title: "Department-Based Garage Systems", description: "Developed interconnected garage departments such as car wash, fuel system, and tow truck, where upgrades directly impact racing performance and economy.", icon: "Code" },
      { title: "Visual Novel Story System", description: "Created a complete visual novel system with branching dialogue, player choices, and persistent save/load support integrated into the gameplay loop.", icon: "BookOpen" },
      { title: "World Map & Competitive Progression", description: "Designed a world map system where players compete for leaderboard positions; races affect global rankings while story-driven races advance narrative progression.", icon: "Map" },
    ],
    challenges: [
      { challenge: "Auction System Architecture", solution: "Designed a server-authoritative auction system using Nakama to ensure fair bidding, prevent race conditions, and maintain real-time synchronization across players." },
      { challenge: "Visual Novel System with Persistence", solution: "Implemented a modular visual novel framework with save/load functionality, allowing players to resume story progression across sessions and devices." },
      { challenge: "Story Progression Tied to Race Outcomes", solution: "Built a rule-based progression system where winning specific races unlocks story chapters and triggers narrative events dynamically." },
      { challenge: "Department-Based Upgrades Affecting Gameplay", solution: "Created a centralized upgrade dependency system so improvements in garage departments dynamically influence racing performance, economy, and story flow." },
      { challenge: "Leaderboard Map Visualization", solution: "Developed a world map interface that visualizes leaderboard positions and race locations, integrating backend ranking data without requiring real-time multiplayer races." },
      { challenge: "Robust Backend Integration", solution: "Integrated Nakama deeply into the game loop to manage auctions, matchmaking, leaderboards, and persistent player data with minimal client-side trust." },
    ],
    results: [
      { metric: "3+", label: "Game Systems Integrated" },
      { metric: "Multiple", label: "Racing Modes" },
      { metric: "Persistent", label: "Story Progression" },
      { metric: "Scalable", label: "Backend Architecture" },
    ],
    producerMetrics: [
      { metric: "On Time", label: "Milestone Delivery" },
      { metric: "Stable", label: "Backend Operations" },
      { metric: "Expandable", label: "Department Systems" },
      { metric: "Narrative-Driven", label: "Player Retention" },
    ],
  },
  {
    dirName: 'DubbGame',
    title: 'DubbGames',
    overview: "DubbGames is a full-scale web-based casino gaming platform combining real-time multiplayer games, probability-driven casino mechanics, and a seamless Unity–React integration. The project delivers multiple casino games within a single web application, supported by a robust backend architecture for gameplay, player data, and transactions.",
    role: "Lead Full-Stack & Multiplayer Developer",
    duration: "8 months",
    team: "3 developers, 2 designers, 1 QA",
    platform: "Web (WebGL)",
    features: [
      { title: "Multi-Game Casino Platform", description: "Developed a complete web application featuring five games: Blackjack, Baccarat, PrizePool, DigitDream, and Slot Machine, all unified under a single casino platform.", icon: "Layers" },
      { title: "Multiplayer Card Games via Nakama", description: "Implemented real-time multiplayer for Blackjack (4-player tables with dealer) and Baccarat (4-player tables with banker) using Nakama for matchmaking, room management, and synchronization.", icon: "Users" },
      { title: "Backend-Driven Casino Games", description: "Built PrizePool and DigitDream using Node.js backend APIs to handle game logic, fairness validation, and reward distribution.", icon: "Server" },
      { title: "Slot Machine with Probability Logic", description: "Developed a slot machine system featuring paylines, configurable reward rules, and probability-based outcomes to ensure balanced and engaging gameplay.", icon: "Zap" },
      { title: "Unity–React Web Integration", description: "Created a seamless bridge between Unity WebGL builds and a React frontend, enabling synchronized player data, game state updates, and UI interactions.", icon: "Code" },
    ],
    challenges: [
      { challenge: "Unity–React Player Data Synchronization", solution: "Designed a stable communication layer to sync player profiles, balances, and session data between React UI and Unity WebGL games in real time." },
      { challenge: "Custom Unity–React Bridge Implementation", solution: "Wrote a custom JavaScript bridge to enable two-way messaging between Unity WebGL and React, ensuring clean data flow and decoupled architecture." },
      { challenge: "WebGL Performance & Responsiveness", solution: "Optimized rendering, memory usage, and asset loading to maintain smooth gameplay and responsive UI across browsers and screen sizes." },
      { challenge: "WebGL Optimization for Casino Games", solution: "Reduced build size and runtime overhead through asset compression, shader optimization, and selective feature loading for web deployment." },
      { challenge: "Designer Asset Optimization", solution: "Provided clear technical guidelines and pipelines for designers to create WebGL-optimized assets, reducing draw calls and improving load times." },
      { challenge: "Scalable Casino Platform Planning", solution: "Designed a complete operational plan covering transactions, player profiles, game lifecycle management, and scalability for future casino expansion." },
    ],
    results: [
      { metric: "5", label: "Casino Games Launched" },
      { metric: "4-Player", label: "Multiplayer Tables" },
      { metric: "WebGL", label: "Optimized Deployment" },
      { metric: "Unified", label: "Casino Platform" },
    ],
    producerMetrics: [
      { metric: "Scalable", label: "Backend Architecture" },
      { metric: "Secure", label: "Player Data Flow" },
      { metric: "Optimized", label: "Web Performance" },
      { metric: "Expandable", label: "Casino Roadmap" },
    ],
  },
  {
  dirName: 'Dalcal',
  title: 'Dalcal',
  overview:
    "Dalcal is a competitive word puzzle game where players solve 3, 4, and 5-letter word challenges. Designed originally as a single-player experience, it was evolved into a real-time multiplayer system powered by Nakama — allowing players to challenge friends, compete head-to-head, and experience time-based strategic gameplay.",
  role: "Lead Gameplay Developer",
  duration: "3 months",
  team: "2 developers, 1 designer, 1 QA",
  platform: "Mobile",

  features: [
    {
      title: "Core Word Puzzle System",
      description:
        "Engineered the main puzzle logic supporting dynamic 3, 4, and 5-letter word challenges with progressive difficulty balancing.",
      icon: "BookOpen"
    },
    {
      title: "Real-Time Multiplayer with Friends",
      description:
        "Integrated Nakama to enable live competitive matches with seamless friend invites, presence tracking, and synchronized gameplay states.",
      icon: "Users"
    },
    {
      title: "Adaptive Difficulty System",
      description:
        "Built a smart progression system that adjusts challenge difficulty based on player performance, streaks, and experience level.",
      icon: "Target"
    },
    {
      title: "Social & Player Systems",
      description:
        "Implemented player profiles, identity persistence, and social connectivity to enhance retention and encourage replayability.",
      icon: "MessageCircle"
    }
  ],

  challenges: [
    {
      challenge: "Convert Single-Player Gameplay into Multiplayer",
      solution:
        "Redesigned the core gameplay loop to support synchronized multiplayer logic while preserving puzzle integrity and fairness."
    },
    {
      challenge: "Seamless Multiplayer Experience",
      solution:
        "Developed smooth lobby flows, friend matchmaking, real-time synchronization, and reconnection handling for a frictionless experience."
    },
    {
      challenge: "Real-Time Word Validation",
      solution:
        "Optimized dictionary lookups and implemented server-authoritative validation to ensure instant feedback with no cheating possibilities."
    },
    {
      challenge: "Strategic Time-Based Match Design",
      solution:
        "Introduced time-limited competitive rounds to maintain engagement, ensure fairness, and avoid extended stalemate scenarios."
    },
    {
      challenge: "Matchmaking Logic & Fair Play",
      solution:
        "Built a matchmaking layer using player matchmaking levels to ensure balanced and competitive match pairings."
    },
    {
      challenge: "Multiplayer Architecture Stability",
      solution:
        "Leveraged Nakama for session management, state authority, latency handling, and persistence to maintain smooth gameplay across devices."
    }
  ],

  results: [
    { metric: "3", label: "Word Modes" },
    { metric: "Competitive", label: "Multiplayer System" },
    { metric: "Real-Time", label: "Friend Matches" }
  ],

  producerMetrics: [
    { metric: "Engaging", label: "Gameplay Loop" },
    { metric: "Stable", label: "Multiplayer Experience" },
    { metric: "Optimized", label: "Mobile Performance" },
    { metric: "On Time", label: "Milestone Delivery" },
  ],
},
{
  dirName: 'NineNoDraw',
  title: 'Nine No Draw',
  overview:
    "Nine No Draw is a competitive online domino game supporting multiple multiplayer configurations including 1v1, 1v1v1, and 2v2 team-based matches. Built as a digital tabletop experience, it also offers a Pass & Play mode for offline multiplayer fun. Powered by Nakama, the game focuses on real-time synchronization, fair play, and smooth gameplay across all modes.",
  role: "Multiplayer Game Developer",
  duration: "4 months",
  team: "2 developers, 1 designer, 1 QA",
  platform: "Mobile",

  features: [
    {
      title: "Versatile Multiplayer Modes",
      description:
        "Implemented 1v1, 1v1v1, and 2v2 multiplayer structures with team logic, turn sequencing, and balanced matchmaking powered by Nakama.",
      icon: "Users"
    },
    {
      title: "Pass & Play",
      description:
        "Developed an offline Pass & Play mode enabling local multiplayer gameplay on a single device — recreating a true tabletop experience.",
      icon: "Zap"
    },
    {
      title: "Domino Logic & Rule Engine",
      description:
        "Built a robust and scalable domino rule engine handling placement validation, scoring calculations, and round conclusion logic.",
      icon: "Code"
    },
    {
      title: "Shop & Customization",
      description:
        "Integrated in-game shop and customization systems allowing players to personalize themes, tiles, and visual presentation.",
      icon: "ShoppingCart"
    }
  ],

  challenges: [
    {
      challenge: "Board Validation in Multiplayer",
      solution:
        "Designed a server-authoritative board validation system ensuring every domino placement follows game rules without client-side exploitation."
    },
    {
      challenge: "Multiplayer Shuffling & Fair Distribution",
      solution:
        "Implemented secure server-side shuffling to guarantee fairness, randomness, and equal probability across all matches."
    },
    {
      challenge: "Synchronized Player Hands",
      solution:
        "Ensured accurate real-time synchronization of tile hands across all clients, preventing mismatches or desync during gameplay."
    },
    {
      challenge: "Complex Turn & Team Logic",
      solution:
        "Engineered turn management for 1v1, 1v1v1, and 2v2 modes while supporting both team scoring and individual scoring structures."
    },
    {
      challenge: "Board Placement Handling",
      solution:
        "Built stable placement logic supporting legal move detection, forced moves, and invalid move rejection with instant feedback."
    },
    {
      challenge: "Syncing Both Open Ends of the Board",
      solution:
        "Maintained synchronized state of both open board ends across devices, ensuring consistent valid move options for all players."
    },
    {
      challenge: "Real-Time Board State Synchronization",
      solution:
        "Used Nakama for server-state authority and reliable state broadcasting, eliminating disputes and maintaining match integrity."
    }
  ],

  results: [
    { metric: "3", label: "Multiplayer Configurations" },
    { metric: "Pass & Play", label: "Offline Mode" },
    { metric: "Real-Time", label: "Board Sync & Play" }
  ],

  producerMetrics: [
    { metric: "Versatile", label: "Gameplay Experiences" },
    { metric: "Smooth", label: "Online Performance" },
    { metric: "Optimized", label: "Mobile Stability" },
    { metric: "On Time", label: "Milestone Delivery" }
  ]
}
];

// Helper to get imports and gallery data
function scanDirectoryForImages(dirName) {
  const dirPath = path.join(COMPRESSED_DIR, dirName);
  
  if (!fs.existsSync(dirPath)) {
      console.warn(`Directory not found: ${dirPath}`);
      return [];
  }

  const files = fs.readdirSync(dirPath);
  return files.filter(f => f.endsWith('.webp')).map(f => {
      // Create a variable name from the filename
      // e.g. "Clown Town.webp" -> ClonwTown_Img1
      // We will allow the frontend to handle the actual variable naming in the loop below
      return f;
  });
}

const imports = [
    `import {
  Code,
  Zap,
  Target,
  Trophy,
  Users,
  MessageCircle,
  BookOpen,
  Map,
  Layers,
  Server,
  ShoppingCart,
  Database,
} from "lucide-react";`,
    `import { LucideIcon } from "lucide-react";`
];

// Load placeholders
const PLACEHOLDERS_FILE = path.join(__dirname, '../src/data/imagePlaceholders.json');
let placeholders = {};
if (fs.existsSync(PLACEHOLDERS_FILE)) {
    placeholders = JSON.parse(fs.readFileSync(PLACEHOLDERS_FILE, 'utf8'));
}

let specificData = {};

let variableCounter = 0;

for (const p of projects) {
    const images = scanDirectoryForImages(p.dirName);
    const galleryItems = [];
    
    images.forEach((img, idx) => {
        const baseName = img.replace(/\.webp$/, '');
        const varWebp = `${p.dirName.replace(/\s+/g, '')}_${idx}_webp`;
        const varAvif = `${p.dirName.replace(/\s+/g, '')}_${idx}_avif`;
        
        const relPathWebp = `../assets/Portfolio-Compressed/${p.dirName}/${baseName}.webp`;
        const relPathAvif = `../assets/Portfolio-Compressed/${p.dirName}/${baseName}.avif`;
        
        imports.push(`import ${varWebp} from "${relPathWebp}";`);
        imports.push(`import ${varAvif} from "${relPathAvif}";`);
        
        const placeholderKey = `${p.dirName}/${baseName}`;
        const placeholder = placeholders[placeholderKey] || '';
        
        // Determine caption based on filename (removing extension and numbers)
        const caption = baseName.replace(/[-_]/g, ' ');
        
        galleryItems.push({
            type: "image",
            urlCode: varWebp,
            avifUrlCode: varAvif,
            placeholder: placeholder,
            caption: caption
        });
    });

    specificData[p.title] = {
        overview: p.overview,
        role: p.role,
        duration: p.duration,
        team: p.team,
        platform: p.platform,
        features: p.features.map(f => ({...f, iconCode: f.icon})),
        challenges: p.challenges,
        results: p.results,
        producerMetrics: p.producerMetrics,
        gallery: galleryItems
    };
}

// Generate the file content
let content = `${imports.join('\n')}\n\n`;

content += `export interface Project {
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
  avifUrl?: string;
  placeholder?: string;
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
];

const defaultChallenges: CaseStudyChallenge[] = [];
const defaultResults: CaseStudyResult[] = [];
const defaultProducerMetrics: CaseStudyResult[] = [];

export const getCaseStudyData = (project: Project): CaseStudyData => {
  const specificData: Record<string, Partial<CaseStudyData>> = {
`;

// Build the specificData object string manually to handle logical insertions
for (const [title, data] of Object.entries(specificData)) {
    content += `    "${title}": {\n`;
    content += `      overview: ${JSON.stringify(data.overview)},\n`;
    content += `      role: ${JSON.stringify(data.role)},\n`;
    content += `      duration: ${JSON.stringify(data.duration)},\n`;
    content += `      team: ${JSON.stringify(data.team)},\n`;
    content += `      platform: ${JSON.stringify(data.platform)},\n`;
    
    content += `      features: [\n`;
    data.features.forEach(f => {
        content += `        {\n`;
        content += `          title: ${JSON.stringify(f.title)},\n`;
        content += `          description: ${JSON.stringify(f.description)},\n`;
        content += `          icon: ${f.iconCode}, // Ref to imported icon\n`;
        content += `        },\n`;
    });
    content += `      ],\n`;
    
    content += `      challenges: ${JSON.stringify(data.challenges, null, 8)},\n`;
    content += `      results: ${JSON.stringify(data.results, null, 8)},\n`;
    if(data.producerMetrics) {
        content += `      producerMetrics: ${JSON.stringify(data.producerMetrics, null, 8)},\n`;
    }
    
    content += `      gallery: [\n`;
    data.gallery.forEach(g => {
        content += `        { type: "image", url: ${g.urlCode}, avifUrl: ${g.avifUrlCode}, placeholder: ${JSON.stringify(g.placeholder)}, caption: ${JSON.stringify(g.caption)} },\n`;
    });
    content += `      ],\n`;
    
    content += `    },\n`;
}

content += `  };\n\n`;

content += `  const data = specificData[project.title] || {};
  
  return {
    overview: data.overview || \`\${project.description} This project showcases advanced game development techniques.\`,
    role: data.role || "Lead Developer",
    duration: data.duration || "N/A",
    team: data.team || "N/A",
    platform: data.platform || project.tags.join(", "),
    features: data.features || defaultFeatures,
    challenges: data.challenges || defaultChallenges,
    results: data.results || defaultResults,
    producerMetrics: data.producerMetrics || defaultProducerMetrics,
    gallery: data.gallery || [
      { type: "image", url: project.image, caption: "Gameplay Screenshot" }
    ],
  };
};
`;

fs.writeFileSync(OUTPUT_FILE, content);
console.log(`Generated ${OUTPUT_FILE}`);
