// ===== LANGUAGE & TRANSLATIONS =====
let currentLanguage = 'kh';

const translations = {
  en: {
    fullTime: 'ពេញម៉ោង',
    partTime: 'ក្រៅម៉ោង',
    salary: 'ប្រាក់ខែ',
    hourly: 'ថ្លៃម៉ោង',
    monthPerMonth: '/ខែ',
    hourPerHour: '/ម៉ោង',
    estimatedMonth: '/ខែប្រហែល',
    rating: 'ពិន្ទុ',
    sessions: 'វគ្គ',
    revenue: 'ចំណូល',
    avgWeek: 'មធ្យម/សប្តាហ៍',
    status: 'ស្ថានភាព',
    active: 'កំពុងធ្វើការ',
    joined: 'ថ្ងៃចូលធ្វើការ',
    certifications: 'ប័ណ្ណ',
    specialties: 'ជំនាញ',
    fullTimeStaff: 'បុគ្គលិកពេញម៉ោង',
    members: 'នាក់',
    partTimeStaff: 'បុគ្គលិកក្រៅម៉ោង',
    totalMonthlyCost: 'ចំណាយប្រចាំខែសរុប',
    allTeamSalaries: 'ប្រាក់ខែសរុបក្រុម'
  },
  kh: {
    fullTime: 'ពេញម៉ោង',
    partTime: 'ក្រៅម៉ោង',
    salary: 'ប្រាក់ខែ',
    hourly: 'ថ្លៃម៉ោង',
    monthPerMonth: '/ខែ',
    hourPerHour: '/ម៉ោង',
    estimatedMonth: '/ខែប្រហែល',
    rating: 'ពិន្ទុ',
    sessions: 'វគ្គ',
    revenue: 'ចំណូល',
    avgWeek: 'មធ្យម/សប្តាហ៍',
    status: 'ស្ថានភាព',
    active: 'កំពុងធ្វើការ',
    joined: 'ថ្ងៃចូលធ្វើការ',
    certifications: 'ប័ណ្ណ',
    specialties: 'ជំនាញ',
    fullTimeStaff: 'បុគ្គលិកពេញម៉ោង',
    members: 'នាក់',
    partTimeStaff: 'បុគ្គលិកក្រៅម៉ោង',
    totalMonthlyCost: 'ចំណាយប្រចាំខែសរុប',
    allTeamSalaries: 'ប្រាក់ខែសរុបក្រុម'
  }
}

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key
}

function switchLanguage(lang) {
  currentLanguage = lang
  localStorage.setItem('swimxLanguage', lang)
}

// Load saved language preference
window.addEventListener('load', () => {
  const saved = localStorage.getItem('swimxLanguage')
  if (saved) currentLanguage = saved
  updateLanguageButtons()
})

function updateLanguageButtons() {
  const btnEn = document.getElementById('btn-lang-en')
  const btnKh = document.getElementById('btn-lang-kh')
  if (btnEn) btnEn.style.fontWeight = currentLanguage === 'en' ? 'bold' : 'normal'
  if (btnKh) btnKh.style.fontWeight = currentLanguage === 'kh' ? 'bold' : 'normal'
}

// ===== END LANGUAGE & TRANSLATIONS =====

// ===== TEAM WORKS DATA =====
const teamMembers = [
  {
    id: 'coach_001',
    name: 'Coach Maria',
    role: 'Senior Swim Instructor',
    employment: 'Full-Time',
    email: 'maria@swimxclub.com',
    phone: '+855 123 4567',
    certifications: ['CPR', 'Level 2 Coach', 'Youth Specialist'],
    specialties: ['Kids', 'Beginners', 'Group classes'],
    monthlySalary: 650,
    hourlyRate: 15,
    maxHoursPerWeek: 40,
    active: true,
    joinDate: '2024-01-15',
    studentRating: 4.8,
    sessionsCompleted: 156,
    totalRevenue: 3600
  },
  {
    id: 'coach_002',
    name: 'Coach David',
    role: 'Competition Coach',
    employment: 'Full-Time',
    email: 'david@swimxclub.com',
    phone: '+855 123 4568',
    certifications: ['CPR', 'Level 3 Coach', 'Competition Specialist'],
    specialties: ['Competition prep', 'Advanced strokes', 'Endurance'],
    monthlySalary: 800,
    hourlyRate: 18,
    maxHoursPerWeek: 40,
    active: true,
    joinDate: '2023-06-20',
    studentRating: 4.7,
    sessionsCompleted: 98,
    totalRevenue: 2800
  },
  {
    id: 'coach_003',
    name: 'Coach Lisa',
    role: 'Fitness & Corporate Coach',
    employment: 'Full-Time',
    email: 'lisa@swimxclub.com',
    phone: '+855 123 4569',
    certifications: ['CPR', 'Level 1 Coach', 'Aqua Fitness'],
    specialties: ['Fitness', 'Company events', 'Adult swimming'],
    monthlySalary: 550,
    hourlyRate: 14,
    maxHoursPerWeek: 40,
    active: true,
    joinDate: '2024-03-01',
    studentRating: 4.6,
    sessionsCompleted: 72,
    totalRevenue: 1680
  },
  {
    id: 'coach_004',
    name: 'Coach Sokha',
    role: 'Assistant Coach',
    employment: 'Part-Time',
    email: 'sokha@swimxclub.com',
    phone: '+855 123 4571',
    certifications: ['CPR', 'Level 1 Coach'],
    specialties: ['Kids', 'Beginners', 'Water safety'],
    hourlyRate: 10,
    maxHoursPerWeek: 20,
    active: true,
    joinDate: '2024-04-10',
    studentRating: 4.5,
    sessionsCompleted: 42,
    totalRevenue: 420
  },
  {
    id: 'coach_005',
    name: 'Coach Chenda',
    role: 'Youth Coach',
    employment: 'Part-Time',
    email: 'chenda@swimxclub.com',
    phone: '+855 123 4572',
    certifications: ['Level 1 Coach'],
    specialties: ['Teen training', 'Group classes'],
    hourlyRate: 11,
    maxHoursPerWeek: 25,
    active: true,
    joinDate: '2024-02-20',
    studentRating: 4.4,
    sessionsCompleted: 55,
    totalRevenue: 605
  },
  {
    id: 'admin_001',
    name: 'Sarah',
    role: 'Manager & Administrator',
    employment: 'Full-Time',
    email: 'sarah@swimxclub.com',
    phone: '+855 123 4570',
    certifications: [],
    specialties: ['Booking', 'Scheduling', 'Finance', 'Team management'],
    monthlySalary: 700,
    hourlyRate: 0,
    maxHoursPerWeek: 40,
    active: true,
    joinDate: '2024-01-01'
  },
  {
    id: 'staff_001',
    name: 'Vanthorn',
    role: 'Lifeguard & Facilities',
    employment: 'Full-Time',
    email: 'vanthorn@swimxclub.com',
    phone: '+855 123 4573',
    certifications: ['Lifeguard', 'First Aid'],
    specialties: ['Pool safety', 'Equipment maintenance', 'Cleaning'],
    monthlySalary: 400,
    hourlyRate: 0,
    maxHoursPerWeek: 40,
    active: true,
    joinDate: '2024-01-15'
  },
  {
    id: 'staff_002',
    name: 'Sophea',
    role: 'Reception & Booking',
    employment: 'Full-Time',
    email: 'sophea@swimxclub.com',
    phone: '+855 123 4574',
    certifications: [],
    specialties: ['Customer service', 'Booking', 'Payment processing'],
    monthlySalary: 450,
    hourlyRate: 0,
    maxHoursPerWeek: 40,
    active: true,
    joinDate: '2024-02-01'
  },
  {
    id: 'staff_003',
    name: 'Roth',
    role: 'Facilities & Maintenance',
    employment: 'Part-Time',
    email: 'roth@swimxclub.com',
    phone: '+855 123 4575',
    certifications: [],
    specialties: ['Pool maintenance', 'Equipment care', 'Cleaning'],
    hourlyRate: 5,
    maxHoursPerWeek: 30,
    active: true,
    joinDate: '2024-03-15'
  },
  {
    id: 'staff_004',
    name: 'Narin',
    role: 'Marketing & Social Media',
    employment: 'Part-Time',
    email: 'narin@swimxclub.com',
    phone: '+855 123 4576',
    certifications: [],
    specialties: ['Social media', 'Marketing', 'Design', 'Photography'],
    hourlyRate: 8,
    maxHoursPerWeek: 20,
    active: true,
    joinDate: '2024-04-01'
  },
  {
    id: 'staff_005',
    name: 'Pheakdey',
    role: 'Driver & Events Support',
    employment: 'Part-Time',
    email: 'pheakdey@swimxclub.com',
    phone: '+855 123 4577',
    certifications: ['Driver License', 'First Aid'],
    specialties: ['Transportation', 'Event setup', 'Equipment delivery'],
    hourlyRate: 6,
    maxHoursPerWeek: 25,
    active: true,
    joinDate: '2024-04-20'
  }
]

const defaultTeamMembers = JSON.parse(JSON.stringify(teamMembers))

