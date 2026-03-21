// Exam questions with category mappings
export const EXAM_QUESTIONS = [
  {
    id: 1,
    question: "What Senior High School (SHS) strand are you currently taking?",
    type: "single",
    answers: [
      { text: "STEM (Science, Technology, Engineering, Mathematics)", category: "STEM" },
      { text: "ABM (Accountancy, Business, and Management)", category: "Business" },
      { text: "HUMSS (Humanities and Social Sciences)", category: "Humanities" },
      { text: "GAS (General Academic Strand)", category: "General" },
      { text: "TVL (Technical-Vocational-Livelihood)", category: "Technical" },
      { text: "Arts and Design Track", category: "Arts" },
      { text: "Sports Track", category: "Sports" },
    ],
  },
  {
    id: 2,
    question: "In which city or location would you prefer to study for college?",
    type: "single",
    answers: [
      { text: "Metro Manila (Manila, Quezon City, Makati)", location: "Manila" },
      { text: "Cebu City", location: "Cebu" },
      { text: "Davao City", location: "Davao" },
      { text: "Iloilo City", location: "Iloilo" },
      { text: "Baguio City", location: "Baguio" },
      { text: "Cagayan de Oro", location: "CDO" },
      { text: "Anywhere in the Philippines", location: "National" },
    ],
  },
  {
    id: 3,
    question: "What are your interests or preferred fields of study?",
    type: "multiple",
    answers: [
      { text: "Science and research", category: "STEM" },
      { text: "Technology and computers", category: "STEM" },
      { text: "Engineering and building/design", category: "Engineering" },
      { text: "Business and entrepreneurship", category: "Business" },
      { text: "Accounting and finance", category: "Business" },
      { text: "Communication, writing, and media", category: "Humanities" },
      { text: "Teaching and education", category: "Education" },
      { text: "Social sciences (psychology, sociology)", category: "Social Sciences" },
      { text: "Health and medicine", category: "Health" },
      { text: "Arts, design, and creativity", category: "Arts" },
      { text: "Law and public service", category: "Law" },
      { text: "Hospitality and tourism", category: "Hospitality" },
      { text: "Sports and physical education", category: "Sports" },
    ],
  },
  {
    id: 4,
    question: "What are your hobbies or personal interests?",
    type: "multiple",
    answers: [
      { text: "Reading books or writing", category: "Humanities" },
      { text: "Drawing, painting, or digital art", category: "Arts" },
      { text: "Playing musical instruments / singing", category: "Arts" },
      { text: "Watching movies or creating videos", category: "Media" },
      { text: "Gaming (online or offline)", category: "Technology" },
      { text: "Coding / programming / tech-related activities", category: "Technology" },
      { text: "Sports (basketball, volleyball, running)", category: "Sports" },
      { text: "Fitness / working out", category: "Sports" },
      { text: "Cooking or baking", category: "Hospitality" },
      { text: "Traveling / exploring new places", category: "Hospitality" },
      { text: "Photography or editing", category: "Arts" },
      { text: "Socializing / joining organizations or clubs", category: "Social" },
      { text: "Volunteering / helping others", category: "Social Sciences" },
      { text: "Business-related activities (selling online)", category: "Business" },
    ],
  },
];

// College programs mapped by category with specific degree types
export const COLLEGE_PROGRAMS: Record<string, string[]> = {
  STEM: [
    "BS Computer Science",
    "BS Information Technology",
    "BS Civil Engineering",
    "BS Electrical Engineering",
    "BS Mechanical Engineering",
    "BS Electronics Engineering",
    "BS Chemical Engineering",
    "BS Biology",
    "BS Chemistry",
    "BS Physics",
    "BS Mathematics",
    "BS Statistics",
  ],
  Engineering: [
    "BS Civil Engineering",
    "BS Electrical Engineering",
    "BS Mechanical Engineering",
    "BS Electronics Engineering",
    "BS Chemical Engineering",
    "BS Aeronautical Engineering",
    "BS Mining Engineering",
    "BS Environmental Engineering",
  ],
  Business: [
    "BS Business Administration",
    "BS Commerce",
    "BS Accountancy",
    "BS Finance",
    "BS Economics",
    "BS Marketing Management",
    "BS Entrepreneurship",
    "BS International Business",
    "BS Management",
    "BS Business Analytics",
  ],
  Humanities: [
    "BA English Language",
    "BA English Literature",
    "BA History",
    "BA Philosophy",
    "BA Asian Studies",
    "BA Political Science",
    "BA Geography",
    "BA Anthropology",
  ],
  Education: [
    "BS Education",
    "BEd Secondary Education",
    "BEd Elementary Education",
    "BEd Special Education",
    "BEd Physical Education",
    "BEd Music Education",
  ],
  Health: [
    "BS Nursing",
    "BS Medicine (Doctor of Medicine)",
    "BS Pharmacy",
    "BS Physical Therapy",
    "BS Medical Technology",
    "BS Public Health",
    "BS Nutrition and Dietetics",
    "BS Health Sciences",
  ],
  Arts: [
    "BFA Fine Arts",
    "BFA Graphic Design",
    "BFA Industrial Design",
    "BA Music",
    "BA Theater Arts",
    "BFA Film Production",
    "BA Visual Communication",
    "BFA Digital Arts",
  ],
  Technology: [
    "BS Computer Science",
    "BS Information Technology",
    "BS Information Systems",
    "BS Computer Engineering",
    "BS Cybersecurity",
    "BS Data Science",
    "BS Software Engineering",
  ],
  "Social Sciences": [
    "BA Psychology",
    "BA Sociology",
    "BS Social Work",
    "BA Anthropology",
    "BA Criminology",
    "BA Public Administration",
  ],
  Law: [
    "BS Law (Juris Doctor)",
    "BA Political Science with Law specialization",
  ],
  Hospitality: [
    "BS Hotel and Restaurant Management",
    "BS Culinary Arts",
    "BS Tourism Management",
    "BS Hospitality Management",
    "BS Food Technology",
  ],
  Sports: [
    "BS Physical Education",
    "BS Sports Science",
    "BS Sports Management",
    "BS Athletic Training",
  ],
  Media: [
    "BA Communications",
    "BA Journalism",
    "BA Broadcasting",
    "BA Film and Video Production",
    "BA Advertising",
    "BA Public Relations",
  ],
  Technical: [
    "BS Information Technology",
    "BS Electronics and Communications Engineering",
    "BS Automotive Technology",
    "BS Construction Technology",
    "Diploma in Culinary Arts",
    "Diploma in Fashion Design",
  ],
  General: [
    "BS General Science",
    "BA General Studies",
    "BS Nursing",
    "BS Business Administration",
  ],
  Arts: [
    "BFA Fine Arts",
    "BA Music",
    "BA Visual Arts",
    "BFA Graphic Design",
  ],
};

