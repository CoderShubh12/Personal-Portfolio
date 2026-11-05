import React, { useState, useRef, useEffect, useCallback } from "react";
import terminalShot from "../assets/signal-desk-terminal.png";
import kkYt from "../assets/kk-youtube-analytics.png";
import kkIg from "../assets/kk-instagram-insights.png";
import kkFb from "../assets/kk-facebook-insights.png";

/* =========================================================
   CASE STUDIES
   Edit the data below. Each case study follows:
   Challenge → Approach → Results.
   Replace any metric with your real numbers when you have them.
========================================================= */

const caseStudiesData = [
  {
    cat: "AI Agents · SEO Operations",
    title: "The Peak Content AI Operations",
    tagline:
      "Running a content brand's SEO, content and outreach with AI agents, a trend radar and an SEO dashboard, with a human approving every publish.",
    metrics: [
      { value: "10", label: "AI agents" },
      { value: "4", label: "Departments" },
      { value: "24h", label: "Trend radar window" },
    ],
    challenge:
      "The Peak Content needed to publish fast on trending tech and AI news while keeping up SEO, content and outreach, all handled by one person.",
    approach: [
      "Built Peak Agent HQ: 10 AI agents across SEO, Content, Outreach and Tech, each with a role, schedule and work board.",
      "Added an approval inbox so agents draft and prepare, but nothing publishes, sends or deploys without my sign-off.",
      "Built Trend Hunter to surface the last 24 hours of Tech, AI, Gaming and Phones stories and score each one for search-traffic potential.",
      "Used Claude to turn shortlisted stories into blog ideas, and tracked results in the PeakContent SEO Office dashboard.",
    ],
    results: [
      "A one-person content operation that runs like a small team.",
      "Faster reaction to trending topics, ranked by traffic potential.",
      "Human-in-the-loop control over everything that goes live.",
    ],
    tools: ["Claude", "AI Agents", "Dashboards", "SEO", "HTML/CSS/JS"],
  },
  {
    cat: "FinTech · AI + Technical Analysis",
    title: "Signal Desk: AI Intraday Trading Terminal",
    shot: terminalShot,
    shotAlt: "Signal Desk intraday trading terminal showing a live chart, signals and alerts",
    tagline:
      "A live intraday trading terminal for the Indian market that puts the chart, signals and alerts on one screen.",
    metrics: [
      { value: "Live", label: "NSE market view" },
      { value: "1", label: "Screen for chart, signals & alerts" },
      { value: "Paper", label: "Practice trading only" },
    ],
    challenge:
      "Intraday traders jump between charting tools, signal panels and alert feeds, which slows decisions and makes it easy to miss a move. I wanted one clear screen that shows what is happening in the market right now.",
    approach: [
      "Designed and built the whole product myself, from idea to a working live terminal.",
      "Focused on a clean, dark, easy-to-scan layout so the important information is visible at a glance.",
      "Combined a live chart, trade signals and instant alerts in one place.",
      "Added a paper-trading mode so ideas can be practised and reviewed without risking real money.",
      "Kept the tool transparent and clearly labelled as a research aid, not financial advice.",
    ],
    results: [
      "One working screen for chart, signals and alerts instead of several tabs.",
      "A practice environment to review decisions safely.",
      "Built as a personal, in-progress product, with no profit or accuracy claims.",
    ],
    tools: ["Product Design", "Full-Stack Build", "NSE Markets", "Paper Trading"],
  },
  {
    cat: "AI Automation · Off-Page SEO",
    title: "Stonefly.com: Enterprise SEO Automation",
    tagline:
      "Turning repetitive off-page SEO work into an AI-driven, repeatable system.",
    metrics: [
      { value: "4", label: "Off-page channels automated" },
      { value: "Weekly", label: "Automated SEO audit reports" },
      { value: "3", label: "AI tools orchestrated" },
    ],
    challenge:
      "Off-page SEO tasks such as Web 2.0 submissions, guest posting, social bookmarking and blog writing were done manually. They took a lot of time, were hard to scale across clients and left little room for strategy.",
    approach: [
      "Mapped each off-page task into clear, repeatable steps.",
      "Built automation workflows using Accomplish.ai, Claude and Codex.",
      "Used Claude to generate SEO-optimized content in bulk for submissions.",
      "Automated submissions across Web 2.0, GP and bookmarking platforms.",
      "Set up weekly SEO audit reports with keyword tracking.",
    ],
    results: [
      "Off-page activity scaled without adding manual hours.",
      "Consistent, on-schedule reporting for stakeholders.",
      "More time freed up for strategy, audits and competitor analysis.",
    ],
    tools: ["Claude", "Codex", "Accomplish.ai", "Google Sheets", "Ahrefs"],
  },
  {
    cat: "AI Content Generation",
    title: "Bulk Blog Writing with Claude",
    tagline:
      "An AI content pipeline from keyword to publish-ready, internally linked article.",
    metrics: [
      { value: "50+", label: "SEO blogs per month" },
      { value: "80%", label: "Less production time" },
      { value: "100%", label: "Search-intent aligned" },
    ],
    challenge:
      "Publishing enough high-quality, SEO-friendly content every month was slow and expensive when each article was researched, outlined and written by hand.",
    approach: [
      "Clustered keywords by topic and search intent.",
      "Generated structured outlines with Claude for each cluster.",
      "Produced full articles with consistent tone and on-page SEO.",
      "Added internal linking suggestions to strengthen site structure.",
      "Reviewed every piece for quality and intent before publishing.",
    ],
    results: [
      "50+ SEO-optimized posts produced every month.",
      "Content production time reduced by around 80%.",
      "Quality and search-intent alignment maintained at scale.",
    ],
    tools: ["Claude", "Ahrefs", "SEMrush", "WordPress", "Google Sheets"],
  },
  {
    cat: "YouTube & Social Media",
    title: "Killer Kahaaniyan",
    shots: [
      { src: kkYt, alt: "YouTube Studio analytics for the last 28 days: 119.8K views, 13.7K watch hours, +1.4K subscribers", caption: "YouTube Studio · 28 Apr – 25 May 2026" },
      { src: kkIg, alt: "Instagram insights for the last 28 days: 73.3K views, 48.9K reach", caption: "Instagram Insights · 28 Apr – 25 May 2026" },
      { src: kkFb, alt: "Facebook insights for the last 28 days: 92.2K views, 73.8K viewers", caption: "Facebook Insights · 28 Apr – 25 May 2026" },
    ],
    tagline:
      "Growing a Hindi true-crime brand in a niche where blood, violence and real faces get videos restricted, with policy-safe creatives and well-timed Meta ads.",
    metrics: [
      { value: "12.9K+", label: "YouTube subscribers" },
      { value: "119.8K", label: "YouTube views in 28 days" },
      { value: "165K+", label: "Instagram + Facebook views in 28 days" },
    ],
    challenge:
      "True crime is one of YouTube's most heavily policed niches. Thumbnails or visuals with blood, weapons, injuries or real faces of victims and accused can get a video age-restricted, given limited ads or not monetized at all. The channel needed thumbnails and reel covers that still stopped the scroll, without breaking YouTube's or Meta's content policies.",
    approach: [
      "Designed policy-safe YouTube thumbnails in Canva with no blood, gore or weapons, using bold Hindi headlines, mood, color and curiosity hooks to drive clicks instead.",
      "Created reel covers for Instagram and Facebook in the same style, so the brand looked consistent and safe on every platform.",
      "Avoided graphic imagery and sensitive real faces in creatives to protect monetization and reduce the risk of restrictions.",
      "Edited long-form videos and Shorts in Clipchamp, and wrote SEO-optimized titles, descriptions and tags in Hindi and English.",
      "Ran Meta ads and boosted reels at the right time, while a case was trending, to reach new audiences beyond followers.",
      "Tracked YouTube Studio and Meta Insights to see which cases and formats performed best.",
    ],
    results: [
      "YouTube: 12,957 subscribers, +1,391 in 28 days, with 119.8K views and 13.7K watch hours.",
      "Channel page today (public): 14.6K subscribers and 376 videos.",
      "Shorts reaching up to 84% average viewed, and new uploads beating the channel's usual views.",
      "Instagram: 73.3K views, 48.9K reach and 3.2K new followers in 28 days; interactions up 59.5% and organic views up 51.9% alongside boosted reels.",
      "Facebook: 92.2K views from 73.8K viewers; interactions up 157.8%.",
    ],
    tools: ["Canva AI", "Clipchamp", "YouTube Studio", "Meta Business Suite", "Meta Ads"],
    link: "https://www.youtube.com/@killerkahaaniyan",
    linkText: "▶️ View Channel",
  },
  {
    cat: "Outreach · Link Building",
    title: "Niche Outreach for Craft.Camp & SmallHousePlan",
    tagline:
      "Building authority in the DIY and architecture niches through outreach and guest posts.",
    metrics: [
      { value: "2", label: "Niche websites" },
      { value: "GP", label: "Guest posting campaigns" },
      { value: "CRM", label: "Outreach tracking system" },
    ],
    challenge:
      "Both sites needed relevant, high-quality backlinks in competitive niches where generic link building doesn't work.",
    approach: [
      "Researched niche-relevant publishers and link opportunities.",
      "Ran personalized outreach campaigns for guest posts.",
      "Maintained an outreach database to track prospects and replies.",
      "Coordinated with publishers through to live placements.",
    ],
    results: [
      "A steady pipeline of niche-relevant backlink opportunities.",
      "Organized, trackable outreach that could be reused over time.",
      "Ongoing support for both sites' off-page SEO growth.",
    ],
    tools: ["Ahrefs", "SEMrush", "Google Sheets", "Gmail"],
  },
];