const recommendedTeamPositions = [
  {
    position: 'Head Coach',
    recommendedCount: 1,
    priority: 'High',
    keyFocus: 'Coach leadership, curriculum quality, mentor junior coaches'
  },
  {
    position: 'Senior Swim Instructor',
    recommendedCount: 2,
    priority: 'High',
    keyFocus: 'Private and group classes, parent communication, progress reports'
  },
  {
    position: 'Kids Swim Instructor',
    recommendedCount: 2,
    priority: 'High',
    keyFocus: 'Ages 4-12 classes, water confidence, child safety routines'
  },
  {
    position: 'Competition Coach',
    recommendedCount: 1,
    priority: 'Medium',
    keyFocus: 'Race preparation, stroke analytics, event coaching plans'
  },
  {
    position: 'Operations & Admin Manager',
    recommendedCount: 1,
    priority: 'High',
    keyFocus: 'Scheduling, payroll, team operations, reporting'
  },
  {
    position: 'Reception & Booking Officer',
    recommendedCount: 1,
    priority: 'Medium',
    keyFocus: 'Customer support, bookings, attendance, payment follow-up'
  },
  {
    position: 'Lifeguard / Safety Officer',
    recommendedCount: 1,
    priority: 'High',
    keyFocus: 'Pool safety compliance, emergency readiness, risk checks'
  },
  {
    position: 'Facility & Equipment Staff',
    recommendedCount: 1,
    priority: 'Medium',
    keyFocus: 'Pool maintenance, equipment readiness, cleanliness'
  },
  {
    position: 'Marketing & Community Lead',
    recommendedCount: 1,
    priority: 'Medium',
    keyFocus: 'Social media, partnerships, campaigns, club visibility'
  },
  {
    position: 'Events & Logistics Support',
    recommendedCount: 1,
    priority: 'Low',
    keyFocus: 'Event setup, transportation, material delivery'
  }
]

const teamAssignments = {
  'Private class': ['coach_001', 'coach_002'],
  'Group class': ['coach_001', 'coach_002', 'coach_004'],
  'Kid package': ['coach_001', 'coach_003', 'coach_004', 'coach_005'],
  'School package': 'coach_002',
  'Fitness package': 'coach_003',
  'Company package': 'coach_003',
  'Competition event package': 'coach_002',
  'Pool party event package': ['coach_001', 'coach_003', 'staff_005'],
  'Train to Swimming coach package': 'coach_002',
  'Speaker': 'admin_001'
}

// ===== END TEAM WORKS DATA =====

const packages = [
  'Private class','Group class','Kid package','School package','Fitness package','Company package','Competition event package','Pool party event package','Required materials','Train to Swimming coach package','Speaker'
]

const packageDetails = {
  'Private class': {
    audience: 'One student or one family member',
    ideal: 'Fast progress, beginner confidence, stroke correction',
    includes: '1 coach, personalized lesson plan, technique correction, progress tracking',
    price: '$25â€“40 per hour',
    duration: '45â€“60 minutes'
  },
  'Group class': {
    audience: '3â€“8 swimmers per group',
    ideal: 'Affordable learning with social motivation',
    includes: 'Group warm-up, skill stations, shared drills, attendance sheet',
    price: '$10â€“20 per student',
    duration: '60 minutes'
  },
  'Kid package': {
    audience: 'Children ages 4â€“12',
    ideal: 'Water confidence, fun safety drills, beginner swimming skills',
    includes: 'Child-friendly lessons, games, breathing practice, safety supervision',
    price: '$12â€“18 per child',
    duration: '30â€“45 minutes'
  },
  'School package': {
    audience: 'Students from schools',
    ideal: 'Swimming lessons, safety education, certificates',
    includes: 'School schedule, class reports, progress certificates, bulk discount',
    price: 'Custom school contract',
    duration: '8â€“12 session program'
  },
  'Fitness package': {
    audience: 'Adults, fitness members, body conditioning users',
    ideal: 'Cardio, strength, low-impact training',
    includes: 'Lap swim sets, endurance training, aqua fitness drills',
    price: 'Monthly membership or per class',
    duration: '45â€“75 minutes'
  },
  'Company package': {
    audience: 'Company staff and corporate teams',
    ideal: 'Wellness, team building, special company events',
    includes: 'Group coaching, team challenges, event support, invoices',
    price: 'Custom corporate package',
    duration: 'Half-day or session bundle'
  },
  'Competition event package': {
    audience: 'Swimmers preparing for races',
    ideal: 'Skill improvement and event preparation',
    includes: 'Race strategy, start practice, taper plan, race-day support',
    price: 'Custom coaching package',
    duration: '4â€“8 week prep block'
  },
  'Pool party event package': {
    audience: 'Birthdays, celebrations, resorts, family events',
    ideal: 'Fun and safe pool events',
    includes: 'Safety setup, lifeguard support, games, optional music/speaker',
    price: 'Event-based pricing',
    duration: '2â€“4 hours'
  },
  'Required materials': {
    audience: 'Any swimmer or class participant',
    ideal: 'Support items to improve training quality',
    includes: 'Goggles, caps, kickboards, pull buoys, first-aid and safety tools',
    price: 'Sold separately or bundled',
    duration: 'Add-on package'
  },
  'Train to Swimming coach package': {
    audience: 'Future coaches and assistants',
    ideal: 'Coach training and certification pathway',
    includes: 'Teaching method, lesson planning, safety, progress review, business skills',
    price: 'Course-based pricing',
    duration: 'Training course block'
  },
  'Speaker': {
    audience: 'Events, seminars, clubs, school sessions',
    ideal: 'Motivation, education, and event support',
    includes: 'Audio speaker, event announcement, motivation talk, music support',
    price: 'Hourly or event package',
    duration: 'As needed'
  }
}

// FIXED PACKAGE PRICING
const packagePricing = {
  'Private class': 200,        // 1-on-1: $200 (12 sessions/12h, pool access)
  'Group class': 125,          // $125 (10 sessions, pool access)
  'Kid package': 200,          // $200 (10 sessions × 45min, ages 4-6, pool access)
  'School package': 500,       // $500 (20 members, 4 sessions, 1.5h each)
  'Fitness package': 150,      // $150 (12 sessions × 1h, pool access)
  'Company package': 500,      // $500 (20 members, 4 sessions, 1.5h each)
  'Competition event package': 550,  // By event: $550-1000+
  'Pool party event package': 700,   // By event: $700-1200
  'Required materials': 0,     // À la carte
  'Train to Swimming coach package': 400, // $400/mo or $1200/3mo
  'Speaker': 120               // By event: $120-180
}

// Package details with sessions/hours included
const packageDurations = {
  'Private class': { sessions: 12, hours: 12, pool: 'yes', note: '12 sessions or 12h/month + pool access' },
  'Group class': { sessions: 10, hours: 10, pool: 'yes', note: '10 sessions/month + pool access' },
  'Kid package': { sessions: 10, hours: 7.5, ageGroup: '4-6 years', pool: 'yes', note: '10 × 45min/month + pool access' },
  'School package': { sessions: 4, hours: 6, students: 20, note: '4 sessions × 1.5h' },
  'Fitness package': { sessions: 12, hours: 12, pool: 'yes', note: '12 × 1h/month + pool access' },
  'Company package': { sessions: 4, hours: 6, students: 20, note: '4 sessions × 1.5h' },
  'Competition event package': { priceRange: '$550-1000+', note: 'By event' },
  'Pool party event package': { priceRange: '$700-1200', note: 'By event' },
  'Required materials': { note: 'À la carte items' },
  'Train to Swimming coach package': { duration: 3, unit: 'months', note: '$400/mo or $1200/3mo' },
  'Speaker': { priceRange: '$120-180', note: 'By event' }
}


function calculatePackagePrice(packageName) {
  const price = packagePricing[packageName] || 0
  const details = packageDurations[packageName] || {}
  
  return {
    finalPrice: price,
    details: details,
    priceRange: details.priceRange || null,
    note: details.note || ''
  }
}

// Detailed Pricing Structure - Coach-Based Calculation
const packagePricingStructure = {
  'Private class': {
    description: '1-on-1 personalized coaching',
    coachAssigned: ['Coach Maria', 'Coach David'],
    avgRate: '$15-18/hr',
    duration: '1 hour',
    calculation: '($16.50 avg × 1h) + $15 overhead + 5% commission + 10% pool = ~$50',
    tiers: {
      '1-on-1': { duration: '12 hours', price: 240, note: 'Full package' },
      '1-on-2': { duration: 'per session', price: 444, note: 'For 2 people' },
      '1-on-3': { duration: 'per person', price: 180, note: 'Per person' }
    },
    default: 240
  },
  'Group class': {
    description: 'Group swim lessons (3-8 students)',
    coachAssigned: ['Coach Maria', 'Coach David', 'Coach Sokha'],
    avgRate: '$13-16/hr',
    duration: '1 hour',
    calculation: '($14.67 avg × 1h) + $10 overhead + 5% commission + 10% pool = ~$28/session',
    pricePerPerson: 150,
    note: '$150 per person (calculated from base)',
    default: 150
  },
  'Kid package': {
    description: 'Children ages 4-12 (45 minutes)',
    coachAssigned: ['Coach Maria', 'Coach Lisa', 'Coach Sokha'],
    avgRate: '$14-15/hr',
    duration: '45 minutes',
    calculation: '($14.50 avg × 0.75h) + $8 overhead + 5% commission + 10% pool = ~$22/session',
    price: 240,
    duration: 'Monthly or per unit',
    default: 240
  },
  'School package': {
    description: 'Custom school contract (1.5 hours)',
    coachAssigned: ['Coach David'],
    rate: '$18/hr',
    duration: '1.5 hours',
    calculation: '($18 × 1.5h) + $20 overhead + 5% commission + 10% pool = ~$60-65/session',
    minimumPrice: 600,
    note: 'Minimum $600, scalable',
    default: 600
  },
  'Fitness package': {
    description: 'Adult fitness (1 hour)',
    coachAssigned: ['Coach Lisa'],
    rate: '$14/hr',
    duration: '1 hour',
    calculation: '($14 × 1h) + $12 overhead + 5% commission + 10% pool = ~$30/session',
    price: 240,
    duration: 'Per month',
    default: 240
  },
  'Company package': {
    description: 'Corporate team building (2 hours)',
    coachAssigned: ['Coach Lisa'],
    rate: '$14/hr',
    duration: '2 hours',
    calculation: '($14 × 2h) + $30 overhead + 5% commission + 10% pool = ~$51/event',
    minimumPrice: 600,
    note: 'Minimum $600, scalable',
    default: 600
  },
  'Competition event package': {
    description: 'Competition prep (1.5 hours)',
    coachAssigned: ['Coach David'],
    rate: '$18/hr',
    duration: '1.5 hours',
    calculation: '($18 × 1.5h) + $25 overhead + 5% commission + 10% pool = ~$56/session',
    priceModel: 'By event',
    suggested: '$56+ per session',
    default: 0
  },
  'Pool party event package': {
    description: 'Birthday/celebration (3 hours)',
    coachAssigned: ['Coach Maria', 'Coach Lisa', 'Driver'],
    avgRate: '$10-15/hr',
    duration: '3 hours',
    calculation: '($12.50 avg × 3h) + $40 overhead + 5% commission + 10% pool = ~$85-90/event',
    priceModel: 'By event',
    suggested: '$85-90 for 2-4 hour event',
    default: 0
  },
  'Required materials': {
    description: 'Equipment bundle',
    coachAssigned: 'N/A',
    duration: 'Flat fee',
    calculation: '$5 base + item costs (goggles $18, cap $6, boards $30-36, etc.) = $100-120 bundle',
    items: {
      'Goggles': 18,
      'Swim cap': 6,
      'Kickboard': 30,
      'Pull buoy': 36,
      'Rescue tube': 60,
      'First-aid kit': 48
    },
    bundlePrice: 120,
    default: 0
  },
  'Train to Swimming coach package': {
    description: 'Coach certification (2-hour sessions)',
    coachAssigned: ['Coach David'],
    rate: '$18/hr',
    duration: '2 hours per session',
    calculation: '($18 × 2h) + $35 overhead + 5% commission + 10% pool = ~$86/session × 12 = $1032/total',
    totalCost: 1200,
    duration: '3 months',
    monthlyRate: 400,
    breakdown: '12 sessions × $100/session or $400/month',
    default: 400
  },
  'Speaker': {
    description: 'Event speaker/announcer (2 hours)',
    coachAssigned: ['Sarah (Admin)'],
    duration: '2 hours',
    calculation: 'Custom rate + $20 overhead + 5% commission + 10% pool = $120-180+',
    priceModel: 'By event',
    suggested: '$120-180 per event or $60/hour',
    default: 0
  }
}

