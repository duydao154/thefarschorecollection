// i18n.js — Far Shore bilingual support (DE default, EN)
//
// Every translatable string on the site lives in `strings` below; pages carry
// only keys:
//   data-i18n="key"              → element content (HTML allowed)
//   data-i18n-alt="key"          → alt attribute
//   data-i18n-placeholder="key"  → placeholder attribute
//   data-i18n-aria="key"         → aria-label attribute
// Each key holds both languages side by side. A missing language falls back
// to German.

const LANGS = ["de", "en"];
const DEFAULT_LANG = "de";
const STORAGE_KEY = "farshore-lang";

const strings = {
  // ── Navigation ──
  "nav.shop": { de: "Shop", en: "Shop" },
  "nav.journal": { de: "Journal", en: "Journal" },
  "nav.story": { de: "Unsere Geschichte", en: "Our Story" },
  "nav.contact": { de: "Kontakt", en: "Contact" },
  "nav.open": { de: "Menü öffnen", en: "Open menu" },
  "nav.close": { de: "Menü schließen", en: "Close menu" },
  "nav.aria": { de: "Hauptnavigation", en: "Main navigation" },
  "lang.aria": { de: "Sprache wählen", en: "Choose language" },

  // ── Hero ──
  "hero.headline": { de: "Du bist angekommen.", en: "You Have Arrived." },
  "hero.poetry": {
    de: "Wo die Karte endet, wird der Tag still.",
    en: "Where the map ends, the day becomes still.",
  },
  "hero.scroll": { de: "Entdecken", en: "Scroll" },
  "hero.scroll.aria": {
    de: "Zur Kollektion scrollen",
    en: "Scroll to collection",
  },
  "hero.play.aria": { de: "Video pausieren", en: "Pause video" },
  "hero.mute.aria": { de: "Ton einschalten", en: "Unmute video" },
  "hero.mute.aria.on": { de: "Ton ausschalten", en: "Mute video" },

  // ── Ritual carousel ──
  "ritual.slide1.label": {
    de: "Das Streben nach Reinheit",
    en: "The Pursuit of Purity",
  },
  "ritual.slide1.heading": {
    de: "Kernlos.<br>Botanisch.",
    en: "Coreless.<br>Botanical.",
  },
  "ritual.slide1.body": {
    de: "Ohne Bambuskern. Nur gepresste Holzpulver, Pflanzenharze und reine ätherische Öle.",
    en: "No bamboo core. Just pressed wood powders, plant resins and pure essential oils.",
  },
  "ritual.slide2.label": {
    de: "Die Kunst der Geduld",
    en: "The Art of Patience",
  },
  "ritual.slide2.alt": {
    de: "Hunderte von Hand gefertigte Räucherstäbchen trocknen auf Holzgestellen in einem Werkstatthof",
    en: "Hundreds of handmade incense sticks drying on wooden racks in a workshop courtyard",
  },
  "ritual.slide2.heading": {
    de: "Von Hand gefertigt.<br>Mit Zeit gereift.",
    en: "Made by hand.<br>Matured with time.",
  },
  "ritual.slide2.body": {
    de: "Geboren aus jahrhundertealter Handwerkskunst in einem kleinen Küstendorf in Ostasien.",
    en: "Born of centuries-old craftsmanship in a small coastal village in East Asia.",
  },
  "ritual.slide3.label": { de: "Der stille Moment", en: "The Quiet Moment" },
  "ritual.slide3.alt": {
    de: "Ein glimmendes Räucherstäbchen auf einer gesprenkelten Keramikschale, ein feiner Rauchfaden steigt auf",
    en: "A smouldering incense stick resting on a speckled ceramic dish, a fine thread of smoke rising",
  },
  "ritual.slide3.heading": {
    de: "Ein Faden Rauch.<br>Eine halbe Stunde.",
    en: "A thread of smoke.<br>Half an hour.",
  },
  "ritual.slide3.body": {
    de: "Fein, hell, ruhig. Gut dreißig Minuten, die nur dir gehören, bis nichts bleibt als eine Linie Asche.",
    en: "Fine, bright, calm. A good thirty minutes that belong only to you, until nothing remains but a line of ash.",
  },
  "ritual.slide4.label": {
    de: "Der Weg zur Küste",
    en: "The Way to the Shore",
  },
  "ritual.slide4.alt": {
    de: "Vier Momente mit Far Shore: am Schreibtisch, auf dem Sofa mit einem Buch, bei einer Tasse Tee mit Estuary und neben einer Yogamatte mit Mist",
    en: "Four moments with Far Shore: at a desk, on the sofa with a book, with a cup of tea and Estuary, and beside a yoga mat with Mist",
  },
  "ritual.slide4.heading": {
    de: "Vier Landschaften.<br>Vier Momente.",
    en: "Four landscapes.<br>Four moments.",
  },
  "ritual.slide4.body": {
    de: "Wähle nach dem Moment: The Mist für die Morgenrituale, The Driftwood für tiefen Fokus, The Estuary für das bewusste Abschalten, The Dune für lange Abende.",
    en: "Choose by the moment: The Mist for morning rituals, The Driftwood for deep focus, The Estuary for mindful unwinding, The Dune for long evenings.",
  },

  // ── Collection ──
  "collection.heading": { de: "Die Kollektion", en: "The Collection" },
  "product.add_to_cart": { de: "Bei Amazon ansehen", en: "View on Amazon" },
  "product.dune.notes": {
    de: "Sandelholz, Agarholz &amp; Rose",
    en: "Sandalwood, Agarwood &amp; Rose",
  },
  "product.driftwood.notes": {
    de: "Zeder &amp; Vetiver",
    en: "Cedar &amp; Vetiver",
  },
  "product.estuary.notes": {
    de: "Kamille, Lavendel &amp; Vetiver",
    en: "Chamomile, Lavender &amp; Vetiver",
  },
  "product.mist.notes": {
    de: "Wermut, Bergamotte &amp; Sandelholz",
    en: "Wormwood, Bergamot &amp; Sandalwood",
  },

  // ── Journal ──
  "journal.heading": {
    de: "Notizen von der Küste",
    en: "Notes from the Shore",
  },
  "journal.card1.title": {
    de: "Die ferne Küste: Die Geschichte hinter Far Shore",
    en: "The Far Shore: The Story Behind the Name",
  },
  "journal.card1.excerpt": {
    de: "Ein verbannter Dichter, eine Insel am Rand der Welt und der Rauch, der ihn heimbrachte...",
    en: "An exiled poet, an island at the edge of the world, and the smoke that carried him home...",
  },
  "journal.card2.title": {
    de: "Kernlos. Botanisch.",
    en: "Coreless. Botanical.",
  },
  "journal.card2.excerpt": {
    de: "Was in einem Far Shore Räucherstäbchen steckt – und was nicht. Kein Bambus, kein DPG, keine synthetischen Duftöle...",
    en: "What's in a Far Shore incense stick — and what isn't. No bamboo, no DPG, no synthetic fragrance oils...",
  },
  "journal.card3.title": {
    de: "Die Kunst des langsamen Räucherwerks",
    en: "The Art of Slow Incense",
  },
  "journal.card3.excerpt": {
    de: "Gepresst, von Hand in ätherische Öle getaucht und langsam an der Luft gereift. So entsteht ein Far Shore Stäbchen...",
    en: "Pressed, hand-dipped in essential oils, and slowly air-cured. How a Far Shore stick is made...",
  },
  "journal.card4.title": {
    de: "Das Far Shore Ritual",
    en: "The Far Shore Ritual",
  },
  "journal.card4.excerpt": {
    de: "Eine Landschaft wählen, sie bewahren, sie entzünden. Vier Schritte zu einem 30-minütigen Ritual...",
    en: "Choose a landscape, keep it well, light it. Four steps to a thirty-minute ritual...",
  },
  "journal.read_more": { de: "Weiterlesen &rarr;", en: "Read More &rarr;" },

  // ── Contact ──
  "contact.headline": { de: "Erreiche die Küste.", en: "Reach the Shore." },
  "contact.poetry": {
    de: "Wir lesen jede Nachricht. Wir antworten mit Sorgfalt.",
    en: "We read every message. We reply with care.",
  },
  "contact.name.placeholder": { de: "Dein Name", en: "Your name" },
  "contact.email.placeholder": { de: "E-Mail-Adresse", en: "Email address" },
  "contact.topic.default": { de: "Thema", en: "Topic" },
  "contact.topic.order": { de: "Bestellanfrage", en: "Order enquiry" },
  "contact.topic.wholesale": {
    de: "Großhandel &amp; Händler",
    en: "Wholesale &amp; stockists",
  },
  "contact.topic.press": {
    de: "Presse &amp; Zusammenarbeit",
    en: "Press &amp; collaboration",
  },
  "contact.topic.general": { de: "Allgemeines", en: "General" },
  "contact.msg.placeholder": { de: "Deine Nachricht", en: "Your message" },
  "contact.note": {
    de: "Wir antworten innerhalb von 2 Werktagen.",
    en: "We respond within 2 business days.",
  },
  "contact.submit": { de: "Senden", en: "Send" },
  "contact.success": {
    de: 'Deine Nachricht ist unterwegs.<br><span style="opacity:0.5;font-size:var(--text-base);">Wir melden uns in Kürze.</span>',
    en: 'Your message is on its way.<br><span style="opacity:0.5;font-size:var(--text-base);">We\'ll be in touch soon.</span>',
  },
  "contact.error": {
    de: 'Etwas ist schiefgelaufen. Bitte schreibe uns direkt an <a href="mailto:concierge@thefarshorecollection.com">concierge@thefarshorecollection.com</a>.',
    en: 'Something went wrong. Please email us directly at <a href="mailto:concierge@thefarshorecollection.com">concierge@thefarshorecollection.com</a>.',
  },

  // ── Article — shared ──
  "article.back": { de: "Notizen von der Küste", en: "Notes from the Shore" },
  "article.more": { de: "Weiterlesen", en: "Continue Reading" },
  "article.read_more": { de: "Mehr lesen &rarr;", en: "Read More &rarr;" },

  // ── Footer (journal pages) ──
  "footer.newsletter.label": {
    de: "Bleibe in Kontakt.",
    en: "Join the Far Shore.",
  },
  "footer.newsletter.placeholder": {
    de: "Deine E-Mail-Adresse",
    en: "Your email address",
  },
  "footer.newsletter.btn": { de: "Abonnieren", en: "Subscribe" },
  "footer.legal": {
    de: "&copy; 2025 Far Shore. Alle Rechte vorbehalten.",
    en: "&copy; 2025 Far Shore. All rights reserved.",
  },

  // ── Journal article: Die ferne Küste (/journal/die-ferne-kueste/) ──
  "die-ferne-kueste.label": {
    de: "Geschichte &amp; Bedeutung",
    en: "Story &amp; Meaning",
  },
  "die-ferne-kueste.meta": { de: "4 Min. Lesezeit", en: "4 min read" },
  "die-ferne-kueste.body1": {
    de: "Es gibt Orte, die auf keiner Karte stehen. Man erreicht sie über einen Atemzug.",
    en: "Some places are not found on any map. You reach them by a deep breath.",
  },
  "die-ferne-kueste.body2": {
    de: "Far Shore ist einer dieser Orte. Es ist der stille Rand des Tages, an dem die Gedanken langsamer werden und die Gegenwart genügt. Um zu erklären, woher dieser Name kommt, müssen wir fast tausend Jahre zurückgehen – zu einem Dichter, der alles verlor und dabei etwas fand.",
    en: "Far Shore is one of those places. It is a state of mind: the quiet edge of the day, where thought slows and the present is enough. To explain the name, we have to go back almost a thousand years to a poet who lost everything and found something in the losing.",
  },
  "die-ferne-kueste.body3": {
    de: "Der Dichter am Rand der Welt",
    en: "The poet at the edge of the world",
  },
  "die-ferne-kueste.alt1": {
    de: "Illustration: ein Gelehrter blickt über die Küste Hainans, begleitet vom Gedicht &bdquo;Kein Ort auf einer Karte&ldquo;",
    en: "Illustration: a scholar looks out over the Hainan coastline, alongside the poem &ldquo;Not a place found on a map&rdquo;",
  },
  "die-ferne-kueste.body4": {
    de: "Su Dongpo (1037-1101) war einer der größten Dichter, Maler und Kalligraphen der chinesischen Song-Dynastie. Er war auch unbequem. Seine Worte brachten ihm Bewunderung ein, aber auch immer wieder die Verbannung.",
    en: "Su Dongpo was among the greatest poets, painters and calligraphers of China's Song dynasty. He was also inconvenient. His words won him admiration but also led him to exile.",
  },
  "die-ferne-kueste.body5": {
    de: "Die letzte führte ihn, schon über sechzig Jahre alt, auf die Insel Hainan. Für den Hof in der Hauptstadt war das der Rand der bekannten Welt: jenseits des Meeres, jenseits der Ordnung, jenseits jeder Rückkehr. Er kam mit wenig an. Einige Bücher. Einen Tuschstein. Seinen Pinsel.",
    en: "The last exile took him, when he was past the age of sixty, to the island of Hainan. To the court in the capital, it was the edge of the known world: beyond the sea, beyond order, beyond return. He arrived carrying very little with him. A few books. An inkstone. His brush.",
  },
  "die-ferne-kueste.body6": {
    de: "Und er begann, Räucherwerk herzustellen.",
    en: "One day, restless and without purpose, he began to make incense.",
  },
  "die-ferne-kueste.body7": {
    de: "Die Überlieferung erzählt, dass Su Dongpo aus den Hölzern und Harzen der Insel eigene Mischungen formte und über den Duft schrieb wie über einen Freund. Er brauchte keinen Palast, um zur Ruhe zu kommen. Er brauchte nur einen stillen Morgen, einen faden Rauch und die Aufmerksamkeit, ihm zu folgen.",
    en: "Tradition holds that Su Dongpo blended his own incense from the island's woods and resins, and wrote about fragrance as one writes about a friend. He did not need any palace to find stillness. Only a quiet morning, a thread of smoke, and the attention to follow it.",
  },
  "die-ferne-kueste.body8": {
    de: "Dort, an der fernsten Küste seines Lebens, fand er, was ihm am Hof gefehlt hatte.",
    en: "There, on the farthest shore of his life, he found what the court had never given him.",
  },
  "die-ferne-kueste.body9": { de: "Die andere Küste", en: "The other shore" },
  "die-ferne-kueste.body10": {
    de: "In der buddhistischen Gedankenwelt Ostasiens gibt es ein Bild, das diese Geschichte trägt: die andere Küste. Diesseits des Meeres liegen Unruhe, Eile, das ständige Wollen. Jenseits davon liegt Klarheit. Man überquert dieses Meer nicht mit einem Boot, sondern mit dem Geist.",
    en: "East Asian Buddhist thought carries an image that holds this story: the other shore. On this side of the sea lie restlessness, hurry, endless wanting. On the far side lies clarity. You cross this sea not by boat but with your own mind.",
  },
  "die-ferne-kueste.body11": {
    de: "Far Shore ist unser Name für diese andere Küste. Kein Rückzug aus der Welt, sondern eine Rückkehr zu sich selbst für eine gute halbe Stunde lang, so lange, wie ein Stäbchen brennt.",
    en: "Far Shore is our name for that other shore. It is not simply an escape from the world, but a return to yourself: for a good half hour, the time it takes one stick to burn.",
  },
  "die-ferne-kueste.body12": { de: "Warum Rauch", en: "Why smoke" },
  "die-ferne-kueste.alt2": {
    de: "Ein einzelnes Far Shore Stäbchen brennt auf einem Steinteller, ein Buch daneben",
    en: "A single Far Shore stick burning on a stone dish, a book beside it",
  },
  "die-ferne-kueste.alt3": {
    de: "Ein Far Shore Stäbchen glimmt in einem Steinhalter auf einem Holztisch, daneben die geöffnete Schubladenbox",
    en: "A Far Shore stick smouldering in a stone holder on a wooden table, the open drawer box beside it",
  },
  "die-ferne-kueste.body13": {
    de: "Der Geruchssinn ist der einzige Sinn, der ohne Umweg über den Thalamus direkt das limbische System erreicht – jenen Teil des Gehirns, der Erinnerung und Gefühl verbindet. Deshalb kann ein Duft uns schneller an einen anderen Ort bringen als jedes Bild.",
    en: "Smell is the only sense that bypasses the thalamus and directly reaches the limbic system, the part of the brain where memory and emotions meet. That is why a scent can carry us somewhere faster than any image.",
  },
  "die-ferne-kueste.body14": {
    de: "In Tempeln, Teehäusern und Studierzimmern Ostasiens wurde Räucherwerk nie als Dekoration verstanden. Es war ein Signal: Das Gewöhnliche pausiert. Jetzt beginnt etwas anderes.",
    en: "In the temples, tea houses and scholars' studios of East Asia, incense was more than a decoration. It was a signal: the ordinary pauses and something else begins.",
  },
  "die-ferne-kueste.body15": {
    de: "Wabi-Sabi: die Schönheit des Unvollkommenen",
    en: "Wabi-sabi: the beauty of the imperfect",
  },
  "die-ferne-kueste.body16": {
    de: "Su Dongpos Leben auf Hainan war alles andere als perfekt. Gerade darin liegt seine Kraft. Die japanische Ästhetik des Wabi-Sabi nennt es die Schönheit des Unvollendeten, Vergänglichen, Ehrlichen: rissige Glasur, verwittertes Holz, Asche, die zu Boden fällt.",
    en: "Su Dongpo's life in Hainan was far from perfect. That is where its power lies. The Japanese aesthetic of wabi-sabi calls it the beauty of the unfinished, the impermanent, the honest: crackled glaze, weathered wood, ash falling quietly.",
  },
  "die-ferne-kueste.body17": {
    de: "Jedes Detail von Far Shore folgt diesem Gedanken. Ein Stäbchen ohne Kern, das vollständig zu Asche wird. Düfte, die nach Landschaften benannt sind, statt nach Versprechen. Eine Verpackung, die aufbewahrt statt weggeworfen wird.",
    en: "Every detail of Far Shore follows this thought. A stick with no core, which burns entirely to ash. Scents named after landscapes rather than promises. Packaging was designed to be kept rather than thrown away.",
  },
  "die-ferne-kueste.body18": {
    de: "Für wen Far Shore ist",
    en: "Who Far Shore is for",
  },
  "die-ferne-kueste.body19": {
    de: "Für alle, die Ruhe nicht inszenieren wollen, sondern finden. Für Menschen, die bemerken, wie ein Gegenstand gemacht ist. Die einen Raum lieber schweigen als sprechen hören.",
    en: "For those who would rather find calm than perform it. For people who notice how an object is made. For all who prefer a room that is silent to one that speaks.",
  },
  "die-ferne-kueste.body20": {
    de: "Du musst nicht auf eine Insel verbannt werden, um die ferne Küste zu erreichen. Du musst nur ein Streichholz anzünden und dort bleiben.",
    en: "You don't need to be exiled to an island to reach the far shore. You only need to strike a match and stay there.",
  },
  "die-ferne-kueste.cta": {
    de: "Wie das Ritual beginnt, erfährst du hier.",
    en: "See how the ritual begins.",
  },
  "die-ferne-kueste.link1": {
    de: "Das Far Shore Ritual &rarr;",
    en: "The Far Shore Ritual &rarr;",
  },

  // ── Journal article: Das Far Shore Ritual (/journal/far-shore-ritual/) ──
  "far-shore-ritual.label": {
    de: "Ritual &amp; Praxis",
    en: "Ritual &amp; Practice",
  },
  "far-shore-ritual.title": {
    de: "Das Far Shore-Ritual: Eine Landschaft wählen, sie bewahren, sie entzünden",
    en: "The Far Shore Ritual: Choose a landscape, keep it well, light it",
  },
  "far-shore-ritual.meta": { de: "4 Min. Lesezeit", en: "4 min read" },
  "far-shore-ritual.body1": {
    de: "Ein Räucherstäbchen brennt gut dreißig Minuten. Was in dieser halben Stunde geschieht, liegt bei dir.",
    en: "One stick burns for a good thirty minutes. What happens in that half hour is up to you.",
  },
  "far-shore-ritual.body2": {
    de: "Die meisten von uns zünden Räucherwerk nebenbei an wie eine Kerze beim Abendessen. Das Far Shore Ritual lädt zu etwas anderem ein. Nicht zu mehr Aufwand, sondern zu mehr Aufmerksamkeit. Das Ritual umfasst vier Schritte.",
    en: "Most of us light incense the way we casually light a candle at dinner. The Far Shore ritual invites something else. There is no more effort but only more attention. Four steps are all you need.",
  },
  "far-shore-ritual.body3": {
    de: "1. Wähle deine Landschaft",
    en: "1. Choose your landscape",
  },
  "far-shore-ritual.body4": {
    de: "Jeder Far Shore Duft ist nach einer Landschaft benannt. Wähle den richtigen nach dem Moment, in dem du dich befindest.",
    en: "Each Far Shore scent is named after a landscape. Choose the landscape by the moment you're in.",
  },
  "far-shore-ritual.body5": {
    de: "Neu bei Far Shore? Beginne mit Driftwood. Es ist die ruhigste Landschaft und ein guter erster Schritt an die Küste.",
    en: "New to Far Shore? Start with Driftwood. It is the calmest landscape and a good first step toward the shore.",
  },
  "far-shore-ritual.alt1": {
    de: "Die vier Far Shore Boxen, jede begleitet von den botanischen Zutaten ihrer Landschaft",
    en: "The four Far Shore boxes, each paired with its landscape's botanical ingredients",
  },
  "far-shore-ritual.alt2": {
    de: "Ein brennendes Streichholz entzündet ein Räucherstäbchen in einem schlichten Halter auf einem Holztisch",
    en: "A lit match touching an incense stick in a simple holder on a wooden table",
  },
  "far-shore-ritual.alt3": {
    de: "Die vier Far Shore Boxen neben einem Buch und einem Lautsprecher in einem hellen Wohnzimmer",
    en: "The four Far Shore boxes beside a book and a speaker in a bright living room",
  },
  "far-shore-ritual.alt4": {
    de: "Eine Hand schiebt Räucherstäbchen zurück in ihren Papierbeutel",
    en: "A hand sliding incense sticks back into their paper bag",
  },
  "far-shore-ritual.body6": { de: "Landschaft", en: "Landscape" },
  "far-shore-ritual.body7": { de: "Duftnoten", en: "Notes" },
  "far-shore-ritual.body8": { de: "Der Moment", en: "The moment" },
  "far-shore-ritual.body9": { de: "Die Stimmung", en: "The mood" },
  "far-shore-ritual.body10": { de: "Kaufen", en: "Shop" },
  "far-shore-ritual.body11": {
    de: "Früher Morgen, bevor der Tag beginnt",
    en: "Early morning, before the day begins",
  },
  "far-shore-ritual.body12": {
    de: "Klar, offen, wach",
    en: "Clear, open, awake",
  },
  "far-shore-ritual.body13": {
    de: "Zedernholz &amp; Vetiver",
    en: "Cedarwood &amp; Vetiver",
  },
  "far-shore-ritual.body14": {
    de: "Meditation, tiefen Fokus, kreatives Arbeiten",
    en: "Meditation, deep focus and creative work",
  },
  "far-shore-ritual.body15": { de: "Geerdet, still", en: "Grounded, still" },
  "far-shore-ritual.body16": {
    de: "Ein langer, langsamer Abend",
    en: "A long, slow evening",
  },
  "far-shore-ritual.body17": {
    de: "Tief, warm, kontemplativ",
    en: "Deep, warm, contemplative",
  },
  "far-shore-ritual.body18": {
    de: "Nach der Arbeit, beim Ankommen zu Hause",
    en: "Transition from work to relaxing evening",
  },
  "far-shore-ritual.body19": {
    de: "Weich, sanft, loslassend",
    en: "Soft, gentle, letting go",
  },
  "far-shore-ritual.body20": {
    de: '<a class="article-btn" href="https://www.amazon.de/dp/B0HMLMRZ73" target="_blank" rel="noopener noreferrer" >Amazon</a >',
    en: '<a class="article-btn" href="https://www.amazon.de" target="_blank" rel="noopener noreferrer" >Amazon</a >',
  },
  "far-shore-ritual.body21": {
    de: "2. Bereite den Raum vor",
    en: "2. Prepare the space",
  },
  "far-shore-ritual.body22": {
    de: "Stelle deinen Räucherhalter auf eine stabile, hitzebeständige Fläche, fern von Vorhängen, Papier und Zugluft. Ein leicht geöffnetes Fenster in der Nähe ist ideal: Der Duft verteilt sich, ohne zu verfliegen. Lege dein Telefon zur Seite. Stelle die Musik bereit.",
    en: "Set your incense holder on a stable, heat-resistant surface away from curtains, paper and draughts. A slightly open window nearby is ideal: the scent spreads without vanishing. Put your phone aside. Queue the music.",
  },
  "far-shore-ritual.body23": {
    de: "3. Entzünde das Stäbchen",
    en: "3. Light the stick",
  },
  "far-shore-ritual.body24": {
    de: "Halte die Spitze des Stäbchens in die Flamme, bis sie gleichmäßig brennt – etwa fünf Sekunden.",
    en: "Hold the tip in the flame until it burns evenly at about five seconds.",
  },
  "far-shore-ritual.body25": {
    de: "Blase die Flamme sanft aus. Es bleibt eine glimmende Glut und ein feiner Faden Rauch.",
    en: "Blow the flame out gently. A glowing ember and a fine thread of smoke remain.",
  },
  "far-shore-ritual.body26": {
    de: "Stecke das Stäbchen in den Halter, leicht geneigt oder aufrecht.",
    en: "Place the stick in the holder, upright or slightly angled.",
  },
  "far-shore-ritual.body27": {
    de: "Lass es vollständig abbrennen. Die Asche fällt als feine Linie in die Schale des Halters.",
    en: "Let it burn down completely. The ash falls as a fine line into the holder's dish.",
  },
  "far-shore-ritual.body28": {
    de: "Lass brennendes Räucherwerk nie unbeaufsichtigt und halte es von Kindern und Haustieren fern.",
    en: "Never leave burning incense unattended, and keep it away from children and pets.",
  },
  "far-shore-ritual.body29": {
    de: "4. Höre der Küste zu",
    en: "4. Listen to the shore",
  },
  "far-shore-ritual.body30": {
    de: "Zu jeder Landschaft haben wir eine eigene Playlist auf Spotify zusammengestellt: etwa dreißig Minuten, aufgebaut in drei Sätzen: Ankommen, Verweilen, Loslassen. Jede Playlist wird von einem Leitinstrument geprägt. Bei Driftwood ist es das Cello: tief und warm wie das Holz selbst.",
    en: "For each landscape we've curated a Spotify playlist: about thirty minutes, built in three movements — arriving, staying, letting go. Each follows its own anchor instrument. For Driftwood it is the cello: deep and warm, like the wood itself.",
  },
  "far-shore-ritual.body31": {
    de: "Starte die Playlist in dem Moment, in dem du das Streichholz anzündest. Das Stäbchen brennt gut dreißig Minuten, etwa so lange wie die Musik. Der letzte Satz klingt aus, während der letzte Rauch aufsteigt.",
    en: "Start the playlist as you strike the match. The stick burns for a good thirty minutes, about as long as the music that guides you. The final movement fades as the last smoke rises.",
  },
  "far-shore-ritual.body32": {
    de: "So bewahrst du deine Stäbchen",
    en: "How to keep your sticks",
  },
  "far-shore-ritual.body33": {
    de: "Ätherische Öle sind sehr flüchtig. Damit dein Räucherwerk sein Aroma möglichst lange behält, bewahre es im fest verschlossenen, duftbewahrenden Papierbeutel auf, am besten an einem kühlen, trockenen Ort, geschützt vor Hitze, Feuchtigkeit und Sonnenlicht.",
    en: "Essential oils are highly volatile. To help your incense keep its aroma for longer, store it in its closely sealed, scent-preserving paper bag. Ideally in a cool, dry place, away from heat, moisture and sunlight.",
  },
  "far-shore-ritual.body34": {
    de: "<strong>Verschließe den Papierbeutel</strong> nach jeder Entnahme wieder sorgfältig, damit die Öle nicht verfliegen.",
    en: "<strong>Reseal the paper bag</strong> carefully after every use, so the oils don't escape.",
  },
  "far-shore-ritual.body35": {
    de: "<strong>Lagere die Box liegend</strong> – die Stäbchen sind drei Millimeter dünn und ohne Kern empfindlich gegen Bruch.",
    en: "<strong>Store the box flat</strong> — at three millimetres and with no core, the sticks are delicate.",
  },
  "far-shore-ritual.body36": {
    de: "<strong>Getrennt von anderen Düften</strong>, damit jede Landschaft ihren Charakter behält.",
    en: "<strong>Keep it apart from other scents,</strong> so each landscape holds its character.",
  },
  "far-shore-ritual.body37": {
    de: "Die Schubladenbox aus Recycling-Kraftpapier ist dafür gemacht, im Regal zu stehen. Sie muss nicht versteckt werden.",
    en: "The drawer box in recycled cashmere paper is made to sit on a shelf. It doesn't need hiding.",
  },
  "far-shore-ritual.body38": {
    de: "Ein Ritual, das wiederkehrt",
    en: "A ritual that returns",
  },
  "far-shore-ritual.body39": {
    de: "Im Wabi-Sabi liegt die Tiefe in der Wiederholung: derselbe Tee, dieselbe Tasse, derselbe stille Moment. Du musst nicht jeden Tag räuchern. Aber wenn du es tust, tu es ganz. Eine halbe Stunde. Ein Rauchfaden. Die ferne Küste.",
    en: "In wabi-sabi, depth lives in repetition: the same tea, the same cup, the same quiet moment. You don't need to burn incense every day. But when you do, do it fully. Half an hour. One thread of smoke. Arrive at the Far Shore.",
  },

  // ── Journal article: Die Kunst des langsamen Räucherwerks (/journal/handwerk-raeucherwerk/) ──
  "handwerk-raeucherwerk.label": {
    de: "Herkunft &amp; Handwerk",
    en: "Origin &amp; Craftsmanship",
  },
  "handwerk-raeucherwerk.title": {
    de: "Die Kunst des langsamen Räucherwerks: Wie ein Far Shore Stäbchen entsteht",
    en: "The Art of Slow Incense: How a Far Shore stick is made",
  },
  "handwerk-raeucherwerk.meta": { de: "4 Min. Lesezeit", en: "4 min read" },
  "handwerk-raeucherwerk.body1": {
    de: "Ein gutes Räucherstäbchen lässt sich nicht beschleunigen. Man kann es nur begleiten: vom Pulver bis zur Asche.",
    en: "A good incense stick can't be hurried. You need to let it unfold slowly from powder to ash.",
  },
  "handwerk-raeucherwerk.body2": {
    de: "Ein Handwerk von der Küste Südchinas",
    en: "A craft from the South China coast",
  },
  "handwerk-raeucherwerk.body3": {
    de: "Unser Räucherwerk entsteht in einer kleinen Küstenstadt im Süden Chinas, in der die traditionelle Kunst der Räucherwerkherstellung über 600 Jahre bis in die Ming-Dynastie zurückreicht. Das Wissen wird von einer Generation zur nächsten weitergegeben: von Hand zu Hand, von Nase zu Nase.",
    en: "Our incense is made in a small coastal town in South China, where the traditional incense-making technique dates back to the Ming dynasty over 600 years ago. The knowledge is passed on from one generation to the next: from hand to hand, from nose to nose.",
  },
  "handwerk-raeucherwerk.body4": {
    de: "Jedes Far Shore-Stäbchen durchläuft vier Schritte. Keiner davon lässt sich überspringen.",
    en: "Every Far Shore stick goes through exactly four steps.",
  },
  "handwerk-raeucherwerk.body5": { de: "1. Die Mischung", en: "1. The blend" },
  "handwerk-raeucherwerk.body6": {
    de: "Am Anfang stehen natürliches Holzpulver und Pflanzenharze. Sie werden fein gesiebt und mit Wasser zu einer dichten, formbaren Masse verknetet. Das Verhältnis entscheidet über alles: wie gleichmäßig das Stäbchen glimmt, wie ruhig es brennt, wie lange der Duft nachklingt.",
    en: "It begins with natural wood powders and plant resins. They are finely sifted and kneaded with water into a dense, workable dough. The ratio decides everything: how evenly the stick smoulders, how calmly it burns, how long the scent lingers.",
  },
  "handwerk-raeucherwerk.body7": {
    de: "2. Das Pressen",
    en: "2. The pressing",
  },
  "handwerk-raeucherwerk.alt1": {
    de: "Von Hand wird die Masse durch eine feine Düse zu gleichmäßigen Strängen gepresst",
    en: "By hand, the dough is pressed through a fine die into even strands",
  },
  "handwerk-raeucherwerk.alt2": {
    de: "Hände kneten Holzpulver und Pflanzenharze zu einer dichten Masse, daneben Schalen mit Pulver und ein Mörser",
    en: "Hands kneading wood powder and plant resins into a dense dough, bowls of powder and a mortar beside them",
  },
  "handwerk-raeucherwerk.body8": {
    de: "Die Masse wird durch eine feine Düse gepresst – ein Verfahren, das man Extrusion nennt. Heraus kommt ein durchgehender Strang von genau 3 Millimetern Durchmesser, der auf 120 Millimeter Länge geschnitten wird. Das Stäbchen trägt sich selbst ohne Hilfe vom Bambusstab.",
    en: "The dough is pressed through a fine die, a process called extrusion. What emerges is a continuous strand exactly 3 millimetres across, cut to 120 millimetres. The sun-dried incense stick can hold itself even without the help of a bamboo core.",
  },
  "handwerk-raeucherwerk.body9": { de: "3. Das Tauchen", en: "3. The dipping" },
  "handwerk-raeucherwerk.body10": {
    de: "Nun folgt der Schritt, der jedem Stäbchen seine Landschaft gibt. Von Hand werden die Stäbchen in reine ätherische Öle getaucht – Zedernholz und Vetiver für Driftwood, Wermut, Bergamotte und Sandelholz für Mist, Sandelholz, Agarholz und Rose für Dune, Kamille, Lavendel und Vetiver für Estuary. Wie tief, wie lange, wie oft: Das entscheidet das Auge des Handwerkers, nicht eine Maschine.",
    en: "Next comes the step that gives each stick its landscape. By hand, the sticks are dipped in pure essential oils: cedarwood and vetiver for The Driftwood; wormwood, bergamot and sandalwood for The Mist; sandalwood, agarwood and rose for The Dune; chamomile, lavender and vetiver for The Estuary. How deep, how long, how often: the maker's eye decides, not a machine.",
  },
  "handwerk-raeucherwerk.body11": { de: "4. Das Reifen", en: "4. The curing" },
  "handwerk-raeucherwerk.body12": {
    de: "Zuletzt ruhen die Stäbchen auf Holzgestellen und trocknen langsam an der Luft. So können die Öle sich tief in das Holz setzen, statt an der Oberfläche zu verfliegen. Ein zu schnell getrocknetes Stäbchen bricht, brennt unruhig und verliert seinen Duft. Ein langsam gereiftes Stäbchen bleibt stabil, glimmt gleichmäßig und entfaltet seine Noten Schicht für Schicht.",
    en: "Finally, the sticks rest on wooden racks and dry slowly in the cool, open air. This lets the oils settle deep into the wood instead of evaporating from the surface. A stick dried too fast breaks, burns unevenly and loses its scent. A slowly cured stick stays stable, smoulders evenly and opens its notes layer by layer.",
  },
  "handwerk-raeucherwerk.body13": {
    de: "Warum Langsamkeit zählt",
    en: "Why slowness matters",
  },
  "handwerk-raeucherwerk.body14": {
    de: "Massenware wird in Stunden produziert. Ein Far Shore-Stäbchen braucht Zeit, Geduld und Menschen, die ihr Handwerk seit Generationen kennen. Diese Zeit riechst du. Im feinen Rauch, im klaren Duft, in der Asche, die als ungebrochene Linie zurückbleibt.",
    en: "Mass-market incense is made in hours. A Far Shore stick takes time, patience and people who have known their craft for generations. You can smell that time. In the fine smoke, the clear scent, and the ash that remains as one unbroken line.",
  },
  "handwerk-raeucherwerk.cta": {
    de: "Wie du dein Stäbchen am besten entzündest und bewahrst, liest du hier.",
    en: "How best to light and keep your sticks.",
  },
  "handwerk-raeucherwerk.link1": {
    de: "Vom Werkstattregal zu dir &rarr;",
    en: "From the Workshop to You &rarr;",
  },
  "handwerk-raeucherwerk.link2": {
    de: "Das Far Shore Ritual &rarr;",
    en: "The Far Shore Ritual &rarr;",
  },

  // ── Journal article: Kernlos. Botanisch. (/journal/kernloses-raeucherwerk/) ──
  "kernloses-raeucherwerk.label": {
    de: "Handwerk &amp; Zutaten",
    en: "Craft &amp; Ingredients",
  },
  "kernloses-raeucherwerk.title": {
    de: "Kernlos. Botanisch. Ehrlich. Was in einem Far Shore Räucherstäbchen steckt",
    en: "Coreless. Botanical. Honest. What's in a Far Shore incense stick",
  },
  "kernloses-raeucherwerk.meta": { de: "3 Min. Lesezeit", en: "3 min read" },
  "kernloses-raeucherwerk.body1": {
    de: "Wer schon einmal ein handelsübliches Räucherstäbchen angezündet hat, kennt das Ergebnis: ein süßlich-schwerer Geruch, dichter Rauch, ein schwarzer Rand am Halter. Meistens liegt es am Stäbchen selbst.",
    en: "Anyone who has lit a commercial incense stick knows the result: a heavy, sweet smell, thick smoke, a black ring on the holder. Usually it's the stick itself that is at fault.",
  },
  "kernloses-raeucherwerk.body2": {
    de: "Wie die meisten Räucherstäbchen gebaut sind",
    en: "How most incense is made",
  },
  "kernloses-raeucherwerk.alt1": {
    de: "Links: Räucherstäbchen mit sichtbarem Bambuskern. Rechts: ein Far Shore Stäbchen, kernlos durch und durch",
    en: "Left: an incense stick with a visible bamboo core. Right: a Far Shore stick, coreless through and through",
  },
  "kernloses-raeucherwerk.body3": {
    de: "Das typische Räucherstäbchen besteht aus einem dünnen Bambusstab, der mit einer Paste aus Holzmehl und Bindemittel ummantelt wird. Danach wird der Rohling oft in eine Mischung aus Duftöl und Lösungsmittel getaucht. Ein häufig verwendetes Lösungsmittel ist DPG (Dipropylenglykol). Es hilft, synthetische Duftöle gleichmäßig zu verteilen und eventuell die Produktion effizienter zu machen.",
    en: "The typical incense stick is a thin bamboo rod coated in a paste of wood dust and binder. The blank is then often dipped in a blend of fragrance oil and a common solvent called DPG (dipropylene glycol). The solvent spreads synthetic fragrance evenly and makes the production process more efficient.",
  },
  "kernloses-raeucherwerk.body4": {
    de: "Das Problem ist schlicht: Beim Anzünden verbrennt nicht nur der Duft. Es verbrennt auch den Bambus. Das Holz des Kerns erzeugt zusätzlichen Rauch, der mit dem eigentlichen Aroma nichts zu tun hat. Und synthetische Duftstoffe wirken beim Verbrennen oft schwerer und aufdringlicher, als sie in der Flasche riechen.",
    en: "The problem is simple: when you light it, the fragrance isn't the only thing burning. So is the bamboo. The core adds smoke that has nothing to do with the aroma. And synthetic fragrance often reads heavier and more insistent when burned than it does in the bottle.",
  },
  "kernloses-raeucherwerk.body5": {
    de: "Was ein Far Shore Stäbchen ausmacht",
    en: "What makes a Far Shore stick different",
  },
  "kernloses-raeucherwerk.alt2": {
    de: "Natürliche Holzpulver, Pflanzenharz und reines ätherisches Öl neben einem Far Shore Stäbchen",
    en: "Natural wood powder, plant resin and pure essential oil beside a Far Shore stick",
  },
  "kernloses-raeucherwerk.body6": {
    de: "Ein Far Shore Räucherstäbchen hat keinen Bambuskern. Es besteht vollständig aus dem, was du riechen sollst:",
    en: "A Far Shore stick has no core. It is made entirely of what you're meant to smell:",
  },
  "kernloses-raeucherwerk.body7": {
    de: "<strong>Natürliche Holzpulver</strong> – die Basis, die gleichmäßig glimmt",
    en: "<strong>Natural wood powders</strong> — the base, which smoulders evenly",
  },
  "kernloses-raeucherwerk.body8": {
    de: "<strong>Pflanzenharze</strong> – für Tiefe und einen langen, ruhigen Nachklang",
    en: "<strong>Plant resins</strong> — for depth and a long, quiet finish",
  },
  "kernloses-raeucherwerk.body9": {
    de: "<strong>Reine ätherische Öle</strong> – für die Duftnoten jeder Landschaft",
    en: "<strong>Pure essential oils</strong> — for the notes of each landscape",
  },
  "kernloses-raeucherwerk.body10": {
    de: "<strong>Kein Bambus. Kein DPG. Keine synthetischen Duftöle.</strong>",
    en: "<strong>No bamboo core. No DPG. No synthetic fragrance oils.</strong>",
  },
  "kernloses-raeucherwerk.body11": {
    de: "Weil nichts anderes verbrennt als das Duftmaterial selbst, bleibt der Rauch fein und hell. Der Duft steigt auf und verteilt sich im Raum, statt schwer darin zu hängen. Und am Ende bleibt nichts zurück als ein feiner Strich Asche.",
    en: "Because nothing burns but the aromatic material itself, the smoke stays fine and pale. The scent rises and moves through the room instead of hanging in it. And what remains is a single thin line of ash.",
  },
  "kernloses-raeucherwerk.body12": {
    de: "Eine alte Idee",
    en: "A traditional idea",
  },
  "kernloses-raeucherwerk.body13": {
    de: "Kernloses Räucherwerk ist keine Erfindung unserer Zeit. In Japan und China ist es seit Jahrhunderten die bevorzugte Form für Tempel, Teezeremonie und Meditation. Der Bambuskern kam später als Abkürzung für die Massenproduktion. Wir gehen den Weg einfach zurück.",
    en: "Coreless incense is not a modern invention. In Japan and China it has long been the preferred form for temples, tea ceremonies and meditation. The bamboo core actually came later as a shortcut for mass production. We simply walk the path back.",
  },
  "kernloses-raeucherwerk.body14": {
    de: "So erkennst du echtes kernloses Räucherwerk",
    en: "How to recognise true coreless incense",
  },
  "kernloses-raeucherwerk.body15": {
    de: "<strong>Kein Holzstab am Ende.</strong> Das Stäbchen ist von Anfang bis Ende einheitlich.",
    en: "<strong>No wooden stem at the end.</strong> The stick is uniform from tip to tip.",
  },
  "kernloses-raeucherwerk.body16": {
    de: "<strong>Matte Oberfläche.</strong> Glänzende oder ölige Stäbchen deuten auf viel zugesetztes Duftöl hin.",
    en: "<strong>A matte surface.</strong> Glossy or oily sticks suggest a lot of added fragrance oil.",
  },
  "kernloses-raeucherwerk.body17": {
    de: "<strong>Heller, feiner Rauch.</strong> Dichter, dunkler Rauch ist ein Hinweis auf Füllstoffe.",
    en: "<strong>Pale, fine smoke.</strong> Thick, dark smoke points to fillers.",
  },
  "kernloses-raeucherwerk.body18": {
    de: "<strong>Transparente Zutaten.</strong> Seriöse Hersteller nennen, woraus ihr Räucherwerk besteht.",
    en: "<strong>Transparent ingredients.</strong> Serious makers tell you what their incense contains.",
  },
  "kernloses-raeucherwerk.body19": {
    de: "Ein ehrliches Wort zum Rauch",
    en: "An honest word about smoke",
  },
  "kernloses-raeucherwerk.body20": {
    de: "Jedes Räucherwerk erzeugt Rauch und auch unseres. Deshalb empfehlen wir, beim Räuchern gelegentlich zu lüften und nie in einem geschlossenen, kleinen Raum mehrere Stäbchen hintereinander zu brennen. Unser Versprechen ist nicht, dass Rauch harmlos ist. Unser Versprechen ist, dass du genau weißt, was brennt.",
    en: "All incense makes smoke and ours too. Therefore we recommend to light the incense in a well-ventilated area, and never burn several sticks back to back in a small, closed space. Our promise is not that incense smoke is harmless. Our promise is that you know exactly what is burning.",
  },
  "kernloses-raeucherwerk.cta": {
    de: "Wie ein Far Shore Stäbchen entsteht, liest du hier.",
    en: "See how a Far Shore stick is made.",
  },
  "kernloses-raeucherwerk.link1": {
    de: "Entdecke die vier Landschaften &rarr;",
    en: "Discover the Four Landscapes &rarr;",
  },
  "kernloses-raeucherwerk.link2": {
    de: "Die Kunst des langsamen Räucherwerks &rarr;",
    en: "The Art of Slow Incense &rarr;",
  },
};

const targets = [
  ["data-i18n", (el, val) => (el.innerHTML = val)],
  ["data-i18n-alt", (el, val) => (el.alt = val)],
  ["data-i18n-placeholder", (el, val) => (el.placeholder = val)],
  ["data-i18n-aria", (el, val) => el.setAttribute("aria-label", val)],
];

function getLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return LANGS.includes(saved) ? saved : DEFAULT_LANG;
}

export function t(key, lang = getLang()) {
  const entry = strings[key];
  return entry && (entry[lang] ?? entry[DEFAULT_LANG]);
}

function setLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  for (const [attr, write] of targets) {
    document.querySelectorAll(`[${attr}]`).forEach((el) => {
      const key = el.getAttribute(attr);
      const val = t(key, lang);
      if (val === undefined) console.warn(`i18n: no string for "${key}"`);
      else write(el, val);
    });
  }

  // The toggle shows the OTHER language
  const label = lang === "de" ? "EN" : "DE";
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.textContent = label;
  });
}

// Module scripts run once the document is parsed, so fill the text in right
// away rather than waiting for DOMContentLoaded — the HTML holds no text.
setLang(getLang());
document.querySelectorAll(".lang-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLang(getLang() === "de" ? "en" : "de");
  });
});
