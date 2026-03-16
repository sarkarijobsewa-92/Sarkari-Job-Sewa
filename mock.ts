export type Job = {
  id: string;
  title: string;
  organization: string;
  qualification: string;
  startDate: string;
  lastDate: string;
  category: "Latest Jobs" | "Admit Cards" | "Results" | "Answer Keys" | "Syllabus";
  jobCategory: "Bank Jobs" | "Railway Jobs" | "Defence Jobs" | "Police Jobs" | "Teaching Jobs" | "Central Government" | "State Government";
  vacancies: number;
  state: string;
  notificationPdf: string;
  applyLink: string;
  isNew?: boolean;
  isUpdatedToday?: boolean;
  isLastDateSoon?: boolean;
  summary: string;
};

// Generate all jobs on first import
import { generateJobsData } from './jobs-data';

export const MOCK_JOBS: Job[] = [
  // Keep sample jobs

  // Bank Jobs
  {
    id: "rbi-assistant-2026",
    title: "RBI Assistant Recruitment 2026",
    organization: "Reserve Bank of India",
    qualification: "Any Graduate",
    startDate: "2026-03-01",
    lastDate: "2026-03-25",
    category: "Latest Jobs",
    jobCategory: "Bank Jobs",
    vacancies: 650,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isNew: true,
    isUpdatedToday: true,
    summary: "Reserve Bank of India (RBI) has published a notification for the recruitment of Assistant vacancies. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online."
  },
  {
    id: "sbi-po-2026",
    title: "SBI Probationary Officer (PO) Recruitment 2026",
    organization: "State Bank of India",
    qualification: "Any Graduate",
    startDate: "2026-02-15",
    lastDate: "2026-03-30",
    category: "Latest Jobs",
    jobCategory: "Bank Jobs",
    vacancies: 2000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "State Bank of India (SBI) invites applications for Probationary Officer positions across India. Eligible graduates can apply online."
  },
  {
    id: "idbi-jam-2026",
    title: "IDBI Bank Junior Assistant Manager (JAM) 2026",
    organization: "IDBI Bank",
    qualification: "Any Graduate",
    startDate: "2026-02-20",
    lastDate: "2026-03-22",
    category: "Latest Jobs",
    jobCategory: "Bank Jobs",
    vacancies: 500,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isNew: true,
    summary: "IDBI Bank Limited has released a notification for Junior Assistant Manager (JAM) recruitment 2026."
  },
  {
    id: "bank-of-india-po-2026",
    title: "Bank of India Probationary Officer (PO) 2026",
    organization: "Bank of India",
    qualification: "Any Graduate",
    startDate: "2026-03-05",
    lastDate: "2026-04-10",
    category: "Latest Jobs",
    jobCategory: "Bank Jobs",
    vacancies: 1500,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isLastDateSoon: true,
    summary: "Bank of India is recruiting Probationary Officers for various branches across the country."
  },
  {
    id: "cbi-clerk-2026",
    title: "Central Bank of India Clerk Recruitment 2026",
    organization: "Central Bank of India",
    qualification: "12th Pass / Diploma",
    startDate: "2026-03-10",
    lastDate: "2026-04-15",
    category: "Latest Jobs",
    jobCategory: "Bank Jobs",
    vacancies: 3000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "Central Bank of India is recruiting Clerical Staff for various branches."
  },

  // Railway Jobs
  {
    id: "rrb-group-d-2026",
    title: "RRB Group D 22000 Posts 2026",
    organization: "Railway Recruitment Board",
    qualification: "10th Pass / ITI",
    startDate: "2026-03-05",
    lastDate: "2026-04-05",
    category: "Latest Jobs",
    jobCategory: "Railway Jobs",
    vacancies: 22000,
    state: "All India",
    isNew: true,
    notificationPdf: "#",
    applyLink: "#",
    summary: "Railway Recruitment Board (RRB) invites online applications for 22,000 Group D vacancies. This is a great opportunity for 10th pass candidates looking for government jobs."
  },
  {
    id: "rrb-technician-2026",
    title: "RRB Technician Grade III Recruitment 2026",
    organization: "Railway Recruitment Board",
    qualification: "ITI / 12th Pass",
    startDate: "2026-02-25",
    lastDate: "2026-03-28",
    category: "Latest Jobs",
    jobCategory: "Railway Jobs",
    vacancies: 9000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "RRB Technician Grade III positions are open for ITI and 12th pass candidates across all railway zones."
  },
  {
    id: "rrb-ntpc-2026",
    title: "RRB NTPC (Non-Technical Popular Categories) 2026",
    organization: "Railway Recruitment Board",
    qualification: "10th Pass / 12th Pass",
    startDate: "2026-03-01",
    lastDate: "2026-04-01",
    category: "Latest Jobs",
    jobCategory: "Railway Jobs",
    vacancies: 18000,
    state: "All India",
    isNew: true,
    notificationPdf: "#",
    applyLink: "#",
    summary: "RRB NTPC recruitment for junior clerk, traffic assistant, and similar positions."
  },
  {
    id: "ir-apprentice-2026",
    title: "Indian Railways Apprentice Recruitment 2026",
    organization: "Indian Railways",
    qualification: "ITI / 10th Pass",
    startDate: "2026-02-20",
    lastDate: "2026-03-25",
    category: "Latest Jobs",
    jobCategory: "Railway Jobs",
    vacancies: 5000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "Indian Railways is recruiting apprentices for various trades across all zones."
  },

  // Defence Jobs
  {
    id: "indian-army-agniveer-2026",
    title: "Indian Army Agniveer Recruitment Rally 2026",
    organization: "Indian Army",
    qualification: "10th Pass / 12th Pass",
    startDate: "2026-02-15",
    lastDate: "2026-05-30",
    category: "Latest Jobs",
    jobCategory: "Defence Jobs",
    vacancies: 25000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isNew: true,
    summary: "Indian Army is conducting Agniveer recruitment drive across India. This is a golden opportunity for youth to join the Indian Army."
  },
  {
    id: "iaf-agniveer-2026",
    title: "Indian Air Force (IAF) Agniveer Intake 2026",
    organization: "Indian Air Force",
    qualification: "10th Pass / 12th Pass",
    startDate: "2026-03-01",
    lastDate: "2026-04-30",
    category: "Latest Jobs",
    jobCategory: "Defence Jobs",
    vacancies: 8000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "IAF is recruiting Agniveer personnel for various roles in the Indian Air Force."
  },
  {
    id: "navy-agniveer-2026",
    title: "Indian Navy Agniveer Recruitment 2026",
    organization: "Indian Navy",
    qualification: "10th Pass / 12th Pass",
    startDate: "2026-02-20",
    lastDate: "2026-05-15",
    category: "Latest Jobs",
    jobCategory: "Defence Jobs",
    vacancies: 10000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isNew: true,
    summary: "Indian Navy is recruiting Agniveer sailors for various branches of the Navy."
  },
  {
    id: "cdse-exam-2026",
    title: "Combined Defence Services Examination (CDSE) 2026",
    organization: "UPSC",
    qualification: "Graduate",
    startDate: "2026-02-01",
    lastDate: "2026-03-15",
    category: "Latest Jobs",
    jobCategory: "Defence Jobs",
    vacancies: 450,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "UPSC conducts CDSE examination for recruitment to Indian Army, Navy, and Air Force."
  },

  // Police Jobs
  {
    id: "up-police-constable-2026",
    title: "UP Police Constable Recruitment 2026",
    organization: "Uttar Pradesh Police",
    qualification: "12th Pass",
    startDate: "2026-02-10",
    lastDate: "2026-05-05",
    category: "Latest Jobs",
    jobCategory: "Police Jobs",
    vacancies: 15000,
    state: "Uttar Pradesh",
    isNew: true,
    notificationPdf: "#",
    applyLink: "#",
    summary: "Uttar Pradesh Police is conducting recruitment for Constable positions across the state."
  },
  {
    id: "maharashtra-police-bharti-2026",
    title: "Maharashtra Police Bharti (Recruitment) 2026",
    organization: "Maharashtra Police",
    qualification: "12th Pass",
    startDate: "2026-01-15",
    lastDate: "2026-04-28",
    category: "Latest Jobs",
    jobCategory: "Police Jobs",
    vacancies: 17000,
    state: "Maharashtra",
    notificationPdf: "#",
    applyLink: "#",
    summary: "Maharashtra Police Bharti for recruitment of Police Constables and other positions."
  },
  {
    id: "delhi-police-constable-2026",
    title: "Delhi Police Constable Recruitment 2026",
    organization: "Delhi Police",
    qualification: "12th Pass",
    startDate: "2026-02-05",
    lastDate: "2026-04-10",
    category: "Latest Jobs",
    jobCategory: "Police Jobs",
    vacancies: 5000,
    state: "Delhi",
    notificationPdf: "#",
    applyLink: "#",
    summary: "Delhi Police is recruiting Constables for various ranks."
  },
  {
    id: "bpsc-police-2026",
    title: "Bihar Police Recruitment 2026",
    organization: "Bihar Police",
    qualification: "12th Pass / Graduate",
    startDate: "2026-03-01",
    lastDate: "2026-05-01",
    category: "Latest Jobs",
    jobCategory: "Police Jobs",
    vacancies: 8000,
    state: "Bihar",
    isNew: true,
    notificationPdf: "#",
    applyLink: "#",
    summary: "Bihar Police is recruiting Constables and other positions across the state."
  },

  // Teaching Jobs
  {
    id: "dsssb-tgt-2026",
    title: "DSSSB TGT (Trained Graduate Teacher) Recruitment 2026",
    organization: "DSSSB",
    qualification: "B.Ed / Graduate",
    startDate: "2026-02-20",
    lastDate: "2026-05-10",
    category: "Latest Jobs",
    jobCategory: "Teaching Jobs",
    vacancies: 4500,
    state: "Delhi",
    notificationPdf: "#",
    applyLink: "#",
    summary: "Delhi Subordinate Services Selection Board (DSSSB) is recruiting TGT teachers for Delhi government schools."
  },
  {
    id: "kvs-pgt-2026",
    title: "KVS PGT (Post Graduate Teacher) Recruitment 2026",
    organization: "Kendriya Vidyalaya Sangathan",
    qualification: "M.Sc / M.A / PG Degree",
    startDate: "2026-02-15",
    lastDate: "2026-04-15",
    category: "Latest Jobs",
    jobCategory: "Teaching Jobs",
    vacancies: 2000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isNew: true,
    summary: "KVS is recruiting Post Graduate Teachers for various Kendriya Vidyalayas across India."
  },
  {
    id: "nvs-teacher-2026",
    title: "NVS Teacher Recruitment 2026",
    organization: "Navodaya Vidyalaya Samiti",
    qualification: "B.Ed / Graduate",
    startDate: "2026-03-01",
    lastDate: "2026-04-30",
    category: "Latest Jobs",
    jobCategory: "Teaching Jobs",
    vacancies: 3000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "Navodaya Vidyalaya Samiti is recruiting teachers for various positions."
  },
  {
    id: "nta-net-jrf-2026",
    title: "NTA NET JRF June 2026 - University Teaching Jobs",
    organization: "NTA",
    qualification: "M.Sc / M.A",
    startDate: "2026-02-20",
    lastDate: "2026-03-20",
    category: "Latest Jobs",
    jobCategory: "Teaching Jobs",
    vacancies: 5000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "National Test Eligibility Test (NET) for Junior Research Fellowship and Lecturer positions in universities."
  },

  // Central Government Jobs
  {
    id: "ssc-cgl-2026",
    title: "SSC CGL Exam 2026 Online Form",
    organization: "Staff Selection Commission",
    qualification: "Any Graduate",
    startDate: "2026-02-15",
    lastDate: "2026-03-15",
    category: "Latest Jobs",
    jobCategory: "Central Government",
    vacancies: 7500,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isLastDateSoon: true,
    summary: "Staff Selection Commission (SSC) has given a notification for the recruitment of Combined Graduate Level (CGL) Exam 2026."
  },
  {
    id: "upsc-cse-2026",
    title: "UPSC Civil Services Exam 2026",
    organization: "UPSC",
    qualification: "Any Graduate",
    startDate: "2026-02-01",
    lastDate: "2026-03-10",
    category: "Latest Jobs",
    jobCategory: "Central Government",
    vacancies: 1050,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isNew: true,
    summary: "Union Public Service Commission (UPSC) Civil Services Examination for IAS, IPS, IFS, and other central services."
  },
  {
    id: "ssc-je-2026",
    title: "SSC Junior Engineer (JE) Exam 2026",
    organization: "Staff Selection Commission",
    qualification: "Diploma / B.Tech",
    startDate: "2026-02-25",
    lastDate: "2026-03-28",
    category: "Latest Jobs",
    jobCategory: "Central Government",
    vacancies: 3000,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "SSC Junior Engineer recruitment for Civil, Mechanical, Electrical, and Structural Engineering."
  },
  {
    id: "cds-exam-2026",
    title: "Combined Defence Services (CDS) Exam 2026",
    organization: "UPSC",
    qualification: "Graduate",
    startDate: "2026-02-01",
    lastDate: "2026-03-15",
    category: "Latest Jobs",
    jobCategory: "Central Government",
    vacancies: 450,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    summary: "UPSC Combined Defence Services Examination for Indian Army, Navy, and Air Force officers."
  },

  // State Government Jobs
  {
    id: "mmrda-ae-je-2026",
    title: "MMRDA AE & JE Recruitment 2026",
    organization: "MMRDA",
    qualification: "Diploma / Degree (Engg)",
    startDate: "2026-02-20",
    lastDate: "2026-05-12",
    category: "Latest Jobs",
    jobCategory: "State Government",
    vacancies: 235,
    state: "Maharashtra",
    notificationPdf: "#",
    applyLink: "#",
    summary: "Mumbai Metropolitan Regional Development Authority (MMRDA) is recruiting Assistant Engineers and Junior Engineers."
  },
  {
    id: "pssc-punjab-2026",
    title: "Punjab Public Service Commission (PPSC) Recruitment 2026",
    organization: "PPSC",
    qualification: "12th Pass / Graduate",
    startDate: "2026-03-01",
    lastDate: "2026-04-15",
    category: "Latest Jobs",
    jobCategory: "State Government",
    vacancies: 2000,
    state: "Punjab",
    notificationPdf: "#",
    applyLink: "#",
    summary: "Punjab Public Service Commission is recruiting various posts in state government departments."
  },
  {
    id: "tpsc-tripura-2026",
    title: "Tripura Public Service Commission (TPSC) 2026",
    organization: "TPSC",
    qualification: "Graduate",
    startDate: "2026-02-15",
    lastDate: "2026-04-01",
    category: "Latest Jobs",
    jobCategory: "State Government",
    vacancies: 800,
    state: "Tripura",
    notificationPdf: "#",
    applyLink: "#",
    summary: "Tripura Public Service Commission recruitment for state services."
  },
  {
    id: "arunachal-psc-2026",
    title: "Arunachal Pradesh Public Service Commission (APPSC) 2026",
    organization: "APPSC",
    qualification: "Graduate",
    startDate: "2026-03-01",
    lastDate: "2026-04-20",
    category: "Latest Jobs",
    jobCategory: "State Government",
    vacancies: 1200,
    state: "Arunachal Pradesh",
    notificationPdf: "#",
    applyLink: "#",
    isNew: true,
    summary: "Arunachal Pradesh Public Service Commission recruitment for various state posts."
  },

  // Admit Cards
  {
    id: "sbi-cbo-admit-card",
    title: "SBI CBO Admit Card 2026 Out",
    organization: "State Bank of India",
    qualification: "N/A",
    startDate: "2026-01-01",
    lastDate: "2026-03-20",
    category: "Admit Cards",
    jobCategory: "Bank Jobs",
    vacancies: 0,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isUpdatedToday: true,
    summary: "State Bank of India (SBI) has released the online exam admit card for the post of Circle Based Officer (CBO)."
  },

  // Results
  {
    id: "upsc-cse-final-result",
    title: "UPSC CSE Final Result 2026",
    organization: "UPSC",
    qualification: "Graduate",
    startDate: "2025-05-01",
    lastDate: "2026-03-09",
    category: "Results",
    jobCategory: "Central Government",
    vacancies: 1050,
    state: "All India",
    notificationPdf: "#",
    applyLink: "#",
    isNew: true,
    summary: "Union Public Service Commission (UPSC) has declared the final result for Civil Services Examination (CSE) 2026."
  },
].concat(generateJobsData());

export const CATEGORIES = [
  "Bank Jobs",
  "Railway Jobs",
  "Defence Jobs",
  "Police Jobs",
  "Teaching Jobs",
  "Central Government",
  "State Government",
];

export const QUALIFICATIONS = [
  "10th Pass Govt Jobs",
  "12th Pass Govt Jobs",
  "ITI Jobs",
  "Diploma Jobs",
  "Graduate Jobs",
  "Post Graduate Jobs",
];