// Program templates for each package with real video tutorials
const programTemplates = {
  'Private class': [
    { title: 'Assessment & personalized goal setting', video: 'https://www.youtube.com/embed/Ez5SbA7CdpU' },
    { title: 'Warm-up, water confidence & breathing', video: 'https://www.youtube.com/embed/UeGTXGboEeo' },
    { title: 'Kick drills with board; bilateral breathing', video: 'https://www.youtube.com/embed/PjjZzp-ElJs' },
    { title: 'Kicking without board; balance & float', video: 'https://www.youtube.com/embed/Z9KrPlsvnAs' },
    { title: 'Freestyle arm technique & coordination', video: 'https://www.youtube.com/embed/yGtsukO9x3E' },
    { title: 'Freestyle breathing drills and distance sets', video: 'https://www.youtube.com/embed/GHbKOr1wurI' },
    { title: 'Turns & underwater streamline', video: 'https://www.youtube.com/embed/q9QCBGdztLk' },
    { title: 'Backstroke basics and refinement', video: 'https://www.youtube.com/embed/sTucsg-QSN4' },
    { title: 'Breaststroke kick and timing', video: 'https://www.youtube.com/embed/heKKhNBHp98' },
    { title: 'Combined stroke practice and pacing', video: 'https://www.youtube.com/embed/S_nBipyKIeY' },
    { title: 'Endurance set & video feedback', video: 'https://www.youtube.com/embed/1yLv3Yldpgs' },
    { title: 'Final assessment, progression plan and next steps', video: 'https://www.youtube.com/embed/ljHwrZ-yLyw' }
  ],
  'Group class': [
    { title: 'Group warm-up & water safety briefing', video: 'https://www.youtube.com/embed/UeGTXGboEeo', message: 'Today’s lesson starts with water safety, pool rules, and a calm warm-up. Parents, please help students arrive ready with swimwear, towel, and goggles.' },
    { title: 'Large-group kicking drills (with boards)', video: 'https://www.youtube.com/embed/PjjZzp-ElJs', message: 'This lesson focuses on kicking, body balance, and staying relaxed in the water. Parents, encourage students to keep a steady rhythm and follow coach cues.' },
    { title: 'Small-group station work: beginners/intermediate/advanced', video: 'https://www.youtube.com/embed/Z9KrPlsvnAs', message: 'Students are grouped by level to match each swimmer’s pace and confidence. Please encourage effort, teamwork, and a positive learning mindset.' },
    { title: 'Freestyle technique and partner feedback', video: 'https://www.youtube.com/embed/yGtsukO9x3E', message: 'This session builds freestyle arm action, breathing control, and partner feedback skills. Parents, remind students that progress comes step by step.' },
    { title: 'Breathing & endurance interval sets', video: 'https://www.youtube.com/embed/GHbKOr1wurI', message: 'Today’s goal is stronger breathing, better stamina, and more confidence during longer swims. Please support students with water, rest, and encouragement after class.' },
    { title: 'Turns & starts (intro level)', video: 'https://www.youtube.com/embed/q9QCBGdztLk', message: 'Students will learn safe starts and basic turns to improve race readiness and control. Parents, steady practice is the key to better technique.' },
    { title: 'Fun skill drills (races, relays) to build motivation', video: 'https://www.youtube.com/embed/1yLv3Yldpgs', message: 'This is a fun, active lesson with races and relays to build motivation and team spirit. Please celebrate effort and sportsmanship as much as speed.' },
    { title: 'Cool-down, stretch and brief progress talk', video: 'https://www.youtube.com/embed/S_nBipyKIeY', message: 'The final lesson includes recovery, stretching, and a short progress review. Parents, ask what skill improved most so students can feel proud of their growth.' }
  ],
  'Kid package': [
    { title: 'Meet the coach and water safety rules', video: 'https://www.youtube.com/embed/UeGTXGboEeo' },
    { title: 'Water confidence and blowing bubbles', video: 'https://www.youtube.com/embed/PjjZzp-ElJs' },
    { title: 'Floating and body balance games', video: 'https://www.youtube.com/embed/Z9KrPlsvnAs' },
    { title: 'Kick practice with fun drills', video: 'https://www.youtube.com/embed/yGtsukO9x3E' },
    { title: 'Freestyle arms and breathing basics', video: 'https://www.youtube.com/embed/GHbKOr1wurI' },
    { title: 'Backstroke introduction for kids', video: 'https://www.youtube.com/embed/q9QCBGdztLk' },
    { title: 'Mini assessment and reward time', video: 'https://www.youtube.com/embed/ljHwrZ-yLyw' }
  ],
  'School package': [
    { title: 'Intro to water safety and pool rules', video: 'https://www.youtube.com/embed/UeGTXGboEeo' },
    { title: 'Water confidence and floating for beginners', video: 'https://www.youtube.com/embed/Z9KrPlsvnAs' },
    { title: 'Basic kicking and body position', video: 'https://www.youtube.com/embed/PjjZzp-ElJs' },
    { title: 'Intro to freestyle arms and breathing', video: 'https://www.youtube.com/embed/yGtsukO9x3E' },
    { title: 'Backstroke basics and kicking', video: 'https://www.youtube.com/embed/sTucsg-QSN4' },
    { title: 'Breaststroke basics and timing', video: 'https://www.youtube.com/embed/heKKhNBHp98' },
    { title: 'Endurance play & survival skills', video: 'https://www.youtube.com/embed/1yLv3Yldpgs' },
    { title: 'Progress checks and certificates', video: 'https://www.youtube.com/embed/ljHwrZ-yLyw' }
  ],
  'Fitness package': [
    { title: 'Aquatic warm-up and mobility', video: 'https://www.youtube.com/embed/UeGTXGboEeo' },
    { title: 'Interval lap sets for cardio', video: 'https://www.youtube.com/embed/GHbKOr1wurI' },
    { title: 'Resistance and kickboard strength work', video: 'https://www.youtube.com/embed/PjjZzp-ElJs' },
    { title: 'Technique refinement for efficiency', video: 'https://www.youtube.com/embed/yGtsukO9x3E' },
    { title: 'Aqua HIIT circuits (optional)', video: 'https://www.youtube.com/embed/1yLv3Yldpgs' },
    { title: 'Endurance-focused long sets', video: 'https://www.youtube.com/embed/S_nBipyKIeY' },
    { title: 'Recovery swim and flexibility session', video: 'https://www.youtube.com/embed/q9QCBGdztLk' }
  ],
  'Company package': [
    { title: 'Safety briefing & warm-up', video: 'https://www.youtube.com/embed/UeGTXGboEeo' },
    { title: 'Team-building relay drills', video: 'https://www.youtube.com/embed/PjjZzp-ElJs' },
    { title: 'Beginner refresher for non-swimmers', video: 'https://www.youtube.com/embed/Z9KrPlsvnAs' },
    { title: 'Coached mini-competition (friendly)', video: 'https://www.youtube.com/embed/yGtsukO9x3E' },
    { title: 'Group cool-down and debrief', video: 'https://www.youtube.com/embed/S_nBipyKIeY' },
    { title: 'Optional social/refreshments plan', video: 'https://www.youtube.com/embed/1yLv3Yldpgs' }
  ],
  'Competition event package': [
    { title: 'Race skills assessment and goal planning', video: 'https://www.youtube.com/embed/Ez5SbA7CdpU' },
    { title: 'Start and dive practice', video: 'https://www.youtube.com/embed/q9QCBGdztLk' },
    { title: 'Underwater streamline and breakout', video: 'https://www.youtube.com/embed/Z9KrPlsvnAs' },
    { title: 'Turns, breakouts and transitions', video: 'https://www.youtube.com/embed/yGtsukO9x3E' },
    { title: 'Sprint sets & race-pace intervals', video: 'https://www.youtube.com/embed/GHbKOr1wurI' },
    { title: 'Tapering session and race simulation', video: 'https://www.youtube.com/embed/S_nBipyKIeY' },
    { title: 'Race-day logistics and warm-up routine', video: 'https://www.youtube.com/embed/ljHwrZ-yLyw' }
  ],
  'Pool party event package': [
    { title: 'Event planning and safety plan', video: 'https://www.youtube.com/embed/UeGTXGboEeo' },
    { title: 'Pool setup, lifeguard & first-aid briefing', video: 'https://www.youtube.com/embed/PjjZzp-ElJs' },
    { title: 'Warm-up games and icebreakers', video: 'https://www.youtube.com/embed/1yLv3Yldpgs' },
    { title: 'Supervised free swim and organised games', video: 'https://www.youtube.com/embed/yGtsukO9x3E' },
    { title: 'Mini-lessons or demos (optional)', video: 'https://www.youtube.com/embed/Z9KrPlsvnAs' },
    { title: 'Pack-up, feedback and follow-up offers', video: 'https://www.youtube.com/embed/S_nBipyKIeY' }
  ],
  'Required materials': [
    { title: 'Goggles, swim cap, kickboard, pull buoy', video: 'https://www.youtube.com/embed/PjjZzp-ElJs' },
    { title: 'Rescue tube, first-aid kit, floatation aids', video: 'https://www.youtube.com/embed/UeGTXGboEeo' },
    { title: 'Whistle, clipboard, attendance sheets', video: 'https://www.youtube.com/embed/1yLv3Yldpgs' },
    { title: 'Cleaning supplies and extra towels', video: 'https://www.youtube.com/embed/S_nBipyKIeY' }
  ],
  'Train to Swimming coach package': [
    { title: 'Coaching theory and pedagogy', video: 'https://www.youtube.com/embed/Ez5SbA7CdpU' },
    { title: 'Lesson planning and progressions', video: 'https://www.youtube.com/embed/PjjZzp-ElJs' },
    { title: 'Teaching beginners: safety & confidence', video: 'https://www.youtube.com/embed/UeGTXGboEeo' },
    { title: 'Drill selection by stroke and skill level', video: 'https://www.youtube.com/embed/yGtsukO9x3E' },
    { title: 'Feedback methods and video analysis', video: 'https://www.youtube.com/embed/GHbKOr1wurI' },
    { title: 'Risk management, pool rules and lifeguard liaison', video: 'https://www.youtube.com/embed/S_nBipyKIeY' },
    { title: 'Business of coaching: pricing and retention', video: 'https://www.youtube.com/embed/1yLv3Yldpgs' }
  ],
  'Speaker': [
    { title: 'Motivation & mindset for athletes', video: 'https://www.youtube.com/embed/Ez5SbA7CdpU' },
    { title: 'Sports nutrition basics and hydration', video: 'https://www.youtube.com/embed/yGtsukO9x3E' },
    { title: 'Injury prevention and load management', video: 'https://www.youtube.com/embed/GHbKOr1wurI' },
    { title: 'Marketing your swimming program / club', video: 'https://www.youtube.com/embed/S_nBipyKIeY' }
  ]
}

