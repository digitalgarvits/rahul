export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroBadge: string;
  summary: string;
  whatItIncludes: string[];
  whoItsFor: string[];
  howItWorks: { step: string; detail: string }[];
  benefits: string[];
  features: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: "Books" | "Notes" | "JEE Preparation" | "GATE Preparation" | "Study Material" | "College Information";
  shortDescription: string;
  statusBadge: string;
  actionText: string;
  recommendedFor: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: "Student" | "Parent";
  gradeOrCategory: string;
  location: string;
  quote: string;
  highlight: string;
}

export interface CredentialItem {
  institutionOrExam: string;
  achievement: string;
  category: string;
  iconName: string;
}

export interface MentorshipPillarItem {
  title: string;
  description: string;
  highlight: string;
  category: string;
}

export const siteConfig = {
  brandName: "JEE & GATE Guidance",
  brandSubtitle: "Personalised Mentorship & Educational Consultancy",
  tagline: "Your JEE & GATE Journey, Personally Guided.",
  consultant: {
    name: "Rahul",
    headline: "NIT Kurukshetra EE Alumnus | SDO at HPGCL | JEE & GATE Mentor",
    shortHeadline: "NIT Kurukshetra EE Alumnus | SDO at HPGCL",
    profile:
      "Electrical Engineering graduate from NIT Kurukshetra with a strong background in competitive exams. Having cleared IIT JEE twice and qualified GATE 3 times, I currently work as an Assistant Engineer / SDO at HPGCL. My goal is to help aspirants navigate JEE preparation, GATE strategy, PSU selection, and career growth in core engineering with practical guidance and realistic study plans.",
    phoneDisplay: "+91 96716 96317",
    phoneTel: "+919671696317",
    phoneNumeric: "919671696317",
    whatsappUrl: "https://wa.me/919671696317",
    location: "Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana",
  },
  heroSupportingLine:
    "Personalised Guidance from an NIT Kurukshetra Alumnus & Working Engineering Professional",
  location: {
    title: "Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana",
    addressLine1: "Sub-Divisional Offices (SDO)",
    addressLine2: "Khedar Thermal Power Plant (RGTPP Colony)",
    cityRegion: "Barwala, Hisar District, Haryana - 125121",
    googleMapsSearchUrl: "https://maps.google.com/?q=Khedar+Thermal+Power+Plant+Barwala+Haryana",
  },
  contact: {
    phoneDisplay: "+91 96716 96317",
    phoneTel: "+919671696317",
    whatsappUrl: "https://wa.me/919671696317",
    email: "guidance@jeeguidance.com",
    timings: "Monday – Saturday: 9:30 AM – 7:30 PM | Sunday: By Prior Appointment",
    meetingType: "In-Person Consultation (SDO Khedar Office) & Scheduled 1-on-1 Video Advisory",
  },
  credentials: [
    {
      institutionOrExam: "NIT Kurukshetra",
      achievement: "Electrical Engineering",
      category: "Academic Background",
      iconName: "GraduationCap",
    },
    {
      institutionOrExam: "IIT JEE",
      achievement: "Cleared Twice",
      category: "Competitive Exam",
      iconName: "Award",
    },
    {
      institutionOrExam: "GATE",
      achievement: "Qualified 3 Times",
      category: "Engineering Qualifier",
      iconName: "CheckCircle2",
    },
    {
      institutionOrExam: "HPGCL",
      achievement: "Assistant Engineer / SDO",
      category: "Professional Role",
      iconName: "ShieldCheck",
    },
  ],
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: "jee-guidance",
    slug: "jee-guidance",
    title: "JEE Guidance",
    shortDescription: "Personalised guidance and practical preparation strategies for IIT-JEE aspirants.",
    icon: "Compass",
    heroBadge: "IIT-JEE Mentorship",
    summary:
      "A structured, objective guidance program designed to help IIT-JEE aspirants navigate preparation milestones, paper-solving tactics, and revision cycles with practical strategies from a two-time qualifier.",
    whatItIncludes: [
      "Diagnostic review of current preparation levels across Physics, Chemistry, and Mathematics",
      "Custom month-by-month syllabus coverage roadmap and realistic revision schedules",
      "Subject-wise prioritization framework based on individual strengths and difficulty zones",
      "Analysis of mock test metrics to fix accuracy leaks and time-management issues",
      "Strategy formulation for JEE Main Session 1, Session 2, and JEE Advanced pacing",
    ],
    whoItsFor: [
      "Class 11 students building foundational problem-solving habits",
      "Class 12 students balancing board exams alongside JEE Main and Advanced",
      "Dropper/Repeater students aiming for a calculated, disciplined turnaround year",
      "Aspirants seeking practical advice from someone who cleared IIT JEE twice",
    ],
    howItWorks: [
      { step: "Step 1: Baseline Audit", detail: "Comprehensive assessment of syllabus coverage, test patterns, and study habits." },
      { step: "Step 2: Strategy Blueprint", detail: "Formulation of a customized academic roadmap with weekly targets." },
      { step: "Step 3: Review Milestones", detail: "Fortnightly strategy calibrations to address backlogs and test variances." },
    ],
    benefits: [
      "Guidance grounded in real competitive exam experience",
      "Eliminates guesswork and panic through structured milestones",
      "Clear distinction between JEE Main accuracy and JEE Advanced problem-solving depth",
      "Independent guidance not tied to coaching-centre commercial sales targets",
    ],
    features: [
      "Syllabus Audit",
      "Revision Architecture",
      "Test Diagnostics Framework",
      "Dropper Turnaround Strategy",
    ],
  },
  {
    id: "gate-strategy",
    slug: "gate-strategy",
    title: "GATE Strategy",
    shortDescription: "Structured guidance for GATE preparation, planning and exam strategy.",
    icon: "Award",
    heroBadge: "GATE Preparation",
    summary:
      "A structured, strategic roadmap for engineering students and graduates preparing for GATE, drawing upon practical strategies from qualifying GATE 3 times.",
    whatItIncludes: [
      "Comprehensive analysis of high-weightage core engineering subjects and standard references",
      "Phase-wise study timeline: Concept foundation, PYQ mastery, and subject-wise test series",
      "Virtual calculator drill practices and error-reduction methods for NAT questions",
      "Short-notes compilation and rapid-revision techniques for the final 60 days",
      "Score forecasting and post-GATE strategy for PSU call cutoffs and M.Tech admissions",
    ],
    whoItsFor: [
      "Final year engineering students targeting GATE alongside university semesters",
      "Graduates dedicated to a focused GATE preparation year for PSU recruitment",
      "Working engineers seeking structured, time-efficient study routines",
      "Aspirants needing authentic guidance from a 3-time GATE qualifier",
    ],
    howItWorks: [
      { step: "Step 1: Syllabus & Baseline Assessment", detail: "Audit technical foundation, subject comfort, and target cutoff ranges." },
      { step: "Step 2: Milestone Blueprint", detail: "Build subject-wise timelines with dedicated PYQ completion phases." },
      { step: "Step 3: Mock Series Optimization", detail: "Analyze mock papers, minimize negative marking, and refine NAT speed." },
    ],
    benefits: [
      "Direct strategies from a mentor who has qualified GATE 3 times",
      "Focus on high-yield technical topics to maximize score efficiency",
      "Practical NAT and MSQ tackling methods that protect scores",
      "Realistic balance between daily job/college commitments and preparation",
    ],
    features: [
      "Core Subject Prioritization",
      "PYQ Mastery Framework",
      "Virtual Calculator Tactics",
      "PSU & M.Tech Roadmap",
    ],
  },
  {
    id: "one-to-one-mentorship",
    slug: "one-to-one-mentorship",
    title: "One-to-One Mentorship",
    shortDescription: "Personalised interaction focused on the student's individual goals and challenges.",
    icon: "UserCheck",
    heroBadge: "Personal Mentorship",
    summary:
      "Dedicated, confidential one-to-one mentoring sessions giving students undivided personal attention to discuss preparation hurdles, study psychology, and academic roadblocks.",
    whatItIncludes: [
      "Confidential, dedicated consultation sessions solely dedicated to one student",
      "In-depth discussion of daily schedule, procrastination triggers, and concentration hurdles",
      "Identification of academic blind spots and subject balance (e.g. Math vs Chemistry pacing)",
      "Open joint sessions with parents to align home environment and realistic expectations",
      "Actionable post-session summary notes with targeted tasks for the upcoming week",
    ],
    whoItsFor: [
      "Students hesitant to speak up or ask questions in crowded batches of 100+ students",
      "Aspirants dealing with test anxiety, self-doubt, or mid-session burnout",
      "Parents seeking clear, honest feedback about their child's preparation reality",
      "High-potential students wanting micro-optimizations in problem-solving speed",
    ],
    howItWorks: [
      { step: "Step 1: Consultation Booking", detail: "Choose an in-person slot at SDO Khedar or an online 1-on-1 session." },
      { step: "Step 2: Deep-Dive Discussion", detail: "Focus on student-specific challenges rather than generic broad advice." },
      { step: "Step 3: Actionable Plan", detail: "Receive clear weekly goals and check-ins to maintain consistent momentum." },
    ],
    benefits: [
      "100% focused attention tailored solely to your unique situation",
      "Safe space to address mental fatigue and exam pressure openly",
      "Better communication bridge between parents and students",
      "Personal accountability that keeps preparation consistent",
    ],
    features: [
      "Dedicated Session Slot",
      "Parent-Student Alignment",
      "Burnout & Stress Guidance",
      "Post-Session Action Notes",
    ],
  },
  {
    id: "course-study-planning",
    slug: "course-study-planning",
    title: "Course & Study Planning",
    shortDescription: "Realistic study plans, preparation tracking and academic direction.",
    icon: "BarChart3",
    heroBadge: "Academic Direction",
    summary:
      "A disciplined progress-tracking and planning framework that turns vague study hours into measurable milestones, chapter completion, and scheduled revision cycles.",
    whatItIncludes: [
      "Chapter-by-chapter tracking matrix for Physics, Chemistry, and Mathematics / Core Subjects",
      "Monitoring of three distinct phases: Theory completion, PYQ practice, and Active revision",
      "Error-log documentation system to monitor recurring mistakes in mock tests",
      "Clear visibility on syllabus backlogs before they turn into end-of-year emergencies",
      "Structured periodic milestone audits to ensure revision happens on time",
    ],
    whoItsFor: [
      "Students who study long hours but cannot figure out why mock scores are stagnant",
      "Aspirants who struggle with managing backlogs across multiple subjects",
      "Parents who want transparent, factual visibility into their child's preparation progress",
      "Self-study students who require external accountability and pacing benchmarks",
    ],
    howItWorks: [
      { step: "Step 1: Baseline Mapping", detail: "Map completed chapters across NCERT, standard modules, and PYQ sets." },
      { step: "Step 2: Weekly Logging", detail: "Track completed problem sets and test scores regularly." },
      { step: "Step 3: Score Diagnostics", detail: "Audit test data to locate chapters where marks are slipping." },
    ],
    benefits: [
      "Eliminates the false comfort of passive reading by measuring active problem counts",
      "Prevents last-minute syllabus scrambles before critical exam attempts",
      "Provides transparent clarity to both student and parents",
      "Identifies exact question types causing negative marking",
    ],
    features: [
      "Chapter Mastery Matrix",
      "Error Log Framework",
      "Revision Cycle Counter",
      "Backlog Alert System",
    ],
  },
  {
    id: "college-career-counselling",
    slug: "college-career-counselling",
    title: "College & Career Counselling",
    shortDescription: "Guidance regarding engineering colleges, branches, career paths and future opportunities.",
    icon: "GraduationCap",
    heroBadge: "Admissions & Pathways",
    summary:
      "Strategic counseling during the critical post-exam phase to navigate JoSAA, CSAB, State engineering portals, branch-versus-college decisions, and future engineering paths.",
    whatItIncludes: [
      "JoSAA and CSAB choice-filling optimization based on actual ranks and seat trends",
      "Comprehensive evaluation of College Brand vs Desired Branch (e.g. Old IIT Core vs Top NIT CSE/EE)",
      "Analysis of State Engineering alternatives (Haryana HSTES, Punjab, Delhi JAC, etc.)",
      "Assessment of fee structures, ROI, campus culture, and long-term career avenues",
      "Guidance on secondary premier exams: BITSAT, State CETs, and engineering admissions",
    ],
    whoItsFor: [
      "Students with JEE Main or JEE Advanced ranks preparing for JoSAA / CSAB rounds",
      "Families confused between multiple college offers and counseling deadlines",
      "Students weighing future paths: Core Engineering vs IT vs Higher Studies vs PSUs",
      "Aspirants looking for reliable, unbiased guidance from an NIT graduate",
    ],
    howItWorks: [
      { step: "Step 1: Rank & Preference Audit", detail: "Review ranks, category parameters, home state quota, and student interests." },
      { step: "Step 2: Preference Order Formulation", detail: "Draft an error-free, prioritized list for JoSAA / CSAB counseling portal." },
      { step: "Step 3: Round-by-Round Advice", detail: "Assist with Freeze, Float, and Slide decisions as seat allocations occur." },
    ],
    benefits: [
      "Prevents irreversible choice-filling mistakes on official admission portals",
      "Honest, unbiased evaluation without institutional commercial affiliations",
      "Clarity on branch career trajectories from an industry engineer",
      "Maximized chances of securing the best possible college at your earned rank",
    ],
    features: [
      "JoSAA / CSAB Choice Filling",
      "Branch vs Institute Analysis",
      "State Quota Strategy (HSTES)",
      "Round-by-Round Guidance",
    ],
  },
  {
    id: "psu-core-engineering",
    slug: "psu-core-engineering",
    title: "PSU & Core Engineering Guidance",
    shortDescription: "Practical guidance for students interested in PSU opportunities and careers in core engineering.",
    icon: "ShieldCheck",
    heroBadge: "Core Engineering & PSUs",
    summary:
      "First-hand practical insights into building a career in core engineering and public sector undertakings (PSUs), drawing on Rahul's active professional experience as an Assistant Engineer / SDO at HPGCL.",
    whatItIncludes: [
      "Comprehensive overview of PSU recruitment routes via GATE and state engineering examinations",
      "Understanding the operational landscape of power utilities (HPGCL, NTPC, PowerGrid, State Transco/Discom)",
      "Preparation strategies for PSU written exams, technical interviews, and group discussions",
      "Core engineering career roadmap: Assistant Engineer roles, job responsibilities, and growth paths",
      "Practical guidance on balancing competitive exam preparation with core engineering coursework",
    ],
    whoItsFor: [
      "Engineering students and graduates aspiring for Assistant Engineer / SDO roles in PSUs",
      "Core engineering students (Electrical, Mechanical, Civil) seeking stable engineering careers",
      "Aspirants preparing for state power utilities and public sector engineering recruitment",
      "Students wanting realistic industry insights from a working Assistant Engineer / SDO at HPGCL",
    ],
    howItWorks: [
      { step: "Step 1: Career Direction Assessment", detail: "Evaluate your branch, career preferences, and target exams." },
      { step: "Step 2: Exam & Profile Blueprint", detail: "Outline required technical focus areas, GATE targets, and state PSC patterns." },
      { step: "Step 3: Technical & Interview Prep", detail: "Guidance on technical fundamentals and interview presentation." },
    ],
    benefits: [
      "Direct insight from a serving SDO at HPGCL",
      "Demystifies the actual recruitment processes of PSUs and state power utilities",
      "Realistic understanding of day-to-day engineering responsibilities and career perks",
      "Actionable roadmap tailored specifically for core branches",
    ],
    features: [
      "PSU Exam Patterns & Syllabi",
      "State Power Utility Insights",
      "Technical Interview Guidance",
      "Career Growth Roadmap",
    ],
  },
  {
    id: "doubt-solving",
    slug: "doubt-solving",
    title: "Doubt Solving",
    shortDescription: "Focused support for academic and preparation-related doubts.",
    icon: "HelpCircle",
    heroBadge: "Academic Support",
    summary:
      "A structured approach to resolving academic bottlenecks, ensuring students do not carry fundamental misconceptions or recurring calculation errors into major competitive exams.",
    whatItIncludes: [
      "Systematic breakdown of tough conceptual blocks in core exam topics",
      "Focus on problem-solving methodology: How to read, deconstruct, and approach complex questions",
      "Assistance in distinguishing between standard formula application and multi-concept questions",
      "Curated practice recommendations to strengthen weak sub-topics after doubt sessions",
      "Guidance on how to maintain a personal doubts repository for final exam revisions",
    ],
    whoItsFor: [
      "Students whose coaching classes move too fast and leave doubts unaddressed",
      "Aspirants stuck at a score plateau in specific problem categories",
      "Students practicing advanced problem sheets who need guidance on alternative methods",
      "Self-directed learners requiring conceptual validation from experienced perspectives",
    ],
    howItWorks: [
      { step: "Step 1: Doubt Compilation", detail: "Student compiles recurring problem areas and specific tricky questions." },
      { step: "Step 2: Methodological Breakdown", detail: "Deconstruct underlying core concepts rather than just giving direct answers." },
      { step: "Step 3: Application Drills", detail: "Follow-up questions assigned to verify that the concept is fully absorbed." },
    ],
    benefits: [
      "Teaches students how to think rather than encouraging rote memorization",
      "Builds confidence in tackling unfamiliar multi-concept problems",
      "Prevents small doubts from snowballing into permanent topic phobias",
      "Encourages disciplined self-reliance in subsequent problem practice",
    ],
    features: [
      "Concept-First Approach",
      "Methodology Deconstruction",
      "Multi-Concept Problems",
      "Personal Doubts Log",
    ],
  },
];

