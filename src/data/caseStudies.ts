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
import ClownTown_0 from "../assets/Portfolio-Compressed/ClownTown/Clown Town.webp";
import ClownTown_1 from "../assets/Portfolio-Compressed/ClownTown/Friends & Invite.webp";
import ClownTown_2 from "../assets/Portfolio-Compressed/ClownTown/Home 5.webp";
import ClownTown_3 from "../assets/Portfolio-Compressed/ClownTown/Inventory - Skin.webp";
import ClownTown_4 from "../assets/Portfolio-Compressed/ClownTown/Leader Board (1).webp";
import ClownTown_5 from "../assets/Portfolio-Compressed/ClownTown/Leader Board (2).webp";
import ClownTown_6 from "../assets/Portfolio-Compressed/ClownTown/Leader Board.webp";
import ClownTown_7 from "../assets/Portfolio-Compressed/ClownTown/My Profile 2.webp";
import ClownTown_8 from "../assets/Portfolio-Compressed/ClownTown/My Profile.webp";
import ClownTown_9 from "../assets/Portfolio-Compressed/ClownTown/Shop - Weapon Shop (1).webp";
import ClownTown_10 from "../assets/Portfolio-Compressed/ClownTown/Shop - Weapon Shop.webp";
import AliveAR_0 from "../assets/Portfolio-Compressed/AliveAR/1.webp";
import AliveAR_1 from "../assets/Portfolio-Compressed/AliveAR/2.webp";
import AliveAR_2 from "../assets/Portfolio-Compressed/AliveAR/3.webp";
import AliveAR_3 from "../assets/Portfolio-Compressed/AliveAR/4.webp";
import AliveAR_4 from "../assets/Portfolio-Compressed/AliveAR/Alive.webp";
import AliveAR_5 from "../assets/Portfolio-Compressed/AliveAR/City_Env_0.webp";
import AliveAR_6 from "../assets/Portfolio-Compressed/AliveAR/City_Env_1.webp";
import AliveAR_7 from "../assets/Portfolio-Compressed/AliveAR/City_Env_2.webp";
import AliveAR_8 from "../assets/Portfolio-Compressed/AliveAR/City_Env_3.webp";
import AliveAR_9 from "../assets/Portfolio-Compressed/AliveAR/City_Env_4.webp";
import AliveAR_10 from "../assets/Portfolio-Compressed/AliveAR/City_Env_5.webp";
import AliveAR_11 from "../assets/Portfolio-Compressed/AliveAR/Female Soldier.webp";
import AliveAR_12 from "../assets/Portfolio-Compressed/AliveAR/Loading.webp";
import AliveAR_13 from "../assets/Portfolio-Compressed/AliveAR/Poster.webp";
import AliveAR_14 from "../assets/Portfolio-Compressed/AliveAR/select.webp";
import AliveAR_15 from "../assets/Portfolio-Compressed/AliveAR/Soldier 3.webp";
import AliveAR_16 from "../assets/Portfolio-Compressed/AliveAR/Soldier 4.webp";
import AliveAR_17 from "../assets/Portfolio-Compressed/AliveAR/Soldier.webp";
import SpadesWithFriends_0 from "../assets/Portfolio-Compressed/SpadesWithFriends/Active player.webp";
import SpadesWithFriends_1 from "../assets/Portfolio-Compressed/SpadesWithFriends/Animated Emojis (1).webp";
import SpadesWithFriends_2 from "../assets/Portfolio-Compressed/SpadesWithFriends/Animated Emojis.webp";
import SpadesWithFriends_3 from "../assets/Portfolio-Compressed/SpadesWithFriends/Another user profile.webp";
import SpadesWithFriends_4 from "../assets/Portfolio-Compressed/SpadesWithFriends/Avatar (1).webp";
import SpadesWithFriends_5 from "../assets/Portfolio-Compressed/SpadesWithFriends/Avatar.webp";
import SpadesWithFriends_6 from "../assets/Portfolio-Compressed/SpadesWithFriends/Basic Emojies.webp";
import SpadesWithFriends_7 from "../assets/Portfolio-Compressed/SpadesWithFriends/COINS.webp";
import SpadesWithFriends_8 from "../assets/Portfolio-Compressed/SpadesWithFriends/Main Screen (1).webp";
import SpadesWithFriends_9 from "../assets/Portfolio-Compressed/SpadesWithFriends/Main Screen.webp";
import SpadesWithFriends_10 from "../assets/Portfolio-Compressed/SpadesWithFriends/Partners Mode Lobby (1).webp";
import SpadesWithFriends_11 from "../assets/Portfolio-Compressed/SpadesWithFriends/Partners Mode Lobby.webp";
import SpadesWithFriends_12 from "../assets/Portfolio-Compressed/SpadesWithFriends/Shop.webp";
import SpadesWithFriends_13 from "../assets/Portfolio-Compressed/SpadesWithFriends/Single Player Score.webp";
import SpadesWithFriends_14 from "../assets/Portfolio-Compressed/SpadesWithFriends/Smack Talk.webp";
import SpadesWithFriends_15 from "../assets/Portfolio-Compressed/SpadesWithFriends/Splash Screen.webp";
import SpadesWithFriends_16 from "../assets/Portfolio-Compressed/SpadesWithFriends/Start a party.webp";
import SpadesWithFriends_17 from "../assets/Portfolio-Compressed/SpadesWithFriends/Subscriptions (1).webp";
import SpadesWithFriends_18 from "../assets/Portfolio-Compressed/SpadesWithFriends/Subscriptions.webp";
import SpadesWithFriends_19 from "../assets/Portfolio-Compressed/SpadesWithFriends/Tournament.webp";
import SpadesWithFriends_20 from "../assets/Portfolio-Compressed/SpadesWithFriends/With partners (1).webp";
import SpadesWithFriends_21 from "../assets/Portfolio-Compressed/SpadesWithFriends/With partners.webp";
import PocketShop_0 from "../assets/Portfolio-Compressed/PocketShop/Add Auction.webp";
import PocketShop_1 from "../assets/Portfolio-Compressed/PocketShop/Auction Screen (Parts_Suspension & Steering).webp";
import PocketShop_2 from "../assets/Portfolio-Compressed/PocketShop/Auction Screen.webp";
import PocketShop_3 from "../assets/Portfolio-Compressed/PocketShop/Detal Screen.webp";
import PocketShop_4 from "../assets/Portfolio-Compressed/PocketShop/Detal Screen_Shock Absorbers.webp";
import PocketShop_5 from "../assets/Portfolio-Compressed/PocketShop/Gameplay-Drag.webp";
import PocketShop_6 from "../assets/Portfolio-Compressed/PocketShop/Garage UI_Exhaust.webp";
import PocketShop_7 from "../assets/Portfolio-Compressed/PocketShop/Global Map UI Cloud.webp";
import PocketShop_8 from "../assets/Portfolio-Compressed/PocketShop/Global Selected USA.webp";
import PocketShop_9 from "../assets/Portfolio-Compressed/PocketShop/image 2.webp";
import PocketShop_10 from "../assets/Portfolio-Compressed/PocketShop/Main Screen.webp";
import PocketShop_11 from "../assets/Portfolio-Compressed/PocketShop/My Profile_Cars.webp";
import PocketShop_12 from "../assets/Portfolio-Compressed/PocketShop/Part Pferformance Jobs Popup.webp";
import PocketShop_13 from "../assets/Portfolio-Compressed/PocketShop/Part Pferformance Popup.webp";
import PocketShop_14 from "../assets/Portfolio-Compressed/PocketShop/POCKET-SHOP.webp";
import PocketShop_15 from "../assets/Portfolio-Compressed/PocketShop/Splash.webp";
import PocketShop_16 from "../assets/Portfolio-Compressed/PocketShop/Story Dialogue Box.webp";
import DubbGame_0 from "../assets/Portfolio-Compressed/DubbGame/Baccarat (1).webp";
import DubbGame_1 from "../assets/Portfolio-Compressed/DubbGame/Baccarat (2).webp";
import DubbGame_2 from "../assets/Portfolio-Compressed/DubbGame/Baccarat.webp";
import DubbGame_3 from "../assets/Portfolio-Compressed/DubbGame/BlackJack (1).webp";
import DubbGame_4 from "../assets/Portfolio-Compressed/DubbGame/BlackJack (2).webp";
import DubbGame_5 from "../assets/Portfolio-Compressed/DubbGame/BlackJack.webp";
import DubbGame_6 from "../assets/Portfolio-Compressed/DubbGame/Didget Dreams (1).webp";
import DubbGame_7 from "../assets/Portfolio-Compressed/DubbGame/Didget Dreams (2).webp";
import DubbGame_8 from "../assets/Portfolio-Compressed/DubbGame/Didget Dreams.webp";
import DubbGame_9 from "../assets/Portfolio-Compressed/DubbGame/Home.webp";
import DubbGame_10 from "../assets/Portfolio-Compressed/DubbGame/Login.webp";
import DubbGame_11 from "../assets/Portfolio-Compressed/DubbGame/Prize Pool (1).webp";
import DubbGame_12 from "../assets/Portfolio-Compressed/DubbGame/Prize Pool.webp";
import DubbGame_13 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine (1).webp";
import DubbGame_14 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine (2).webp";
import DubbGame_15 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine (3).webp";
import DubbGame_16 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine (4).webp";
import DubbGame_17 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine (5).webp";
import DubbGame_18 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine (6).webp";
import DubbGame_19 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine (7).webp";
import DubbGame_20 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine (8).webp";
import DubbGame_21 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine (9).webp";
import DubbGame_22 from "../assets/Portfolio-Compressed/DubbGame/Slot Machine.webp";
import Dalcal_0 from "../assets/Portfolio-Compressed/Dalcal/Complete.webp";
import Dalcal_1 from "../assets/Portfolio-Compressed/Dalcal/Difficulty.webp";
import Dalcal_2 from "../assets/Portfolio-Compressed/Dalcal/Level 10.webp";
import Dalcal_3 from "../assets/Portfolio-Compressed/Dalcal/Level 14.webp";
import Dalcal_4 from "../assets/Portfolio-Compressed/Dalcal/Level 15.webp";
import Dalcal_5 from "../assets/Portfolio-Compressed/Dalcal/Level 16.webp";
import Dalcal_6 from "../assets/Portfolio-Compressed/Dalcal/Level 17.webp";
import Dalcal_7 from "../assets/Portfolio-Compressed/Dalcal/Level 6.webp";
import Dalcal_8 from "../assets/Portfolio-Compressed/Dalcal/Level 7.webp";
import Dalcal_9 from "../assets/Portfolio-Compressed/Dalcal/Profile (1).webp";
import Dalcal_10 from "../assets/Portfolio-Compressed/Dalcal/Profile.webp";
import Dalcal_11 from "../assets/Portfolio-Compressed/Dalcal/Select Tiers.webp";
import Dalcal_12 from "../assets/Portfolio-Compressed/Dalcal/Splash.webp";
import NineNoDraw_0 from "../assets/Portfolio-Compressed/NineNoDraw/Edit Profile.webp";
import NineNoDraw_1 from "../assets/Portfolio-Compressed/NineNoDraw/Game interface (1).webp";
import NineNoDraw_2 from "../assets/Portfolio-Compressed/NineNoDraw/Game interface.webp";
import NineNoDraw_3 from "../assets/Portfolio-Compressed/NineNoDraw/Home.webp";
import NineNoDraw_4 from "../assets/Portfolio-Compressed/NineNoDraw/Leader Board.webp";
import NineNoDraw_5 from "../assets/Portfolio-Compressed/NineNoDraw/Shop (1).webp";
import NineNoDraw_6 from "../assets/Portfolio-Compressed/NineNoDraw/Shop (2).webp";
import NineNoDraw_7 from "../assets/Portfolio-Compressed/NineNoDraw/Shop.webp";
import NineNoDraw_8 from "../assets/Portfolio-Compressed/NineNoDraw/Splash Screen.webp";

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
  // ... other defaults if needed, but we are providing specific data for all now.
];