const packageMessageGuides = {
  'Private class': 'This one-to-one session is focused on personal progress, confidence, and technique correction.',
  'Group class': 'This group lesson builds teamwork, skill progress, and steady improvement for every swimmer.',
  'Kid package': 'This child-friendly lesson uses simple steps, games, and safety practice to build confidence in the water.',
  'School package': 'This school session supports safety, learning progress, and class-wide swimming development.',
  'Fitness package': 'This fitness session improves stamina, breathing control, and efficient swimming movement.',
  'Company package': 'This company session combines fun, safety, and team spirit for a positive group experience.',
  'Competition event package': 'This competition session focuses on race technique, speed, and performance readiness.',
  'Pool party event package': 'This event session keeps the water fun, safe, and well supervised for all participants.',
  'Required materials': 'This lesson explains the training and safety items needed to support swimming progress.',
  'Train to Swimming coach package': 'This coach training session develops teaching skill, planning, and professional confidence.',
  'Speaker': 'This session supports learning, motivation, and event communication for the swimming program.'
}

const packageDisplayNames = {
  'Private class': 'ថ្នាក់ឯកជន',
  'Group class': 'ថ្នាក់ក្រុម',
  'Kid package': 'កញ្ចប់កុមារ',
  'School package': 'កញ្ចប់សាលា',
  'Fitness package': 'កញ្ចប់ហាត់ប្រាណ',
  'Company package': 'កញ្ចប់ក្រុមហ៊ុន',
  'Competition event package': 'កញ្ចប់ប្រកួត',
  'Pool party event package': 'កញ្ចប់ពិធីអាងទឹក',
  'Required materials': 'សម្ភារៈត្រូវការ',
  'Train to Swimming coach package': 'បង្រៀនគ្រូ',
  'Speaker': 'អ្នកនិយាយកម្មវិធី'
}

function packageLabel(name) {
  return packageDisplayNames[name] || name
}