export const processSteps = [
  {
    stepNumber: "01",
    title: "Understand",
    tagline: "Current Baseline & Goals",
    description: "We understand the aspirant's current academic baseline, subject strengths, past test performances, and individual targets.",
    icon: "Compass",
  },
  {
    stepNumber: "02",
    title: "Plan",
    tagline: "Personalised Roadmap",
    description: "We formulate a realistic, custom study strategy and timeline tailored to the student's pace and target exam attempt.",
    icon: "CalendarCheck",
  },
  {
    stepNumber: "03",
    title: "Track",
    tagline: "Consistent Monitoring",
    description: "We continuously monitor syllabus progress, problem-solving counts, and mock test metrics to spot variances early.",
    icon: "Activity",
  },
  {
    stepNumber: "04",
    title: "Improve",
    tagline: "Strategic Interventions",
    description: "We provide targeted guidance, resolve conceptual doubts, optimize exam temperament, and eliminate negative marks.",
    icon: "TrendingUp",
  },
  {
    stepNumber: "05",
    title: "Decide",
    tagline: "Informed Admissions & Career",
    description: "We support students and families with counseling (JoSAA, CSAB, PSUs) to make the best college, branch, and career choices.",
    icon: "Award",
  },
];

export const whyChoosePoints = [
  {
    title: "Real Exam Experience",
    description:
      "Mentorship from an NIT Kurukshetra alumnus who has cleared IIT JEE twice and qualified GATE 3 times, offering battle-tested, realistic advice.",
    icon: "Target",
  },
  {
    title: "Working PSU Professional",
    description:
      "First-hand perspective from a currently serving Assistant Engineer / SDO at HPGCL, bridging exam preparation with long-term core engineering career growth.",
    icon: "ShieldCheck",
  },
  {
    title: "Individual One-to-One Focus",
    description:
      "No 300-student batch templates. Every consultation is dedicated solely to the aspirant's unique pacing, strengths, and challenges.",
    icon: "Users",
  },
  {
    title: "Objective, Unbiased Advice",
    description:
      "Zero coaching affiliations, commercial sales targets, or commission-based recommendations. Advice focused 100% on student interest.",
    icon: "CheckCircle2",
  },
  {
    title: "Accessible Local & Online Base",
    description:
      "Based at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana, welcoming both local visits and scheduled virtual consultations.",
    icon: "Compass",
  },
];

