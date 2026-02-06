const config = {
  title: "Sakshi Kumari | AI Enthusiast",
  description: {
    long: "Explore the portfolio of Sakshi Kumari, a Python Developer and B.Tech CS student certified in Machine Learning by IIT Madras and Operating Systems by IIT Kharagpur. I specialize in building logic-driven tools and optimizing data processing workflows.",
    short:
      "Portfolio of Sakshi Kumari: A Python Developer and AI enthusiast solving problems with logic and code.",
  },
  keywords: [
    "Sakshi Kumari",
    "Saki",
    "Python Developer Udaipur",
    "Machine Learning",
    "Data Science Portfolio",
    "IIT Madras Certified",
    "Backend Developer",
    "OpenCV AI",
  ],
  author: "Sakshi Kumari",
  email: "271sakshi.kumari@gmail.com",
  site: "http://localhost:3000", 

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/271sakshi",
    linkedin: "https://linkedin.com/in/sakshisingh271",
    instagram: "https://www.instagram.com/its_saki1?igsh=MTV6bzV4azR5aW4zbA==",
    facebook: "#", 
    github: "https://github.com/SakshiKumari271/",
  },
};
export { config };