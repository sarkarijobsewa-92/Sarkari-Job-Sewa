// Real external links for popular government job portals
export const REAL_JOB_LINKS: Record<string, { applyLink: string; notificationPdf: string }> = {
  // Bank Jobs
  "rbi-assistant-2026": {
    applyLink: "https://www.rbi.org.in/",
    notificationPdf: "https://www.rbi.org.in/"
  },
  "sbi-po-2026": {
    applyLink: "https://www.sbi.co.in/",
    notificationPdf: "https://www.sbi.co.in/"
  },
  "idbi-jam-2026": {
    applyLink: "https://www.idbibank.com/",
    notificationPdf: "https://www.idbibank.com/"
  },
  
  // Railway Jobs
  "rrb-group-d-2026": {
    applyLink: "https://www.rrbonline.com/",
    notificationPdf: "https://www.rrbonline.com/"
  },
  "rrb-technician-2026": {
    applyLink: "https://www.rrbonline.com/",
    notificationPdf: "https://www.rrbonline.com/"
  },
  "rrb-ntpc-2026": {
    applyLink: "https://www.rrbonline.com/",
    notificationPdf: "https://www.rrbonline.com/"
  },
  
  // Defence Jobs
  "indian-army-agniveer-2026": {
    applyLink: "https://joinindianarmy.nic.in/",
    notificationPdf: "https://joinindianarmy.nic.in/"
  },
  "iaf-agniveer-2026": {
    applyLink: "https://afcat.cdac.in/",
    notificationPdf: "https://afcat.cdac.in/"
  },
  "navy-agniveer-2026": {
    applyLink: "https://www.joinindiannavy.gov.in/",
    notificationPdf: "https://www.joinindiannavy.gov.in/"
  },
  
  // SSC & UPSC
  "ssc-cgl-2026": {
    applyLink: "https://ssc.nic.in/",
    notificationPdf: "https://ssc.nic.in/"
  },
  "upsc-cse-2026": {
    applyLink: "https://www.upsconline.nic.in/",
    notificationPdf: "https://www.upsconline.nic.in/"
  },
};

export const getJobLinks = (jobId: string) => {
  return REAL_JOB_LINKS[jobId] || { 
    applyLink: "https://www.india.gov.in/", 
    notificationPdf: "https://www.india.gov.in/" 
  };
};
