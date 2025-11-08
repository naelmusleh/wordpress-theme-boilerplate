export const personas = [
  {
    id: 'startup',
    title: 'High-Growth Startup',
    subtitle: 'Stand up operating discipline without killing product velocity.',
    focus: [
      'Launch the first program governance cadence and cross-functional communication paths.',
      'Translate company vision into a lightweight product strategy, roadmap, and OKR stack.',
      'Instrument a foundational analytics layer to track adoption, retention, and release health.'
    ]
  },
  {
    id: 'scaleup',
    title: 'Scaling Portfolio',
    subtitle: 'Align product, engineering, and go-to-market as growth compounds.',
    focus: [
      'Operationalize quarterly planning and dependency management across multiple workstreams.',
      'Standardize agile rituals with clear exit criteria, definition of ready/done, and release playbooks.',
      'Design executive reviews that connect customer health, delivery, and commercial performance.'
    ]
  },
  {
    id: 'enterprise',
    title: 'Global Enterprise',
    subtitle: 'Re-energize innovation while navigating compliance, expansion, and M&A.',
    focus: [
      'Modernize portfolio governance to reduce decision latency across business units.',
      'Build integration command centers for acquisitions and regional expansions.',
      'Operationalize metrics, dashboards, and executive reviews for predictable outcomes.'
    ]
  }
];

