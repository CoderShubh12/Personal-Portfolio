import React from "react";

const projectsData = [
  {
    img: "https://kimi-web-img.kimi.ai/img/www.shutterstock.com/66f6b8bb4e90a85369936e1109429db2edd3aaa9.jpg",
    cat: "AI Automation & Off-Page SEO",
    title: "Enterprise SEO Automation",
    desc: "Automated off-page SEO activities at scale using Accomplish.ai, Claude, and Codex. Executed Web 2.0 submissions, guest posting (GP) campaigns, social media bookmarking, and bulk blog writing with Claude. Generated SEO-optimized content, automated submissions across platforms, and prepared weekly SEO audit reports with keyword tracking.",
    link: "#",
    linkText: "🔒 Internal Project",
  },
  {
    img: "https://kimi-web-img.kimi.ai/img/img.magnific.com/c5406168cfad5e880d91f51b22fd7ea95617db8a.jpg",
    cat: "YouTube & Social Media Marketing",
    title: "Killer Kahaaniyan",
    desc: "Managed YouTube and social media content for a storytelling-focused channel. Designed engaging YouTube thumbnails and Instagram/Facebook reel covers using Canva. Edited and optimized short-form and video content using Clipchamp, while creating SEO-optimized titles, descriptions, and tags to improve discoverability and engagement.",
    link: "https://www.youtube.com/@killerkahaaniyan",
    linkText: "▶️ YouTube",
  },

  {
    img: "https://kimi-web-img.kimi.ai/img/denoutdoors.com/0923050a2a59c0291526ccf13e6cf9b8a19378c3.jpg",
    cat: "Outreach & Guest Posting",
    title: "Craft.Camp",
    desc: "Executed outreach campaigns for guest posting and backlink acquisition. Coordinated with publishers and maintained outreach databases for sustained link-building in the DIY/building niche.",
    link: "https://craft.camp/",
    linkText: "🔗 Visit Site",
  },
  {
    img: "https://kimi-web-img.kimi.ai/img/www.truoba.com/4ed7719e055ddd116fea9b3b3c24872dbdcad8df.jpeg",
    cat: "Backlinks & Outreach",
    title: "SmallHousePlan.com",
    desc: "Conducted outreach for backlink opportunities and guest posting. Managed outreach tracking and supported off-page SEO initiatives for the small house plans and architecture niche.",
    link: "https://smallhouseplan.com/",
    linkText: "🔗 Visit Site",
  },
  {
    img: "https://kimi-web-img.kimi.ai/img/www.shutterstock.com/5f3fd669b3f161aaaa71cebe86ffab24077749b9.jpg",
    cat: "AI Content Generation",
    title: "Bulk Blog Writing with Claude",
    desc: "Leveraged Claude AI to generate 50+ SEO-optimized blog posts per month. Built automated workflows for keyword clustering, content outline generation, full article writing, and internal linking. Reduced content production time by 80% while maintaining quality and search intent alignment.",
    link: "#",
    linkText: "🔒 Internal Project",
  },
];

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
          <div className="project-card" key={i}>
            <div className="img-wrap">
              <img src={project.img} alt={project.title} />
              <div className="img-overlay">
                <span className="cat">{project.cat}</span>
              </div>
            </div>
            <div className="body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