const defaultChallenges: CaseStudyChallenge[] = [];
const defaultResults: CaseStudyResult[] = [];
const defaultProducerMetrics: CaseStudyResult[] = [];

export const getCaseStudyData = (project: Project): CaseStudyData => {
  // Define specific data for each project
  const specificData: Record<string, Partial<CaseStudyData>> = {
    "Clown Town": {
      overview: "Clown Town is a fast-paced, physics-driven multiplayer brawler built for competitive mobile play. The project focused on delivering responsive, fair combat in chaotic scenarios while integrating a scalable backend for matchmaking, player sessions, and leaderboards using Mirror and Nakama.",
      role: "Lead Developer & Technical Architect",
      duration: "6 months",
      team: "2 developers, 1 designer, 1 QA, 1 3D Artist",
      platform: "Mobile",
      features: [
        {
          title: "Authoritative Multiplayer Networking",
          description: "Built real-time multiplayer gameplay using Mirror with client-side prediction and server authority to ensure responsive controls and fair combat during high-action physics-based encounters.",
          icon: Users, // Ref to imported icon
        },
        {
          title: "Custom Matchmaking via Nakama",
          description: "Integrated Nakama to provide skill-based matchmaking, player sessions, and lobby flow, compensating for Mirror’s lack of native matchmaking support.",
          icon: Target, // Ref to imported icon
        },
        {
          title: "Modular Factory Architecture",
          description: "Designed a Factory Pattern covering 10 gameplay departments including player movement, weapons, economy, and game rules, enabling scalable feature development and rapid iteration.",
          icon: Code, // Ref to imported icon
        },
        {
          title: "ScriptableObject Architecture (SOAP)",
          description: "Implemented a ScriptableObject-driven architecture for player states, weapons, and departments, allowing clean separation of data and logic while improving multiplayer state consistency.",
          icon: Zap, // Ref to imported icon
        },
      ],
      challenges: [
        {
                "challenge": "Lack of Built-In Matchmaking in Mirror",
                "solution": "Solved by integrating Nakama as an external matchmaking and session authority, synchronizing room creation and player assignment with Mirror’s networking layer."
        },
        {
                "challenge": "Team Balance & Boss Clown Gameplay",
                "solution": "Implemented dynamic team balancing logic to support an asymmetrical design where one team contains a single Boss Clown, ensuring fairness without sacrificing gameplay identity."
        },
        {
                "challenge": "Player Synchronization During High Chaos",
                "solution": "Developed deterministic synchronization for critical physics and gameplay systems to prevent desync during fast-paced multiplayer interactions."
        },
        {
                "challenge": "Backend & Client State Consistency",
                "solution": "Created a clean synchronization interface between Nakama and Mirror to keep backend data and real-time gameplay state aligned without duplicated authority."
        }
],
      results: [
        {
                "metric": "50K+",
                "label": "Downloads"
        },
        {
                "metric": "4.7★",
                "label": "App Store Rating"
        },
        {
                "metric": "12m",
                "label": "Avg Session Time"
        },
        {
                "metric": "99.9%",
                "label": "Server Uptime"
        }
],
      producerMetrics: [
        {
                "metric": "2 Weeks",
                "label": "Ahead of Schedule"
        },
        {
                "metric": "$15K",
                "label": "Under Budget"
        },
        {
                "metric": "12",
                "label": "Sprints Completed"
        },
        {
                "metric": "0",
                "label": "Critical Bugs at Launch"
        }
],
      gallery: [
        { type: "image", url: ClownTown_0, caption: "Clown Town" },
        { type: "image", url: ClownTown_1, caption: "Friends & Invite" },
        { type: "image", url: ClownTown_2, caption: "Home 5" },
        { type: "image", url: ClownTown_3, caption: "Inventory   Skin" },
        { type: "image", url: ClownTown_4, caption: "Leader Board (1)" },
        { type: "image", url: ClownTown_5, caption: "Leader Board (2)" },
        { type: "image", url: ClownTown_6, caption: "Leader Board" },
        { type: "image", url: ClownTown_7, caption: "My Profile 2" },
        { type: "image", url: ClownTown_8, caption: "My Profile" },
        { type: "image", url: ClownTown_9, caption: "Shop   Weapon Shop (1)" },
        { type: "image", url: ClownTown_10, caption: "Shop   Weapon Shop" },
      ],
    },
    "Alive AR": {
      overview: "Alive AR is a real-time augmented reality multiplayer shooter that brings competitive FPS gameplay into the physical world. Built using Unity with ARCore and ARKit, the project delivers stable 5v5 multiplayer matches, persistent player progression, and multiple competitive game modes supported by a scalable backend.",
      role: "Lead AR & Multiplayer Developer",
      duration: "6 months",
      team: "2 developers, 2 designers, 1 QA, 1 3D Artist",
      platform: "AR (Mobile)",
      features: [
        {
          title: "5v5 AR Multiplayer Combat",
          description: "Developed real-time 5v5 multiplayer gameplay using Photon, enabling fast-paced team combat synchronized across multiple AR devices.",
          icon: Users, // Ref to imported icon
        },
        {
          title: "AR World Mapping & Anchoring",
          description: "Implemented shared AR world alignment using ARCore and ARKit, allowing all players to see and interact with the same virtual map placed in the real environment.",
          icon: Map, // Ref to imported icon
        },
        {
          title: "Multiple Competitive Game Modes",
          description: "Added several multiplayer modes including Deathmatch, Team Deathmatch, and Capture the Flag to support varied competitive playstyles.",
          icon: Target, // Ref to imported icon
        },
        {
          title: "Custom Weapon Loadouts",
          description: "Built a flexible weapon system allowing players to select custom weapon loadouts before each match, supporting balance and strategic variety.",
          icon: Zap, // Ref to imported icon
        },
        {
          title: "PlayFab Backend Integration",
          description: "Integrated PlayFab for player persistence, progression tracking, inventory management, and profile data across sessions.",
          icon: Database, // Ref to imported icon
        },
        {
          title: "In-Game Shop System",
          description: "Implemented an in-game shop tied to PlayFab inventories, enabling players to unlock and manage weapons and upgrades.",
          icon: ShoppingCart, // Ref to imported icon
        },
      ],
      challenges: [
        {
                "challenge": "Multiplayer Synchronization in AR",
                "solution": "Optimized Photon synchronization to handle both player state and AR spatial data, ensuring consistent gameplay across all connected devices."
        },
        {
                "challenge": "Stable AR Map Placement",
                "solution": "Used shared anchors and world origin alignment to ensure the virtual map appeared consistently in the real world for all players without drifting."
        },
        {
                "challenge": "Maintaining Map Stability During Gameplay",
                "solution": "Implemented continuous AR tracking validation and correction to keep the virtual environment stable throughout extended play sessions."
        },
        {
                "challenge": "Custom Weapon Loadouts Per Match",
                "solution": "Designed a pre-match configuration system allowing players to select weapons per game while maintaining server-authoritative validation."
        }
],
      results: [
        {
                "metric": "5v5",
                "label": "AR Multiplayer Matches"
        },
        {
                "metric": "3+",
                "label": "Game Modes"
        },
        {
                "metric": "Stable",
                "label": "Shared AR Map"
        },
        {
                "metric": "Persistent",
                "label": "Player Progression"
        }
],
      producerMetrics: [
        {
                "metric": "Cross-Platform",
                "label": "ARCore & ARKit"
        },
        {
                "metric": "Scalable",
                "label": "Multiplayer Backend"
        },
        {
                "metric": "Optimized",
                "label": "AR Performance"
        },
        {
                "metric": "Competitive",
                "label": "Game Design"
        }
],
      gallery: [
        { type: "image", url: AliveAR_0, caption: "1" },
        { type: "image", url: AliveAR_1, caption: "2" },
        { type: "image", url: AliveAR_2, caption: "3" },
        { type: "image", url: AliveAR_3, caption: "4" },
        { type: "image", url: AliveAR_4, caption: "Alive" },
        { type: "image", url: AliveAR_5, caption: "City Env 0" },
        { type: "image", url: AliveAR_6, caption: "City Env 1" },
        { type: "image", url: AliveAR_7, caption: "City Env 2" },
        { type: "image", url: AliveAR_8, caption: "City Env 3" },
        { type: "image", url: AliveAR_9, caption: "City Env 4" },
        { type: "image", url: AliveAR_10, caption: "City Env 5" },
        { type: "image", url: AliveAR_11, caption: "Female Soldier" },
        { type: "image", url: AliveAR_12, caption: "Loading" },
        { type: "image", url: AliveAR_13, caption: "Poster" },
        { type: "image", url: AliveAR_14, caption: "select" },
        { type: "image", url: AliveAR_15, caption: "Soldier 3" },
        { type: "image", url: AliveAR_16, caption: "Soldier 4" },
        { type: "image", url: AliveAR_17, caption: "Soldier" },
      ],
    },
    "Spades With Friends": {
      overview: "Spades With Friends is a real-time multiplayer card game built around classic and competitive Spades gameplay. The project focused on delivering a smooth 2v2 online experience with reliable card synchronization, social features, and support for multiple rule variations.",
      role: "Multiplayer Game Developer",
      duration: "5 months",
      team: "2 developers, 1 designer, 1 QA",
      platform: "Web & Mobile",
      features: [
        {
          title: "2v2 Real-Time Multiplayer",
          description: "Developed real-time 2v2 multiplayer gameplay with authoritative room management, ensuring fair turn-based logic and consistent game flow across all players.",
          icon: Users, // Ref to imported icon
        },
        {
          title: "Custom Matchmaking System",
          description: "Implemented custom matchmaking logic to pair players into balanced 2v2 matches, supporting both quick play and invite-based sessions.",
          icon: Target, // Ref to imported icon
        },
        {
          title: "Party & Custom Rooms",
          description: "Built a party system allowing players to create private rooms, invite friends, and rejoin matches seamlessly after disconnections.",
          icon: Code, // Ref to imported icon
        },
        {
          title: "Multiple Spades Rule Sets",
          description: "Implemented flexible rule configurations including Blind Nil, Big Joker, Little Joker, and other variations, allowing dynamic rule selection per room.",
          icon: Zap, // Ref to imported icon
        },
        {
          title: "In-Game Chat System",
          description: "Integrated a real-time chat system enabling communication between players during matches and within party lobbies.",
          icon: MessageCircle, // Ref to imported icon
        },
      ],
      challenges: [
        {
                "challenge": "Room Leave & Rejoin Handling",
                "solution": "Designed a robust room state recovery system that allows players to safely leave and rejoin ongoing matches without disrupting gameplay."
        },
        {
                "challenge": "Custom Matchmaking Logic",
                "solution": "Built a custom matchmaking flow to manage player pairing, team assignment, and session initialization outside of engine-provided solutions."
        },
        {
                "challenge": "Private & Custom Room Management",
                "solution": "Implemented custom room creation with unique room codes, access validation, and controlled player entry to support private games."
        },
        {
                "challenge": "Real-Time Card Synchronization",
                "solution": "Ensured consistent card state across all clients using authoritative turn handling and event-based synchronization to prevent desync or cheating."
        },
        {
                "challenge": "Multiplayer Chat Synchronization",
                "solution": "Optimized chat message delivery and ordering to maintain reliable, low-latency communication during live matches."
        }
],
      results: [
        {
                "metric": "2v2",
                "label": "Multiplayer Mode"
        },
        {
                "metric": "5+",
                "label": "Rule Variations"
        },
        {
                "metric": "100%",
                "label": "Authoritative Card Sync"
        },
        {
                "metric": "Low Latency",
                "label": "Real-Time Gameplay"
        }
],
      producerMetrics: [
        {
                "metric": "On Time",
                "label": "Delivery"
        },
        {
                "metric": "Stable",
                "label": "Live Multiplayer"
        },
        {
                "metric": "Scalable",
                "label": "Room System"
        },
        {
                "metric": "Secure",
                "label": "Game State Sync"
        }
],
      gallery: [
        { type: "image", url: SpadesWithFriends_0, caption: "Active player" },
        { type: "image", url: SpadesWithFriends_1, caption: "Animated Emojis (1)" },
        { type: "image", url: SpadesWithFriends_2, caption: "Animated Emojis" },
        { type: "image", url: SpadesWithFriends_3, caption: "Another user profile" },
        { type: "image", url: SpadesWithFriends_4, caption: "Avatar (1)" },
        { type: "image", url: SpadesWithFriends_5, caption: "Avatar" },
        { type: "image", url: SpadesWithFriends_6, caption: "Basic Emojies" },
        { type: "image", url: SpadesWithFriends_7, caption: "COINS" },
        { type: "image", url: SpadesWithFriends_8, caption: "Main Screen (1)" },
        { type: "image", url: SpadesWithFriends_9, caption: "Main Screen" },
        { type: "image", url: SpadesWithFriends_10, caption: "Partners Mode Lobby (1)" },
        { type: "image", url: SpadesWithFriends_11, caption: "Partners Mode Lobby" },
        { type: "image", url: SpadesWithFriends_12, caption: "Shop" },
        { type: "image", url: SpadesWithFriends_13, caption: "Single Player Score" },
        { type: "image", url: SpadesWithFriends_14, caption: "Smack Talk" },
        { type: "image", url: SpadesWithFriends_15, caption: "Splash Screen" },
        { type: "image", url: SpadesWithFriends_16, caption: "Start a party" },
        { type: "image", url: SpadesWithFriends_17, caption: "Subscriptions (1)" },
        { type: "image", url: SpadesWithFriends_18, caption: "Subscriptions" },
        { type: "image", url: SpadesWithFriends_19, caption: "Tournament" },
        { type: "image", url: SpadesWithFriends_20, caption: "With partners (1)" },
        { type: "image", url: SpadesWithFriends_21, caption: "With partners" },
      ],
    },
    "Pocket Shop": {
      overview: "Pocket Shop is a garage management and racing simulation game that blends drift and drag racing with narrative-driven progression. The project combines competitive racing, an in-game auction economy, and a full visual novel system, all supported by a robust backend for matchmaking, bidding, and leaderboards.",
      role: "Lead Gameplay & Systems Developer",
      duration: "7 months",
      team: "2 developers, 1 designers, 1 3D Artist, 1 QA",
      platform: "Mobile",
      features: [
        {
          title: "Drift & Drag Racing Modes",
          description: "Built multiple racing modes including drift and drag races, each with distinct physics tuning, scoring systems, and progression mechanics.",
          icon: Zap, // Ref to imported icon
        },
        {
          title: "Auction System & Matchmaking",
          description: "Implemented a real-time auction system using Nakama to handle auto-bidding logic, synchronized item ownership, and race room matchmaking.",
          icon: Target, // Ref to imported icon
        },
        {
          title: "Department-Based Garage Systems",
          description: "Developed interconnected garage departments such as car wash, fuel system, and tow truck, where upgrades directly impact racing performance and economy.",
          icon: Code, // Ref to imported icon
        },
        {
          title: "Visual Novel Story System",
          description: "Created a complete visual novel system with branching dialogue, player choices, and persistent save/load support integrated into the gameplay loop.",
          icon: BookOpen, // Ref to imported icon
        },
        {
          title: "World Map & Competitive Progression",
          description: "Designed a world map system where players compete for leaderboard positions; races affect global rankings while story-driven races advance narrative progression.",
          icon: Map, // Ref to imported icon
        },
      ],
      challenges: [
        {
                "challenge": "Auction System Architecture",
                "solution": "Designed a server-authoritative auction system using Nakama to ensure fair bidding, prevent race conditions, and maintain real-time synchronization across players."
        },
        {
                "challenge": "Visual Novel System with Persistence",
                "solution": "Implemented a modular visual novel framework with save/load functionality, allowing players to resume story progression across sessions and devices."
        },
        {
                "challenge": "Story Progression Tied to Race Outcomes",
                "solution": "Built a rule-based progression system where winning specific races unlocks story chapters and triggers narrative events dynamically."
        },
        {
                "challenge": "Department-Based Upgrades Affecting Gameplay",
                "solution": "Created a centralized upgrade dependency system so improvements in garage departments dynamically influence racing performance, economy, and story flow."
        },
        {
                "challenge": "Leaderboard Map Visualization",
                "solution": "Developed a world map interface that visualizes leaderboard positions and race locations, integrating backend ranking data without requiring real-time multiplayer races."
        },
        {
                "challenge": "Robust Backend Integration",
                "solution": "Integrated Nakama deeply into the game loop to manage auctions, matchmaking, leaderboards, and persistent player data with minimal client-side trust."
        }
],
      results: [
        {
                "metric": "3+",
                "label": "Game Systems Integrated"
        },
        {
                "metric": "Multiple",
                "label": "Racing Modes"
        },
        {
                "metric": "Persistent",
                "label": "Story Progression"
        },
        {
                "metric": "Scalable",
                "label": "Backend Architecture"
        }
],
      producerMetrics: [
        {
                "metric": "On Time",
                "label": "Milestone Delivery"
        },
        {
                "metric": "Stable",
                "label": "Backend Operations"
        },
        {
                "metric": "Expandable",
                "label": "Department Systems"
        },
        {
                "metric": "Narrative-Driven",
                "label": "Player Retention"
        }
],
      gallery: [
        { type: "image", url: PocketShop_0, caption: "Add Auction" },
        { type: "image", url: PocketShop_1, caption: "Auction Screen (Parts Suspension & Steering)" },
        { type: "image", url: PocketShop_2, caption: "Auction Screen" },
        { type: "image", url: PocketShop_3, caption: "Detal Screen" },
        { type: "image", url: PocketShop_4, caption: "Detal Screen Shock Absorbers" },
        { type: "image", url: PocketShop_5, caption: "Gameplay Drag" },
        { type: "image", url: PocketShop_6, caption: "Garage UI Exhaust" },
        { type: "image", url: PocketShop_7, caption: "Global Map UI Cloud" },
        { type: "image", url: PocketShop_8, caption: "Global Selected USA" },
        { type: "image", url: PocketShop_9, caption: "image 2" },
        { type: "image", url: PocketShop_10, caption: "Main Screen" },
        { type: "image", url: PocketShop_11, caption: "My Profile Cars" },
        { type: "image", url: PocketShop_12, caption: "Part Pferformance Jobs Popup" },
        { type: "image", url: PocketShop_13, caption: "Part Pferformance Popup" },
        { type: "image", url: PocketShop_14, caption: "POCKET SHOP" },
        { type: "image", url: PocketShop_15, caption: "Splash" },
        { type: "image", url: PocketShop_16, caption: "Story Dialogue Box" },
      ],
    },
    "DubbGames": {
      overview: "DubbGames is a full-scale web-based casino gaming platform combining real-time multiplayer games, probability-driven casino mechanics, and a seamless Unity–React integration. The project delivers multiple casino games within a single web application, supported by a robust backend architecture for gameplay, player data, and transactions.",
      role: "Lead Full-Stack & Multiplayer Developer",
      duration: "8 months",
      team: "3 developers, 2 designers, 1 QA",
      platform: "Web (WebGL)",
      features: [
        {
          title: "Multi-Game Casino Platform",
          description: "Developed a complete web application featuring five games: Blackjack, Baccarat, PrizePool, DigitDream, and Slot Machine, all unified under a single casino platform.",
          icon: Layers, // Ref to imported icon
        },
        {
          title: "Multiplayer Card Games via Nakama",
          description: "Implemented real-time multiplayer for Blackjack (4-player tables with dealer) and Baccarat (4-player tables with banker) using Nakama for matchmaking, room management, and synchronization.",
          icon: Users, // Ref to imported icon
        },
        {
          title: "Backend-Driven Casino Games",
          description: "Built PrizePool and DigitDream using Node.js backend APIs to handle game logic, fairness validation, and reward distribution.",
          icon: Server, // Ref to imported icon
        },
        {
          title: "Slot Machine with Probability Logic",
          description: "Developed a slot machine system featuring paylines, configurable reward rules, and probability-based outcomes to ensure balanced and engaging gameplay.",
          icon: Zap, // Ref to imported icon
        },
        {
          title: "Unity–React Web Integration",
          description: "Created a seamless bridge between Unity WebGL builds and a React frontend, enabling synchronized player data, game state updates, and UI interactions.",
          icon: Code, // Ref to imported icon
        },
      ],
      challenges: [
        {
                "challenge": "Unity–React Player Data Synchronization",
                "solution": "Designed a stable communication layer to sync player profiles, balances, and session data between React UI and Unity WebGL games in real time."
        },
        {
                "challenge": "Custom Unity–React Bridge Implementation",
                "solution": "Wrote a custom JavaScript bridge to enable two-way messaging between Unity WebGL and React, ensuring clean data flow and decoupled architecture."
        },
        {
                "challenge": "WebGL Performance & Responsiveness",
                "solution": "Optimized rendering, memory usage, and asset loading to maintain smooth gameplay and responsive UI across browsers and screen sizes."
        },
        {
                "challenge": "WebGL Optimization for Casino Games",
                "solution": "Reduced build size and runtime overhead through asset compression, shader optimization, and selective feature loading for web deployment."
        },
        {
                "challenge": "Designer Asset Optimization",
                "solution": "Provided clear technical guidelines and pipelines for designers to create WebGL-optimized assets, reducing draw calls and improving load times."
        },
        {
                "challenge": "Scalable Casino Platform Planning",
                "solution": "Designed a complete operational plan covering transactions, player profiles, game lifecycle management, and scalability for future casino expansion."
        }
],
      results: [
        {
                "metric": "5",
                "label": "Casino Games Launched"
        },
        {
                "metric": "4-Player",
                "label": "Multiplayer Tables"
        },
        {
                "metric": "WebGL",
                "label": "Optimized Deployment"
        },
        {
                "metric": "Unified",
                "label": "Casino Platform"
        }
],
      producerMetrics: [
        {
                "metric": "Scalable",
                "label": "Backend Architecture"
        },
        {
                "metric": "Secure",
                "label": "Player Data Flow"
        },
        {
                "metric": "Optimized",
                "label": "Web Performance"
        },
        {
                "metric": "Expandable",
                "label": "Casino Roadmap"
        }
],
      gallery: [
        { type: "image", url: DubbGame_0, caption: "Baccarat (1)" },
        { type: "image", url: DubbGame_1, caption: "Baccarat (2)" },
        { type: "image", url: DubbGame_2, caption: "Baccarat" },
        { type: "image", url: DubbGame_3, caption: "BlackJack (1)" },
        { type: "image", url: DubbGame_4, caption: "BlackJack (2)" },
        { type: "image", url: DubbGame_5, caption: "BlackJack" },
        { type: "image", url: DubbGame_6, caption: "Didget Dreams (1)" },
        { type: "image", url: DubbGame_7, caption: "Didget Dreams (2)" },
        { type: "image", url: DubbGame_8, caption: "Didget Dreams" },
        { type: "image", url: DubbGame_9, caption: "Home" },
        { type: "image", url: DubbGame_10, caption: "Login" },
        { type: "image", url: DubbGame_11, caption: "Prize Pool (1)" },
        { type: "image", url: DubbGame_12, caption: "Prize Pool" },
        { type: "image", url: DubbGame_13, caption: "Slot Machine (1)" },
        { type: "image", url: DubbGame_14, caption: "Slot Machine (2)" },
        { type: "image", url: DubbGame_15, caption: "Slot Machine (3)" },
        { type: "image", url: DubbGame_16, caption: "Slot Machine (4)" },
        { type: "image", url: DubbGame_17, caption: "Slot Machine (5)" },
        { type: "image", url: DubbGame_18, caption: "Slot Machine (6)" },
        { type: "image", url: DubbGame_19, caption: "Slot Machine (7)" },
        { type: "image", url: DubbGame_20, caption: "Slot Machine (8)" },
        { type: "image", url: DubbGame_21, caption: "Slot Machine (9)" },
        { type: "image", url: DubbGame_22, caption: "Slot Machine" },
      ],
    },
    "Dalcal": {
      overview: "Dalcal is a competitive word puzzle game where players solve 3, 4, and 5-letter word challenges. Designed originally as a single-player experience, it was evolved into a real-time multiplayer system powered by Nakama — allowing players to challenge friends, compete head-to-head, and experience time-based strategic gameplay.",
      role: "Lead Gameplay Developer",
      duration: "3 months",
      team: "2 developers, 1 designer, 1 QA",
      platform: "Mobile",
      features: [
        {
          title: "Core Word Puzzle System",
          description: "Engineered the main puzzle logic supporting dynamic 3, 4, and 5-letter word challenges with progressive difficulty balancing.",
          icon: BookOpen, // Ref to imported icon
        },
        {
          title: "Real-Time Multiplayer with Friends",
          description: "Integrated Nakama to enable live competitive matches with seamless friend invites, presence tracking, and synchronized gameplay states.",
          icon: Users, // Ref to imported icon
        },
        {
          title: "Adaptive Difficulty System",
          description: "Built a smart progression system that adjusts challenge difficulty based on player performance, streaks, and experience level.",
          icon: Target, // Ref to imported icon
        },
        {
          title: "Social & Player Systems",
          description: "Implemented player profiles, identity persistence, and social connectivity to enhance retention and encourage replayability.",
          icon: MessageCircle, // Ref to imported icon
        },
      ],
      challenges: [
        {
                "challenge": "Convert Single-Player Gameplay into Multiplayer",
                "solution": "Redesigned the core gameplay loop to support synchronized multiplayer logic while preserving puzzle integrity and fairness."
        },
        {
                "challenge": "Seamless Multiplayer Experience",
                "solution": "Developed smooth lobby flows, friend matchmaking, real-time synchronization, and reconnection handling for a frictionless experience."
        },
        {
                "challenge": "Real-Time Word Validation",
                "solution": "Optimized dictionary lookups and implemented server-authoritative validation to ensure instant feedback with no cheating possibilities."
        },
        {
                "challenge": "Strategic Time-Based Match Design",
                "solution": "Introduced time-limited competitive rounds to maintain engagement, ensure fairness, and avoid extended stalemate scenarios."
        },
        {
                "challenge": "Matchmaking Logic & Fair Play",
                "solution": "Built a matchmaking layer using player matchmaking levels to ensure balanced and competitive match pairings."
        },
        {
                "challenge": "Multiplayer Architecture Stability",
                "solution": "Leveraged Nakama for session management, state authority, latency handling, and persistence to maintain smooth gameplay across devices."
        }
],
      results: [
        {
                "metric": "3",
                "label": "Word Modes"
        },
        {
                "metric": "Competitive",
                "label": "Multiplayer System"
        },
        {
                "metric": "Real-Time",
                "label": "Friend Matches"
        }
],
      producerMetrics: [
        {
                "metric": "Engaging",
                "label": "Gameplay Loop"
        },
        {
                "metric": "Stable",
                "label": "Multiplayer Experience"
        },
        {
                "metric": "Optimized",
                "label": "Mobile Performance"
        },
        {
                "metric": "On Time",
                "label": "Milestone Delivery"
        }
],
      gallery: [
        { type: "image", url: Dalcal_0, caption: "Complete" },
        { type: "image", url: Dalcal_1, caption: "Difficulty" },
        { type: "image", url: Dalcal_2, caption: "Level 10" },
        { type: "image", url: Dalcal_3, caption: "Level 14" },
        { type: "image", url: Dalcal_4, caption: "Level 15" },
        { type: "image", url: Dalcal_5, caption: "Level 16" },
        { type: "image", url: Dalcal_6, caption: "Level 17" },
        { type: "image", url: Dalcal_7, caption: "Level 6" },
        { type: "image", url: Dalcal_8, caption: "Level 7" },
        { type: "image", url: Dalcal_9, caption: "Profile (1)" },
        { type: "image", url: Dalcal_10, caption: "Profile" },
        { type: "image", url: Dalcal_11, caption: "Select Tiers" },
        { type: "image", url: Dalcal_12, caption: "Splash" },
      ],
    },
    "Nine No Draw": {
      overview: "Nine No Draw is a competitive online domino game supporting multiple multiplayer configurations including 1v1, 1v1v1, and 2v2 team-based matches. Built as a digital tabletop experience, it also offers a Pass & Play mode for offline multiplayer fun. Powered by Nakama, the game focuses on real-time synchronization, fair play, and smooth gameplay across all modes.",
      role: "Multiplayer Game Developer",
      duration: "4 months",
      team: "2 developers, 1 designer, 1 QA",
      platform: "Mobile",
      features: [
        {
          title: "Versatile Multiplayer Modes",
          description: "Implemented 1v1, 1v1v1, and 2v2 multiplayer structures with team logic, turn sequencing, and balanced matchmaking powered by Nakama.",
          icon: Users, // Ref to imported icon
        },
        {
          title: "Pass & Play",
          description: "Developed an offline Pass & Play mode enabling local multiplayer gameplay on a single device — recreating a true tabletop experience.",
          icon: Zap, // Ref to imported icon
        },
        {
          title: "Domino Logic & Rule Engine",
          description: "Built a robust and scalable domino rule engine handling placement validation, scoring calculations, and round conclusion logic.",
          icon: Code, // Ref to imported icon
        },
        {
          title: "Shop & Customization",
          description: "Integrated in-game shop and customization systems allowing players to personalize themes, tiles, and visual presentation.",
          icon: ShoppingCart, // Ref to imported icon
        },
      ],
      challenges: [
        {
                "challenge": "Board Validation in Multiplayer",
                "solution": "Designed a server-authoritative board validation system ensuring every domino placement follows game rules without client-side exploitation."
        },
        {
                "challenge": "Multiplayer Shuffling & Fair Distribution",
                "solution": "Implemented secure server-side shuffling to guarantee fairness, randomness, and equal probability across all matches."
        },
        {
                "challenge": "Synchronized Player Hands",
                "solution": "Ensured accurate real-time synchronization of tile hands across all clients, preventing mismatches or desync during gameplay."
        },
        {
                "challenge": "Complex Turn & Team Logic",
                "solution": "Engineered turn management for 1v1, 1v1v1, and 2v2 modes while supporting both team scoring and individual scoring structures."
        },
        {
                "challenge": "Board Placement Handling",
                "solution": "Built stable placement logic supporting legal move detection, forced moves, and invalid move rejection with instant feedback."
        },
        {
                "challenge": "Syncing Both Open Ends of the Board",
                "solution": "Maintained synchronized state of both open board ends across devices, ensuring consistent valid move options for all players."
        },
        {
                "challenge": "Real-Time Board State Synchronization",
                "solution": "Used Nakama for server-state authority and reliable state broadcasting, eliminating disputes and maintaining match integrity."
        }
],
      results: [
        {
                "metric": "3",
                "label": "Multiplayer Configurations"
        },
        {
                "metric": "Pass & Play",
                "label": "Offline Mode"
        },
        {
                "metric": "Real-Time",
                "label": "Board Sync & Play"
        }
],
      producerMetrics: [
        {
                "metric": "Versatile",
                "label": "Gameplay Experiences"
        },
        {
                "metric": "Smooth",
                "label": "Online Performance"
        },
        {
                "metric": "Optimized",
                "label": "Mobile Stability"
        },
        {
                "metric": "On Time",
                "label": "Milestone Delivery"
        }
],
      gallery: [
        { type: "image", url: NineNoDraw_0, caption: "Edit Profile" },
        { type: "image", url: NineNoDraw_1, caption: "Game interface (1)" },
        { type: "image", url: NineNoDraw_2, caption: "Game interface" },
        { type: "image", url: NineNoDraw_3, caption: "Home" },
        { type: "image", url: NineNoDraw_4, caption: "Leader Board" },
        { type: "image", url: NineNoDraw_5, caption: "Shop (1)" },
        { type: "image", url: NineNoDraw_6, caption: "Shop (2)" },
        { type: "image", url: NineNoDraw_7, caption: "Shop" },
        { type: "image", url: NineNoDraw_8, caption: "Splash Screen" },
      ],
    },
  };

  const data = specificData[project.title] || {};
  
  return {
    overview: data.overview || `${project.description} This project showcases advanced game development techniques.`,
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