export const services = [
  {
    id: 'program-os',
    label: 'Program Management Foundation',
    title: 'Program Operating System',
    description:
      'Design and embed the end-to-end program management framework that connects strategy, execution, and governance.',
    focusByPersona: {
      startup: [
        'Stand up a single intake funnel with prioritization guardrails.',
        'Define lightweight program charters, RACI, and escalation paths.',
        'Create a 6-week launch calendar that keeps leadership visibility high.'
      ],
      scaleup: [
        'Introduce quarterly and monthly planning cadences with dependency surfacing.',
        'Codify program dashboards (capacity, health, risk) and decision playbooks.',
        'Coach program leaders on running cross-functional steering forums.'
      ],
      enterprise: [
        'Modernize portfolio tiering and business case reviews.',
        'Deploy federated PMO governance that respects autonomy with unified metrics.',
        'Automate reporting integrations with finance, legal, and regional leadership.'
      ]
    },
    deliverables: [
      'Operating playbook (governance model, cadences, artifacts, RACI).',
      'Cross-functional steering council blueprint.',
      'Quarterly planning kit and decision rights matrix.',
      'Program performance dashboard specification.'
    ],
    successMetrics: [
      'Decision latency reduced by 40% within two quarters.',
      'Risk visibility moves from reactive to proactive with weekly signal reviews.',
      'Programs deliver within ±5% of planned scope or pivot with documented rationale.'
    ],
    timeline: '4-6 weeks to embed MVP, 10-12 weeks for scale-out.'
  },
  {
    id: 'agile-acceleration',
    label: 'Agile Delivery Frameworks',
    title: 'Agile Framework Accelerator',
    description:
      'Implement adaptive agile frameworks tuned for cross-functional delivery, from scrum to dual-track product discovery.',
    focusByPersona: {
      startup: [
        'Codify sprint ceremonies, roles, and agile agreements for the first product squads.',
        'Implement a discovery-to-delivery board with risk reviews each sprint.',
        'Coach product and engineering leads on backlog quality and prioritization.'
      ],
      scaleup: [
        'Introduce quarterly PI planning aligned with product strategy and OKRs.',
        'Harmonize multiple squads under a single release governance process.',
        'Instrument flow metrics (cycle time, WIP, blocked work) for continuous improvement.'
      ],
      enterprise: [
        'Blend agile guardrails with compliance and audit requirements.',
        'Roll out scaled agile ceremonies for multi-region delivery programs.',
        'Deploy tooling integrations (Jira/Azure DevOps) with automated insights.'
      ]
    },
    deliverables: [
      'Agile ceremony playbook and facilitator guides.',
      'Dual-track roadmap template and prioritization matrix.',
      'Flow metrics dashboard definition and measurement plan.',
      'Change management and coaching plan for leaders and teams.'
    ],
    successMetrics: [
      'Backlog health score ≥ 80% sustained over 8 weeks.',
      'Cycle time improved by 30% in priority workstreams.',
      'Predictable and transparent release schedule with <5% surprise slippage.'
    ],
    timeline: '3-5 weeks for assessment and MVP rollout, 8-10 weeks with coaching.'
  },
  {
    id: 'product-blueprint',
    label: 'Product Management Frameworks',
    title: 'Product Management Blueprint',
    description:
      'Define the product management framework that connects market insights, strategy, roadmaps, and release decisions.',
    focusByPersona: {
      startup: [
        'Clarify product vision, north-star metrics, and customer segmentation.',
        'Introduce product discovery cadences and validation scorecards.',
        'Build living roadmaps that map to OKRs and executive narratives.'
      ],
      scaleup: [
        'Launch portfolio councils to prioritize investments and tech debt.',
        'Establish product narrative templates for executive storytelling.',
        'Integrate GTM, enablement, and support signals into roadmap decisions.'
      ],
      enterprise: [
        'Create a unified product lifecycle process across business units.',
        'Align roadmap governance with finance, data, and security requirements.',
        'Construct scenario planning for regional and segment expansion.'
      ]
    },
    deliverables: [
      'Product strategy cascade (vision → pillars → roadmaps).',
      'Discovery-to-delivery workflow with tooling integrations.',
      'Quarterly business review template anchored in product outcomes.',
      'Capability maturity assessment with prioritized interventions.'
    ],
    successMetrics: [
      'Executive alignment on roadmap priorities within two cycles.',
      'Validated discovery pipeline with decision SLAs under 5 business days.',
      'Roadmaps express value, cost, and confidence with a unified taxonomy.'
    ],
    timeline: '4 weeks for assessment & design, 6-8 weeks for enablement.'
  },
  {
    id: 'global-expansion',
    label: 'International Expansion',
    title: 'Global Expansion Architecture',
    description:
      'Define the technical and operational frameworks that enable expansion into new countries and regions.',
    focusByPersona: {
      startup: [
        'Prioritize market entry sequencing based on product readiness and regulatory effort.',
        'Build launch checklist across legal, compliance, localization, and support.',
        'Design localized analytics to monitor adoption and feedback loops.'
      ],
      scaleup: [
        'Map systems architecture for multi-region data residency and performance.',
        'Define localized product requirements and roadmap branching.',
        'Integrate regional feedback loops into planning cadences and reviews.'
      ],
      enterprise: [
        'Coordinate compliance, security, and partner ecosystems across markets.',
        'Model operating costs, SLAs, and redundancy for global platforms.',
        'Build executive dashboards to monitor expansion KPIs per region.'
      ]
    },
    deliverables: [
      'Expansion readiness assessment and capability heatmap.',
      'Regional launch framework with governance, roles, and milestones.',
      'Technical architecture guardrails for localization, data, and integrations.',
      'Playbook for post-launch monitoring and continuous improvement.'
    ],
    successMetrics: [
      'Launch readiness score improves by 30% pre-go-live.',
      'Critical path issues identified >60 days ahead of launch.',
      'Regional rollouts achieve target adoption within first two review cycles.'
    ],
    timeline: '6-10 weeks depending on number of regions and integrations.'
  },
  {
    id: 'ma-integration',
    label: 'Mergers & Acquisitions',
    title: 'M&A Integration Command Center',
    description:
      'Create an integration framework that protects customer experience, technology cohesion, and business performance post-acquisition.',
    focusByPersona: {
      startup: [
        'Clarify acquisition thesis and align integration scope with strategic outcomes.',
        'Sequence integration workstreams to protect core roadmap commitments.',
        'Build joint OKRs that balance synergy capture with customer retention.'
      ],
      scaleup: [
        'Stand up integration command center with playbooks and scorecards.',
        'Design data migration, platform consolidation, and change management plans.',
        'Operationalize weekly executive reviews on integration health.'
      ],
      enterprise: [
        'Align integration governance with global PMO and finance controls.',
        'Establish onboarding frameworks for acquired talent and teams.',
        'Implement analytics for synergy realization, customer churn, and platform risk.'
      ]
    },
    deliverables: [
      'Integration blueprint (governance, swimlanes, KPI tree).',
      'Risk and dependency heatmap with mitigation plans.',
      'Executive and workstream dashboards for transparency.',
      'Communication and change management toolkit.'
    ],
    successMetrics: [
      'Critical integration milestones hit within ±5% variance.',
      'Customer churn and support signals remain within agreed thresholds.',
      'Synergy realization tracked monthly with accountable owners.'
    ],
    timeline: '3-4 weeks for pre-close planning, 90-day coaching for execution.'
  },
  {
    id: 'review-rhythm',
    label: 'Executive Reviews',
    title: 'Review Rhythm & Business Health',
    description:
      'Launch a unified cadence of monthly and quarterly technical & business reviews that drive decisions, not just updates.',
    focusByPersona: {
      startup: [
        'Establish a monthly business review linking roadmap, GTM, and customer learnings.',
        'Introduce an executive scorecard with focus metrics and narrative insights.',
        'Coach product and engineering leads on storytelling with data.'
      ],
      scaleup: [
        'Operationalize quarterly business reviews with forward-looking commitments.',
        'Integrate financial, customer, and delivery metrics into a single view.',
        'Automate pre-read packages and action tracking workflows.'
      ],
      enterprise: [
        'Modernize existing QBR/MBR formats with insights and decision prompts.',
        'Design cross-portfolio deep-dives to surface systemic risks and opportunities.',
        'Embed AI-assisted summaries and follow-up automation across regions.'
      ]
    },
    deliverables: [
      'Monthly and quarterly review templates tailored to leadership expectations.',
      'Executive narrative and decision-tracking toolkit.',
      'Review operations runbook and facilitation guides.',
      'Signals library linking metrics to follow-up actions.'
    ],
    successMetrics: [
      'Action closure rates exceed 90% within agreed SLAs.',
      'Leadership satisfaction with review insight quality improves quarter-over-quarter.',
      'Decisions logged increase by 2x with clear ownership and due dates.'
    ],
    timeline: '2-3 weeks to design and pilot, 6 weeks to embed across teams.'
  },
  {
    id: 'insight-fabric',
    label: 'Analytics & Reporting',
    title: 'Insight Fabric & Reporting Channels',
    description:
      'Define the data, analytics, and reporting channels that fuel product, program, and business decisions.',
    focusByPersona: {
      startup: [
        'Instrument foundational data pipelines and dashboards for product-market fit.',
        'Connect telemetry, support, and commercial data into a single pane.',
        'Coach teams on metrics selection, maintenance, and storytelling.'
      ],
      scaleup: [
        'Design analytics operating model with documented ownership and governance.',
        'Build executive dashboards with drill-downs for product, program, and revenue health.',
        'Launch data quality scorecards and alerting automation.'
      ],
      enterprise: [
        'Modernize analytics stack with semantic layers and governed self-service.',
        'Enable AI/ML-powered forecasting within executive reviews and planning cycles.',
        'Operationalize data contracts and lineage across complex ecosystems.'
      ]
    },
    deliverables: [
      'Analytics channel strategy including audiences, SLAs, and tooling.',
      'Executive dashboard wireframes and measurement taxonomy.',
      'Data product backlog prioritization and roadmap.',
      'Training modules for storytelling with data and insights activation.'
    ],
    successMetrics: [
      'Leadership adoption of dashboards >75% within first quarter.',
      'Data quality conformance >95% across critical fields.',
      'Insights-to-action cycle time reduced by 35%.'
    ],
    timeline: '4-6 weeks for strategy and architecture, ongoing enablement as needed.'
  }
];

