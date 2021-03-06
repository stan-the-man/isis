var courses = {
    "MATH 9":  {   name: "MATH 9",
                    description: "Precalculus",
                    subject: "mathsci",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "MATH 11":  {   name: "MATH 11",
                    description: "Calculus 1",
                    subject: "mathsci",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "MATH 12":  {   name: "MATH 12",
                    description: "Calculus 2",
                    subject: "mathsci",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "MATH 13":  {   name: "MATH 13",
                    description: "Calculus 3",
                    subject: "mathsci",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "MATH 14":  {   name: "MATH 14",
                    description: "Calculus 4",
                    subject: "mathsci",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "MATH 53":  {   name: "MATH 53",
                    description: "Linear Algebra",
                    subject: "mathsci",
                    hasLab: false,
                    COEN: true,
                    WDE: false,
                    honors: false},
    "AMTH 106": {   name: "AMTH 106",
                    description: "Differential Equations",
                    subject: "mathsci",
                    hasLab: false,
                    COEN: true,
                    WDE: false,
                    honors: false},
    "AMTH 108": {   name: "AMTH 108",
                    description: "Statistics",
                    subject: "mathsci",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    honors: true,
                    honorsName: "AMTH 108H"},
    "CHEM 11":  {   name: "CHEM 11",
                    description: "Introductory Chemistry",
                    subject: "mathsci",
                    hasLab: true,
                    COEN: true,
                    WDE: false,
                    honors: true,
                    honorsName: "CHEM 11H"},
    "BIOL 18":  {   name: "BIOL 18",
                    description: "Introduction to Physiology",
                    subject: "mathsci",
                    hasLab: true,
                    COEN: true,
                    WDE: false,
                    honors: false},
    "PHYS 31":  {   name: "PHYS 31",
                    description: "Physics 1",
                    subject: "mathsci",
                    hasLab: true,
                    COEN: true,
                    WDE: false,
                    honors: false},
    "PHYS 32":  {   name: "PHYS 32",
                    description: "Physics 2",
                    subject: "mathsci",
                    hasLab: true,
                    COEN: true,
                    WDE: false,
                    honors: false},
    "PHYS 33":  {   name: "PHYS 33",
                    description: "Physics 3",
                    subject: "mathsci",
                    hasLab: true,
                    COEN: true,
                    WDE: false,
                    honors: false},
    "Natural Science":  {   name: "Natural Science",
                    description: "",
                    subject: "mathsci",
                    hasLab: true,
                    COEN: false,
                    WDE: true,
                    quarter: "Fall",
                    honors: false},
    "COEN 10":  {   name: "COEN 10",
                    description: "Introduction to Programming",
                    subject: "engineering",
                    hasLab: true,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "COEN 11":  {   name: "COEN 11",
                    description: "Advanced Programming",
                    subject: "engineering",
                    hasLab: true,
                    COEN: true,
                    WDE: true,
                    quarter: "Winter",
                    honors: false},
    "COEN 12":  {   name: "COEN 12",
                    description: "Data Structures",
                    subject: "engineering",
                    hasLab: true,
                    COEN: true,
                    WDE: true,
                    quarter: "Spring",
                    honors: false},
    "CTW 1":    {   name: "ENGL 1A",
                    description: "English 1",
                    subject: "core",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    quarter: "Fall",
                    honors: true,
                    honorsName: "ENGL 1H"},
    "CTW 2":    {   name: "ENGL 2A",
                    description: "English 2",
                    subject: "core",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    quarter: "Winter",
                    honors: true,
                    honorsName: "ENGL 2H"},
    "C&I 1":    {   name: "C&I 1",
                    description: "Cultures and Ideas 1",
                    subject: "core",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "C&I 2":    {   name: "C&I 2",
                    description: "Cultures and Ideas 2",
                    subject: "core",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "COEN 19":  {   name: "COEN 19",
                    description: "Discrete Math",
                    subject: "mathsci",
                    hasLab: false,
                    COEN: true,
                    WDE: false,
                    quarter: "Spring",
                    honors: false},
    "Core":     {   name: "University Core",
                    description: "",
                    subject: "core",
                    hasLab: false,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "ENGR 1":   {   name: "ENGR 1",
                    description: "Introduction to Engineering",
                    subject: "engineering",
                    hasLab: true,
                    COEN: true,
                    WDE: true,
                    honors: false},
    "COEN 21":  {   name: "COEN 21",
                    description: "Logic Design",
                    subject: "engineering",
                    hasLab: true,
                    COEN: true,
                    WDE: false,
                    honors: false},
    "COEN 20":  {   name: "COEN 20",
                    description: "Embedded Systems",
                    subject: "engineering",
                    hasLab: true,
                    COEN: true,
                    WDE: false,
                    honors: false},
    "COMM 2":  {   name: "COMM 2",
                    description: "Communications 2",
                    subject: "comm",
                    hasLab: false,
                    COEN: false,
                    WDE: true,
                    honors: false},
    "COMM 12":  {   name: "COMM 12",
                    description: "Communications 12",
                    subject: "comm",
                    hasLab: false,
                    COEN: false,
                    WDE: true,
                    honors: false},
    "LEAD 1":   {   name: "LEAD 1",
                    description: "LEAD Seminar 1",
                    subject: "lead",
                    hasLab: false,
                    COEN: false,
                    WDE: false,
                    honors: false},
    "LEAD 2":   {   name: "LEAD 2",
                    description: "LEAD Seminar 2",
                    subject: "lead",
                    hasLab: false,
                    COEN: false,
                    WDE: false,
                    honors: false},
};
