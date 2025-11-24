import React from "react";

// Exporting the data array directly for use in App.jsx
export const officialsData = [
  {
    id: 1,
    name: "Cyril Ramaphosa",
    office: "President of South Africa",
    party: "ANC",
    qualification: "B.Proc (Law)",
    description:
      "Head of State and Head of Government, mandated to lead the Executive and uphold the Constitution.",
  },
  {
    id: 2,
    name: "Paul Mashatile",
    office: "Deputy President of South Africa",
    party: "ANC",
    qualification: "PGDip in Economic Principles",
    description:
      "Assists the President in the execution of government functions, including parliamentary liaison.",
  },
  {
    id: 3,
    name: "Khumbudzo Ntshavheni",
    office: "Minister in the Presidency",
    party: "ANC",
    qualification: "MBA",
    description:
      "Minister assisting the President with political, strategic, and overall cabinet coordination.",
  },
  {
    id: 4,
    name: "John Steenhuisen",
    office: "Minister of Agriculture",
    party: "DA",
    qualification: "NQF Level 4/Matric",
    description:
      "Responsible for regulating and supporting agricultural production, farm security, and food safety.",
  },
  {
    id: 5,
    name: "Siviwe Gwarube",
    office: "Minister of Basic Education",
    party: "DA",
    qualification: "BA Honours (Law and Politics)",
    description:
      "Oversees all aspects of schooling from Grade R to Grade 12, focusing on quality and learning outcomes.",
  },
  {
    id: 6,
    name: "Solly Malatsi",
    office: "Minister of Communications and Digital Technologies",
    party: "DA",
    qualification: "BA (Public Administration), Honours in Politics",
    description:
      "Manages telecommunications, digital infrastructure, state broadcasting, and promoting digital inclusion.",
  },
  {
    id: 7,
    name: "Velenkhosi Hlabisa",
    office: "Minister of Cooperative Governance and Traditional Affairs",
    party: "IFP",
    qualification: "Honours in History",
    description:
      "Leads government's support for local and provincial spheres, and manages the institution of traditional leadership.",
  },
  {
    id: 8,
    name: "Pieter Groenewald",
    office: "Minister of Correctional Services",
    party: "FF+",
    qualification: "D. Phil (Doctor of Philosophy)",
    description:
      "Oversees the management of prisons and facilities, focusing on inmate rehabilitation and reintegration into society.",
  },
  {
    id: 9,
    name: "Angie Motshekga",
    office: "Minister of Defence and Military Veterans",
    party: "ANC",
    qualification: "Masters in Education",
    description:
      "Responsible for the operational effectiveness of the South African National Defence Force (SANDF) and veteran welfare.",
  },
  {
    id: 10,
    name: "Kgosientsho Ramokgopa",
    office: "Minister of Electricity and Energy",
    party: "ANC",
    qualification: "PhD (Public Administration)",
    description:
      "Mandated to address the national energy crisis, stabilize the electricity grid, and oversee the energy mix.",
  },
  {
    id: 11,
    name: "Nomakhosazana Meth",
    office: "Minister of Employment and Labour",
    party: "ANC",
    qualification: "BA Hons (Public Administration)",
    description:
      "Manages labor laws, worker protection, employment equity, and social security funds (e.g., UIF).",
  },
  {
    id: 12,
    name: "Enoch Godongwana",
    office: "Minister of Finance",
    party: "ANC",
    qualification: "M.Sc. (Financial Economics)",
    description:
      "Leads the National Treasury, responsible for managing the national budget and implementing fiscal policy.",
  },
  {
    id: 13,
    name: "Willem Aucamp",
    office: "Minister of Forestry, Fisheries and the Environment",
    party: "DA",
    qualification: "Public Representative Experience",
    description:
      "Oversees environmental protection, climate change policy, and the sustainable use of natural resources like fisheries.",
  },
  {
    id: 14,
    name: "Aaron Motsoaledi",
    office: "Minister of Health",
    party: "ANC",
    qualification: "MBChB (Medical Doctor)",
    description:
      "Responsible for the national healthcare system and the implementation of the National Health Insurance (NHI) policy.",
  },
  {
    id: 15,
    name: "Buti Manamela",
    office: "Minister of Higher Education and Training",
    party: "ANC (SACP)",
    qualification: "Master of Management (Public Policy)",
    description:
      "Oversees tertiary education (universities and TVETs) and national skills development strategies.",
  },
  {
    id: 16,
    name: "Leon Schreiber",
    office: "Minister of Home Affairs",
    party: "DA",
    qualification: "PhD (Political Science)",
    description:
      "Responsible for civic registration, identity management, immigration, and border management.",
  },
  {
    id: 17,
    name: "Thembisile Simelane",
    office: "Minister of Human Settlements",
    party: "ANC",
    qualification: "Master of Public Administration",
    description:
      "Focuses on providing access to adequate housing and developing sustainable, integrated human settlements.",
  },
  {
    id: 18,
    name: "Ronald Lamola",
    office: "Minister of International Relations and Cooperation",
    party: "ANC",
    qualification: "LLM (Master of Laws)",
    description:
      "Leads the country's foreign policy, diplomacy, and international development cooperation.",
  },
  {
    id: 19,
    name: "Mmamoloko Kubayi",
    office: "Minister of Justice and Constitutional Development",
    party: "ANC",
    qualification: "Masters in Public and Development Management",
    description:
      "Responsible for the judiciary, legal services, and upholding the Constitution and the rule of law.",
  },
  {
    id: 20,
    name: "Mzwanele Nyhontso",
    office: "Minister of Land Reform and Rural Development",
    party: "PAC",
    qualification: "Unknown (President of PAC)",
    description:
      "Manages land redistribution, restitution claims, land tenure reform, and rural development programs.",
  },
  {
    id: 21,
    name: "Gwede Mantashe",
    office: "Minister of Mineral and Petroleum Resources",
    party: "ANC",
    qualification: "B.Com Hons",
    description:
      "Oversees the regulation and development of the mining and resources sectors, including exploration and safety.",
  },
  {
    id: 22,
    name: "Maropene Ramokgopa",
    office: "Minister of Planning, Monitoring and Evaluation",
    party: "ANC",
    qualification: "Master of Management (Public Policy)",
    description:
      "Responsible for setting national strategic goals and monitoring the performance of all government departments.",
  },
  {
    id: 23,
    name: "Senzo Mchunu",
    office: "Minister of Police",
    party: "ANC",
    qualification: "BA (Education)",
    description:
      "Leads the South African Police Service (SAPS), focused on crime prevention, investigation, and maintaining public order.",
  },
  {
    id: 24,
    name: "Mzamo Buthelezi",
    office: "Minister of Public Service and Administration",
    party: "IFP",
    qualification: "National Diploma (Marketing & Business Management)",
    description:
      "Responsible for government efficiency, public service ethics, and the capacity of the civil service.",
  },
  {
    id: 25,
    name: "Dean Macpherson",
    office: "Minister of Public Works and Infrastructure",
    party: "DA",
    qualification: "Certificate in Public Policy",
    description:
      "Manages the government's immense property portfolio and facilitates key public infrastructure projects.",
  },
  {
    id: 26,
    name: "Blade Nzimande",
    office: "Minister of Science, Technology and Innovation",
    party: "ANC (SACP)",
    qualification: "PhD (Sociology)",
    description:
      "Promotes scientific research, technology development, and innovation across all economic sectors.",
  },
  {
    id: 27,
    name: "Stella Ndabeni-Abrahams",
    office: "Minister of Small Business Development",
    party: "ANC",
    qualification: "Masters in Management (Digital Business)",
    description:
      "Dedicated to supporting the growth and development of small, medium, and micro-enterprises (SMMEs).",
  },
  {
    id: 28,
    name: "Nokuzola Tolashe",
    office: "Minister of Social Development",
    party: "ANC",
    qualification: "BA (Social Work)",
    description:
      "Oversees social assistance programs, including grants, and community-based welfare services.",
  },
  {
    id: 29,
    name: "Gayton McKenzie",
    office: "Minister of Sport, Arts and Culture",
    party: "PA",
    qualification: "N/A (Author, Businessman)",
    description:
      "Focuses on developing national sport, supporting cultural industries, and preserving heritage.",
  },
  {
    id: 30,
    name: "Patricia De Lille",
    office: "Minister of Tourism",
    party: "GOOD",
    qualification: "Matric, Trade Unionist",
    description:
      "Responsible for developing and marketing South Africa as a premier domestic and international tourist destination.",
  },
  {
    id: 31,
    name: "Parks Tau",
    office: "Minister of Trade, Industry and Competition",
    party: "ANC",
    qualification: "Master's degree (Public Policy & Management)",
    description:
      "Works to stimulate economic growth, industrialization, investment, and ensuring fair market competition.",
  },
  {
    id: 32,
    name: "Barbara Creecy",
    office: "Minister of Transport",
    party: "ANC",
    qualification: "Master's degree (Public Policy and Management)",
    description:
      "Manages national transport infrastructure and regulatory policy for road, rail, air, and maritime safety.",
  },
  {
    id: 33,
    name: "Pemmy Majodina",
    office: "Minister of Water and Sanitation",
    party: "ANC",
    qualification: "BEd (Education)",
    description:
      "Manages the country's water resources and is responsible for ensuring the delivery of water and sanitation services.",
  },
  {
    id: 34,
    name: "Lydia Chikunga",
    office: "Minister of Women, Youth and Persons with Disabilities",
    party: "ANC",
    qualification: "MA (Nursing)",
    description:
      "Dedicated to promoting and protecting the rights and socio-economic inclusion of women, youth, and persons with disabilities.",
  },
];