export const frameworks = [
  {
    id: 'governance',
    name: 'Program Governance Lattice',
    description: 'Decision architecture linking strategy, execution, and accountability.',
    anchors: [
      'Strategy-to-execution map that clarifies how initiatives ladder into outcomes.',
      'Governance tiers with roles, cadences, and decision SLAs.',
      'Signal library to escalate risk and surface wins in time for course correction.'
    ]
  },
  {
    id: 'agile',
    name: 'Adaptive Delivery Toolkit',
    description: 'Modular agile practices tuned for distributed cross-functional teams.',
    anchors: [
      'Dual-track discovery and delivery with shared artifacts and definitions.',
      'Flow analytics instrumentation (cycle time, throughput, predictability).',
      'Portfolio backlog taxonomy connecting product, tech, and GTM work.'
    ]
  },
  {
    id: 'product',
    name: 'Product Strategy Stack',
    description: 'Cascade from vision → pillars → bets → roadmaps with measurable outcomes.',
    anchors: [
      'Integrated customer, market, and financial signals to inform prioritization.',
      'Narrative templates for monthly product councils and executive briefings.',
      'Scenario planning kits for expansion, M&A, and lifecycle transitions.'
    ]
  },
  {
    id: 'expansion',
    name: 'Expansion & M&A Control Tower',
    description: 'Orchestrates international launches and post-merger integration.',
    anchors: [
      'Pre-flight assessments with compliance, data, and localization guardrails.',
      'Integration playbooks covering people, process, technology, and communications.',
      'Runbooks for first 90 days with measurable signals and course-correct triggers.'
    ]
  }
];

