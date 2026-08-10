"use client";

import { useMemo, useState } from "react";

const stages = [
  ["01", "Authority", "ICC application, seminar, temporary authority, tariff, insurance, cab card", "Gate"],
  ["02", "Readiness", "Vendor clearance, cash reserve, forms, W-2 training, mock moves", "Build"],
  ["03", "Pilot", "5–10 controlled jobs, one crew, owner-led, full file audit within 24 hours", "Prove"],
  ["04", "System", "Weekly operating review, referral flywheel, no fleet purchase before evidence", "Scale"],
] as const;

const nextActions = [
  "Call ICC Processing and validate the authority + October seminar sequence.",
  "Open the entity, bank account, and reserve structure; keep personal and business cash separate.",
  "Get three insurance and rental-truck quotes before choosing a vehicle model.",
  "Interview 10 Southwest-suburbs renters and 10 referral partners before paid demand generation.",
];

const controls = [
  "No paid moves, price claims, or service marketing before issued authority and an effective tariff.",
  "No interstate, storage, specialty heavy items, or unapproved accessorials in the launch scope.",
  "No job dispatch without a complete job packet, named crew lead, cleared vehicle, and safety plan.",
  "No AI system may bind pricing, dispatch, claims, payments, hiring, or customer commitments.",
];

