import React from 'react';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="section-header">
        <h2><span className="num">04</span> Experience</h2>
        <div className="line"></div>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Digital Marketing Executive</h3>
          <div className="meta">Carina Softlabs Inclusion, Indore · Oct 2025 – Present</div>
          <ul>
            <li>Execute on-page, off-page, and technical SEO strategies.</li>
            <li>Perform keyword research, competitor analysis, and SEO audits.</li>
            <li>Manage guest posting, outreach, Web 2.0, social bookmarking, and link-building.</li>
            <li>Automate SEO workflows using Claude, Codex, and Accomplish.ai.</li>
            <li>Generate SEO-optimized blogs and manage content submissions.</li>
            <li>Create social media creatives, YouTube thumbnails, and reel covers using Canva AI.</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Frontend Developer (React.js)</h3>
          <div className="meta">ThoughtWin IT Solution, Indore · Apr 2022 – Apr 2024</div>
          <ul>
            <li>Developed responsive web applications using React.js.</li>
            <li>Built reusable UI components and integrated REST APIs.</li>
            <li>Implemented Redux for efficient state management.</li>
            <li>Optimized application performance and collaborated with backend & QA teams.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;