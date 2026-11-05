import React from "react";
import coverImage from "../assets/cover.jpg";
import murderMeridianImg from "../assets/murder-meridian.png";
import killerKahaaniyanImg from "../assets/killer-kahaaniyan.png";
const projectsData = [
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    cat: "AI Automation & Off-Page SEO",
    title: "Stonefly.com",
    subtitle: "Enterprise SEO Automation",
    desc: "Automated off-page SEO activities at scale using Accomplish.ai, Claude, and Codex. Executed Web 2.0 submissions, guest posting (GP) campaigns, social media bookmarking, and bulk blog writing with Claude. Generated SEO-optimized content, automated submissions across platforms, and prepared weekly SEO audit reports with keyword tracking.",
    link: "#",
    linkText: "🔒 Internal Project · Stonefly.com",
  },
  {
    img: killerKahaaniyanImg,
    cat: "YouTube & Social Media Marketing",
    title: "Killer Kahaaniyan",
    desc: "Grew a Hindi true-crime storytelling brand to 12.9K+ YouTube subscribers (+1,391 in 28 days) with 119.8K views and 13.7K watch hours in a month, plus 165K+ monthly views across Instagram and Facebook. Designed policy-safe thumbnails and reel covers (no blood or gore, which YouTube restricts in true crime), boosted reels with well-timed Meta ads, edited in Clipchamp, and wrote SEO-optimized titles, descriptions and tags.",
    link: "https://www.youtube.com/@killerkahaaniyan",
    linkText: "▶️ YouTube",
  },
  {
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
    cat: "Outreach & Guest Posting",
    title: "Craft.Camp",
    desc: "Executed outreach campaigns for guest posting and backlink acquisition. Coordinated with publishers and maintained outreach databases for sustained link-building in the DIY/building niche.",
    link: "#",
    linkText: "🔒 Internal Project · Craft.Camp",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    cat: "Backlinks & Outreach",
    title: "SmallHousePlan.com",
    desc: "Conducted outreach for backlink opportunities and guest posting. Managed outreach tracking and supported off-page SEO initiatives for the small house plans and architecture niche.",
    link: "#",
    linkText: "🔒 Internal Project · SmallHousePlan.com",
  },
  {
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    cat: "AI Content Generation",
    title: "Bulk Blog Writing with Claude",
    subtitle: "AI Content Workflow",
    desc: "Leveraged Claude AI to generate 50+ SEO-optimized blog posts per month. Built automated workflows for keyword clustering, content outline generation, full article writing, and internal linking. Reduced content production time by 80% while maintaining quality and search intent alignment.",
    link: "#",
    linkText: "🔒 Internal Project",
  },
];

// Personal projects: built, run and owned end to end by me (not client or employer work).
const personalData = [
  {
    img: coverImage,
    cat: "News Website & Social Media",
    title: "The Peak Content",
    desc: "A digital news and guides brand with its own website and Instagram. The site publishes tech, AI and gaming news in plain language, plus how-to guides, markets and business updates, in English and Hindi. On Instagram it posts fast-paced reels, carousels and bite-sized daily news for maximum reach.",
    link: "https://www.thepeakcontent.in/",
    linkText: "🌐 Website",
    extraLinks: [
      { href: "https://www.instagram.com/the_peak_content/", text: "📸 Instagram" },
    ],
  },
  {
    img: murderMeridianImg,
    icon: "🎬",
    cat: "AI-Automated YouTube Channel",
    title: "Murder Meridian",
    subtitle: "Faceless true-crime channel, run end to end with AI",
    desc: "A faceless true-crime YouTube channel run end to end with AI, from script to upload. It tells real murder cases from around the world as short 3–10 minute stories, without gore and with respect for victims. Claude writes scripts from verified sources, NotebookLM and Google Flow create the video and B-roll, then CapCut edit, Canva thumbnails and daily Shorts. New episodes every Monday, Wednesday and Friday, with companion Instagram and Facebook pages.",
    link: "https://www.youtube.com/@MurderMeridianTV",
    linkText: "▶️ YouTube Channel",
    extraLinks: [],
  },
];

const ProjectCard = ({ project, personal }) => (
  <div className={`project-card ${personal ? "personal" : ""}`}>
    <div className="img-wrap">
      {project.img ? (
        <img src={project.img} alt={project.title} />
      ) : (
        <div className="img-fallback" aria-hidden="true">{project.icon}</div>
      )}
      <div className="img-overlay">
        <span className="cat">{project.cat}</span>
      </div>
    </div>
    <div className="body">
      {personal && <span className="personal-badge">🧑‍💻 Personal Project · My own end-to-end build</span>}
      <h3>{project.title}</h3>
      {project.subtitle && <span className="project-subtitle">{project.subtitle}</span>}
      <p>{project.desc}</p>
      <div className="links">
        {project.link && project.link !== "#" ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkText}</a>
        ) : (
          <span className="internal-badge">{project.linkText}</span>
        )}
        {project.extraLinks && project.extraLinks.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.text}</a>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="section-header">
        <h2>
          <span className="num">03</span> Key Projects
        </h2>
        <div className="line"></div>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>

      <div className="personal-head">
        <h3>Personal Projects</h3>
        <span>Built, run and owned by me, end to end</span>
      </div>
      <div className="projects-grid">
        {personalData.map((project, i) => (
          <ProjectCard project={project} personal key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
