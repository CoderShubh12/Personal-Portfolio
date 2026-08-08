import React from "react";

const skillsData = [
  {
    icon: "🔍",
    title: "SEO",
    tags: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Keyword Research",
      "Competitor Analysis",
      "Link Building",
      "Guest Posting",
      "Outreach",
      "Web 2.0",
      "Social Bookmarking",
    ],
  },
  {
    icon: "⚙️",
    title: "Automation",
    tags: [
      "AI Workflow Automation",
      "Bulk Blog Generation",
      "Web 2.0 Automation",
      "GP Submission Automation",
      "Social Bookmarking Automation",
      "Content Scheduling",
      "Report Automation",
      "Data Scraping",
    ],
  },
  {
    icon: "🤖",
    title: "AI Tools",
    tags: [
      "Claude",
      "Codex",
      "Accomplish.ai",
      "ChatGPT",
      "Grok",
      "Groq",
      "Ollama",
      "Qwen",
      "Canva AI",
    ],
  },
  {
    icon: "📢",
    title: "Marketing & Analytics",
    tags: [
      "Social Media Marketing",
      "YouTube SEO",
      "WordPress",
      "GA4",
      "GSC",
      "GTM",
      "Meta Ads",
      "Google Ads",
    ],
  },
  {
    icon: "🛠️",
    title: "SEO Tools",
    tags: [
      "Ahrefs",
      "SEMrush",
      "Google Sheets",
      "Meta Business Suite",
      "YouTube Studio",
    ],
  },
  {
    icon: "💻",
    title: "Programming",
    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux",
      "REST APIs",
      "GitHub",
    ],
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="section-header">
        <h2>
          <span className="num">02</span> Skills & Tools
        </h2>
        <div className="line"></div>
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <div className="tags">
              {skill.tags.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