export default function Home() {
  const [jobs, setJobs] = useState(15);
  const [scenario, setScenario] = useState<"Conservative" | "Base" | "Upside">("Base");

  const model = useMemo(() => {
    const cases = {
      Conservative: { ticket: 525, cashContribution: 230, fixed: 2875 },
      Base: { ticket: 650, cashContribution: 343, fixed: 2875 },
      Upside: { ticket: 735, cashContribution: 413, fixed: 3100 },
    };
    const active = cases[scenario];
    return {
      revenue: jobs * active.ticket,
      contribution: jobs * active.cashContribution,
      operatingIncome: jobs * active.cashContribution - active.fixed,
      breakEven: Math.ceil(active.fixed / active.cashContribution),
    };
  }, [jobs, scenario]);

  return (
    <main className="shell">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <p className="eyebrow">PRIVATE LAUNCH COMMAND CENTER · 2026</p>
        <div className="hero-copy">
          <div>
            <h1>Move deliberately.<br /><span>Earn the right to scale.</span></h1>
            <p className="hero-lede">A compliance-first plan for a working-owner, Southwest-suburbs household-goods mover. The first product is not a truck—it is a reliable, documented one-crew operating system.</p>
          </div>
          <aside className="hero-status" aria-label="Launch status">
            <span className="status-dot" />
            <p>CONDITIONAL PILOT TARGET</p>
            <strong>November 2026</strong>
            <small>Subject to Illinois ICC authority, effective tariff, insurance filings, and vehicle clearance.</small>
          </aside>
        </div>
        <div className="hero-meta">
          <span>Wedge: Southwest suburbs apartment &amp; condo moves</span>
          <span>Model: working owner + one W-2 helper + rented box truck</span>
          <span>Capital: &lt; $25K, reserve-protected</span>
        </div>
      </section>

      <nav className="nav-strip" aria-label="Command-center sections">
        <a href="#gates">Launch gates</a>
        <a href="#model">Cash model</a>
        <a href="#system">Operating system</a>
        <a href="#ai">AI sequence</a>
      </nav>

      <section className="section readiness" id="gates">
        <div className="section-heading">
          <p className="eyebrow">NON-NEGOTIABLE</p>
          <h2>The launch is gated by permission—not momentum.</h2>
          <p>Illinois requires a household-goods license and filed tariff for for-hire intrastate moves. This workspace deliberately treats the 90-day ambition as a conditional pilot window, not a promise to operate before approval.</p>
        </div>
        <div className="control-list">
          {controls.map((control, index) => (
            <article key={control} className="control-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{control}</p>
            </article>
          ))}
        </div>
        <a className="source-link" href="https://icc.illinois.gov/authority/household-goods-movers" target="_blank" rel="noreferrer">Review Illinois Household Goods Movers guidance ↗</a>
      </section>

      <section className="section model-section" id="model">
        <div className="section-heading compact">
          <p className="eyebrow">ONE-CREW CASH MODEL</p>
          <h2>Test the economics before you buy fleet.</h2>
          <p>Illustrative model inputs are designed for decision-making, not tariff filing. Adjust the workbook with live insurance, rental, and customer-quote evidence before relying on any number.</p>
        </div>
        <div className="model-layout">
          <div className="model-panel">
            <div className="scenario-buttons" role="group" aria-label="Scenario">
              {(["Conservative", "Base", "Upside"] as const).map((name) => (
                <button key={name} className={scenario === name ? "active" : ""} onClick={() => setScenario(name)}>{name}</button>
              ))}
            </div>
            <label className="range-label" htmlFor="jobs">Completed moves this month <strong>{jobs}</strong></label>
            <input id="jobs" type="range" min="0" max="35" value={jobs} onChange={(event) => setJobs(Number(event.target.value))} />
            <div className="metric-grid">
              <div><span>Monthly revenue</span><strong>${model.revenue.toLocaleString()}</strong></div>
              <div><span>Cash contribution</span><strong>${model.contribution.toLocaleString()}</strong></div>
              <div><span>Cash operating result</span><strong className={model.operatingIncome >= 0 ? "positive" : "negative"}>${model.operatingIncome.toLocaleString()}</strong></div>
              <div><span>Cash break-even</span><strong>{model.breakEven} moves/mo</strong></div>
            </div>
            <p className="model-note">Base-case logic: $650 average revenue per completed move, $343 cash contribution per move, and roughly $2,875 monthly fixed overhead. Owner labor is valued separately in the full model.</p>
          </div>
          <div className="cash-brief">
            <p className="eyebrow">CASH DISCIPLINE</p>
            <h3>$12.5K</h3>
            <p>Initial operating reserve after one-time launch uses in the base plan.</p>
            <div className="brief-rule" />
            <ul>
              <li>Owner draw only from positive cash operating income.</li>
              <li>No vehicle purchase until quality, margin, and reserve stage gates pass.</li>
              <li>Every move gets a job-level P&amp;L and estimate-variance review.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="system">
        <div className="section-heading">
          <p className="eyebrow">OPERATING SYSTEM</p>
          <h2>One controlled job file from lead to review.</h2>
          <p>The early advantage is execution discipline: accurate scope, documented customer choices, protected property, controlled change orders, and same-day closeout.</p>
        </div>
        <div className="process-flow" role="list" aria-label="Move operating flow">
          {[
            ["01", "Qualify", "Territory, access, risk, special-item, and building screen."],
            ["02", "Estimate", "Tariff-controlled written estimate and valuation choice."],
            ["03", "Book", "Customer terms, parking/elevator plan, crew and vehicle locked."],
            ["04", "Dispatch", "T-72/T-24 confirmation, truck packet, crew huddle, safety check."],
            ["05", "Execute", "Protect, photograph, load, communicate, escalate exceptions."],
            ["06", "Close", "Walkthrough, payment, signed records, job P&amp;L, review/claim workflow."],
          ].map(([number, name, description]) => (
            <article key={name} role="listitem" className="process-card"><span>{number}</span><h3>{name}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="section stage-section">
        <div className="section-heading compact">
          <p className="eyebrow">90-DAY CRITICAL PATH</p>
          <h2>Build a system you can audit, then learn on real moves.</h2>
        </div>
        <div className="stage-grid">
          {stages.map(([number, name, description, label]) => (
            <article key={name} className="stage-card">
              <div><span>{number}</span><em>{label}</em></div>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section ai-section" id="ai">
        <div className="ai-copy">
          <p className="eyebrow">AI AFTER FIELD LEARNING</p>
          <h2>Observe first.<br />Assist second.<br /><span>Automate last.</span></h2>
          <p>Build a clean record of scopes, estimates, actual hours, access problems, customer questions, claims, and variance reasons. Then add AI only where it reduces admin work without taking authority away from the accountable human.</p>
        </div>
        <div className="ai-timeline">
          <article><span>0–30</span><h3>Manual learning</h3><p>Structured forms and owner debriefs. Every decision remains manual.</p></article>
          <article><span>31–60</span><h3>Internal assist</h3><p>Debrief summaries, SOP search, missing-field checks, variance summaries.</p></article>
          <article><span>61–90</span><h3>Decision support</h3><p>Draft prep packets and follow-up language; human validates every regulated action.</p></article>
          <article><span>Post-PMF</span><h3>Controlled workflows</h3><p>Read-only first, auditable approvals, a kill switch, and no opaque pricing or claims decisions.</p></article>
        </div>
      </section>

      <section className="section next-section">
        <div className="section-heading compact">
          <p className="eyebrow">NEXT SEVEN DAYS</p>
          <h2>Four actions that reduce the most risk.</h2>
        </div>
        <ol className="next-list">
          {nextActions.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span><p>{action}</p></li>)}
        </ol>
      </section>

      <footer>
        <span>Chicago Moving Company Launch · Internal planning workspace</span>
        <span>Business plan, operating toolkit, financial model, and Asana roadmap are the operating record.</span>
      </footer>
    </main>
  );
}