function applySimpleBilingualText() {
  const simpleRoles = {
    'Senior Swim Instructor': 'គ្រូហែលទឹកជាន់ខ្ពស់',
    'Competition Coach': 'គ្រូត្រៀមប្រកួត',
    'Fitness & Corporate Coach': 'គ្រូហាត់ប្រាណ និងក្រុមហ៊ុន',
    'Assistant Coach': 'ជំនួយគ្រូ',
    'Youth Coach': 'គ្រូកុមារ និងយុវជន',
    'Manager & Administrator': 'អ្នកគ្រប់គ្រង',
    'Lifeguard & Facilities': 'អ្នកសុវត្ថិភាពអាង',
    'Reception & Booking': 'ទទួលភ្ញៀវ និងកក់',
    'Facilities & Maintenance': 'ថែទាំទីតាំង',
    'Marketing & Social Media': 'ផ្សព្វផ្សាយ',
    'Driver & Events Support': 'អ្នកបើកបរ និងជួយកម្មវិធី'
  }

  const simplePackageDetails = {
    'Private class': { audience: 'ម្នាក់ឯង', ideal: 'រៀនលឿន', includes: 'គ្រូផ្ទាល់' },
    'Group class': { audience: '3-8 នាក់', ideal: 'រៀនជាក្រុម', includes: 'គ្រូមួយក្រុម' },
    'Kid package': { audience: 'កុមារ', ideal: 'រៀនមូលដ្ឋាន', includes: 'លេង និងរៀន' },
    'School package': { audience: 'សិស្សសាលា', ideal: 'រៀនក្នុងក្រុមធំ', includes: 'តារាងជាក្រុម' },
    'Fitness package': { audience: 'មនុស្សធំ', ideal: 'សុខភាពល្អ', includes: 'ហែលទឹកហាត់ប្រាណ' },
    'Company package': { audience: 'បុគ្គលិកក្រុមហ៊ុន', ideal: 'សកម្មភាពក្រុម', includes: 'គ្រូ និងកម្មវិធីក្រុម' },
    'Competition event package': { audience: 'អ្នកប្រកួត', ideal: 'ត្រៀមប្រកួត', includes: 'ហាត់ល្បឿន' },
    'Pool party event package': { audience: 'ពិធី និងគ្រួសារ', ideal: 'សប្បាយ និងសុវត្ថិភាព', includes: 'ល្បែងក្នុងទឹក' },
    'Required materials': { audience: 'អ្នករៀនទាំងអស់', ideal: 'មានសម្ភារៈគ្រប់', includes: 'វ៉ែនតាទឹក មួក បន្ទះទាត់' },
    'Train to Swimming coach package': { audience: 'អ្នកចង់ធ្វើគ្រូ', ideal: 'រៀនបង្រៀន', includes: 'គន្លឹះបង្រៀនមូលដ្ឋាន' },
    'Speaker': { audience: 'កម្មវិធីផ្សេងៗ', ideal: 'ជួយនិយាយកម្មវិធី', includes: 'និយាយណែនាំ' }
  }

  teamMembers.forEach(member => {
    if (simpleRoles[member.role]) member.role = simpleRoles[member.role]
  })

  Object.keys(simplePackageDetails).forEach(key => {
    if (packageDetails[key]) {
      packageDetails[key].audience = simplePackageDetails[key].audience
      packageDetails[key].ideal = simplePackageDetails[key].ideal
      packageDetails[key].includes = simplePackageDetails[key].includes
    }
  })

  const simpleTeamRoleMap = {
    'Head Coach': { position: 'គ្រូដឹកនាំ', keyFocus: 'ដឹកនាំគ្រូ និងពិនិត្យមេរៀន', priority: 'ខ្ពស់' },
    'Senior Swim Instructor': { position: 'គ្រូជាន់ខ្ពស់', keyFocus: 'បង្រៀនថ្នាក់ឯកជន និងក្រុម', priority: 'ខ្ពស់' },
    'Kids Swim Instructor': { position: 'គ្រូកុមារ', keyFocus: 'បង្រៀនកុមារ និងសុវត្ថិភាពទឹក', priority: 'ខ្ពស់' },
    'Competition Coach': { position: 'គ្រូត្រៀមប្រកួត', keyFocus: 'ហាត់សម្រាប់ការប្រកួត', priority: 'មធ្យម' },
    'Operations & Admin Manager': { position: 'អ្នកគ្រប់គ្រងការងារ', keyFocus: 'រៀបម៉ោង និងគ្រប់គ្រងក្រុម', priority: 'ខ្ពស់' },
    'Reception & Booking Officer': { position: 'អ្នកទទួលភ្ញៀវ', keyFocus: 'ទទួលភ្ញៀវ និងទទួលការកក់', priority: 'មធ្យម' },
    'Lifeguard / Safety Officer': { position: 'អ្នកសុវត្ថិភាពអាង', keyFocus: 'មើលសុវត្ថិភាពនៅអាង', priority: 'ខ្ពស់' },
    'Facility & Equipment Staff': { position: 'អ្នកថែទាំឧបករណ៍', keyFocus: 'ថែទាំអាង និងសម្ភារៈ', priority: 'មធ្យម' },
    'Marketing & Community Lead': { position: 'អ្នកផ្សព្វផ្សាយ', keyFocus: 'ផ្សព្វផ្សាយ និងរកដៃគូ', priority: 'មធ្យម' },
    'Events & Logistics Support': { position: 'អ្នកជួយកម្មវិធី', keyFocus: 'ជួយរៀបចំកម្មវិធី', priority: 'ទាប' }
  }

  recommendedTeamPositions.forEach(item => {
    const mapped = simpleTeamRoleMap[item.position]
    if (mapped) {
      item.position = mapped.position
      item.keyFocus = mapped.keyFocus
      item.priority = mapped.priority
    }
  })

  const simpleVideos = [
    'https://www.youtube.com/embed/UeGTXGboEeo',
    'https://www.youtube.com/embed/PjjZzp-ElJs',
    'https://www.youtube.com/embed/Z9KrPlsvnAs',
    'https://www.youtube.com/embed/yGtsukO9x3E'
  ]

  const bestProgramByPackage = {
    'Private class': [
      'វគ្គ១ ស្គាល់ទឹក និងសុវត្ថិភាព',
      'វគ្គ២ ហាត់ដង្ហើមក្នុងទឹក',
      'វគ្គ៣ ហាត់ទាត់ជើង',
      'វគ្គ៤ ហាត់ដៃជាមួយការទាត់',
      'វគ្គ៥ ហែលចម្ងាយខ្លី',
      'វគ្គ៦ ហែលចម្ងាយវែងបន្ថែម',
      'វគ្គ៧ កែទម្រង់រាងកាយក្នុងទឹក',
      'វគ្គ៨ បត់ជើងនៅចុងអាង',
      'វគ្គ៩ ហាត់ល្បឿនខ្លី',
      'វគ្គ១០ ហាត់កម្លាំងដង្ហើម',
      'វគ្គ១១ សាកល្បងលទ្ធផល',
      'វគ្គ១២ សង្ខេប និងផែនការបន្ត'
    ],
    'Group class': [
      'វគ្គ១ ស្គាល់ក្រុម និងសុវត្ថិភាព',
      'វគ្គ២ ហាត់ដង្ហើមជាក្រុម',
      'វគ្គ៣ ហាត់ទាត់ជើងជាក្រុម',
      'វគ្គ៤ ហាត់ដៃ និងជំហានដូចគ្នា',
      'វគ្គ៥ ហែលប្តូរវេន',
      'វគ្គ៦ ល្បែងក្នុងទឹក',
      'វគ្គ៧ ហែលចម្ងាយជាក្រុម',
      'វគ្គ៨ សង្ខេប និងមើលលទ្ធផល'
    ],
    'Kid package': [
      'វគ្គ១ ស្គាល់ទឹកដោយសប្បាយ',
      'វគ្គ២ ហាត់ផុសពពុះ',
      'វគ្គ៣ ហាត់អណ្ដែតខ្លួន',
      'វគ្គ៤ ហាត់ទាត់ជើង',
      'វគ្គ៥ ហាត់ដៃសាមញ្ញ',
      'វគ្គ៦ ហែលខ្លីៗ',
      'វគ្គ៧ ហែលជាមួយល្បែង',
      'វគ្គ៨ ហែលដោយខ្លួនឯងបន្តិច',
      'វគ្គ៩ ហាត់សុវត្ថិភាពបន្ថែម',
      'វគ្គ១០ ទទួលសរសើរ និងសង្ខេប'
    ],
    'School package': [
      'វគ្គ១ ច្បាប់សុវត្ថិភាពសាលា',
      'វគ្គ២ ស្គាល់ទឹក និងអណ្ដែត',
      'វគ្គ៣ ហាត់ទាត់ជើង',
      'វគ្គ៤ ហាត់ដង្ហើម',
      'វគ្គ៥ ហែលខ្លីជាក្រុម',
      'វគ្គ៦ ហែលចម្ងាយមធ្យម',
      'វគ្គ៧ ហាត់សង្គ្រោះខ្លួនឯង',
      'វគ្គ៨ សាកល្បង និងសង្ខេប'
    ],
    'Fitness package': [
      'វគ្គ១ កំដៅខ្លួន',
      'វគ្គ២ ហែលស្រាលៗ',
      'វគ្គ៣ ហាត់ដង្ហើមជ្រៅ',
      'វគ្គ៤ ហែលល្បឿនមធ្យម',
      'វគ្គ៥ ហែលចម្ងាយបន្ថែម',
      'វគ្គ៦ ហាត់កម្លាំងជើង',
      'វគ្គ៧ ហាត់កម្លាំងដៃ',
      'វគ្គ៨ ហែលសម្រាក',
      'វគ្គ៩ ហែលល្បឿនខ្លី',
      'វគ្គ១០ ហែលចម្ងាយវែង',
      'វគ្គ១១ សាកល្បងកម្លាំង',
      'វគ្គ១២ សង្ខេបលទ្ធផល'
    ],
    'Company package': [
      'វគ្គ១ ស្គាល់ក្រុម និងសុវត្ថិភាព',
      'វគ្គ២ ហែលស្រាលជាក្រុម',
      'វគ្គ៣ ល្បែងក្រុមក្នុងទឹក',
      'វគ្គ៤ ហាត់ទំនុកចិត្តគ្នា',
      'វគ្គ៥ ប្រកួតសប្បាយខ្លី',
      'វគ្គ៦ សង្ខេបក្រុម'
    ],
    'Competition event package': [
      'វគ្គ១ ពិនិត្យសមត្ថភាពដំបូង',
      'វគ្គ២ ហាត់ចាប់ផ្តើមលឿន',
      'វគ្គ៣ ហាត់បត់ជុំចុងអាង',
      'វគ្គ៤ ហាត់ល្បឿនខ្លី',
      'វគ្គ៥ ហាត់ចម្ងាយមធ្យម',
      'វគ្គ៦ ហាត់ដង្ហើមពេលលឿន',
      'វគ្គ៧ សាកល្បងប្រកួត',
      'វគ្គ៨ សង្ខេបមុនថ្ងៃប្រកួត'
    ],
    'Pool party event package': [
      'វគ្គ១ រៀបចំសុវត្ថិភាពកម្មវិធី',
      'វគ្គ២ កំដៅខ្លួន និងស្គាល់ច្បាប់',
      'វគ្គ៣ ល្បែងក្នុងទឹក',
      'វគ្គ៤ ហែលសប្បាយជាក្រុម',
      'វគ្គ៥ ប្រកួតលេងខ្លីៗ',
      'វគ្គ៦ បិទកម្មវិធី និងអរគុណ'
    ],
    'Required materials': [
      'វគ្គ១ សម្ភារៈត្រូវមាន',
      'វគ្គ២ របៀបប្រើសម្ភារៈ',
      'វគ្គ៣ របៀបថែរក្សាសម្ភារៈ',
      'វគ្គ៤ ពិនិត្យសម្ភារៈមុនចូលទឹក'
    ],
    'Train to Swimming coach package': [
      'វគ្គ១ តួនាទីគ្រូល្អ',
      'វគ្គ២ សុវត្ថិភាពក្នុងថ្នាក់',
      'វគ្គ៣ របៀបបង្រៀនកុមារ',
      'វគ្គ៤ របៀបបង្រៀនមនុស្សធំ',
      'វគ្គ៥ រៀបមេរៀនមួយវគ្គ',
      'វគ្គ៦ កែសម្រួលចលនា',
      'វគ្គ៧ របៀបនិយាយជាមួយមាតាបិតា',
      'វគ្គ៨ វាយតម្លៃសិស្ស',
      'វគ្គ៩ គ្រប់គ្រងក្រុមធំ',
      'វគ្គ១០ ដោះស្រាយបញ្ហាក្នុងថ្នាក់',
      'វគ្គ១១ ហាត់បង្រៀនពិត',
      'វគ្គ១២ សង្ខេប និងផែនការបន្ត'
    ],
    'Speaker': [
      'វគ្គ១ និយាយបើកកម្មវិធី',
      'វគ្គ២ និយាយលើកទឹកចិត្ត',
      'វគ្គ៣ និយាយបិទកម្មវិធី',
      'វគ្គ៤ សង្ខេប និងអរគុណ'
    ]
  }

  // ក្រុមលម្អិត video URLs សម្រាប់មេរៀនផ្សេងៗ
  const videoLibrary = {
    breathe: 'https://www.youtube.com/embed/UeGTXGboEeo',
    kick: 'https://www.youtube.com/embed/PjjZzp-ElJs',
    freestyle: 'https://www.youtube.com/embed/Z9KrPlsvnAs',
    backstroke: 'https://www.youtube.com/embed/yGtsukO9x3E',
    breaststroke: 'https://www.youtube.com/embed/BdI9mC0Zzx0',
    butterfly: 'https://www.youtube.com/embed/gp9LCjAh8Pg',
    speedwork: 'https://www.youtube.com/embed/L8KDDimGKXU',
    technique: 'https://www.youtube.com/embed/5vYbYRyPpP8'
  }

  Object.keys(bestProgramByPackage).forEach(pkg => {
    const sessions = bestProgramByPackage[pkg]
    
    // សម្ភារៈប្រកាស មេរៀនផ្សេងៗ
    const packageGuides = {
      'Private class': 'រៀនផ្ទាល់ខ្លួន ឲ្យលឿនបង្វិល',
      'Group class': 'រៀនប្រកម្មចង់នឹង និងលេងក្រុម',
      'Kid package': 'សមស្របសម្រាប់កុមារ ត្រូវមានលេង',
      'School package': 'សម្រាប់សាលា រៀនក្នុងក្រុមធំ',
      'Fitness package': 'ហែលទឹក ហាត់ប្រាណ ដើម្បីសុខភាព',
      'Company package': 'សកម្មភាពក្រុម ឲ្យសប្បាយលេង',
      'Competition event package': 'ត្រៀមប្រកួត ហាត់ល្បឿន',
      'Pool party event package': 'សប្បាយលេង និងសុវត្ថិភាព',
      'Required materials': 'ប្រើសម្ភារៈឱ្យបានត្រឹមត្រូវ',
      'Train to Swimming coach package': 'រៀនគន្លឹះបង្រៀនគ្រូ',
      'Speaker': 'ប្រើលម្អិតលក្ខណ៍នៃកម្មវិធី'
    }

    programTemplates[pkg] = sessions.map((title, index) => {
      let videoUrl = videoLibrary.freestyle
      
      // ជ្រើសរើស video URL ផ្អែកលើប្រធានបទមេរៀន
      if (title.includes('ដង្ហើម')) videoUrl = videoLibrary.breathe
      else if (title.includes('ទាត់')) videoUrl = videoLibrary.kick
      else if (title.includes('Freestyle')) videoUrl = videoLibrary.freestyle
      else if (title.includes('Backstroke')) videoUrl = videoLibrary.backstroke
      else if (title.includes('Breaststroke')) videoUrl = videoLibrary.breaststroke
      else if (title.includes('Butterfly')) videoUrl = videoLibrary.butterfly
      else if (title.includes('ល្បឿន')) videoUrl = videoLibrary.speedwork
      else if (title.includes('ល្បិច')) videoUrl = videoLibrary.technique
      
      return {
        title,
        video: videoUrl,
        message: `${packageGuides[pkg]} - សូមហាត់តាម ${title} ឱ្យទៀងទាត់។`
      }
    })
  })
}

