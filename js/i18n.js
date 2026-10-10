// i18n.js — Far Shore bilingual support (DE default, EN)

const translations = {
  de: {
    // Navigation
    "nav.shop": "Shop",
    "nav.journal": "Journal",
    "nav.story": "Unsere Geschichte",
    "nav.contact": "Kontakt",
    "nav.open": "Menü öffnen",
    "nav.close": "Menü schließen",
    "lang.aria": "Sprache wählen",

    // Hero
    "hero.headline": "Du bist angekommen.",
    "hero.poetry": "Kein Ort auf einer Karte – nur der stille Rand des Tages.",
    "hero.scroll": "Entdecken",
    "hero.scroll.aria": "Zur Kollektion scrollen",
    "hero.play.aria": "Video pausieren",
    "hero.mute.aria": "Ton einschalten",
    "hero.mute.aria.on": "Ton ausschalten",

    // Ritual
    "ritual.label": "Das Streben nach Reinheit",
    "ritual.heading": "<br>Kein Bambus.",
    "ritual.body":
      "Keine synthetischen Klebstoffe. Nur gepresste natürliche Holzpulver, Pflanzenharze und reine ätherische Öle – für einen federleichten, sauber brennenden Rauch.",

    // Collection
    "collection.heading": "Die Kollektion",
    "product.add_to_cart": "Bei Amazon ansehen",
    "product.dune.notes": "Sandelholz, Agarholz &amp; Rose",
    "product.driftwood.notes": "Zeder &amp; Vetiver",
    "product.estuary.notes": "Kamille, Lavendel &amp; Vetiver",
    "product.mist.notes": "Wermut, Bergamotte &amp; Sandelholz",

    // Journal
    "journal.heading": "Notizen von der Küste",
    "journal.card1.title": "Die ferne Küste: Die Geschichte hinter Far Shore",
    "journal.card1.excerpt":
      "Ein verbannter Dichter, eine Insel am Rand der Welt und der Rauch, der ihn heimbrachte...",
    "journal.card2.title": "Kernlos. Botanisch.",
    "journal.card2.excerpt":
      "Was in einem Far Shore Räucherstäbchen steckt – und was nicht. Kein Bambus, kein DPG, keine synthetischen Duftöle...",
    "journal.card3.title": "Die Kunst des langsamen Räucherwerks",
    "journal.card3.excerpt":
      "Gepresst, von Hand in ätherische Öle getaucht und langsam an der Luft gereift. So entsteht ein Far Shore Stäbchen...",
    "journal.card4.title": "Das Far Shore Ritual",
    "journal.card4.excerpt":
      "Eine Landschaft wählen, sie bewahren, sie entzünden. Vier Schritte zu einem 30-minütigen Ritual...",
    "journal.read_more": "Weiterlesen &rarr;",

    // Contact
    "contact.headline": "Erreiche das Ufer.",
    "contact.poetry": "Wir lesen jede Nachricht. Wir antworten mit Sorgfalt.",
    "contact.name.placeholder": "Dein Name",
    "contact.email.placeholder": "E-Mail-Adresse",
    "contact.topic.default": "Thema",
    "contact.topic.order": "Bestellanfrage",
    "contact.topic.wholesale": "Großhandel &amp; Händler",
    "contact.topic.press": "Presse &amp; Zusammenarbeit",
    "contact.topic.general": "Allgemeines",
    "contact.msg.placeholder": "Deine Nachricht",
    "contact.note": "Wir antworten innerhalb von 2 Werktagen.",
    "contact.submit": "Senden",
    "contact.success":
      'Deine Nachricht ist unterwegs.<br><span style="opacity:0.5;font-size:var(--text-base);">Wir melden uns in Kürze.</span>',
    "contact.error":
      'Etwas ist schiefgelaufen. Bitte schreibe uns direkt an <a href="mailto:concierge@thefarshorecollection.com">concierge@thefarshorecollection.com</a>.',

    // Article — shared
    "article.back": "Notizen von der Küste",
    "article.more": "Weiterlesen",
    "article.read_more": "Mehr lesen &rarr;",

    // Footer (journal pages)
    "footer.newsletter.label": "Bleibe in Kontakt.",
    "footer.newsletter.placeholder": "Deine E-Mail-Adresse",
    "footer.newsletter.btn": "Abonnieren",
    "footer.legal": "&copy; 2025 Far Shore. Alle Rechte vorbehalten.",
  },

  en: {
    // Navigation
    "nav.shop": "Shop",
    "nav.journal": "Journal",
    "nav.story": "Our Story",
    "nav.contact": "Contact",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "lang.aria": "Choose language",

    // Hero
    "hero.headline": "You Have Arrived.",
    "hero.poetry": "Not a place found on a map, but the quiet edge of the day.",
    "hero.scroll": "Scroll",
    "hero.scroll.aria": "Scroll to collection",
    "hero.play.aria": "Pause video",
    "hero.mute.aria": "Unmute video",
    "hero.mute.aria.on": "Mute video",

    // Ritual
    "ritual.label": "The Pursuit of Purity",
    "ritual.heading": "100% Coreless.<br>Zero Bamboo.",
    "ritual.body":
      "No synthetic glues. Just compressed natural wood powders, plant resins, and pure essential oils for a whisper-light, clean-burning smoke.",

    // Collection
    "collection.heading": "The Collection",
    "product.add_to_cart": "View on Amazon",
    "product.dune.notes": "Sandalwood, Agarwood &amp; Rose",
    "product.driftwood.notes": "Cedar &amp; Vetiver",
    "product.estuary.notes": "Chamomile, Lavender &amp; Vetiver",
    "product.mist.notes": "Wormwood, Bergamot &amp; Sandalwood",

    // Journal
    "journal.heading": "Notes from the Shore",
    "journal.card1.title": "The Far Shore: The Story Behind the Name",
    "journal.card1.excerpt":
      "An exiled poet, an island at the edge of the world, and the smoke that carried him home...",
    "journal.card2.title": "Coreless. Botanical.",
    "journal.card2.excerpt":
      "What's in a Far Shore incense stick — and what isn't. No bamboo, no DPG, no synthetic fragrance oils...",
    "journal.card3.title": "The Art of Slow Incense",
    "journal.card3.excerpt":
      "Pressed, hand-dipped in essential oils, and slowly air-cured. How a Far Shore stick is made...",
    "journal.card4.title": "The Far Shore Ritual",
    "journal.card4.excerpt":
      "Choose a landscape, keep it well, light it. Four steps to a thirty-minute ritual...",
    "journal.read_more": "Read More &rarr;",

    // Contact
    "contact.headline": "Reach the Shore.",
    "contact.poetry": "We read every message. We reply with care.",
    "contact.name.placeholder": "Your name",
    "contact.email.placeholder": "Email address",
    "contact.topic.default": "Topic",
    "contact.topic.order": "Order enquiry",
    "contact.topic.wholesale": "Wholesale &amp; stockists",
    "contact.topic.press": "Press &amp; collaboration",
    "contact.topic.general": "General",
    "contact.msg.placeholder": "Your message",
    "contact.note": "We respond within 2 business days.",
    "contact.submit": "Send",
    "contact.success":
      'Your message is on its way.<br><span style="opacity:0.5;font-size:var(--text-base);">We\'ll be in touch soon.</span>',
    "contact.error":
      'Something went wrong. Please email us directly at <a href="mailto:concierge@thefarshorecollection.com">concierge@thefarshorecollection.com</a>.',

    // Article — shared
    "article.back": "Notes from the Shore",
    "article.more": "Continue Reading",
    "article.read_more": "Read More &rarr;",

    // Footer (journal pages)
    "footer.newsletter.label": "Join the Far Shore.",
    "footer.newsletter.placeholder": "Your email address",
    "footer.newsletter.btn": "Subscribe",
    "footer.legal": "&copy; 2025 Far Shore. All rights reserved.",
  },
};

function getLang() {
  return localStorage.getItem("farshore-lang") || "de";
}

export function t(key) {
  return (translations[getLang()] || translations.de)[key];
}

function setLang(lang) {
  localStorage.setItem("farshore-lang", lang);
  document.documentElement.lang = lang;

  const t = translations[lang] || translations.de;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = t[el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const val = t[el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const val = t[el.dataset.i18nAria];
    if (val !== undefined) el.setAttribute("aria-label", val);
  });

  // Long-form article content blocks
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.hidden = el.dataset.lang !== lang;
  });

  // Update toggle label to show the OTHER language
  const label = lang === "de" ? "EN" : "DE";
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.textContent = label;
  });
}

function updateToggle(lang) {
  const label = lang === "de" ? "EN" : "DE";
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.textContent = label;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(getLang());
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = getLang() === "de" ? "en" : "de";
      setLang(next);
      updateToggle(next);
    });
  });
});
