import React from "react";

const Hero = () => {
  const scrollToId = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div className="hero-left">
          {/* Small Badge */}
          <div className="badge animate-pulse">
            <span className="dot"></span>
            <span>SEO · AI AUTOMATION · DIGITAL MARKETING</span>
          </div>

          {/* Main Heading */}
          <h1>
            I Don't Just Do <span className="gradient-text">SEO.</span>
            <br />I Build <span className="gradient-text">Growth Systems.</span>
          </h1>

          {/* Role */}
          <p className="subtitle">
            Digital Marketing Executive · SEO Specialist · AI Marketing
            Automation
          </p>

          {/* Description */}
          <p className="desc">
            I combine <strong>SEO strategy</strong>, AI-powered automation, and
            technical expertise to help brands improve their online visibility,
            generate opportunities, and build scalable digital growth.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button
              className="btn btn-primary"
              onClick={() => scrollToId("projects")}
            >
              View My Portfolio
              <span className="arrow-icon">→</span>
            </button>

            <button
              className="btn btn-outline"
              onClick={() => scrollToId("contact")}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* =========================
            RIGHT VISUAL
        ========================== */}
        <div className="hero-visual">
          {/* Background Glow */}
          <div className="hero-glow"></div>

          {/* Main Glass Card */}
          <div className="hero-card glass-panel">
            {/* Card Header */}
            <div className="card-header">
              <div className="card-avatar">SR</div>

              <div className="card-info">
                <h4>Shubham Rai</h4>
                <p>Digital Marketing Executive</p>
              </div>

              <div className="available-dot"></div>
            </div>

            {/* Main Metric */}
            <div className="growth-block">
              <div className="metric-label">DIGITAL GROWTH SYSTEM</div>

              <div className="growth-title">SEO + AI Automation</div>

              <div className="growth-line">
                <span></span>
              </div>
            </div>

            {/* Metrics */}
            <div className="metric-row">
              <div>
                <div className="metric-label">Organic Growth</div>

                <div className="metric-val up">Strategy Driven</div>
              </div>

              <div className="metric-right">
                <div className="metric-label">AI Workflows</div>

                <div className="metric-val">15+ Built</div>
              </div>
            </div>

            <div className="metric-row">
              <div>
                <div className="metric-label">Experience</div>

                <div className="metric-val">1+ Years</div>
              </div>

              <div className="metric-right">
                <div className="metric-label">Expertise</div>

                <div className="metric-val">SEO & Growth</div>
              </div>
            </div>

            {/* Availability */}
            <div className="status-row">
              <span className="status-dot"></span>

              <span>Available for Hire & Projects</span>
            </div>

            {/* Tools */}
            <div className="tool-stack">
              <span className="tool-badge">SEO Strategy</span>

              <span>SEMrush</span>

              <span>Ahrefs</span>

              <span>Claude</span>

              <span>AI Automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          SCROLL HINT
      ========================== */}
      <div className="scroll-hint" onClick={() => scrollToId("projects")}>
        <span>Explore My Work</span>

        <span className="arrow">↓</span>
      </div>
    </section>
  );
};

export default Hero;
