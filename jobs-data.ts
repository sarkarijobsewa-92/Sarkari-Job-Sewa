import { Job } from "./mock";

// Generate comprehensive job data for all states and categories
export const generateJobsData = (): Job[] => {
  const jobs: Job[] = [];
  let id = 1;

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
  ];

  const bankJobs = [
    "SBI PO", "SBI Clerk", "RBI Assistant", "IDBI PO", "BOI PO",
    "CBI Clerk", "PNB PO", "IOB PO", "Union Bank PO", "Canara Bank PO",
    "Dena Bank PO", "Syndicate Bank PO", "Indian Bank PO", "Federal Bank PO", "ICICI Bank PO",
    "HDFC Bank PO", "Axis Bank PO", "Kotak Mahindra PO", "IDBI Specialist Officer"
  ];

  const railwayJobs = [
    "RRB Group D", "RRB NTPC", "RRB Technician", "RRB JE", "RRB ALP",
    "Railway Apprentice", "Railway Clerk", "Railway TC", "Railway Guard", "Railway ASM",
    "Railway Station Master", "Railway Porter", "Railway Gatekeeper"
  ];

  const defenceJobs = [
    "Army Agniveer", "Navy Agniveer", "IAF Agniveer", "CDSE", "SSB Interview",
    "CDS Exam", "NDA Exam", "Indian Coast Guard", "Territorial Army"
  ];

  const policeJobs = [
    "Police Constable", "Police ASI", "Police SI", "Police Inspector",
    "Railway Police", "CISF Constable", "BSF Constable", "CRPF Constable",
    "Border Security", "Special Armed Force"
  ];

  const teachingJobs = [
    "PGT", "TGT", "PRT", "Lecturer", "Assistant Professor", "Professor",
    "JRF", "Teacher", "School Principal", "University Staff"
  ];

  const govtJobs = [
    "SSC CGL", "SSC CHSL", "SSC JE", "SSC Stenographer", "UPSC CSE",
    "GATE Exam", "NABARD", "SEBI", "Income Tax Officer", "Customs Officer",
    "GST Officer", "Forest Officer", "IFS", "IAS", "IPS"
  ];

  // Helper function to create jobs
  const createJobs = (
    baseTitle: string,
    category: Job["category"],
    jobCategory: Job["jobCategory"],
    count: number,
    stateFilter?: string
  ) => {
    for (let i = 0; i < count; i++) {
      const state = stateFilter || states[Math.floor(Math.random() * states.length)];
      const isNew = Math.random() > 0.8;
      const isUpdated = Math.random() > 0.85;
      const isLastDateSoon = Math.random() > 0.9;

      jobs.push({
        id: `job-${id++}`,
        title: `${baseTitle} ${i > 0 ? `(Batch ${i + 1})` : ""} - ${new Date().getFullYear()}`,
        organization: `${["Ministry", "Department", "Government", "Public", "National"][Math.floor(Math.random() * 5)]} ${["of India", "Recruitment Board", "Services", "Corporation"][Math.floor(Math.random() * 4)]}`,
        qualification: [
          "10th Pass",
          "12th Pass",
          "Diploma",
          "Any Graduate",
          "B.Tech / B.E",
          "M.Tech",
          "M.Sc",
          "B.Com",
          "M.A"
        ][Math.floor(Math.random() * 9)],
        startDate: new Date(2026, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
        lastDate: new Date(2026, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
        category,
        jobCategory,
        vacancies: Math.floor(Math.random() * 5000) + 100,
        state,
        notificationPdf: "#",
        applyLink: "#",
        isNew,
        isUpdatedToday: isUpdated,
        isLastDateSoon,
        summary: `This is a recruitment notification for ${baseTitle}. Eligible candidates matching the qualification criteria can apply online through the official website.`
      });
    }
  };

  // Generate jobs for each category with high volume
  bankJobs.forEach(job => createJobs(job, "Latest Jobs", "Bank Jobs", 15)); // 19 * 15 = ~285
  railwayJobs.forEach(job => createJobs(job, "Latest Jobs", "Railway Jobs", 20)); // 13 * 20 = ~260
  defenceJobs.forEach(job => createJobs(job, "Latest Jobs", "Defence Jobs", 25)); // 9 * 25 = ~225
  policeJobs.forEach(job => createJobs(job, "Latest Jobs", "Police Jobs", 25)); // 10 * 25 = ~250
  teachingJobs.forEach(job => createJobs(job, "Latest Jobs", "Teaching Jobs", 25)); // 10 * 25 = ~250
  govtJobs.forEach(job => createJobs(job, "Latest Jobs", "Central Government", 20)); // 15 * 20 = ~300

  // State government jobs
  states.forEach(state => {
    createJobs(`${state} Government Job`, "Latest Jobs", "State Government", 15, state); // 29 * 15 = ~435
  });

  // Add admit cards and results
  for (let i = 0; i < 200; i++) {
    jobs.push({
      id: `admit-${i}`,
      title: `Admit Card Released - ${bankJobs[i % bankJobs.length]} 2026`,
      organization: "Recruitment Board",
      qualification: "N/A",
      startDate: "2026-01-01",
      lastDate: new Date(2026, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      category: "Admit Cards",
      jobCategory: "Bank Jobs",
      vacancies: 0,
      state: states[Math.floor(Math.random() * states.length)],
      notificationPdf: "#",
      applyLink: "#",
      isUpdatedToday: Math.random() > 0.5,
      summary: "Admit card has been released. Candidates can download their hall ticket from the official website."
    });
  }

  // Add results
  for (let i = 0; i < 200; i++) {
    jobs.push({
      id: `result-${i}`,
      title: `Result Declared - ${railwayJobs[i % railwayJobs.length]} 2026`,
      organization: "Recruitment Board",
      qualification: "N/A",
      startDate: "2025-05-01",
      lastDate: new Date(2026, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
      category: "Results",
      jobCategory: "Railway Jobs",
      vacancies: 0,
      state: states[Math.floor(Math.random() * states.length)],
      notificationPdf: "#",
      applyLink: "#",
      isNew: Math.random() > 0.6,
      summary: "Result has been declared. Check the official website for the list of selected candidates."
    });
  }

  return jobs;
};

export const STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];
