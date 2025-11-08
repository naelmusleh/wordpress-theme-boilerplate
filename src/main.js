import {
  personas,
  services,
  frameworks,
  engagementModels,
  trainingModules,
  reviewRhythms,
  analyticsChannels,
  insights
} from './data.js';

const state = {
  view: 'overview',
  persona: personas[1]?.id ?? personas[0]?.id ?? 'startup',
  activeServiceId: services[0]?.id ?? null,
  contactSubmitted: false
};

const navigation = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Services' },
  { id: 'enablement', label: 'Enablement' },
  { id: 'governance', label: 'Governance' },
  { id: 'contact', label: 'Contact' }
];

const root = document.getElementById('app');

const viewRenderers = {
  overview: renderOverview,
  services: renderServices,
  enablement: renderEnablement,
  governance: renderGovernance,
  contact: renderContact
};

function render() {
  const activeView = navigation.find((item) => item.id === state.view) ?? navigation[0];
  document.title =
    activeView.id === 'overview'
      ? 'Northstar Technical Consulting'
      : `Northstar Technical Consulting — ${activeView.label}`;

  root.innerHTML = `
    ${renderTopbar()}
    <main>
      ${viewRenderers[state.view]?.() ?? renderOverview()}
    </main>
    ${renderFooter()}
  `;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="topbar__content">
        <div class="brand">
          <span class="brand__mark" aria-hidden="true">NT</span>
          <div>
            <div>Northstar Technical Consulting</div>
            <small>Technical Product & Program Leadership</small>
          </div>
        </div>
        <nav class="nav" aria-label="Primary navigation">
          ${navigation
            .map(
              (item) => `
                <button
                  type="button"
                  class="nav__item"
                  data-view="${item.id}"
                  ${state.view === item.id ? 'aria-current="page"' : ''}
                >
                  ${item.label}
                </button>
              `
            )
            .join('')}
        </nav>
      </div>
    </header>
  `;
}

function renderOverview() {
  return `
    <section class="section section--hero">
      <div class="hero__eyebrow">Technical Product & Program Management</div>
      <h1 class="hero__headline">
        Build the operating system that turns strategy into measurable outcomes.
      </h1>
      <p class="hero__subhead">
        We partner with product and technology leaders to stand up program management frameworks,
        agile delivery, and actionable analytics so every review drives decisions—whether you're
        a startup shipping your first platform or an enterprise orchestrating global expansion.
      </p>
      <div class="cta-group">
        <button type="button" class="btn btn--primary" data-view="services">Explore services</button>
        <button type="button" class="btn btn--ghost" data-view="contact">Schedule a conversation</button>
      </div>
      <div class="meta-grid" role="list">
        <div class="metric-card" role="listitem">
          <span class="metric-card__label">Speed to Operating Rhythm</span>
          <span class="metric-card__value">≤ 6 weeks</span>
          <span>Time to launch a disciplined program management cadence.</span>
        </div>
        <div class="metric-card" role="listitem">
          <span class="metric-card__label">Executive Review Readiness</span>
          <span class="metric-card__value">3x faster</span>
          <span>Monthly & quarterly technical/business reviews that drive action.</span>
        </div>
        <div class="metric-card" role="listitem">
          <span class="metric-card__label">Analytics Adoption</span>
          <span class="metric-card__value">+75%</span>
          <span>Leaders accessing live dashboards after instrumenting insight channels.</span>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section__header">
        <span class="section__eyebrow">Operating Blueprint</span>
        <h2 class="section__title">A cohesive system across programs, product, expansion, and insight</h2>
        <p class="section__description">
          We connect the dots between program management, agile delivery, product strategy, and the analytics
          channels that power decision-making. Every engagement culminates in a playbook your teams can run,
          adapt, and scale—long after we leave.
        </p>
      </div>
      <div class="summary-grid">
        ${insights
          .map(
            (insight) => `
              <article class="summary-card" role="article">
                <strong>${insight.title}</strong>
                <p>${insight.description}</p>
              </article>
            `
          )
          .join('')}
      </div>
      <div class="timeline" aria-label="Typical engagement flow">
        <div class="timeline__row">
          <span class="timeline__label">Discover</span>
          <div class="timeline__content">
            Partner workshops, interviews, and data deep-dives to map how strategy flows—or stalls—across
            programs, product, and analytics today. We calibrate maturity, capture constraints, and align success measures.
          </div>
        </div>
        <div class="timeline__row">
          <span class="timeline__label">Design</span>
          <div class="timeline__content">
            We co-create the operating framework: governance, agile rituals, review cadences, expansion or M&A playbooks,
            and the dashboards executives rely on. Tooling integrations are tailored to your stack.
          </div>
        </div>
        <div class="timeline__row">
          <span class="timeline__label">Embed</span>
          <div class="timeline__content">
            Side-by-side enablement with your leaders. We facilitate the first forums, train teams, instrument analytics,
            and transition ownership with clear runbooks and coaching plans.
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServices() {
  const persona = personas.find((p) => p.id === state.persona) ?? personas[0];
  const activeService =
    services.find((service) => service.id === state.activeServiceId) ?? services[0];
  const personaFocus = activeService.focusByPersona[state.persona] ?? [];

  return `
    <section class="section">
      <div class="section__header">
        <span class="section__eyebrow">Services</span>
        <h2 class="section__title">Targeted operating frameworks for any stage of growth</h2>
        <p class="section__description">
          Choose your lens—startup, scale-up, or global enterprise—to see how each service meets you where you are.
          Every engagement blends program management discipline, agile delivery excellence, product strategy, and data-driven insights.
        </p>
      </div>
      <div class="persona-switcher" role="group" aria-label="Company focus">
        ${personas
          .map(
            (item) => `
              <button
                type="button"
                class="persona-switcher__item"
                data-persona="${item.id}"
                aria-pressed="${state.persona === item.id}"
              >
                <span class="persona-switcher__title">${item.title}</span>
                <span class="persona-switcher__subtitle">${item.subtitle}</span>
              </button>
            `
          )
          .join('')}
      </div>
      <div class="service-layout">
        <div class="service-grid" role="list">
          ${services
            .map(
              (service) => `
                <article
                  class="service-card ${activeService.id === service.id ? 'is-active' : ''}"
                  role="listitem"
                  tabindex="0"
                  data-service="${service.id}"
                  aria-pressed="${activeService.id === service.id}"
                >
                  <span class="service-card__label">${service.label}</span>
                  <h3 class="service-card__title">${service.title}</h3>
                  <p class="service-card__description">${service.description}</p>
                  <span class="pill">Typical timeline: ${service.timeline}</span>
                </article>
              `
            )
            .join('')}
        </div>
        <article class="service-details" aria-live="polite">
          <h3 class="service-details__title">${activeService.title}</h3>
          <div class="pill">Focus for ${persona.title}</div>
          <ul class="detail-list" style="margin-top: 0.9rem;">
            ${personaFocus.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <div class="detail-grid">
            <div class="detail-grid__item">
              <span class="detail-grid__title">Key Deliverables</span>
              <ul class="detail-list">
                ${activeService.deliverables.map((item) => `<li>${item}</li>`).join('')}
              </ul>
            </div>
            <div class="detail-grid__item">
              <span class="detail-grid__title">Success Metrics</span>
              <ul class="detail-list">
                ${activeService.successMetrics.map((item) => `<li>${item}</li>`).join('')}
              </ul>
            </div>
            <div class="detail-grid__item">
              <span class="detail-grid__title">Timeline Guidance</span>
              <p class="service-card__description">${activeService.timeline}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section class="section">
      <div class="section__header">
        <span class="section__eyebrow">What to Expect</span>
        <h2 class="section__title">Immersive partnership, clear ownership, measurable outcomes</h2>
        <p class="section__description">
          We operate as an extension of your leadership team—facilitating decisions, designing playbooks,
          instrumenting analytics, and enabling your people to run the system with confidence.
        </p>
      </div>
      <div class="summary-grid">
        ${persona.focus
          .map(
            (item) => `
              <article class="summary-card">
                <strong>${persona.title}</strong>
                <p>${item}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderEnablement() {
  return `
    <section class="section">
      <div class="section__header">
        <span class="section__eyebrow">Frameworks</span>
        <h2 class="section__title">Frameworks we co-create and embed with your teams</h2>
        <p class="section__description">
          From program governance to international expansion and M&A, every framework is tailored to your context,
          tooling, and culture. We leave behind living systems, not shelfware.
        </p>
      </div>
      <div class="summary-grid">
        ${frameworks
          .map(
            (framework) => `
              <article class="summary-card">
                <strong>${framework.name}</strong>
                <p>${framework.description}</p>
                <ul class="detail-list">
                  ${framework.anchors.map((anchor) => `<li>${anchor}</li>`).join('')}
                </ul>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
    <section class="section">
      <div class="section__header">
        <span class="section__eyebrow">Enablement</span>
        <h2 class="section__title">Training and enablement designed for operating leaders</h2>
        <p class="section__description">
          We teach teams to own the operating system—running steering forums, monthly and quarterly reviews,
          analytics channels, and change management. Engagements often blend training with live shadowing.
        </p>
      </div>
      <div class="summary-grid">
        ${trainingModules
          .map(
            (module) => `
              <article class="summary-card">
                <strong>${module.name}</strong>
                <p>${module.format}</p>
                <ul class="detail-list">
                  ${module.outcomes.map((outcome) => `<li>${outcome}</li>`).join('')}
                </ul>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
    <section class="section">
      <div class="section__header">
        <span class="section__eyebrow">Engagement Models</span>
        <h2 class="section__title">Flexible ways to partner, from assessments to fractional leadership</h2>
        <p class="section__description">
          Choose the level of support that meets your moment—rapid diagnostics, co-building and enablement,
          or operating-as-a-service while you scale internal capability.
        </p>
      </div>
      <div class="summary-grid">
        ${engagementModels
          .map(
            (model) => `
              <article class="summary-card">
                <strong>${model.name}</strong>
                <p>${model.duration}</p>
                <p>${model.bestFor}</p>
                <ul class="detail-list">
                  ${model.inclusions.map((item) => `<li>${item}</li>`).join('')}
                </ul>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderGovernance() {
  return `
    <section class="section">
      <div class="section__header">
        <span class="section__eyebrow">Reviews</span>
        <h2 class="section__title">Monthly & quarterly reviews that drive decisions, not decks</h2>
        <p class="section__description">
          We design technical and business reviews with crisp narratives, live metrics, decision logs, and follow-up automation.
          Leaders walk away with alignment, not just information.
        </p>
      </div>
      <div class="service-layout">
        ${reviewRhythms
          .map(
            (rhythm) => `
              <article class="service-details">
                <h3 class="service-details__title">${rhythm.name}</h3>
                <div class="pill">Cadence: ${rhythm.frequency}</div>
                <p class="service-card__description" style="margin-top:0.9rem;">
                  Primary audience: ${rhythm.audience}
                </p>
                <div class="detail-grid">
                  <div class="detail-grid__item">
                    <span class="detail-grid__title">Focus Areas</span>
                    <ul class="detail-list">
                      ${rhythm.focus.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="detail-grid__item">
                    <span class="detail-grid__title">Outputs</span>
                    <ul class="detail-list">
                      ${rhythm.outcomes.map((item) => `<li>${item}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
    <section class="section">
      <div class="section__header">
        <span class="section__eyebrow">Analytics</span>
        <h2 class="section__title">Insight channels that connect delivery, customers, and growth</h2>
        <p class="section__description">
          We architect analytics and reporting channels aligned to leadership questions—from executive dashboards to
          operational command centers. Every metric has an owner, threshold, and action plan.
        </p>
      </div>
      <div class="summary-grid">
        ${analyticsChannels
          .map(
            (channel) => `
              <article class="summary-card">
                <strong>${channel.name}</strong>
                <p>${channel.description}</p>
                <ul class="detail-list">
                  ${channel.examples.map((example) => `<li>${example}</li>`).join('')}
                </ul>
              </article>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="section">
      <div class="contact-card">
        <h2 class="contact-card__title">Let’s co-design your technical operating system</h2>
        <p class="contact-card__description">
          Share where you are today and where you need to be. We’ll shape an engagement that
          accelerates your next chapter—standing up program management frameworks, agile delivery,
          global expansion, M&A readiness, executive reviews, and insight channels.
        </p>
        ${
          state.contactSubmitted
            ? `<div class="pill" role="status">Thanks! Expect a response from us within one business day.</div>`
            : ''
        }
        <form class="contact-form" data-contact-form>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Company
            <input type="text" name="company" placeholder="Company or team" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            Focus Area
            <input
              type="text"
              name="focus"
              placeholder="Program management, agile, expansion, reviews, analytics…"
            />
          </label>
          <label style="grid-column: 1 / -1;">
            Context & goals
            <textarea name="context" placeholder="Tell us about goals, timeline, and outcomes."></textarea>
          </label>
          <button type="submit" class="btn btn--primary contact-card__cta">Send request</button>
        </form>
      </div>
    </section>
  `;
}

function renderFooter() {
  const currentYear = new Date().getFullYear();
  return `
    <footer>
      <div class="footer__inner">
        <div>© ${currentYear} Northstar Technical Consulting. All rights reserved.</div>
        <div class="footer__links">
          <a href="mailto:hello@northstar.consulting">hello@northstar.consulting</a>
          <a href="#" data-view="services">Services</a>
          <a href="#" data-view="enablement">Enablement</a>
          <a href="#" data-view="contact">Engage Us</a>
        </div>
      </div>
    </footer>
  `;
}

function changeView(view) {
  if (!navigation.some((item) => item.id === view)) {
    return;
  }
  state.view = view;
  // Reset contact confirmation when leaving the contact view
  if (view !== 'contact' && state.contactSubmitted) {
    state.contactSubmitted = false;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

function handleClick(event) {
  const viewTrigger = event.target.closest('[data-view]');
  if (viewTrigger) {
    event.preventDefault();
    changeView(viewTrigger.getAttribute('data-view'));
    return;
  }

  const personaTrigger = event.target.closest('[data-persona]');
  if (personaTrigger) {
    const personaId = personaTrigger.getAttribute('data-persona');
    if (state.persona !== personaId) {
      state.persona = personaId;
      // Reset service focus to first service for consistency
      state.activeServiceId = services[0]?.id ?? null;
      render();
    }
    return;
  }

  const serviceTrigger = event.target.closest('[data-service]');
  if (serviceTrigger) {
    const serviceId = serviceTrigger.getAttribute('data-service');
    if (state.activeServiceId !== serviceId) {
      state.activeServiceId = serviceId;
      render();
    }
  }
}

function handleKeydown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    const serviceTrigger = event.target.closest('[data-service]');
    if (serviceTrigger) {
      event.preventDefault();
      const serviceId = serviceTrigger.getAttribute('data-service');
      if (state.activeServiceId !== serviceId) {
        state.activeServiceId = serviceId;
        render();
      }
    }
  }
}

function handleSubmit(event) {
  if (event.target.matches('[data-contact-form]')) {
    event.preventDefault();
    state.contactSubmitted = true;
    render();
  }
}

root.addEventListener('click', handleClick);
root.addEventListener('keydown', handleKeydown);
root.addEventListener('submit', handleSubmit);

render();