export const resourcesData: ResourceItem[] = [
  {
    id: "res-1",
    title: "JEE Mathematics: Standard Calculus & Coordinate Geometry Outline",
    category: "Books",
    shortDescription: "Curated reference outline detailing core conceptual steps, graph methods, and recommended standard textbook problem sets for JEE.",
    statusBadge: "Study Outline",
    actionText: "View Resource Details",
    recommendedFor: "Class 12 & Dropper Aspirants",
  },
  {
    id: "res-2",
    title: "GATE Preparation Material: Core Electrical Engineering Topic Framework",
    category: "GATE Preparation",
    shortDescription: "Structured topic roadmap and reference syllabus outline covering Electric Circuits, Machines, Power Systems, and Control Systems.",
    statusBadge: "GATE Material",
    actionText: "View Resource Details",
    recommendedFor: "GATE Aspirants & EE Students",
  },
  {
    id: "res-3",
    title: "Physics Mechanics & Electrodynamics Milestone Checklist",
    category: "JEE Preparation",
    shortDescription: "A systematic milestone checklist mapping essential sub-topics from Kinematics to Alternating Current for IIT-JEE aspirants.",
    statusBadge: "Milestone Guide",
    actionText: "View Resource Details",
    recommendedFor: "Class 11 & 12 Tracking",
  },
  {
    id: "res-4",
    title: "Engineering Notes: Core Concepts & Formula Reference",
    category: "Notes",
    shortDescription: "Curated reference notes and concise revision summaries compiled from experienced academic perspectives for rapid exam revision.",
    statusBadge: "Revision Reference",
    actionText: "View Resource Details",
    recommendedFor: "Quick Concept Revision",
  },
  {
    id: "res-5",
    title: "IITian / NITian Notes: High-Yield Topic Syntheses",
    category: "Notes",
    shortDescription: "Curated study resources and high-yield topic summaries collected from top engineering graduates for structured revision.",
    statusBadge: "Curated Notes",
    actionText: "View Resource Details",
    recommendedFor: "JEE & GATE Aspirants",
  },
  {
    id: "res-6",
    title: "Mock Test Analysis & Error-Log Printable Template",
    category: "Study Material",
    shortDescription: "A structured printable template to log calculation mistakes, conceptual oversights, and exam-hall time allocation across test papers.",
    statusBadge: "Diagnostic Tool",
    actionText: "View Resource Details",
    recommendedFor: "All Test-Taking Aspirants",
  },
];

