export const firm = {
  name: "Smart Law Solicitors",
  short: "Smart Law",
  phoneDisplay: "01484 546 022",
  phoneHref: "tel:+441484546022",
  email: "info@smartlawsolicitors.co.uk",
  emailHref: "mailto:info@smartlawsolicitors.co.uk",
  address: {
    line1: "142 Trinity Street",
    city: "Huddersfield",
    postcode: "HD1 4DT",
    country: "United Kingdom",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=142+Trinity+Street,+Huddersfield+HD1+4DT",
};

export const londonFilm = {
  src: "https://videos.pexels.com/video-files/5844901/5844901-hd_1920_1080_30fps.mp4",
  poster:
    "https://images.pexels.com/photos/28056039/pexels-photo-28056039.jpeg?auto=compress&cs=tinysrgb&w=1920",
  posterAlt: "Night view of the London skyline, with The Shard and Tower Bridge illuminated.",
};

export function photo(id: number, width = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&dpr=1`;
}

export function photoCrop(id: number, width: number, height: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${width}&h=${height}&dpr=1`;
}

export const adviceDisclaimer =
  "The information on this page is general in nature. It does not constitute legal advice and does not describe how any individual matter will be handled.";

export type NavItem = {
  id: "home" | "about" | "services" | "insights" | "contact";
  label: string;
};

export const navigation: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

export type SubService = {
  title: string;
  text: string;
};

export type ServiceTone = "lab" | "calm" | "property" | "board" | "lease" | "city";

export type Service = {
  id: string;
  number: string;
  title: string;
  journeyNumber?: string;
  summary: string;
  lede: string;
  points: string[];
  subs?: SubService[];
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  tone: ServiceTone;
  fact?: string;
  disclaimer?: string;
};

export const services: Service[] = [
  {
    id: "pharmaceutical",
    number: "01",
    title: "Pharmaceutical Transactions",
    summary: "Specialist commercial practice",
    lede: "Pharmaceutical transactions require careful analysis of commercial terms within a regulated environment. Smart Law Solicitors has experience of pharmaceutical transactions with a value exceeding £1 million. This is a statement of experience only; it is not a ranking, and it does not constitute any assurance as to the outcome of a future instruction.",
    points: [
      "Each transaction is considered on its own documents and circumstances",
      "We advise on the commercial context, the contractual terms and the parties involved",
      "The scope of our work is agreed with the client before any instruction is accepted",
    ],
    image: "/images/services/pharmaceutical.jpg",
    imageAlt: "Precision analytical instruments in a pharmaceutical facility.",
    secondaryImage: photo(9259964, 1200),
    secondaryAlt: "Glass laboratory vessels arranged on a bench.",
    tone: "lab",
    fact: "Experience of pharmaceutical transactions exceeding £1 million.",
  },
  {
    id: "wills",
    number: "02",
    title: "Wills and Probate",
    summary: "Wills · Probate · Estate Administration",
    lede: "Private client work calls for calm and precise advice. The preparation of a will, an application for a grant of probate and the administration of an estate are distinct tasks, and we address each on its own terms. We do not publish fees, tax figures or fixed timetables.",
    points: ["Wills", "Probate", "Estate administration"],
    subs: [
      {
        title: "Wills",
        text: "A will records a person's wishes for their estate and appoints those who are to carry them out. It is a private instruction. Fees and timescales for the preparation of wills are not published on this website.",
      },
      {
        title: "Probate",
        text: "Following a death, a grant of probate may be required before the estate can be administered. The type of grant required, if any, depends on the assets held and the institutions that hold them.",
      },
      {
        title: "Estate administration",
        text: "Estate administration involves identifying the assets of the estate, discharging its liabilities and distributing the remainder to those entitled. The scope of our involvement is agreed with those responsible for the estate. We do not publish fixed timetables.",
      },
    ],
    image: "/images/services/wills-probate.jpg",
    imageAlt: "A private client desk with legal parchment documents, fountain pen, and classic law library books.",
    tone: "calm",
  },
  {
    id: "conveyancing",
    number: "03",
    title: "Commercial and Residential Conveyancing",
    summary: "Property sales, purchases and finance",
    lede: "Buying, selling or transferring property involves a sequence of documents and decisions. Residential and commercial conveyancing are distinct areas of work, and we keep them separate. A commercial building is not treated as a larger version of a house.",
    points: ["Residential conveyancing", "Commercial conveyancing"],
    subs: [
      {
        title: "Residential conveyancing",
        text: "Purchases, sales and associated documentation for residential property. An initial discussion will usually address who is buying, who is selling and which documents are already available. Fees and completion timescales are not published on this page.",
      },
      {
        title: "Commercial conveyancing",
        text: "Transactions involving commercial property, including those in which occupation, use or an existing lease forms part of the transaction. The structure of the transaction, whether a transfer of property, of a company or otherwise, should be established before advice is given.",
      },
    ],
    image: photo(30683445, 1600),
    imageAlt: "A row of elegant townhouses with balconies and planting.",
    secondaryImage: photo(30797252, 1600),
    secondaryAlt: "A contemporary glass office building reflecting the street.",
    tone: "property",
  },
  {
    id: "business",
    number: "04",
    title: "Business Sale and Purchase",
    summary: "Advice for owners buying or selling a business",
    lede: "A business sale or purchase involves a series of decisions before any document is signed. Who is selling, what is being sold and which contracts must transfer with the business are matters determined from the documents. We do not publish transaction values on this website.",
    points: [
      "Share sales and asset sales are different instructions",
      "Heads of terms, even in draft, are more useful than a polished summary",
      "A preliminary conversation does not, by itself, create a retainer",
    ],
    image: photo(5511124, 1800),
    imageAlt: "A quiet boardroom with a long table, chairs and glass walls.",
    tone: "board",
  },
  {
    id: "leases",
    number: "05",
    title: "Commercial and Residential Leases",
    summary: "Leasehold property, handled with precision",
    lede: "Commercial and residential leases are distinct documents, frequently entered into with differing bargaining power, and we treat them as separate instructions. We do not publish a schedule of landlord and tenant claims.",
    points: ["Reviewing a lease", "Commercial leases", "Residential leases"],
    subs: [
      {
        title: "Reviewing a lease",
        text: "Before signing, you should be able to establish the length of the term, the sums payable in addition to the headline rent, responsibility for repair of the structure, and the position at the end of the term. Where this information is not readily apparent, we will identify it for you.",
      },
      {
        title: "Commercial leases",
        text: "For many businesses, the premises are a core asset. Use, assignment and subletting, repair and the end of the term are considered in light of the business that must operate under them. Scope is agreed on the basis of the draft lease provided.",
      },
      {
        title: "Residential leases",
        text: "A residential lease governs a home as well as a legal relationship. We will advise on the document you hold or the draft you have been asked to sign. We do not offer a fixed range of landlord or tenant products.",
      },
    ],
    image: photo(11408618, 1800),
    imageAlt: "A bright living room with tall windows and a calm, considered interior.",
    tone: "lease",
  },
  {
    id: "immigration",
    number: "06",
    title: "Immigration",
    summary: "Visit · Study · Remain · Settle",
    lede: "We advise on visit visas, student visas, leave to remain and permanent residence. Immigration rules change, and each application is decided by the relevant authority, not by the solicitor. The firm cannot guarantee any visa, grant of leave to remain or settlement.",
    points: ["Visit visa", "Student visa", "Leave to remain", "Permanent residence"],
    subs: [
      {
        title: "Visit visa",
        text: "For those wishing to visit the United Kingdom temporarily. A visit visa is not a route to settlement. Approval cannot be guaranteed.",
      },
      {
        title: "Student visa",
        text: "For those seeking to study in the United Kingdom. We can advise on the appropriate route, the supporting documents and the issues an application may raise. We cannot guarantee that a student visa will be granted.",
      },
      {
        title: "Leave to remain",
        text: "For those wishing to extend or vary their stay in the United Kingdom. The outcome depends on the immigration rules and the applicant's circumstances at the time of application. Leave to remain cannot be guaranteed.",
      },
      {
        title: "Permanent residence",
        text: "Settlement is a significant application requiring its own body of evidence. We can advise on eligibility and on the material required. Permanent residence cannot be guaranteed.",
      },
    ],
    image: photo(18729210, 1800),
    imageAlt: "The Victorian architecture of St Pancras in London, a place of arrival and departure.",
    secondaryImage: photo(11180454, 1400),
    secondaryAlt: "The iron and glass roof of a major London railway station.",
    tone: "city",
    disclaimer:
      "Important: No visa, grant of leave or settlement application can be guaranteed. Please do not send original identity documents through this website.",
  },
  {
    id: "solicitation",
    number: "07",
    title: "Solicitation",
    summary: "Scope to be confirmed",
    lede: "Solicitation is a service area of Smart Law Solicitors. If you would like to know whether the firm can assist with your particular requirements, please contact the office and we will advise you directly.",
    points: [],
    image: photo(3906592, 1600),
    imageAlt: "An executive meeting room with a wooden table and dark chairs.",
    tone: "board",
  },
];

const homepageOrder = ["conveyancing", "pharmaceutical", "wills", "business", "leases", "immigration"];

export const journeyServices: Service[] = homepageOrder.map((id, index) => {
  const service = services.find((item) => item.id === id);
  if (!service) {
    throw new Error(`Missing service ${id}`);
  }
  return {
    ...service,
    journeyNumber: String(index + 1).padStart(2, "0"),
  };
});

export type Person = {
  id: string;
  name: string;
  role: string;
  initials: string;
  image: string;
  imageAlt: string;
};

export const team: Person[] = [
  {
    id: "ather-ahmed",
    name: "Ather Ahmed",
    role: "Managing Partner / Founder",
    initials: "AA",
    image: "/images/team/ather-ahmed.jpg",
    imageAlt: "Portrait of Ather Ahmed, Managing Partner and Founder of Smart Law Solicitors.",
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Senior Solicitor",
    initials: "SC",
    image: "/images/team/sarah-chen.jpg",
    imageAlt: "Portrait of Sarah Chen, Senior Solicitor at Smart Law Solicitors.",
  },
  {
    id: "david-smith",
    name: "David Smith",
    role: "Senior Solicitor",
    initials: "DS",
    image: "/images/team/david-smith.jpg",
    imageAlt: "Portrait of David Smith, Senior Solicitor at Smart Law Solicitors.",
  },
  {
    id: "emily-white",
    name: "Emily White",
    role: "Solicitor",
    initials: "EW",
    image: "/images/team/emily-white.jpg",
    imageAlt: "Portrait of Emily White, Solicitor at Smart Law Solicitors.",
  },
];

export const founder = team[0];

export type FounderStage = {
  id: string;
  number: string;
  title: string;
  body: string;
};

export const founderStages: FounderStage[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    body: "Ather Ahmed is Managing Partner and Founder of Smart Law Solicitors. He leads a practice that works with individuals, families and businesses from Huddersfield and across England and Wales.",
  },
  {
    id: "background",
    number: "02",
    title: "Professional background",
    body: "This page does not set out a career history. Professional background is discussed directly with clients, rather than summarised on this website.",
  },
  {
    id: "qualifications",
    number: "03",
    title: "Qualifications",
    body: "Formal qualifications and practising information are not listed here. Information on qualifications and regulatory status is available from the office where it is relevant to an instruction.",
  },
  {
    id: "philosophy",
    number: "04",
    title: "Legal philosophy",
    body: "The firm’s public stance is straightforward: explain the matter clearly, keep the client close to the decision, and avoid theatre. Good counsel should make the next step easier to see.",
  },
  {
    id: "smart-law",
    number: "05",
    title: "Smart Law",
    body: "Smart Law Solicitors is organised around the matters the firm is instructed on — pharmaceutical transactions, wills and probate, conveyancing, business sale and purchase, leases, immigration, and solicitation. The standard is the same across the practice: careful attention, in plain language.",
  },
];