/* Screenshot carousel: arrows, dots, swipe and arrow keys. */
const ShotCarousel = ({ shots }) => {
  const [i, setI] = useState(0);
  const startX = useRef(null);
  const n = shots.length;
  const go = (k) => setI((k + n) % n);

  const onKeyDown = (e) => {
    if (n < 2) return;
    if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
  };
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? i + 1 : i - 1);
  };

  return (
    <div
      className="shot-carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label="Screenshots"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="shot-viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="shot-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {shots.map((sh, k) => (
            <figure className="shot-slide" key={k} aria-hidden={k !== i}>
              <img src={sh.src} alt={sh.alt} loading="lazy" draggable="false" />
            </figure>
          ))}
        </div>
        {n > 1 && (
          <>
            <button type="button" className="shot-arrow prev" onClick={() => go(i - 1)} aria-label="Previous screenshot">‹</button>
            <button type="button" className="shot-arrow next" onClick={() => go(i + 1)} aria-label="Next screenshot">›</button>
          </>
        )}
      </div>
      <div className="shot-meta">
        <span className="shot-caption">{shots[i].caption}</span>
        {n > 1 && (
          <div className="shot-dots">
            {shots.map((_, k) => (
              <button
                type="button"
                key={k}
                className={k === i ? "active" : ""}
                onClick={() => go(k)}
                aria-label={`Show screenshot ${k + 1} of ${n}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CaseStudyCard = ({ study, index }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const leaveTimer = useRef(null);

  // Auto-close when the reader leaves the block: pointer/tap outside, Esc,
  // keyboard focus moving elsewhere, scrolling the card out of view, or the
  // mouse leaving the card (short delay so a brief slip does not close it).
  useEffect(() => {
    if (!open) return undefined;
    const el = ref.current;
    const close = () => setOpen(false);
    const onDown = (e) => {
      if (el && !el.contains(e.target)) close();
    };
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    const onFocusIn = (e) => {
      if (el && !el.contains(e.target)) close();
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    document.addEventListener("focusin", onFocusIn);
    let io;
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) close();
        },
        { threshold: 0 }
      );
      io.observe(el);
    }
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("focusin", onFocusIn);
      if (io) io.disconnect();
      clearTimeout(leaveTimer.current);
    };
  }, [open]);

  const onMouseLeave = useCallback(() => {
    if (!open) return;
    if (window.matchMedia && !window.matchMedia("(hover: hover)").matches) return;
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => setOpen(false), 250);
  }, [open]);
  const onMouseEnter = () => clearTimeout(leaveTimer.current);

  return (
    <article
      ref={ref}
      className={`case-card ${open ? "open" : ""}`}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <div className="case-top">
        <span className="case-index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="case-cat">{study.cat}</span>
      </div>

      <h3>{study.title}</h3>
      <p className="case-tagline">{study.tagline}</p>

      <div className="case-metrics">
        {study.metrics.map((m, i) => (
          <div className="case-metric" key={i}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </div>
        ))}
      </div>

      {open && (
        <div className="case-details">
          {(study.shots || study.shot) && (
            <ShotCarousel
              shots={
                study.shots || [
                  { src: study.shot, alt: study.shotAlt || study.title, caption: study.shotCaption || "Screenshot of the live terminal" },
                ]
              }
            />
          )}

          <div className="case-block">
            <h4>
              <span className="case-dot challenge"></span>The Challenge
            </h4>
            <p>{study.challenge}</p>
          </div>

          <div className="case-block">
            <h4>
              <span className="case-dot approach"></span>My Approach
            </h4>
            <ul>
              {study.approach.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="case-block">
            <h4>
              <span className="case-dot results"></span>Results
            </h4>
            <ul>
              {study.results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="case-tools">
        {study.tools.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>

      <div className="case-actions">
        <button
          className="case-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? "Hide case study ↑" : "Read case study →"}
        </button>
        {study.link && (
          <a
            className="case-link"
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {study.linkText}
          </a>
        )}
      </div>
    </article>
  );
};

const CaseStudies = () => {
  return (
    <section className="section" id="case-studies">
      <div className="section-header">
        <h2>
          <span className="num">04</span> Case Studies
        </h2>
        <div className="line"></div>
      </div>

      <p className="section-intro">
        A closer look at how I approach problems: the challenge, what I did,
        and what it delivered.
      </p>

      <div className="case-grid">
        {caseStudiesData.map((study, i) => (
          <CaseStudyCard study={study} index={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
