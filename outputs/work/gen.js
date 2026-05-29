// Generate case study detail pages from a single template.
const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = path.join(__dirname, 'moodio.html');
const OUT_DIR = __dirname;

const projects = [
  {
    slug: 'soca',
    docTitle: 'SOCA — AI Job-Seeking Platform',
    crumb: 'SOCA · AI · B2C + B2B · 2023 — Now',
    h1: 'SOCA — AI <em>Job-Seeking</em> Platform',
    lead: 'A two-sided AI platform that helps candidates land roles faster — one-click resume generation, tailoring, auto-apply, and a recruiter portal that closes the loop. <strong style="color:var(--fg)">Angel-funded + 43% user growth.</strong>',
    meta: {
      Role: 'Lead UI/UX Designer<br/>Product Manager',
      Timeline: 'Sep 2023 — Now',
      Team: '4 interns mentored<br/>3 engineers',
      Tools: 'Figma · Notion<br/>LLM APIs',
    },
    cover: ['#ff7ed4', '#b15bff'],
    sections: [
      { num: '01', name: 'Overview', anchor: 'overview',
        desc: 'SOCA reframes the job hunt as an AI assistant — every candidate gets a senior recruiter and a writing partner in one tab.',
        imgs: [['#ff7ed4', '#b15bff', 580, 'Product Overview']] },
      { num: '02', name: 'The Challenge', anchor: 'challenge',
        desc: 'The application loop is broken in both directions: candidates burn hours rewriting resumes per role; recruiters drown in unsorted applicants. We needed a tool that helps both sides without picking a side.',
        imgs: [['#ec4899', '#8b5cf6', 720, 'Problem Map'], ['#8b5cf6', '#0ea5e9', 540, 'User Journey Audit']] },
      { num: '03', name: 'Process', anchor: 'process',
        desc: 'Three rounds of user interviews with both candidates and hiring managers. The AI features were prototyped in 2 weeks and validated against 30 pilot users before we shipped publicly.',
        imgs: [['#fbbf24', '#fb7185', 920, 'Research Synthesis'], ['#10b981', '#0ea5e9', 1080, 'Ideation & Wireframes'], ['#8b5cf6', '#22d3ee', 760, 'Prototype Iterations']] },
      { num: '04', name: 'Final Design', anchor: 'final',
        desc: 'Candidate flow: one-click resume tailoring with side-by-side diff; auto-apply with reviewable drafts. Recruiter portal: ranked candidates with explainable matching, integrated outreach.',
        imgs: [['#ff7ed4', '#b15bff', 1280, 'Candidate Flow'], ['#b15bff', '#6d3df0', 820, 'Recruiter Portal']] },
      { num: '05', name: 'Outcome', anchor: 'outcome',
        desc: 'Closed angel round on the back of the launch metrics. 43% user growth in the first 90 days. Mentored 4 design interns through the build.',
        imgs: [['#facc15', '#f97316', 540, 'Metrics Board']] },
    ],
    next: { slug: 'alibaba-xiniu', title: 'Alibaba Xiniu Manufacture' },
  },
  {
    slug: 'alibaba-xiniu',
    docTitle: 'Alibaba Xiniu Manufacture (2021)',
    crumb: 'Alibaba · B2B Manufacturing · 2021',
    h1: 'Alibaba Xiniu — <em>Smart</em> Manufacturing',
    lead: 'A B2B cloud platform that pulled fashion manufacturing into the cloud — message-driven file sharing, 3D modeling, and shared workspaces between PMs and developers. <strong style="color:var(--fg)">Satisfaction 68% → 93%.</strong>',
    meta: {
      Role: 'UI/UX Design Intern',
      Timeline: 'May 2021 — Jul 2021',
      Team: '3 PMs, 6 engineers,<br/>2 designers',
      Tools: 'Sketch · Figma<br/>Principle',
    },
    cover: ['#0b1d3a', '#1f4ea3'],
    sections: [
      { num: '01', name: 'Overview', anchor: 'overview',
        desc: 'Xiniu (犀牛) is Alibaba\'s entry into smart fashion manufacturing. I helped design the cloud platform that lets brands, PMs, and factory floors collaborate without a single phone call.',
        imgs: [['#0b1d3a', '#1f4ea3', 580, 'Platform Overview']] },
      { num: '02', name: 'The Challenge', anchor: 'challenge',
        desc: 'Manufacturing comms ran through WeChat and email. Files were lost; specs were misread; iteration time blew out. We needed a single source of truth for product-development teams.',
        imgs: [['#1e3a8a', '#3b82f6', 740, 'Workflow Audit']] },
      { num: '03', name: 'Process', anchor: 'process',
        desc: 'Two-week field study at a partner factory in Hangzhou. Interviews with PMs, sample-makers, and ops. Synthesized into a journey map and 3 priority workflows.',
        imgs: [['#fbbf24', '#fb7185', 900, 'Field Research'], ['#10b981', '#0ea5e9', 1040, 'IA & Wireframes']] },
      { num: '04', name: 'Final Design', anchor: 'final',
        desc: 'Built a message-driven file sharing module for the Rhino Smart Manufacturing platform. Also conceptualized a 3D fashion manufacturing platform from 0→1 with iterative usability testing.',
        imgs: [['#1f4ea3', '#0ea5e9', 1240, 'Hi-fi · 3D Platform'], ['#0b1d3a', '#3b82f6', 780, 'Messaging Module']] },
      { num: '05', name: 'Outcome', anchor: 'outcome',
        desc: 'PM↔developer communication efficiency improved from 53% to 83%. User satisfaction climbed from 68% to 93% after rolling out the redesigned platform.',
        imgs: [['#facc15', '#f97316', 520, 'Metrics']] },
    ],
    next: { slug: 'honda-ev', title: 'Honda EV Simulator APP' },
  },
  {
    slug: 'honda-ev',
    docTitle: 'Honda EV Simulator APP (2022)',
    crumb: 'Honda × CMU · Mobile · UX Lead · 2022',
    h1: 'Honda EV Simulator — <em>Range</em> Without Anxiety',
    lead: 'A CMU MIIPS Capstone sponsored by Honda. We designed an app experience that lets first-time EV drivers practice the mental model of range, charging, and trip planning before they ever buy.',
    meta: {
      Role: 'UX Lead<br/>Researcher',
      Timeline: 'Jan 2022 — Aug 2022',
      Team: '1 PM, 2 engineers,<br/>1 designer',
      Tools: 'Figma · ProtoPie<br/>Maze',
    },
    cover: ['#1aaa5c', '#7ed957'],
    sections: [
      { num: '01', name: 'Overview', anchor: 'overview',
        desc: 'Range anxiety is the #1 reason ICE drivers don\'t switch to EVs. Our brief: turn the showroom test drive into a year-long pre-purchase simulation.',
        imgs: [['#1aaa5c', '#7ed957', 580, 'Product Overview']] },
      { num: '02', name: 'The Challenge', anchor: 'challenge',
        desc: 'Drivers can\'t evaluate range against their real life until they\'ve owned the car. We needed a way to make that evaluation possible from inside their existing ICE-driving routines.',
        imgs: [['#0ea5e9', '#10b981', 740, 'Problem Map'], ['#22d3ee', '#a78bfa', 560, 'User Persona Set']] },
      { num: '03', name: 'Process', anchor: 'process',
        desc: 'Led the user research: contextual inquiries with 12 EV-curious drivers, 3 EV owners. Mapped journeys, ran concept tests, refined through 4 rounds.',
        imgs: [['#fbbf24', '#fb7185', 900, 'Research Synthesis'], ['#10b981', '#22d3ee', 1080, 'Ideation & Concepts']] },
      { num: '04', name: 'Final Design', anchor: 'final',
        desc: 'The shipped concept: an app that tracks the user\'s real ICE trips and replays them as EV scenarios, surfacing charge stops, costs, and trip-planning insights.',
        imgs: [['#1aaa5c', '#0ea5e9', 1280, 'Hi-fi Screens'], ['#7ed957', '#22d3ee', 820, 'Interaction Highlights']] },
      { num: '05', name: 'Outcome', anchor: 'outcome',
        desc: 'Presented at the CMU MIIPS Capstone showcase. Concept handed to Honda product team for downstream evaluation.',
        imgs: [['#facc15', '#f97316', 540, 'Project Recap']] },
    ],
    next: { slug: 'builders-connect', title: 'Builder\'s Connect (2023)' },
  },
  {
    slug: 'builders-connect',
    docTitle: 'Builder\'s Connect (2023)',
    crumb: 'CGI · Southern Co. · B2B PWA · 2022 — 2023',
    h1: 'Builder\'s Connect — <em>Faster</em> New Builds',
    lead: 'A Progressive Web App for Southern Company\'s new-construction workflow — replaced a 12-step legacy form with a guided flow. <strong style="color:var(--fg)">−30% service setup time, +25% operational efficiency.</strong>',
    meta: {
      Role: 'Product Designer',
      Timeline: 'Jun 2022 — Aug 2023',
      Team: '2 designers, 1 PM,<br/>4 engineers',
      Tools: 'Figma · Azure DevOps<br/>HTML / CSS',
    },
    cover: ['#1e3a8a', '#3b82f6'],
    sections: [
      { num: '01', name: 'Overview', anchor: 'overview',
        desc: 'Southern Company\'s builders had to call in service requests for every new construction. We built a PWA that gave them a self-service portal — no install, no training.',
        imgs: [['#1e3a8a', '#3b82f6', 580, 'Product Overview']] },
      { num: '02', name: 'The Challenge', anchor: 'challenge',
        desc: 'Service requests came in by phone, fax, and email — each costing the operations team 30+ minutes to triage. We needed to give builders a one-stop portal without disrupting field workflows.',
        imgs: [['#3b82f6', '#0ea5e9', 720, 'Operational Audit']] },
      { num: '03', name: 'Process', anchor: 'process',
        desc: 'Stakeholder workshops with Southern Co. ops leads. Heuristic eval of the legacy intranet. Wireframed 4 flows; usability-tested with builders on-site.',
        imgs: [['#fbbf24', '#fb7185', 880, 'Stakeholder Map'], ['#0ea5e9', '#8b5cf6', 1040, 'Wireframes']] },
      { num: '04', name: 'Final Design', anchor: 'final',
        desc: 'A PWA that works offline at job sites, syncs when reconnected. Guided flow for service setup; status tracker; document hub. Single design system carried across roles.',
        imgs: [['#3b82f6', '#1e3a8a', 1280, 'Hi-fi Screens'], ['#0ea5e9', '#22d3ee', 760, 'Design System']] },
      { num: '05', name: 'Outcome', anchor: 'outcome',
        desc: 'Launched to all Southern Co. builder accounts. −30% service setup time. +25% operational efficiency. Onboarding doc co-authored with the HCx consulting team.',
        imgs: [['#facc15', '#f97316', 540, 'Impact Metrics']] },
    ],
    next: { slug: 'xiaomi-smart-home', title: 'Xiaomi Smart Home APP' },
  },
  {
    slug: 'xiaomi-smart-home',
    docTitle: 'Xiaomi Smart Home APP (2020)',
    crumb: 'Xiaomi · iOS / Android · IoT · 2020',
    h1: 'Xiaomi Smart Home — <em>Glanceable</em> Control',
    lead: 'Reimagined the device control experience for Xiaomi\'s smart home app — fewer taps, more glanceable status, and a visual language tuned for a lived-in home rather than a showroom.',
    meta: {
      Role: 'UI/UX Design Intern',
      Timeline: 'Jun 2020 — Aug 2020',
      Team: '5 designers, 1 PM,<br/>8 engineers',
      Tools: 'Sketch · Principle',
    },
    cover: ['#a8d8e8', '#cab8ff'],
    sections: [
      { num: '01', name: 'Overview', anchor: 'overview',
        desc: 'Smart home apps tend to be feature menus disguised as remote controls. We rebuilt Xiaomi\'s app around what users actually do: a quick check, a quick tweak, a quick scene.',
        imgs: [['#a8d8e8', '#cab8ff', 580, 'Product Overview']] },
      { num: '02', name: 'The Challenge', anchor: 'challenge',
        desc: 'The legacy app showed every device as a row in a list. Users couldn\'t tell at a glance which lights were on, which scenes were active, which devices needed attention.',
        imgs: [['#cab8ff', '#a78bfa', 720, 'Heuristic Audit']] },
      { num: '03', name: 'Process', anchor: 'process',
        desc: 'In-home diaries with 6 Xiaomi households. Card-sort exercises on device-grouping logic. Three rounds of high-fidelity prototypes tested against the legacy app.',
        imgs: [['#fbbf24', '#fb7185', 900, 'In-home Research'], ['#10b981', '#22d3ee', 1080, 'Concepts & Wireframes']] },
      { num: '04', name: 'Final Design', anchor: 'final',
        desc: 'Glanceable home screen with grouped device cards. Color-coded status dots. Scene shortcuts pinned to the top. Visual system tuned for warm interiors, not white-box product shots.',
        imgs: [['#a78bfa', '#22d3ee', 1280, 'Hi-fi · Home'], ['#cab8ff', '#fbcfe8', 820, 'Device Detail States']] },
      { num: '05', name: 'Outcome', anchor: 'outcome',
        desc: 'Concept evaluated against the live app and adopted into Xiaomi\'s downstream IoT roadmap. Visual language carried into successor device categories.',
        imgs: [['#facc15', '#f97316', 540, 'Project Recap']] },
    ],
    next: { slug: 'groop', title: 'GROOP — On-Campus APP' },
  },
  {
    slug: 'groop',
    docTitle: 'GROOP: On-Campus APP (2020)',
    crumb: 'Self-initiated · Mobile · Campus · 2020',
    h1: 'GROOP — <em>Social</em> Discovery on Campus',
    lead: 'On-campus social discovery for student-run events that don\'t make it to the official bulletin board — pickup games, study sessions, last-minute coffees, dorm parties.',
    meta: {
      Role: 'Designer<br/>(Self-initiated)',
      Timeline: 'Spring 2020',
      Team: 'Solo',
      Tools: 'Figma · Principle',
    },
    cover: ['#7c3aed', '#ec4899'],
    sections: [
      { num: '01', name: 'Overview', anchor: 'overview',
        desc: 'Big campuses have a thousand micro-events happening every day. None of them make it to the official calendar. GROOP is a casual layer on top: post in 5 seconds, find in 3.',
        imgs: [['#7c3aed', '#ec4899', 580, 'Product Overview']] },
      { num: '02', name: 'The Challenge', anchor: 'challenge',
        desc: 'Existing platforms are too high-friction for spontaneous social activities. Group chats are siloed. Bulletin boards are formal. We needed an in-between for low-stakes invites.',
        imgs: [['#ec4899', '#8b5cf6', 720, 'Problem Map']] },
      { num: '03', name: 'Process', anchor: 'process',
        desc: 'Surveyed 60+ students across 3 universities. Found three core patterns: pickup, study, dorm. Designed minimal post + browse flow optimized for under-10-second interactions.',
        imgs: [['#fbbf24', '#fb7185', 880, 'User Research'], ['#10b981', '#0ea5e9', 1040, 'Wireframes']] },
      { num: '04', name: 'Final Design', anchor: 'final',
        desc: 'Single-screen post flow. Browse by proximity + time-to-event. RSVP without account creation. Trust signals from campus email verification only.',
        imgs: [['#7c3aed', '#ec4899', 1240, 'Hi-fi Screens']] },
      { num: '05', name: 'Outcome', anchor: 'outcome',
        desc: 'Self-initiated case study — used as a personal exploration of low-friction social UX. The patterns later influenced my work on SOCA\'s candidate onboarding flow.',
        imgs: [['#facc15', '#f97316', 540, 'Project Recap']] },
    ],
    next: { slug: 'xyg-window', title: 'XYG Window — Reddot Winner' },
  },
  {
    slug: 'xyg-window',
    docTitle: 'XYG Window — Brand & Comms (2023)',
    crumb: 'Branding · Reddot Winner · 2023',
    h1: 'XYG Window — <em>Reddot</em> 2023',
    lead: 'Brand & communication design for XYG Window — winner of the <strong style="color:var(--fg)">Reddot Design Award 2023</strong> in Brands &amp; Communication Design (02‑06428‑2023BC).',
    meta: {
      Role: 'Brand Designer',
      Timeline: '2023',
      Team: 'Studio + Client',
      Tools: 'Illustrator · InDesign<br/>Photoshop',
    },
    cover: ['#ff5fbf', '#b15bff'],
    sections: [
      { num: '01', name: 'Overview', anchor: 'overview',
        desc: 'XYG is a window-systems manufacturer. We rebuilt their brand identity and communications to translate technical precision into emotional warmth.',
        imgs: [['#ff5fbf', '#b15bff', 580, 'Brand Overview']] },
      { num: '02', name: 'The Challenge', anchor: 'challenge',
        desc: 'Industrial brands struggle to feel human. XYG\'s competitors looked like spec sheets. We needed an identity that signaled craftsmanship without losing engineering credibility.',
        imgs: [['#b15bff', '#6d3df0', 720, 'Brand Audit']] },
      { num: '03', name: 'Process', anchor: 'process',
        desc: 'Workshops with the founder + ops team. Mood-board reviews. Three identity directions, narrowed to one over two presentation rounds. Applied across print, web, and packaging.',
        imgs: [['#fbbf24', '#fb7185', 900, 'Mood Boards'], ['#ec4899', '#8b5cf6', 1080, 'Identity Exploration']] },
      { num: '04', name: 'Final Design', anchor: 'final',
        desc: 'Wordmark, supporting typography, color system, and a flexible grid for technical communications. Carries across brochures, factory signage, trade-show booths, and packaging.',
        imgs: [['#ff5fbf', '#b15bff', 1280, 'Brand System'], ['#b15bff', '#6d3df0', 820, 'Applications']] },
      { num: '05', name: 'Outcome', anchor: 'outcome',
        desc: '🏆 Reddot Design Award 2023, Brands & Communication Design category. Recognized for translating industrial precision into a warm, ownable identity.',
        imgs: [['#facc15', '#f97316', 540, 'Award & Press']] },
    ],
    next: { slug: 'honey-fragrance', title: 'Honey Fragrance — Brand & Pack' },
  },
  {
    slug: 'honey-fragrance',
    docTitle: 'Honey Fragrance — Brand & Pack (2019)',
    crumb: 'Branding · Packaging · 2019',
    h1: 'Honey Fragrance — From <em>Hive</em> to Bottle',
    lead: 'A tactile fragrance line built around honey, light and warmth. Identity, packaging, and shelf system designed end-to-end.',
    meta: {
      Role: 'Brand &amp; Packaging Designer',
      Timeline: '2019',
      Team: 'Solo · Parsons Studio',
      Tools: 'Illustrator · Photoshop<br/>InDesign',
    },
    cover: ['#fbbf24', '#f59e0b'],
    sections: [
      { num: '01', name: 'Overview', anchor: 'overview',
        desc: 'A speculative fragrance brand built around the question: what does honey feel like when you can\'t taste it? The answer: warm, golden, layered, slow.',
        imgs: [['#fbbf24', '#f59e0b', 580, 'Brand Overview']] },
      { num: '02', name: 'The Challenge', anchor: 'challenge',
        desc: 'Fragrance packaging is dominated by minimal black-on-white. How do you stand out without leaning on the obvious tropes — flowers, fruit, or pastel femininity?',
        imgs: [['#fde68a', '#fca5a5', 720, 'Category Audit']] },
      { num: '03', name: 'Process', anchor: 'process',
        desc: 'Material studies first: wax-paper, frosted glass, debossed kraft. Color extracted from real honey under different lights. Type-pairing tests for body-copy warmth.',
        imgs: [['#fef3c7', '#fde68a', 900, 'Material Studies'], ['#fbbf24', '#f59e0b', 1080, 'Identity Exploration']] },
      { num: '04', name: 'Final Design', anchor: 'final',
        desc: 'Identity, label system, primary + secondary packaging, and a modular shelf set. The whole line shares one wax-paper tactility — the brand recognition is in the touch.',
        imgs: [['#f59e0b', '#fb7185', 1240, 'Packaging System'], ['#fbbf24', '#fca5a5', 820, 'Shelf & Display']] },
      { num: '05', name: 'Outcome', anchor: 'outcome',
        desc: 'Final critique at Parsons. Selected for the year-end showcase. Studio-cited as a strong example of brand-by-material.',
        imgs: [['#facc15', '#f97316', 540, 'Project Recap']] },
    ],
    next: { slug: 'chocolate-bar', title: 'Chocolate Bar — Packaging' },
  },
  {
    slug: 'chocolate-bar',
    docTitle: 'Chocolate Bar Package (2019)',
    crumb: 'Packaging · Identity · 2019',
    h1: 'Chocolate Bar — <em>Modular</em> Shelf',
    lead: 'A pastel modular packaging system that lets one shelf carry an entire flavour story while staying instantly recognisable as a single brand family.',
    meta: {
      Role: 'Brand &amp; Packaging Designer',
      Timeline: '2019',
      Team: 'Solo · Parsons Studio',
      Tools: 'Illustrator · Photoshop',
    },
    cover: ['#fde68a', '#fca5a5'],
    sections: [
      { num: '01', name: 'Overview', anchor: 'overview',
        desc: 'A chocolate brand that ships in 9 flavours. Most candy brands use color to differentiate; we used color to unify and pattern to differentiate.',
        imgs: [['#fde68a', '#fca5a5', 580, 'Brand Overview']] },
      { num: '02', name: 'The Challenge', anchor: 'challenge',
        desc: 'When a brand has many flavours, the shelf becomes loud. How do you give the buyer instant recognition + flavour clarity without losing brand coherence?',
        imgs: [['#fca5a5', '#fb7185', 720, 'Shelf Audit']] },
      { num: '03', name: 'Process', anchor: 'process',
        desc: 'Pattern library exploration: 3 systems, each tested in mock-shelf photography. Final system uses a shared pastel base + unique pattern motif per flavour.',
        imgs: [['#fef3c7', '#fde68a', 900, 'Pattern Library'], ['#fca5a5', '#fbbf24', 1040, 'Mock Shelf Studies']] },
      { num: '04', name: 'Final Design', anchor: 'final',
        desc: 'Primary packaging (bar wrap), secondary packaging (gift box), shelf risers and POS material. One template, nine flavour variants.',
        imgs: [['#fde68a', '#fca5a5', 1240, 'Packaging Variants'], ['#fca5a5', '#fbbf24', 820, 'Shelf & Display']] },
      { num: '05', name: 'Outcome', anchor: 'outcome',
        desc: 'Final critique at Parsons. Selected for year-end exhibition. Studio reference for "system-thinking in CPG packaging".',
        imgs: [['#facc15', '#f97316', 540, 'Project Recap']] },
    ],
    next: { slug: 'moodio', title: 'Moodio — Video Agent' },
  },
];