function getSessionMessage(packageName, title, index){
  const guide = packageMessageGuides[packageName] || 'មេរៀននេះជួយអោយរៀនកាន់តែប្រសើរ។'
  const lessonTitle = title ? title.toLowerCase() : 'មេរៀននេះ'
  return `${guide} សូមហាត់ ${lessonTitle} បន្តិចបន្តួចរាល់ថ្ងៃ។ វគ្គទី ${index}។`
}

function renderPackages(){
  const el = document.getElementById('package-list')
  packages.forEach(p=>{
    const card = document.createElement('div')
    card.className='card'
    const info = packageDetails[p] || {}
    const priceCalc = calculatePackagePrice(p)
    const coachAssignment = teamAssignments[p]
    const coachNames = (Array.isArray(coachAssignment) ? coachAssignment : [coachAssignment])
      .filter(id => id)
      .map(id => {
        const coach = teamMembers.find(m => m.id === id)
        return coach ? coach.name : id
      })
      .join(', ')
    
    const priceDisplay = priceCalc.finalPrice > 0 
      ? `$${priceCalc.finalPrice.toFixed(2)}` 
      : (priceCalc.priceRange || 'តម្លៃពិសេស')
    
    const detailsText = priceCalc.note ? `<p style="font-size:0.9em;color:#666"><em>${priceCalc.note}</em></p>` : ''
    
    card.innerHTML = `
      <h4>${packageLabel(p)}</h4>
      <p><strong>សម្រាប់:</strong> ${info.audience || '-'}</p>
      <p><strong>សមស្រប:</strong> ${info.ideal || '-'}</p>
      <p><strong>មាន:</strong> ${info.includes || '-'}</p>
      ${coachNames ? `<p><strong>គ្រូ:</strong> <span style="color:#0077b6;font-weight:bold">${coachNames}</span></p>` : ''}
      <p><strong>តម្លៃ:</strong> <span style="color:#10b981;font-size:1.2em;font-weight:bold">${priceDisplay}</span></p>
      ${detailsText}
    `
    el.appendChild(card)
  })
}

function renderComparisonTable(){
  const body = document.getElementById('comparison-table-body')
  if(!body) return
  body.innerHTML = ''
  packages.forEach(p=>{
    const info = packageDetails[p] || {}
    const priceCalc = calculatePackagePrice(p)
    const priceDisplay = priceCalc.finalPrice > 0 
      ? `$${priceCalc.finalPrice.toFixed(2)}` 
      : (priceCalc.priceRange || 'តម្លៃពិសេស')
    const row = document.createElement('tr')
    row.innerHTML = `
      <td><strong>${packageLabel(p)}</strong></td>
      <td>${info.ideal || '-'}</td>
      <td>${info.includes || '-'}</td>
      <td style="color: #10b981; font-weight: bold; font-size: 1.05em;">${priceDisplay}</td>
    `
    body.appendChild(row)
  })
}

function populatePricePackageSelect(){
  const sel = document.getElementById('price-package-select')
  if(!sel) return
  sel.innerHTML = ''
  packages.forEach(p=>{
    const opt = document.createElement('option')
    opt.value = p
    opt.textContent = `${packageLabel(p)} ($${packagePricing[p] || 0})`
    sel.appendChild(opt)
  })
}

function renderProgramForPackage(name){
  const tb = document.getElementById('session-table')
  tb.innerHTML = ''
  const list = programTemplates[name] || []
  if(list.length === 0){
    const tr = document.createElement('tr')
    tr.innerHTML = `<td colspan="4">មិនទាន់មានមេរៀនសម្រាប់ ${packageLabel(name)}</td>`
    tb.appendChild(tr)
    return
  }
  list.forEach((item,i)=>{
    const tr = document.createElement('tr')
    const itemTitle = typeof item === 'string' ? item : item.title
    const itemVideo = typeof item === 'string' ? '' : item.video
    const itemMessage = typeof item === 'string' ? getSessionMessage(name, itemTitle, i+1) : (item.message || getSessionMessage(name, itemTitle, i+1))
    const watchUrl = getYouTubeWatchUrl(itemVideo)
    tr.innerHTML = `<td>${i+1}</td><td>${itemTitle}</td><td>${itemMessage}</td><td><a href="${watchUrl}" target="_blank" rel="noopener noreferrer">មើល</a></td>`
    tb.appendChild(tr)
  })
}

function getYouTubeWatchUrl(videoUrl){
  const normalizedUrl = String(videoUrl || '').replace('https://www.youtube.com/embed/', 'https://www.youtube-nocookie.com/embed/')
  const videoId = normalizedUrl.includes('/embed/') ? normalizedUrl.split('/embed/')[1].split('?')[0] : ''
  return videoId ? `https://www.youtube.com/watch?v=${videoId}` : normalizedUrl
}

function showSessionVideo(title, videoUrl){
  const section = document.getElementById('video-player-section')
  const titleEl = document.getElementById('video-title')
  const videoIframe = document.getElementById('session-video')
  const descEl = document.getElementById('video-desc')
  const watchUrl = getYouTubeWatchUrl(videoUrl)
  
  titleEl.textContent = title
  videoIframe.src = watchUrl
  if(descEl){
    descEl.innerHTML = `បើមិនចេញក្នុងទំព័រ សូមបើក <a href="${watchUrl}" target="_blank" rel="noopener noreferrer">តំណវីដេអូនេះ</a>។`
  }
  section.style.display = 'block'
  section.scrollIntoView({ behavior: 'smooth' })
}

function populateProgramSelect(){
  const sel = document.getElementById('program-package-select')
  if(!sel) return
  sel.innerHTML = ''
  packages.forEach(p=>{
    const opt = document.createElement('option')
    opt.value = p
    opt.textContent = packageLabel(p)
    sel.appendChild(opt)
  })
  sel.addEventListener('change', e=> renderProgramForPackage(e.target.value))
  // render default
  renderProgramForPackage(sel.value || packages[0])
}