export const mentorshipEthos: MentorshipPillarItem[] = [
  {
    title: "Grounded in Personal Examination Success",
    description:
      "Having cleared IIT JEE twice and qualified GATE 3 times, Rahul provides strategies that have been personally tested and proven in actual high-stakes examination halls.",
    highlight: "Cleared IIT JEE Twice • Qualified GATE 3 Times",
    category: "Real Experience",
  },
  {
    title: "Direct Professional Insight from Core Engineering",
    description:
      "As an Assistant Engineer / SDO at HPGCL, Rahul bridges competitive exam prep with real career realities in core engineering and public sector undertakings.",
    highlight: "SDO at HPGCL • NIT Kurukshetra EE Alumnus",
    category: "Industry Perspective",
  },
  {
    title: "Completely Individualized Academic Strategy",
    description:
      "Every aspirant has a distinct rhythm and cognitive stamina. Guidance is tailored to the student rather than forcing them into generic commercial batch molds.",
    highlight: "1-on-1 Dedicated Consultations",
    category: "Personalised Care",
  },
  {
    title: "Absolute Ethical Integrity & Honest Counseling",
    description:
      "No inflated ranks, no commercial tie-ups with coaching centres, and no misleading guarantees. Only transparent assessment and realistic, actionable roadmaps.",
    highlight: "Purely Student-Centric & Independent",
    category: "Ethical Advisory",
  },
];