// Philippine schools by location
export const PHILIPPINES_SCHOOLS: Record<
  string,
  { name: string; programs: string[] }[]
> = {
  Manila: [
    {
      name: "University of the Philippines (UP Diliman)",
      programs: [
        "BS Computer Science",
        "BS Civil Engineering",
        "BS Medicine",
        "BA English Language",
        "BEd Secondary Education",
      ],
    },
    {
      name: "De La Salle University (DLSU)",
      programs: [
        "BS Computer Science",
        "BS Business Administration",
        "BS Electrical Engineering",
        "BA Communications",
      ],
    },
    {
      name: "Ateneo de Manila University",
      programs: [
        "BS Computer Science",
        "BS Business Administration",
        "BA Psychology",
        "BEd Secondary Education",
      ],
    },
    {
      name: "University of Santo Tomas (UST)",
      programs: [
        "BS Medicine",
        "BS Nursing",
        "BS Business Administration",
        "BA History",
      ],
    },
    {
      name: "Polytechnic University of the Philippines (PUP)",
      programs: [
        "BS Information Technology",
        "BS Electronics Engineering",
        "BS Business Administration",
      ],
    },
    {
      name: "Philippine Normal University (PNU)",
      programs: [
        "BEd Elementary Education",
        "BEd Secondary Education",
        "BS Education",
      ],
    },
  ],
  Cebu: [
    {
      name: "University of the Philippines - Cebu",
      programs: [
        "BS Computer Science",
        "BS Business Administration",
        "BA English Language",
      ],
    },
    {
      name: "Cebu Institute of Technology (CIT)",
      programs: [
        "BS Information Technology",
        "BS Civil Engineering",
        "BS Business Administration",
      ],
    },
    {
      name: "University of San Carlos",
      programs: [
        "BS Engineering",
        "BS Business Administration",
        "BEd Secondary Education",
      ],
    },
    {
      name: "Southwestern University",
      programs: [
        "BS Information Technology",
        "BS Nursing",
        "BS Business Administration",
      ],
    },
  ],
  Davao: [
    {
      name: "University of the Philippines - Mindanao",
      programs: [
        "BS Computer Science",
        "BS Engineering",
        "BS Business Administration",
      ],
    },
    {
      name: "Mindanao State University",
      programs: [
        "BS Engineering",
        "BS Business Administration",
        "BS Agriculture",
      ],
    },
    {
      name: "Davao Medical School Foundation",
      programs: ["BS Medicine", "BS Nursing"],
    },
    {
      name: "Ateneo de Davao University",
      programs: [
        "BS Business Administration",
        "BA Psychology",
        "BS Nursing",
      ],
    },
  ],
  Iloilo: [
    {
      name: "University of the Philippines - Iloilo",
      programs: [
        "BS Computer Science",
        "BS Engineering",
        "BA History",
      ],
    },
    {
      name: "Central Philippine University",
      programs: [
        "BS Engineering",
        "BS Education",
        "BS Business Administration",
      ],
    },
    {
      name: "University of Iloilo",
      programs: [
        "BS Nursing",
        "BS Business Administration",
        "BEd Secondary Education",
      ],
    },
  ],
  Baguio: [
    {
      name: "University of the Philippines - Baguio",
      programs: [
        "BS Computer Science",
        "BS Engineering",
        "BA Social Sciences",
      ],
    },
    {
      name: "Saint Louis University",
      programs: [
        "BS Engineering",
        "BS Business Administration",
        "BS Education",
      ],
    },
    {
      name: "Benguet State University",
      programs: [
        "BS Engineering",
        "BS Agriculture",
        "BS Business Administration",
      ],
    },
  ],
  CDO: [
    {
      name: "Mindanao University of Science and Technology",
      programs: [
        "BS Engineering",
        "BS Computer Science",
        "BS Business Administration",
      ],
    },
    {
      name: "Xavier University",
      programs: [
        "BS Engineering",
        "BS Business Administration",
        "BS Education",
      ],
    },
  ],
  National: [
    {
      name: "University of the Philippines (UP System - All Campuses)",
      programs: [
        "BS Computer Science",
        "BS Engineering",
        "BS Medicine",
        "BA English Language",
      ],
    },
    {
      name: "Ateneo de Manila University & Network",
      programs: [
        "BS Business Administration",
        "BS Computer Science",
        "BA Psychology",
      ],
    },
    {
      name: "De La Salle University & Network",
      programs: [
        "BS Business Administration",
        "BS Engineering",
        "BS Computer Science",
      ],
    },
    {
      name: "University of Santo Tomas",
      programs: ["BS Medicine", "BS Nursing", "BS Business Administration"],
    },
  ],
};