function renderSection(s) {
  const imgs = s.imgs.map(([c1, c2, h, tag]) =>
    `          <div class="case-img" style="--c1:${c1}; --c2:${c2}; height: ${h}px;">\n            <span class="placeholder-tag">${tag} · ${h}px</span>\n          </div>`).join('\n');
  return `        <!-- Section ${s.num} — ${s.name} -->
        <section id="${s.anchor}" class="case-section reveal">
          <div class="case-section-head">
            <div class="num">Section ${s.num}</div>
            <h2>${s.name}</h2>
            <p>${s.desc}</p>
          </div>
${imgs}
        </section>`;
}

function renderToc(sections) {
  return sections.map((s, i) =>
    `          <li><a href="#${s.anchor}"${i === 0 ? ' class="is-active"' : ''}>${s.name}</a></li>`).join('\n');
}

function renderMeta(meta) {
  return Object.entries(meta).map(([k, v]) =>
    `            <div>\n              <dt>${k}</dt>\n              <dd>${v}</dd>\n            </div>`).join('\n');
}

function buildPage(p) {
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

  // Find and replace key blocks.
  // 1. title
  let html = template.replace(
    /<title>[^<]*<\/title>/,
    `<title>${p.docTitle} · Yu Tong Tiffany Ling</title>`
  );

  // 2. TOC
  const tocBlock = `        <ul class="case-toc">\n${renderToc(p.sections)}\n        </ul>`;
  html = html.replace(/<ul class="case-toc">[\s\S]*?<\/ul>/, tocBlock);

  // 3. Hero crumb
  html = html.replace(/<div class="crumb">[^<]*<\/div>/, `<div class="crumb">${p.crumb}</div>`);

  // 4. H1
  html = html.replace(/<h1>[\s\S]*?<\/h1>/, `<h1>${p.h1}</h1>`);

  // 5. Lead
  html = html.replace(/<p class="lead">[\s\S]*?<\/p>/, `<p class="lead">${p.lead}</p>`);

  // 6. Meta dl
  const metaBlock = `          <dl class="case-meta">\n${renderMeta(p.meta)}\n          </dl>`;
  html = html.replace(/<dl class="case-meta">[\s\S]*?<\/dl>/, metaBlock);

  // 7. Cover image gradient
  html = html.replace(
    /<div class="case-cover case-img" style="--c1:[^"]+; --c2:[^"]+;">\s*<span class="placeholder-tag">[^<]*<\/span>\s*<\/div>/,
    `<div class="case-cover case-img" style="--c1:${p.cover[0]}; --c2:${p.cover[1]};"><span class="placeholder-tag">Cover · 16:9</span></div>`
  );

  // 8. Sections — replace everything between <!-- Section 01 and the </section> right before <!-- Next project
  const sectionsBlock = p.sections.map(renderSection).join('\n\n');
  html = html.replace(
    /<!-- Section 01[\s\S]*?<\/section>\s*\n\s*<!-- Next project -->/,
    `${sectionsBlock}\n\n        <!-- Next project -->`
  );

  // 9. Next project
  html = html.replace(
    /<a class="case-next reveal" href="[^"]+">[\s\S]*?<\/a>/,
    `<a class="case-next reveal" href="${p.next.slug}.html">
          <div>
            <div class="label">Next project</div>
            <h3>${p.next.title}</h3>
          </div>
          <span class="arrow">→</span>
        </a>`
  );

  return html;
}

projects.forEach(p => {
  const out = path.join(OUT_DIR, `${p.slug}.html`);
  fs.writeFileSync(out, buildPage(p));
  console.log('wrote', out);
});