export const placeholderTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    author: "Parent of Class 12 Aspirant",
    role: "Parent",
    gradeOrCategory: "Class 12 JEE Aspirant",
    location: "Barwala, Haryana",
    quote:
      "Having an experienced engineer like Rahul right here at SDO Khedar changed everything for our family. His calm, objective advice removed the constant panic and gave our son an organized weekly routine.",
    highlight: "Objective guidance from a two-time JEE qualifier",
  },
  {
    id: "test-2",
    author: "JEE Main & Advanced Aspirant",
    role: "Student",
    gradeOrCategory: "Dropper Batch",
    location: "Hisar Region, Haryana",
    quote:
      "In crowded coaching institutes, nobody analyzes why you make mistakes in the 3rd hour of a test. Rahul helped me build an error-log system that immediately plugged negative marks in Chemistry and Math.",
    highlight: "Plugged negative marks with error-log analysis",
  },
  {
    id: "test-3",
    author: "Parent of Class 11 Student",
    role: "Parent",
    gradeOrCategory: "Class 11 Student",
    location: "Khedar Power Plant Colony, Haryana",
    quote:
      "Rahul's 1-on-1 sessions helped us understand our daughter's learning pace. Instead of pushing unrealistic expectations, we now have a balanced, productive study atmosphere at home.",
    highlight: "Supportive atmosphere and realistic roadmaps",
  },
  {
    id: "test-4",
    author: "Engineering Graduate",
    role: "Student",
    gradeOrCategory: "GATE & PSU Aspirant",
    location: "Haryana",
    quote:
      "Guidance from someone who qualified GATE 3 times and is working as an SDO at HPGCL is rare. The technical prioritization and PSU exam strategy gave me absolute clarity.",
    highlight: "Direct insights from a 3-time GATE qualifier & SDO",
  },
];