export const engagementModels = [
  {
    id: 'assessment',
    name: 'Assessment Sprint',
    duration: '3 weeks',
    bestFor: 'Rapid clarity on gaps, maturity, and priority interventions.',
    inclusions: [
      'Stakeholder interviews and working session facilitation.',
      'Current-state diagnostics across people, process, tooling, and data.',
      'Executive-ready findings, roadmap, and ROI narrative.'
    ]
  },
  {
    id: 'build-embed',
    name: 'Build & Embed',
    duration: '8-16 weeks',
    bestFor: 'Standing up new frameworks with hands-on coaching.',
    inclusions: [
      'Co-creation workshops, playbook development, and tooling configuration.',
      'Shadowing and enablement with product, engineering, and operations leaders.',
      'Quarterly planning and review cadence launches with measurement loops.'
    ]
  },
  {
    id: 'operate',
    name: 'Operate-as-a-Service',
    duration: 'Retainer, 6+ months',
    bestFor: 'Fractional PMO, product operations, or integration leadership.',
    inclusions: [
      'Run critical forums (steering, reviews, planning) as embedded leadership.',
      'Own KPI instrumentation, reporting, and continuous improvement backlogs.',
      'Coach internal successors and transition playbooks for long-term ownership.'
    ]
  }
];

export const trainingModules = [
  {
    id: 'program-academy',
    name: 'Program Manager Academy',
    format: 'Hybrid live & asynchronous (4 weeks)',
    outcomes: [
      'Confidence to run steering forums, risk reviews, and planning cycles.',
      'Toolkit of templates, facilitation guides, and communication frameworks.',
      'Coaching on stakeholder management and executive storytelling.'
    ]
  },
  {
    id: 'product-leadership',
    name: 'Product Strategy Studio',
    format: '2-day workshop + playbook',
    outcomes: [
      'Craft compelling product narratives anchored in measurable outcomes.',
      'Operationalize discovery cadences and feedback loops with GTM and CS.',
      'Establish decision criteria for roadmap bets, experiments, and sunsetting.'
    ]
  },
  {
    id: 'reviews',
    name: 'Review Facilitation Lab',
    format: 'Interactive sessions + shadowing',
    outcomes: [
      'Design and lead monthly/quarterly business reviews that drive decisions.',
      'Synthesize insights from analytics and frontline signals effectively.',
      'Implement action tracking, follow-through, and accountability systems.'
    ]
  },
  {
    id: 'analytics',
    name: 'Insight Activation Bootcamp',
    format: '3-week program + office hours',
    outcomes: [
      'Define metrics that matter, with owners and data quality guardrails.',
      'Design executive dashboards that invite action, not just observation.',
      'Operationalize review notes, decisions, and follow-ups in tooling.'
    ]
  }
];