export type Insight = {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  reading: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    id: "residential-purchase",
    title: "Before Exchange: Questions to Consider on a Residential Purchase",
    category: "Conveyancing",
    date: "12 March 2026",
    excerpt:
      "A residential purchase involves a sequence of documents and decisions. This article sets out questions that may usefully be raised at an initial consultation. It is not a timetable or a statement of fees.",
    reading: "3 min read",
    image: photo(18729449, 1600),
    imageAlt: "A quiet residential street of classic townhouses.",
    body: [
      "A residential purchase involves a sequence of documents, searches and decisions. This note does not set out fees, and it does not promise a timetable. It is a list of questions that often help a first conversation.",
      "Who is selling, and is anyone else named on the title? What is included in the price, and what is not? Are you buying with a mortgage, and has anyone explained which documents a lender will want to see? Have you read the fittings and contents form, or are you relying on what was said at a viewing?",
      "Exchange and completion are different moments. Until exchange, a purchase can still fall away. After exchange, the parties are usually bound to complete on the agreed date. The consequences of missing that date depend on the contract. They should be explained before you sign, not after.",
      "Bring what you already have: the agent’s particulars, any survey, and the names of the people who will be on the title. Smart Law can then say whether the firm can assist, and what a next conversation would cover. Nothing on this page is advice on your purchase.",
    ],
  },
  {
    id: "commercial-property",
    title: "Commercial Property Explained",
    category: "Conveyancing",
    date: "4 March 2026",
    excerpt:
      "Commercial conveyancing is not residential work applied to a larger building. The parties, the use of the property and the documents involved often differ.",
    reading: "3 min read",
    image: photo(10964647, 1600),
    imageAlt: "A modern commercial building facade photographed from street level.",
    body: [
      "Commercial conveyancing is not residential conveyancing with a larger building. The parties, the use, and the documents are often different. A buyer may be a company. The property may be subject to leases. The value to the business may sit in the right to occupy, not only in the bricks.",
      "A useful first meeting starts with the structure. Are you buying a property, buying a company that owns a property, or taking a lease? Those are different instructions. This page does not rank them, and it does not suggest that one is safer.",
      "Ask what you will actually be allowed to do in the building. Ask who is responsible for the structure, the services, and the insurance. Ask what happens at the end of any lease that already exists. If those answers are not in the papers, they need to be found before you commit — not assumed from a brochure.",
      "Smart Law advises on commercial and residential conveyancing as separate work. Bring the papers you have. We will tell you if we can help.",
    ],
  },
  {
    id: "pharmaceutical-note",
    title: "Pharmaceutical Transactions: Preparation, Not Assurances",
    category: "Pharmaceutical Transactions",
    date: "18 February 2026",
    excerpt:
      "Experience of transactions exceeding £1 million is a statement of experience. It is not a ranking and gives no assurance as to the outcome of a future instruction.",
    reading: "3 min read",
    image: photo(5118462, 1600),
    imageAlt: "A controlled laboratory environment with a person in protective clothing.",
    body: [
      "Pharmaceutical transactions sit at a meeting point of commerce, science and regulation. The documents may concern supply, distribution, licensing, or the sale of a business connected to that work. They are rarely just a contract.",
      "Smart Law has experience of pharmaceutical transactions exceeding £1 million. That is a statement of experience only, not a ranking, and not a promise about the next instruction.",
      "Before a meeting, it helps to know the parties, the countries involved, and whether a regulator’s consent is part of the picture. It helps to know what has already been drafted, and what is still a commercial understanding. Those facts change the shape of the work. They do not, by themselves, tell you what the documents should say.",
      "We do not publish a menu of pharmaceutical services beyond this direction, and we do not publish fees here. If you have a transaction of this kind, contact the office and describe it in ordinary language.",
    ],
  },
  {
    id: "wills-note",
    title: "Wills, Probate and Estate Administration Are Distinct",
    category: "Wills and Probate",
    date: "2 February 2026",
    excerpt:
      "These terms are often used interchangeably. They are related, but each describes a different task.",
    reading: "3 min read",
    image: photo(28463480, 1600),
    imageAlt: "A classic library interior with warm light on the shelves.",
    body: [
      "People often use these words as if they were one service. They are related, and they are distinct.",
      "A will is a document made in life. It records what a person wants to happen to their estate, and who should carry that out. Making or updating a will is a private instruction. It deserves time, and it deserves language the person actually understands.",
      "Probate is the authority, where it is required, to deal with a person’s estate after death. Not every estate needs the same grant. Not every estate needs a grant at all. That depends on the assets and the institutions holding them.",
      "Estate administration is the work that follows: identifying what there is, paying what must be paid, and distributing what remains in line with the will or the rules that apply. It can be straightforward. It can be slow because a bank, a court, or a missing document makes it slow. This page does not offer a timetable, a tax figure, or a fee.",
      "If you are making a will, or you are responsible for an estate, speak to the office. Bring the papers you have, including any will. We will explain what we can and cannot do.",
    ],
  },
  {
    id: "reading-a-lease",
    title: "A Lease: A Document with Continuing Consequences",
    category: "Leases",
    date: "21 January 2026",
    excerpt:
      "Commercial and residential leases are different documents. Each should be fully understood before it is signed.",
    reading: "2 min read",
    image: photo(38304588, 1600),
    imageAlt: "A classical stone building facade with a symmetrical arrangement of windows.",
    body: [
      "A lease is not a formality that sits under a set of keys. It is an agreement about time, money, repair, use, and an ending. Commercial leases and residential leases are different documents, made in different contexts. Smart Law treats them as separate instructions.",
      "Before you sign, you should be able to answer a few plain questions. How long does it last? What must you pay, beyond the headline rent? Who repairs the structure? Can you leave early, and at what cost? What happens if you want someone else to take the lease? What do you have to hand back at the end?",
      "If the answers are buried, they should be brought to the surface before you commit. That is the point of reading a lease with a solicitor. It is not to perform anxiety. It is to show you the obligations in the order they will actually matter.",
      "We do not publish a catalogue of landlord and tenant claims, and we do not invent a list of lease products. If you have a draft, or a lease you already hold, contact the office.",
    ],
  },
  {
    id: "immigration-routes",
    title: "Four Immigration Applications, and No Guarantees",
    category: "Immigration",
    date: "9 January 2026",
    excerpt:
      "Visit, study, leave to remain and permanent residence are familiar terms. The outcome of any application is never ours to guarantee.",
    reading: "3 min read",
    image: photo(17549000, 1600),
    imageAlt: "St Pancras station seen from the street, with traffic and stone architecture.",
    body: [
      "Smart Law discusses four immigration routes: visit visas, student visas, leave to remain, and permanent residence. The names are familiar. The rules are not static, and an outcome is never ours to promise.",
      "A visit visa is about a temporary stay. A student visa is about study. Leave to remain is about extending or varying a stay, or seeking permission to stay on a different basis. Permanent residence — settlement — is a different application again, with its own evidence and its own consequences.",
      "In every case, the useful first step is factual. What permission do you hold now, if any? When does it end? What are you asking to do? Which documents do you already have? Those questions are not an application. They are how a solicitor avoids guessing.",
      "We do not guarantee a visa. We do not guarantee leave to remain. We do not guarantee permanent residence. Anyone who speaks to you as if the result were already decided is not describing how these applications work.",
      "If you want to discuss one of these routes, contact the office. Please do not send original passports or identity documents through this website.",
    ],
  },
  {
    id: "business-meeting",
    title: "Buying or Selling a Business: Preparing for an Initial Meeting",
    category: "Business Sale and Purchase",
    date: "11 December 2025",
    excerpt:
      "There is no typical transaction, and no transaction values are published here. Advice depends on the particular transaction in question.",
    reading: "2 min read",
    image: photo(6814530, 1600),
    imageAlt: "A person reviewing contract papers at a conference table.",
    body: [
      "The sale or purchase of a business is a set of choices before it is a set of signatures. Who is selling — the owners, or the company? What is actually being sold — shares, or assets? Who needs to consent? What contracts have to move with the business if it is to keep trading?",
      "This note does not give transaction values, and it does not describe a typical deal. There is no useful typical. There is the deal in front of you.",
      "For a first conversation, bring the structure as you understand it, the names of the parties, and any heads of terms, even if they are still in draft. Bring a list of what worries you. A worry is often more useful than a polished summary, because it shows where the documents need to be clear.",
      "Smart Law advises on business sale and purchase. We will tell you whether the firm can assist, and what we would need to read before advising. Instructing the firm, and the terms of that instruction, are a separate step. A preliminary conversation does not create it.",
    ],
  },
];

export function getInsight(id: string) {
  return insights.find((item) => item.id === id);
}

export function getService(id: string) {
  return services.find((item) => item.id === id);
}

export const principles = [
  {
    number: "01",
    title: "Clarity",
    text: "The decision before you should be clear. Advice that obscures it is incomplete.",
  },
  {
    number: "02",
    title: "Personal instruction",
    text: "Matters are handled directly with the people involved, and not through a call centre.",
  },
  {
    number: "03",
    title: "Careful documents",
    text: "Contracts, wills, leases and applications are reviewed for their practical effect.",
  },
  {
    number: "04",
    title: "Huddersfield practice",
    text: "The firm is based in Huddersfield, advising clients across England and Wales.",
  },
];