function calcFinance(){
  const price = Number(document.getElementById('in-price').value||0)
  const students = Number(document.getElementById('in-students').value||0)
  const coaches = Number(document.getElementById('in-coaches').value||0)
  const coachSalary = Number(document.getElementById('in-coach-salary').value||0)
  const commission = Number(document.getElementById('in-commission').value||0)
  const poolPercent = Number(document.getElementById('in-pool-percent').value||0)
  const expenses = Number(document.getElementById('in-expenses').value||0)

  const income = price * students
  const coachCost = coaches * coachSalary
  const commissionCost = income * (commission/100)
  const poolCost = income * (poolPercent/100)
  const totalExpenses = coachCost + commissionCost + poolCost + expenses
  const profit = income - totalExpenses
  const profitMargin = income > 0 ? ((profit / income) * 100).toFixed(1) : 0

  const out = document.getElementById('finance-result')
  out.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div>
        <strong>💰 ចំណូល:</strong> $${income.toFixed(2)}<br>
        <strong>👨‍🏫 ថ្លៃគ្រូសរុប:</strong> $${coachCost.toFixed(2)}<br>
        <strong>📊 ភាគរយអ្នកណែនាំ (${commission}%):</strong> $${commissionCost.toFixed(2)}<br>
        <strong>🏊 ភាគរយអាង (${poolPercent}%):</strong> $${poolCost.toFixed(2)}<br>
        <strong>📋 ចំណាយផ្សេងៗ:</strong> $${expenses.toFixed(2)}<br>
      </div>
      <div>
        <strong>📈 ចំណាយសរុប:</strong> $${totalExpenses.toFixed(2)}<br>
        <strong>✅ ការចំណេញប្រហែល:</strong> <span style="color:#10b981; font-size:1.2em; font-weight:bold">$${profit.toFixed(2)}</span><br>
        <strong>📊 ភាគរយចំណេញ:</strong> <span style="color:#10b981; font-weight:bold">${profitMargin}%</span><br>
        <hr style="margin: 8px 0;">
        <strong>ចំណាយក្នុងមួយនាក់:</strong> $${students > 0 ? (totalExpenses/students).toFixed(2) : 0}<br>
        <strong>ចំណូលក្នុងមួយនាក់:</strong> $${students > 0 ? (income/students).toFixed(2) : 0}
      </div>
    </div>
    <hr style="margin: 12px 0;">
    <div style="background:#f0f9ff; padding: 10px; border-radius: 4px; border-left: 4px solid #0077b6; font-size: 0.9em;">
      <strong>💡 ចំណាំ:</strong><br>
      តម្លៃគណនាតាម ថ្លៃគ្រូ + ចំណាយផ្សេងៗ + ភាគរយដៃគូ។<br>
      មើលផ្នែកក្រុមការងារ <a href="#team" style="color:#0077b6">នៅទីនេះ</a>។
    </div>
  `
}

function renderPricingTable(){
  const el = document.getElementById('pricing-breakdown-table')
  if(!el) return
  
  el.innerHTML = '<h3 style="margin-top: 0">📊 តម្លៃកញ្ចប់</h3>'
  
  const table = document.createElement('table')
  table.className = 'table'
  table.innerHTML = `
    <thead>
      <tr>
        <th>កញ្ចប់</th>
        <th>មានអ្វីខ្លះ</th>
        <th>វគ្គ/ម៉ោង</th>
        <th style="background:#e0f7ff; font-weight:bold; color:#10b981">តម្លៃ</th>
      </tr>
    </thead>
    <tbody></tbody>
  `
  
  const tbody = table.querySelector('tbody')
  
  packages.forEach(pkgName => {
    const priceCalc = calculatePackagePrice(pkgName)
    const details = priceCalc.details || {}
    
    let detailsText = ''
    if(details.sessions) {
      detailsText = `${details.sessions} sessions`
      if(details.hours) detailsText += ` / ${details.hours}h`
      if(details.ageGroup) detailsText += ` (${details.ageGroup})`
      if(details.students) detailsText += ` (${details.students} members)`
      if(details.pool) detailsText += ' + pool access'
    } else if(details.priceRange) {
      detailsText = details.priceRange
    } else {
      detailsText = priceCalc.note || 'តាមកម្មវិធី'
    }
    
    const priceDisplay = priceCalc.finalPrice > 0 
      ? `$${priceCalc.finalPrice}`
      : (details.priceRange || 'តម្លៃពិសេស')
    
    const row = document.createElement('tr')
    row.innerHTML = `
      <td><strong>${packageLabel(pkgName)}</strong></td>
      <td>${priceCalc.note}</td>
      <td style="font-size:0.9em">${detailsText}</td>
      <td style="background:#e0f7ff; font-weight:bold; color:#10b981; font-size:1.1em">${priceDisplay}</td>
    `
    tbody.appendChild(row)
  })
  
  el.appendChild(table)
}

function estimatePackagePrice(){
  const packageName = document.getElementById('price-package-select').value
  const students = Number(document.getElementById('price-students').value || 0)
  const sessions = Number(document.getElementById('price-sessions').value || 0)
  const override = Number(document.getElementById('price-override').value || 0)
  const discount = Number(document.getElementById('price-discount').value || 0)
  const unitPrice = override > 0 ? override : (packagePricing[packageName] || 0)
  const subtotal = unitPrice * students * sessions
  const discountAmount = subtotal * (discount / 100)
  const total = subtotal - discountAmount
  const result = document.getElementById('package-price-result')
  result.innerHTML = `
    <strong>កញ្ចប់:</strong> ${packageLabel(packageName)}<br>
    <strong>តម្លៃប្រើ:</strong> $${unitPrice.toFixed(2)}<br>
    <strong>សរុបដើម:</strong> $${subtotal.toFixed(2)}<br>
    <strong>បញ្ចុះតម្លៃ:</strong> -$${discountAmount.toFixed(2)}<br>
    <strong>សរុបចុងក្រោយ:</strong> $${total.toFixed(2)}
  `
}

function showLocalVideoNotice(){
  if(window.location.protocol !== 'file:') return
  if(document.getElementById('local-video-warning')) return

  const main = document.querySelector('main')
  if(!main) return

  const fileName = (window.location.pathname.split('/').pop() || 'index.html')
  const localUrl = `http://localhost:5500/${fileName}#programs`

  const notice = document.createElement('div')
  notice.id = 'local-video-warning'
  notice.className = 'card'
  notice.style.borderLeft = '4px solid #f59e0b'
  notice.style.background = '#fff8e8'
  notice.style.marginBottom = '14px'
  notice.innerHTML = `
    <strong>ចំណាំវីដេអូ:</strong> ពេលបើកជា file វាអាចមើលមិនដំណើរការ។
    សូមបើកតាម localhost:
    <a href="${localUrl}" target="_blank" rel="noopener noreferrer">${localUrl}</a>
  `

  main.insertBefore(notice, main.firstChild)
}

// ===== TEAM WORKS FUNCTIONS =====
function renderTeamRoster(){
  const container = document.getElementById('team-roster-list')
  if(!container) return
  
  container.innerHTML = ''
  teamMembers.filter(m => m.active).forEach(member => {
    const card = document.createElement('div')
    card.className = 'team-card'
    const rating = member.studentRating ? `⭐ ${member.studentRating}` : 'មិនមាន'
    const revenueInfo = member.totalRevenue ? `$${member.totalRevenue}` : '—'
    
    // Salary display
    let salaryDisplay = ''
    if(member.monthlySalary) {
      const empType = member.employment === 'Full-Time' ? t('fullTime') : t('partTime')
      salaryDisplay = `<p><strong>💰 ${t('salary')}:</strong> $${member.monthlySalary}${t('monthPerMonth')} (${empType})</p>`
    } else if(member.hourlyRate && member.hourlyRate > 0) {
      const estimatedMonthly = (member.hourlyRate * member.maxHoursPerWeek * 4.3).toFixed(0)
      const empType = t('partTime')
      salaryDisplay = `<p><strong>💰 ${t('hourly')}:</strong> $${member.hourlyRate}${t('hourPerHour')} (${empType}) ≈ $${estimatedMonthly}${t('estimatedMonth')}</p>`
    }
    
    card.innerHTML = `
      <h4>${member.name}</h4>
      <p class="role">${member.role} <span style="background:#e0f7ff;color:#0077b6;padding:2px 6px;border-radius:3px;font-size:0.85em;font-weight:500">${member.employment === 'Full-Time' ? t('fullTime') : t('partTime')}</span></p>
      <div class="team-info">
        <span class="badge">${t('rating')}: ${rating}</span>
        <span class="badge">${t('revenue')}: ${revenueInfo}</span>
      </div>
      <p><small>${member.certifications.join(', ') || t('certifications')}</small></p>
      <p><small>📧 ${member.email} | 📱 ${member.phone}</small></p>
      <div class="team-specialties">
        <strong>${t('specialties')}:</strong> ${member.specialties.join(', ')}
      </div>
      ${salaryDisplay}
      <p><small style="color:#999">${t('joined')}: ${member.joinDate}</small></p>
    `
    container.appendChild(card)
  })
}

function renderTeamAssignments(){
  const container = document.getElementById('team-assignments-list')
  if(!container) return
  
  container.innerHTML = ''
  packages.forEach(pkgName => {
    const assignment = teamAssignments[pkgName]
    const coachIds = Array.isArray(assignment) ? assignment : [assignment]
    const coachNames = coachIds.map(id => {
      const coach = teamMembers.find(m => m.id === id)
      return coach ? coach.name : id
    }).join(', ')
    
    const row = document.createElement('tr')
    row.innerHTML = `
      <td><strong>${packageLabel(pkgName)}</strong></td>
      <td>${coachNames}</td>
    `
    container.appendChild(row)
  })
}

function renderTeamPerformanceDashboard(){
  const container = document.getElementById('team-performance-stats')
  if(!container) return
  
  container.innerHTML = ''
  const activeCoaches = teamMembers.filter(m => m.active && m.id.startsWith('coach_'))
  
  activeCoaches.forEach(coach => {
    const avgRating = coach.studentRating || 0
    const revenue = coach.totalRevenue || 0
    
    // Determine employment display
    const empBg = coach.employment === 'Full-Time' ? '#e0f7ff' : '#fef3c7'
    const empColor = coach.employment === 'Full-Time' ? '#0077b6' : '#b45309'
    const empText = coach.employment === 'Full-Time' ? t('fullTime') : t('partTime')
    
    const card = document.createElement('div')
    card.className = 'perf-card'
    card.innerHTML = `
      <h4>${coach.name}</h4>
      <span style="background:${empBg};color:${empColor};padding:4px 8px;border-radius:3px;font-size:0.85em;font-weight:500">${empText}</span>
      <div class="perf-metrics">
        <div class="metric">
          <span class="label">${t('rating')}</span>
          <span class="value" style="color:#f59e0b">⭐ ${avgRating}</span>
        </div>
        <div class="metric">
          <span class="label">${t('revenue')}</span>
          <span class="value">$${revenue}</span>
        </div>
      </div>
      <div style="background:#f0f0f0; padding:8px; border-radius:4px; margin-top:8px; font-size:0.9em">
        <strong>${t('status')}:</strong> ${coach.active ? '✅ ' + t('active') : '❌ មិនសកម្ម'} • ${t('joined')}: ${coach.joinDate}
      </div>
    `
    container.appendChild(card)
  })
}

function renderPayrollSummary(){
  const container = document.getElementById('payroll-summary')
  if(!container) return
  
  const fullTimeStaff = teamMembers.filter(m => m.active && m.employment === 'Full-Time' && m.monthlySalary)
  const partTimeStaff = teamMembers.filter(m => m.active && m.employment === 'Part-Time' && m.hourlyRate)
  
  let totalMonthlyCost = 0
  let fullTimeCost = 0
  let partTimeCost = 0
  
  // Full-time costs
  fullTimeStaff.forEach(staff => {
    fullTimeCost += staff.monthlySalary || 0
  })
  
  // Part-time estimated monthly (average 4.3 weeks per month)
  partTimeStaff.forEach(staff => {
    const estimatedMonthly = staff.hourlyRate * staff.maxHoursPerWeek * 4.3
    partTimeCost += estimatedMonthly
  })
  
  totalMonthlyCost = fullTimeCost + partTimeCost
  
  container.innerHTML = `
    <div class="payroll-cards">
      <div class="payroll-card">
        <h4>${t('fullTimeStaff')}</h4>
        <div class="payroll-count">${fullTimeStaff.length} ${t('members')}</div>
        <div class="payroll-cost">$${fullTimeCost.toFixed(0)}<span style="font-size:0.85em">${t('monthPerMonth')}</span></div>
        <p style="margin:8px 0 0;font-size:0.85em">
          ${fullTimeStaff.map(s => s.name).join(', ')}
        </p>
      </div>
      <div class="payroll-card">
        <h4>${t('partTimeStaff')}</h4>
        <div class="payroll-count">${partTimeStaff.length} ${t('members')}</div>
        <div class="payroll-cost">$${partTimeCost.toFixed(0)}<span style="font-size:0.85em">${t('estimatedMonth')}</span></div>
        <p style="margin:8px 0 0;font-size:0.85em">
          ${partTimeStaff.map(s => s.name).join(', ')}
        </p>
      </div>
      <div class="payroll-card total">
        <h4>${t('totalMonthlyCost')}</h4>
        <div class="payroll-total">$${totalMonthlyCost.toFixed(0)}</div>
        <p style="margin:8px 0 0;font-size:0.85em">${t('allTeamSalaries')}</p>
      </div>
    </div>
  `
}

