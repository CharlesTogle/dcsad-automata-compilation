/**
 * UMAK Link Directory — script.js
 *
 * HOW TO ADD / REMOVE LINKS:
 * Just edit the `links` array below.
 * Each entry needs:
 *   group  — e.g. "GROUP 01"
 *   name   — display name shown on the card
 *   url    — the full URL (also used for the iframe preview)
 *
 * The grid is fully dynamic — add as many entries as you like.
 * The 4-column layout is handled by CSS grid.
 */

const links = [
  {
    group: "GROUP 01",
    name:  "University of Makati",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 02",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 03",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 04",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 05",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 06",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 07",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 08",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 09",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 10",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 11",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  },
  {
    group: "GROUP 12",
    name:  "Add Link Here",
    url:   "https://www.umak.edu.ph/"
  }
];

/* ─────────────────────────────────────────────
   Build and inject cards
───────────────────────────────────────────── */
function createCard(link, index) {
  /* Outer anchor — clicking opens the link */
  const card = document.createElement("a");
  card.className = "card";
  card.href = link.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.title = link.name;

  /* Stagger the entrance animation */
  card.style.animationDelay = `${index * 60}ms`;

  /* ── Loading shimmer (shown until iframe loads) ── */
  const shimmer = document.createElement("div");
  shimmer.className = "card-preview-loading";
  card.appendChild(shimmer);

  /* ── iframe preview ── */
  const iframe = document.createElement("iframe");
  iframe.className = "card-preview";
  iframe.setAttribute("loading", "lazy");
  iframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("tabindex", "-1");
  iframe.setAttribute("aria-hidden", "true");
  iframe.src = link.url;

  /* Remove shimmer once the iframe has loaded */
  iframe.addEventListener("load", () => {
    shimmer.style.transition = "opacity 0.4s";
    shimmer.style.opacity = "0";
    setTimeout(() => shimmer.remove(), 420);
  });

  card.appendChild(iframe);

  /* ── Gradient overlay ── */
  const overlay = document.createElement("div");
  overlay.className = "card-overlay";
  card.appendChild(overlay);

  /* ── Label (group + name) ── */
  const label = document.createElement("div");
  label.className = "card-label";

  const groupEl = document.createElement("span");
  groupEl.className = "card-group";
  groupEl.textContent = link.group;

  const nameEl = document.createElement("span");
  nameEl.className = "card-name";
  nameEl.textContent = link.name;

  label.appendChild(groupEl);
  label.appendChild(nameEl);
  card.appendChild(label);

  return card;
}

function renderGrid() {
  const grid = document.getElementById("card-grid");
  if (!grid) return;

  links.forEach((link, i) => {
    const card = createCard(link, i);
    grid.appendChild(card);
  });
}

/* Run after DOM is ready */
document.addEventListener("DOMContentLoaded", renderGrid);