// Scholarships available in the Philippines
export const SCHOLARSHIPS = [
  {
    name: "DOST Merit Scholarship Program",
    description: "Full scholarship for science, technology, engineering, and mathematics courses",
    requirements: "Top academic performer, pass qualifying exam, STEM strand",
    categories: ["STEM", "Engineering", "Technology"],
  },
  {
    name: "UP President's Scholarship",
    description: "Merit-based scholarship for all programs in UP system",
    requirements: "High UPCAT scores, excellent academic record",
    categories: ["STEM", "Engineering", "Business", "Humanities", "Education"],
  },
  {
    name: "DLSU Lasallian Merit Scholarship",
    description: "For outstanding students across all programs",
    requirements: "Academic excellence, character and leadership demonstrated",
    categories: ["STEM", "Engineering", "Business", "Humanities", "Education", "Arts"],
  },
  {
    name: "Ateneo Scholarship Program",
    description: "Merit and need-based scholarships for deserving students",
    requirements: "Academic achievement, leadership potential, financial need",
    categories: ["STEM", "Business", "Humanities", "Education", "Arts"],
  },
  {
    name: "UST Merit Scholarship",
    description: "Full tuition scholarship for academic achievers",
    requirements: "High grades in high school, entrance exam scores",
    categories: ["Health", "Business", "Humanities", "Education"],
  },
  {
    name: "PETIC Scholarship (Private Education Student Financial Assistance)",
    description: "Tuition grant for deserving students in private universities",
    requirements: "Pass means test, maintain good academic standing",
    categories: ["STEM", "Engineering", "Business", "Humanities", "Education", "Health", "Arts"],
  },
  {
    name: "Commission on Higher Education (CHED) Scholarship",
    description: "Tuition fee subsidy for Filipino students in HEIs",
    requirements: "Pass academic and financial qualification",
    categories: ["STEM", "Engineering", "Business", "Humanities", "Education", "Health"],
  },
  {
    name: "Technical Education and Skills Development Authority (TESDA) Scholarship",
    description: "For technical and vocational courses leading to industry certifications",
    requirements: "High school graduate, interest in technical field",
    categories: ["Technical", "Hospitality", "Arts"],
  },
  {
    name: "Bureau of Internal Revenue (BIR) Scholarship Program",
    description: "For accounting, finance, and business-related courses",
    requirements: "ABM strand student, good academic grades",
    categories: ["Business"],
  },
  {
    name: "Philippine Nurses Association (PNA) Scholarship",
    description: "For aspiring nurses pursuing BS Nursing programs",
    requirements: "Good health, academic performance in science subjects",
    categories: ["Health"],
  },
  {
    name: "Commission on Elections (COMELEC) Scholarship",
    description: "For education students pursuing teaching careers",
    requirements: "Interest in education and public service, academic competence",
    categories: ["Education"],
  },
  {
    name: "Department of Tourism Scholarship",
    description: "For hotel and restaurant management and tourism studies",
    requirements: "Interest in hospitality industry, good grades",
    categories: ["Hospitality"],
  },
  {
    name: "National Science Foundation Scholarship",
    description: "For students pursuing graduate studies in science and engineering",
    requirements: "BS degree holders in STEM fields, research interest",
    categories: ["STEM", "Engineering", "Technology"],
  },
  {
    name: "Cultural Center of the Philippines (CCP) Arts Scholarship",
    description: "For students pursuing fine arts, music, and performing arts",
    requirements: "Demonstrated artistic talent, portfolio submission",
    categories: ["Arts", "Media"],
  },
  {
    name: "Sports Development Foundation (SDF) Scholarship",
    description: "For student-athletes pursuing sports science or physical education",
    requirements: "Athletic achievement, academic standing",
    categories: ["Sports"],
  },
];