function renderRecommendedTeamPositions(){
  const container = document.getElementById('team-position-recommendations')
  if(!container) return

  container.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          <th>តួនាទី</th>
          <th>ចំនួនណែនាំ</th>
          <th>កម្រិតសំខាន់</th>
          <th>ការងារសំខាន់</th>
        </tr>
      </thead>
      <tbody>
        ${recommendedTeamPositions.map(item => `
          <tr>
            <td><strong>${item.position}</strong></td>
            <td>${item.recommendedCount}</td>
            <td>${item.priority}</td>
            <td>${item.keyFocus}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `
}

function clearTeamRoster(){
  const confirmClear = confirm('លុបសមាជិកកំពុងធ្វើការទាំងអស់មែនទេ?')
  if(!confirmClear) return

  teamMembers.splice(0, teamMembers.length)
  renderTeamRoster()
  renderTeamAssignments()
  renderTeamPerformanceDashboard()
  renderPayrollSummary()
  alert('បានលុបបញ្ជីរួចរាល់')
}

function loadFullTeamList(){
  const restoredMembers = JSON.parse(JSON.stringify(defaultTeamMembers))
  teamMembers.splice(0, teamMembers.length, ...restoredMembers)

  renderTeamRoster()
  renderTeamAssignments()
  renderTeamPerformanceDashboard()
  renderPayrollSummary()
  alert('បានបញ្ចូលបញ្ជីក្រុមពេញ')
}

function renderTeamAnnouncements(){
  const container = document.getElementById('team-announcements')
  if(!container) return
  
  const announcements = [
    { date: '2026-05-01', message: 'សូមស្វាគមន៍! នៅទីនេះអាចមើលការងារក្រុមបាន។', type: 'info' },
    { date: '2026-04-25', message: 'គ្រូ Maria បានពិន្ទុល្អខែនេះ។', type: 'success' },
    { date: '2026-04-20', message: 'មានប្រជុំក្រុមថ្ងៃទី 5 ខែឧសភា ម៉ោង 6 ល្ងាច។', type: 'alert' }
  ]
  
  container.innerHTML = ''
  announcements.forEach(ann => {
    const div = document.createElement('div')
    div.className = `announcement ${ann.type}`
    div.innerHTML = `
      <p><strong>${ann.date}</strong></p>
      <p>${ann.message}</p>
    `
    container.appendChild(div)
  })
}

function switchTeamTab(tabName) {
  const tabs = document.querySelectorAll('.tab-content')
  const btns = document.querySelectorAll('.tab-btn')
  
  tabs.forEach(tab => tab.classList.remove('active'))
  btns.forEach(btn => btn.classList.remove('active'))
  
  const targetTab = document.getElementById(`tab-${tabName}`)
  const targetBtn = document.querySelector(`[onclick="switchTeamTab('${tabName}')"]`)
  
  if(targetTab) targetTab.classList.add('active')
  if(targetBtn) targetBtn.classList.add('active')
}

function showAddCoachForm() {
  const formCard = document.getElementById('team-member-form-card')
  if(!formCard) return
  formCard.style.display = 'block'
  formCard.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function cancelAddTeamMember(){
  const formCard = document.getElementById('team-member-form-card')
  const form = document.getElementById('team-member-form')
  if(form) form.reset()
  if(formCard) formCard.style.display = 'none'
}

function handleAddTeamMemberSubmit(e){
  e.preventDefault()

  const name = (document.getElementById('tm-name')?.value || '').trim()
  const role = (document.getElementById('tm-role')?.value || '').trim()
  const employment = (document.getElementById('tm-employment')?.value || 'Full-Time').trim()
  const salaryValue = Number(document.getElementById('tm-salary')?.value || 0)
  const email = (document.getElementById('tm-email')?.value || '').trim()
  const phone = (document.getElementById('tm-phone')?.value || '').trim()
  const maxHoursPerWeek = Number(document.getElementById('tm-hours')?.value || 40)
  const specialtiesRaw = (document.getElementById('tm-specialties')?.value || '').trim()

  if(!name || !role || !(salaryValue >= 0)) {
    alert('សូមបំពេញ ឈ្មោះ តួនាទី និងប្រាក់ខែអោយត្រឹមត្រូវ')
    return
  }

  const isCoachRole = /coach|instructor/i.test(role)
  const idPrefix = isCoachRole ? 'coach_' : 'staff_'
  const nextIdNumber = teamMembers.filter(m => m.id.startsWith(idPrefix)).length + 1
  const newId = `${idPrefix}${String(nextIdNumber).padStart(3, '0')}`

  const specialties = specialtiesRaw
    ? specialtiesRaw.split(',').map(s => s.trim()).filter(Boolean)
    : ['ជំនួយទូទៅ']

  const newMember = {
    id: newId,
    name,
    role,
    employment,
    email: email || 'not-set@swimxclub.com',
    phone: phone || 'មិនមាន',
    certifications: [],
    specialties,
    maxHoursPerWeek: maxHoursPerWeek > 0 ? maxHoursPerWeek : 40,
    active: true,
    joinDate: new Date().toISOString().slice(0, 10),
    studentRating: isCoachRole ? 0 : undefined,
    sessionsCompleted: isCoachRole ? 0 : undefined,
    totalRevenue: isCoachRole ? 0 : undefined
  }

  if(employment === 'Full-Time') {
    newMember.monthlySalary = salaryValue
    newMember.hourlyRate = 0
  } else {
    newMember.hourlyRate = salaryValue
  }

  teamMembers.push(newMember)

  renderTeamRoster()
  renderTeamAssignments()
  renderTeamPerformanceDashboard()
  renderPayrollSummary()

  alert(`បានបន្ថែម ${name} ទៅក្នុងបញ្ជីក្រុម`)
  cancelAddTeamMember()
}

function exportTeamData() {
  const dataStr = JSON.stringify(teamMembers, null, 2)
  const blob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `team-data-${new Date().toISOString().slice(0,10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// ===== END TEAM WORKS FUNCTIONS =====



document.addEventListener('DOMContentLoaded',()=>{
  applySimpleBilingualText()
  showLocalVideoNotice()
  renderPackages()
  renderComparisonTable()
  renderPricingTable()
  populateProgramSelect()
  populatePricePackageSelect()
  renderTeamRoster()
  renderTeamAssignments()
  renderTeamPerformanceDashboard()
  renderTeamAnnouncements()
  renderPayrollSummary()
  renderRecommendedTeamPositions()
  const teamForm = document.getElementById('team-member-form')
  if(teamForm) teamForm.addEventListener('submit', handleAddTeamMemberSubmit)
  document.getElementById('calc-btn').addEventListener('click',calcFinance)
  const priceBtn = document.getElementById('price-calc-btn')
  if(priceBtn) priceBtn.addEventListener('click',estimatePackagePrice)
})

// Booking handling
const bookings = []
function populatePackageSelect(){
  const sel = document.getElementById('bk-package')
  packages.forEach(p=>{
    const opt = document.createElement('option')
    opt.value = p
    opt.textContent = packageLabel(p)
    sel.appendChild(opt)
  })
}

function renderBookings(){
  const el = document.getElementById('booking-list')
  if(!bookings.length) return el.textContent = 'មិនទាន់មានការកក់'
  el.innerHTML = ''
  bookings.forEach(b=>{
    const d = document.createElement('div')
    d.style.padding='6px'
    d.innerHTML = `<strong>${packageLabel(b.package)}</strong> - ${b.name} (${b.contact})<br>${b.count} នាក់ - ${b.datetime || 'គ្មានថ្ងៃ'}`
    el.appendChild(d)
  })
}

function handleBookingSubmit(e){
  e.preventDefault()
  const b = {
    package: document.getElementById('bk-package').value,
    name: document.getElementById('bk-name').value,
    contact: document.getElementById('bk-contact').value,
    count: document.getElementById('bk-count').value,
    datetime: document.getElementById('bk-datetime').value
  }
  bookings.push(b)
  renderBookings()
  document.getElementById('booking-form').reset()
  alert('បានរក្សាទុកការកក់ក្នុងម៉ាស៊ីននេះ')
}

// Admin schedule editor
function handleAdminAdd(){
  const day = document.getElementById('adm-day').value || 'វគ្គ'
  const start = document.getElementById('adm-start').value || ''
  const end = document.getElementById('adm-end').value || ''
  const tbody = document.getElementById('adm-table-body')
  const tr = document.createElement('tr')
  tr.innerHTML = `<td>${day}</td><td>${start}</td><td>${end}</td>`
  tbody.appendChild(tr)
  document.getElementById('adm-day').value=''
  document.getElementById('adm-start').value=''
  document.getElementById('adm-end').value=''
}

document.addEventListener('DOMContentLoaded',()=>{
  const form = document.getElementById('booking-form')
  if(form){
    populatePackageSelect()
    populateProgramSelect()
    populatePricePackageSelect()
    form.addEventListener('submit',handleBookingSubmit)
  }
  const admBtn = document.getElementById('adm-add')
  if(admBtn) admBtn.addEventListener('click',handleAdminAdd)
})

