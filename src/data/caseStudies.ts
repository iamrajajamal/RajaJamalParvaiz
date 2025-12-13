import {
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
    overview:
      "Clown Town is a fast-paced, physics-driven multiplayer brawler built for competitive mobile play. The project focused on delivering responsive, fair combat in chaotic scenarios while integrating a scalable backend for matchmaking, player sessions, and leaderboards using Mirror and Nakama.",
    role: "Lead Developer & Technical Architect",
    duration: "6 months",
    team: "2 developers, 1 designer, 1 QA",
    platform: "Mobile",

    features: [
      {
        title: "Authoritative Multiplayer Networking",
        description:
          "Built real-time multiplayer gameplay using Mirror with client-side prediction and server authority to ensure responsive controls and fair combat during high-action physics-based encounters.",
        icon: Users,
      },
      {
        title: "Custom Matchmaking via Nakama",
        description:
          "Integrated Nakama to provide skill-based matchmaking, player sessions, and lobby flow, compensating for Mirror’s lack of native matchmaking support.",
        icon: Target,
      },
      {
        title: "Modular Factory Architecture",
        description:
          "Designed a Factory Pattern covering 10 gameplay departments including player movement, weapons, economy, and game rules, enabling scalable feature development and rapid iteration.",
        icon: Code,
      },
      {
        title: "ScriptableObject Architecture (SOAP)",
        description:
          "Implemented a ScriptableObject-driven architecture for player states, weapons, and departments, allowing clean separation of data and logic while improving multiplayer state consistency.",
        icon: Zap,
      },
    ],

    challenges: [
      {
        challenge: "Lack of Built-In Matchmaking in Mirror",
        solution:
          "Solved by integrating Nakama as an external matchmaking and session authority, synchronizing room creation and player assignment with Mirror’s networking layer.",
      },
      {
        challenge: "Team Balance & Boss Clown Gameplay",
        solution:
          "Implemented dynamic team balancing logic to support an asymmetrical design where one team contains a single Boss Clown, ensuring fairness without sacrificing gameplay identity.",
      },
      {
        challenge: "Player Synchronization During High Chaos",
        solution:
          "Developed deterministic synchronization for critical physics and gameplay systems to prevent desync during fast-paced multiplayer interactions.",
      },
      {
        challenge: "Backend & Client State Consistency",
        solution:
          "Created a clean synchronization interface between Nakama and Mirror to keep backend data and real-time gameplay state aligned without duplicated authority.",
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
    ],

    gallery: [
      { type: "image", url: project.image, caption: "Chaotic Physics-Based Brawls" },
      { type: "image", url: project.image, caption: "Asymmetrical Boss Clown Gameplay" },
      { type: "image", url: project.image, caption: "Multiplayer Lobby & Matchmaking Flow" },
      { type: "image", url: project.image, caption: "Competitive Victory & Results Screen" },
    ],
  },
    "Alive AR": {
    overview:
      "Alive AR is a real-time augmented reality multiplayer shooter that brings competitive FPS gameplay into the physical world. Built using Unity with ARCore and ARKit, the project delivers stable 5v5 multiplayer matches, persistent player progression, and multiple competitive game modes supported by a scalable backend.",
    role: "Lead AR & Multiplayer Developer",
    duration: "6 months",
    team: "5 developers, 2 designers, 1 QA",

    features: [
      {
        title: "5v5 AR Multiplayer Combat",
        description:
          "Developed real-time 5v5 multiplayer gameplay using Photon, enabling fast-paced team combat synchronized across multiple AR devices.",
        icon: Users,
      },
      {
        title: "AR World Mapping & Anchoring",
        description:
          "Implemented shared AR world alignment using ARCore and ARKit, allowing all players to see and interact with the same virtual map placed in the real environment.",
        icon: Map,
      },
      {
        title: "Multiple Competitive Game Modes",
        description:
          "Added several multiplayer modes including Deathmatch, Team Deathmatch, and Capture the Flag to support varied competitive playstyles.",
        icon: Target,
      },
      {
        title: "Custom Weapon Loadouts",
        description:
          "Built a flexible weapon system allowing players to select custom weapon loadouts before each match, supporting balance and strategic variety.",
        icon: Zap,
      },
      {
        title: "PlayFab Backend Integration",
        description:
          "Integrated PlayFab for player persistence, progression tracking, inventory management, and profile data across sessions.",
        icon: Database,
      },
      {
        title: "In-Game Shop System",
        description:
          "Implemented an in-game shop tied to PlayFab inventories, enabling players to unlock and manage weapons and upgrades.",
        icon: ShoppingCart,
      },
    ],

    challenges: [
      {
        challenge: "Multiplayer Synchronization in AR",
        solution:
          "Optimized Photon synchronization to handle both player state and AR spatial data, ensuring consistent gameplay across all connected devices.",
      },
      {
        challenge: "Stable AR Map Placement",
        solution:
          "Used shared anchors and world origin alignment to ensure the virtual map appeared consistently in the real world for all players without drifting.",
      },
      {
        challenge: "Maintaining Map Stability During Gameplay",
        solution:
          "Implemented continuous AR tracking validation and correction to keep the virtual environment stable throughout extended play sessions.",
      },
      {
        challenge: "Custom Weapon Loadouts Per Match",
        solution:
          "Designed a pre-match configuration system allowing players to select weapons per game while maintaining server-authoritative validation.",
      },
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

    gallery: [
      { type: "image", url: project.image, caption: "5v5 AR Team Combat" },
      { type: "image", url: project.image, caption: "Shared AR World Map" },
      { type: "image", url: project.image, caption: "Custom Weapon Loadouts" },
      { type: "image", url: project.image, caption: "AR Multiplayer Match in Progress" },
    ],
  },
    "Spades With Friends": {
    overview:
      "Spades With Friends is a real-time multiplayer card game built around classic and competitive Spades gameplay. The project focused on delivering a smooth 2v2 online experience with reliable card synchronization, social features, and support for multiple rule variations.",
    role: "Multiplayer Game Developer",
    duration: "5 months",
    team: "4 developers, 1 designer, 1 QA",

    features: [
      {
        title: "2v2 Real-Time Multiplayer",
        description:
          "Developed real-time 2v2 multiplayer gameplay with authoritative room management, ensuring fair turn-based logic and consistent game flow across all players.",
        icon: Users,
      },
      {
        title: "Custom Matchmaking System",
        description:
          "Implemented custom matchmaking logic to pair players into balanced 2v2 matches, supporting both quick play and invite-based sessions.",
        icon: Target,
      },
      {
        title: "Party & Custom Rooms",
        description:
          "Built a party system allowing players to create private rooms, invite friends, and rejoin matches seamlessly after disconnections.",
        icon: Code,
      },
      {
        title: "Multiple Spades Rule Sets",
        description:
          "Implemented flexible rule configurations including Blind Nil, Big Joker, Little Joker, and other variations, allowing dynamic rule selection per room.",
        icon: Zap,
      },
      {
        title: "In-Game Chat System",
        description:
          "Integrated a real-time chat system enabling communication between players during matches and within party lobbies.",
        icon: MessageCircle,
      },
    ],

    challenges: [
      {
        challenge: "Room Leave & Rejoin Handling",
        solution:
          "Designed a robust room state recovery system that allows players to safely leave and rejoin ongoing matches without disrupting gameplay.",
      },
      {
        challenge: "Custom Matchmaking Logic",
        solution:
          "Built a custom matchmaking flow to manage player pairing, team assignment, and session initialization outside of engine-provided solutions.",
      },
      {
        challenge: "Private & Custom Room Management",
        solution:
          "Implemented custom room creation with unique room codes, access validation, and controlled player entry to support private games.",
      },
      {
        challenge: "Real-Time Card Synchronization",
        solution:
          "Ensured consistent card state across all clients using authoritative turn handling and event-based synchronization to prevent desync or cheating.",
      },
      {
        challenge: "Multiplayer Chat Synchronization",
        solution:
          "Optimized chat message delivery and ordering to maintain reliable, low-latency communication during live matches.",
      },
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

    gallery: [
      { type: "image", url: project.image, caption: "2v2 Multiplayer Card Table" },
      { type: "image", url: project.image, caption: "Custom Room & Party System" },
      { type: "image", url: project.image, caption: "In-Game Chat Interface" },
      { type: "image", url: project.image, caption: "Multiple Rule Set Selection" },
    ],
  },
  "Pocket Shop": {
    overview:
      "Pocket Shop is a garage management and racing simulation game that blends drift and drag racing with narrative-driven progression. The project combines competitive racing, an in-game auction economy, and a full visual novel system, all supported by a robust backend for matchmaking, bidding, and leaderboards.",
    role: "Lead Gameplay & Systems Developer",
    duration: "7 months",
    team: "6 developers, 2 designers, 1 QA",

    features: [
      {
        title: "Drift & Drag Racing Modes",
        description:
          "Built multiple racing modes including drift and drag races, each with distinct physics tuning, scoring systems, and progression mechanics.",
        icon: Zap,
      },
      {
        title: "Auction System & Matchmaking",
        description:
          "Implemented a real-time auction system using Nakama to handle auto-bidding logic, synchronized item ownership, and race room matchmaking.",
        icon: Target,
      },
      {
        title: "Department-Based Garage Systems",
        description:
          "Developed interconnected garage departments such as car wash, fuel system, and tow truck, where upgrades directly impact racing performance and economy.",
        icon: Code,
      },
      {
        title: "Visual Novel Story System",
        description:
          "Created a complete visual novel system with branching dialogue, player choices, and persistent save/load support integrated into the gameplay loop.",
        icon: BookOpen,
      },
      {
        title: "World Map & Competitive Progression",
        description:
          "Designed a world map system where players compete for leaderboard positions; races affect global rankings while story-driven races advance narrative progression.",
        icon: Map,
      },
    ],

    challenges: [
      {
        challenge: "Auction System Architecture",
        solution:
          "Designed a server-authoritative auction system using Nakama to ensure fair bidding, prevent race conditions, and maintain real-time synchronization across players.",
      },
      {
        challenge: "Visual Novel System with Persistence",
        solution:
          "Implemented a modular visual novel framework with save/load functionality, allowing players to resume story progression across sessions and devices.",
      },
      {
        challenge: "Story Progression Tied to Race Outcomes",
        solution:
          "Built a rule-based progression system where winning specific races unlocks story chapters and triggers narrative events dynamically.",
      },
      {
        challenge: "Department-Based Upgrades Affecting Gameplay",
        solution:
          "Created a centralized upgrade dependency system so improvements in garage departments dynamically influence racing performance, economy, and story flow.",
      },
      {
        challenge: "Leaderboard Map Visualization",
        solution:
          "Developed a world map interface that visualizes leaderboard positions and race locations, integrating backend ranking data without requiring real-time multiplayer races.",
      },
      {
        challenge: "Robust Backend Integration",
        solution:
          "Integrated Nakama deeply into the game loop to manage auctions, matchmaking, leaderboards, and persistent player data with minimal client-side trust.",
      },
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

    gallery: [
      { type: "image", url: project.image, caption: "Garage & Department Management" },
      { type: "image", url: project.image, caption: "Drift & Drag Racing Modes" },
      { type: "image", url: project.image, caption: "Visual Novel Story Scenes" },
      { type: "image", url: project.image, caption: "World Map & Leaderboard View" },
    ],
  },
  "DubbGames": {
    overview:
      "DubbGames is a full-scale web-based casino gaming platform combining real-time multiplayer games, probability-driven casino mechanics, and a seamless Unity–React integration. The project delivers multiple casino games within a single web application, supported by a robust backend architecture for gameplay, player data, and transactions.",
    role: "Lead Full-Stack & Multiplayer Developer",
    duration: "8 months",
    team: "5 developers, 2 designers, 1 QA",

    features: [
      {
        title: "Multi-Game Casino Platform",
        description:
          "Developed a complete web application featuring five games: Blackjack, Baccarat, PrizePool, DigitDream, and Slot Machine, all unified under a single casino platform.",
        icon: Layers,
      },
      {
        title: "Multiplayer Card Games via Nakama",
        description:
          "Implemented real-time multiplayer for Blackjack (4-player tables with dealer) and Baccarat (4-player tables with banker) using Nakama for matchmaking, room management, and synchronization.",
        icon: Users,
      },
      {
        title: "Backend-Driven Casino Games",
        description:
          "Built PrizePool and DigitDream using Node.js backend APIs to handle game logic, fairness validation, and reward distribution.",
        icon: Server,
      },
      {
        title: "Slot Machine with Probability Logic",
        description:
          "Developed a slot machine system featuring paylines, configurable reward rules, and probability-based outcomes to ensure balanced and engaging gameplay.",
        icon: Zap,
      },
      {
        title: "Unity–React Web Integration",
        description:
          "Created a seamless bridge between Unity WebGL builds and a React frontend, enabling synchronized player data, game state updates, and UI interactions.",
        icon: Code,
      },
    ],

    challenges: [
      {
        challenge: "Unity–React Player Data Synchronization",
        solution:
          "Designed a stable communication layer to sync player profiles, balances, and session data between React UI and Unity WebGL games in real time.",
      },
      {
        challenge: "Custom Unity–React Bridge Implementation",
        solution:
          "Wrote a custom JavaScript bridge to enable two-way messaging between Unity WebGL and React, ensuring clean data flow and decoupled architecture.",
      },
      {
        challenge: "WebGL Performance & Responsiveness",
        solution:
          "Optimized rendering, memory usage, and asset loading to maintain smooth gameplay and responsive UI across browsers and screen sizes.",
      },
      {
        challenge: "WebGL Optimization for Casino Games",
        solution:
          "Reduced build size and runtime overhead through asset compression, shader optimization, and selective feature loading for web deployment.",
      },
      {
        challenge: "Designer Asset Optimization",
        solution:
          "Provided clear technical guidelines and pipelines for designers to create WebGL-optimized assets, reducing draw calls and improving load times.",
      },
      {
        challenge: "Scalable Casino Platform Planning",
        solution:
          "Designed a complete operational plan covering transactions, player profiles, game lifecycle management, and scalability for future casino expansion.",
      },
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

    gallery: [
      { type: "image", url: project.image, caption: "Web-Based Casino Lobby" },
      { type: "image", url: project.image, caption: "Multiplayer Blackjack & Baccarat Tables" },
      { type: "image", url: project.image, caption: "Slot Machine with Paylines" },
      { type: "image", url: project.image, caption: "Unity–React Integrated Gameplay View" },
    ],
  },
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
