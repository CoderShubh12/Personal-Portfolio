import React from "react";
import profileImg from "../assets/profile.png";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* Background Glow */}
      <div className="about-bg-glow"></div>

      <div className="about-container">
        {/* =================================
            LEFT - PROFILE VISUAL
        ================================= */}

        <div className="about-visual">
          <div className="about-image-wrapper">
            <div className="image-glow"></div>

            {/* Profile Image */}
            <div className="image-frame">
              <img
                src={profileImg}
                alt="Shubham Rai - Digital Marketing Executive and SEO Specialist"
              />
            </div>

            {/* =================================
                SEO BUBBLE
            ================================= */}

            <div className="skill-bubble bubble-seo">
              <div className="bubble-icon">↗</div>

              <div>
                <small>CORE SKILL</small>
                <strong>SEO Strategy</strong>
              </div>
            </div>

            {/* =================================
                AI BUBBLE
            ================================= */}

            <div className="skill-bubble bubble-ai">
              <div className="bubble-icon">✦</div>

              <div>
                <small>AUTOMATION</small>
                <strong>AI Marketing</strong>
              </div>
            </div>

            {/* =================================
                ADS BUBBLE
            ================================= */}

            <div className="skill-bubble bubble-ads">
              <div className="bubble-icon">◉</div>

              <div>
                <small>PAID MARKETING</small>
                <strong>Google & Meta Ads</strong>
              </div>
            </div>

            {/* =================================
                SPECIALIZATION CARD
            ================================= */}

            <div className="specialization-card">
              <span className="specialization-label">DIGITAL MARKETING</span>

              <strong>SEO · Paid Ads · AI Automation</strong>
            </div>
          </div>
        </div>

        {/* =================================
            RIGHT - ABOUT CONTENT
        ================================= */}

        <div className="about-content">
          {/* Section Label */}

          <div className="section-label">
            <span></span>
            01 — ABOUT ME
          </div>

          {/* Heading */}

          <h2 className="about-heading">
            SEO, Ads & AI
            <br />
            <span>Driven Digital Marketing</span>
          </h2>

          {/* Introduction */}

          <p className="about-intro">
            I am a <strong>Digital Marketing Executive & SEO Specialist</strong>{" "}
            focused on helping businesses improve their online visibility,
            generate targeted traffic, and build sustainable digital growth.
          </p>

          {/* SEO */}

          <p>
            My expertise includes{" "}
            <strong>
              Technical SEO, On-Page SEO, Off-Page SEO, Keyword Research,
              Content Optimization, Link Building, SEO Audits, and Competitor
              Analysis.
            </strong>
          </p>

          {/* Paid Ads */}

          <p>
            I also work with <strong>Google Ads and Meta Ads</strong> to support
            paid acquisition, keyword targeting, audience targeting, campaign
            optimization, and performance marketing initiatives.
          </p>

          {/* AI Automation */}

          <p>
            Alongside SEO and paid marketing, I use{" "}
            <strong>AI-powered marketing automation</strong> to streamline
            keyword research, content workflows, outreach, backlink prospecting,
            reporting, and repetitive marketing tasks.
          </p>

          {/* Technical Background */}

          <p>
            With <strong>2+ years of experience in React.js development</strong>
            , I understand websites from both the technical and marketing
            perspective. This helps me identify technical SEO issues and build
            strategies that support both users and search engines.
          </p>

          {/* =================================
              EXPERIENCE STATS
          ================================= */}

          <div className="about-stats">
            {/* React */}

            <div className="stat">
              <strong>2+</strong>

              <span>Years React.js</span>
            </div>

            {/* SEO */}

            <div className="stat">
              <strong>1+</strong>

              <span>Year SEO</span>
            </div>

            {/* Ads */}

            <div className="stat">
              <strong>ADS</strong>

              <span>Google & Meta</span>
            </div>

            {/* AI */}

            <div className="stat">
              <strong>AI</strong>

              <span>Marketing Automation</span>
            </div>
          </div>

          {/* =================================
              SKILL TAGS
          ================================= */}

          <div className="about-tags">
            <span>Technical SEO</span>

            <span>On-Page SEO</span>

            <span>Off-Page SEO</span>

            <span>Keyword Research</span>

            <span>Google Ads</span>

            <span>Meta Ads</span>

            <span>AI Automation</span>

            <span>React.js</span>

            <span>GA4</span>

            <span>Google Search Console</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