export const reviewRhythms = [
  {
    id: 'mbr',
    name: 'Monthly Technical Business Review',
    frequency: 'Every 4 weeks',
    audience: 'Product, engineering, operations, GTM leads',
    focus: [
      'Health of roadmap commitments, releases, and customer promises.',
      'Top risks, mitigations, and decisions needed from leadership.',
      'Momentum metrics: velocity, adoption, quality, and support trends.'
    ],
    outcomes: [
      'Action log with owners and due dates captured during the session.',
      'Single source of truth deck and dashboard snapshots in shared workspace.'
    ]
  },
  {
    id: 'qbr',
    name: 'Quarterly Executive Review',
    frequency: 'Quarterly',
    audience: 'C-suite, product, finance, regional leadership',
    focus: [
      'Strategic progress against OKRs, revenue, and portfolio health.',
      'Investment trade-offs, market signals, and scenario planning.',
      'Customer narrative, churn risk, and upcoming innovation bets.'
    ],
    outcomes: [
      'Executive decision memo with approved investments and pivots.',
      'Roadmap updates synchronized with financial and GTM rhythms.'
    ]
  },
  {
    id: 'pi-readout',
    name: 'Program Increment Readout',
    frequency: 'Every 8-12 weeks',
    audience: 'Program leadership, squad leads, PMO',
    focus: [
      'PI objectives status, delivery confidence, and dependencies.',
      'Capability and capacity planning aligned to upcoming quarter.',
      'Retrospective themes and improvement backlog prioritization.'
    ],
    outcomes: [
      'Integrated capacity model and release plan for the next increment.',
      'Improvement actions linked to owners with progress tracking.'
    ]
  }
];

export const analyticsChannels = [
  {
    id: 'exec-dashboard',
    name: 'Executive Control Tower',
    description:
      'Live dashboards combining product outcomes, program delivery, financial performance, and customer health.',
    examples: [
      'North-star and supporting metrics with confidence intervals.',
      'Dependency & risk radar with drill-down to squads and regions.',
      'Narrative layer surfacing insights, decisions required, and follow-ups.'
    ]
  },
  {
    id: 'ops-center',
    name: 'Operations Command Center',
    description:
      'Day-to-day analytics for program managers and product ops to orchestrate delivery and respond to signals.',
    examples: [
      'Flow metrics (cycle time, throughput, predictability) by team.',
      'Capacity heatmaps, staffing scenarios, and workload balance.',
      'Automated alerts for SLA breaches, feature adoption dips, or blockers.'
    ]
  },
  {
    id: 'customer-intel',
    name: 'Customer Intelligence Channels',
    description:
      'Feedback and insights pipelines connecting product, GTM, and support to drive roadmap clarity.',
    examples: [
      'Voice-of-customer insights integrated with opportunity sizing.',
      'Feature usage segmentation by cohort, region, and platform.',
      'Qual/quant signal fusion for prioritization and launch retros.'
    ]
  },
  {
    id: 'data-quality',
    name: 'Data Quality & Governance Scorecards',
    description:
      'Transparent view of data health, ownership, and lifecycle to increase trust and adoption.',
    examples: [
      'Critical data elements tracked with freshness, accuracy, and SLA indicators.',
      'Ownership matrix and escalation path for data incidents.',
      'Change logs and lineage diagrams integrated with analytics catalog.'
    ]
  }
];

export const insights = [
  {
    id: 'northstar',
    title: 'Operate With a Northstar',
    description:
      'Tie every program, sprint, and review to a measurable, customer-backed outcome so teams row in the same direction.'
  },
  {
    id: 'rhythms',
    title: 'Design the Right Rhythms',
    description:
      'Cadence is the secret weapon. When monthly and quarterly reviews are predictable, decisions accelerate and trust compounds.'
  },
  {
    id: 'signals',
    title: 'Invest in Signals, Not Slides',
    description:
      'Automated analytics channels replace manual decks, giving leaders a live pulse on expansion, M&A, and delivery health.'
  },
  {
    id: 'enablement',
    title: 'Enable People to Own the Frameworks',
    description:
      'We build the playbooks and run the reps with your teams so the operating system thrives long after the engagement ends.'
  }
];
