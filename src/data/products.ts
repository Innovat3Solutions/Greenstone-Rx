export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  dosage: string;
  fullDescription?: string;
  safetyInfo?: {
    blackBoxWarning?: string;
    commonSideEffects?: string[];
    seriousSideEffects?: string[];
    keyWarnings?: string[];
    contraindications?: string[];
    drugInteractions?: string[];
    precautions?: string[];
    specialNotes?: string[];
  };
}

export const products: Product[] = [
  // Weight Management
  {
    id: 1,
    slug: 'semaglutide-ozempic',
    name: 'Semaglutide (Ozempic)',
    category: 'Weight Management',
    price: 299,
    image: '/assets/images/products/ozempic.png',
    description: 'GLP-1 receptor agonist for weight management',
    dosage: '0.25mg - 2.4mg',
    fullDescription: 'Semaglutide (Ozempic) is a GLP-1 receptor agonist that helps regulate appetite and blood sugar levels. It works by mimicking a hormone that targets areas of the brain involved in appetite regulation, helping you feel fuller longer and reducing food cravings.',
    safetyInfo: {
      blackBoxWarning: 'Contraindicated in medullary thyroid carcinoma history, family history of MTC, or MEN 2 syndrome. It is not known if they will cause thyroid tumors or cancer in humans.',
      commonSideEffects: [
        'Nausea',
        'Constipation',
        'Vomiting',
        'Diarrhea',
        'Abdominal pain',
        'Headache',
        'Indigestion',
        'Injection site reactions',
        'Dizziness',
        'Back pain',
        'Altered taste',
        'Decreased appetite',
        'Fatigue'
      ],
      seriousSideEffects: [
        'Severe dehydration from nausea/vomiting',
        'Kidney failure',
        'Thyroid C-cell tumors',
        'Pancreatitis',
        'Acute gallbladder disease',
        'Hepatitis/elevated liver enzymes',
        'Diabetic retinopathy worsening',
        'Severe GI disease',
        'Low blood sugar',
        'Increasing heart rate',
        'Worsening depression/suicidal behavior'
      ],
      contraindications: [
        'Never share pen with others',
        'Avoid with nitrates',
        'Do not use if pregnant, trying to conceive, or breastfeeding',
        'Stop 2 months before planned pregnancy'
      ],
      drugInteractions: [
        'Alcohol',
        'Diabetes medications',
        'Thyroid hormone medications',
        'Medications with narrow therapeutic windows (warfarin)',
        'Insulin/sulfonylureas increase hypoglycemia risk'
      ]
    }
  },
  {
    id: 2,
    slug: 'tirzepatide-mounjaro',
    name: 'Tirzepatide (Mounjaro)',
    category: 'Weight Management',
    price: 349,
    image: '/assets/images/products/mounjaro.png',
    description: 'Dual GIP/GLP-1 receptor agonist',
    dosage: '2.5mg - 15mg',
    fullDescription: 'Tirzepatide (Mounjaro) is a first-in-class dual GIP and GLP-1 receptor agonist. It activates both incretin receptors, providing enhanced glycemic control and significant weight loss benefits compared to single-receptor agonists.',
    safetyInfo: {
      blackBoxWarning: 'Risk of thyroid tumors/cancer. Not for type 1 diabetes, pancreatitis history, or MEN 2 syndrome. May cause tumors in the thyroid, including thyroid cancer.',
      commonSideEffects: [
        'Nausea',
        'Diarrhea',
        'Constipation',
        'Vomiting',
        'Stomach pain',
        'Decreased appetite',
        'Injection-site reactions',
        'Hypoglycemia',
        'Gallbladder disease'
      ],
      seriousSideEffects: [
        'Pancreatitis',
        'Low blood sugar',
        'Allergic reactions',
        'Kidney failure',
        'Severe stomach problems',
        'Vision changes',
        'Gallbladder disease',
        'Depression/suicidal thoughts'
      ],
      keyWarnings: [
        'Monitor for neck lump/swelling',
        'Watch for hoarseness',
        'Report swallowing difficulty'
      ],
      contraindications: [
        'Type 1 diabetes',
        'Diabetic ketoacidosis',
        'Retinopathy',
        'Kidney disease',
        'MEN 2 syndrome',
        'Thyroid cancer',
        'Pancreatitis history'
      ]
    }
  },
  {
    id: 3,
    slug: 'semaglutide-wegovy',
    name: 'Semaglutide (Wegovy)',
    category: 'Weight Management',
    price: 329,
    image: '/assets/images/products/wegovy.png',
    description: 'FDA-approved for chronic weight management',
    dosage: '0.25mg - 2.4mg',
    fullDescription: 'Semaglutide (Wegovy) is FDA-approved specifically for chronic weight management. It helps reduce hunger and food cravings by affecting areas of the brain that control appetite and food intake.',
    safetyInfo: {
      blackBoxWarning: 'Contraindicated in medullary thyroid carcinoma history, family history, or MEN 2. It is not known if they will cause thyroid tumors or cancer in humans.',
      commonSideEffects: [
        'Nausea',
        'Constipation',
        'Vomiting',
        'Diarrhea',
        'Abdominal pain',
        'Headache',
        'Indigestion',
        'Injection site reactions',
        'Dizziness',
        'Back pain',
        'Increased lipase/amylase',
        'Altered taste',
        'Decreased appetite',
        'Fatigue'
      ],
      seriousSideEffects: [
        'Severe dehydration',
        'Kidney failure/kidney problems',
        'Thyroid C-cell tumors',
        'Pancreatitis',
        'Acute gallbladder disease',
        'Hepatitis/elevated liver enzymes',
        'Diabetic retinopathy changes',
        'Severe GI disease',
        'Low blood sugar',
        'Increasing heart rate',
        'Worsening depression/suicidal behavior'
      ],
      contraindications: [
        'Pregnancy/breastfeeding',
        'Stop 2 months before planned pregnancy',
        'Never share pen',
        'Use adequate contraception'
      ],
      drugInteractions: [
        'Delays gastric emptying affecting oral medication absorption',
        'Thyroid hormone timing may need adjustment'
      ]
    }
  },
  {
    id: 4,
    slug: 'tirzepatide-zepbound',
    name: 'Tirzepatide (Zepbound)',
    category: 'Weight Management',
    price: 379,
    image: '/assets/images/products/zepbound.png',
    description: 'Latest dual-action weight loss medication',
    dosage: '2.5mg - 15mg',
    fullDescription: 'Tirzepatide (Zepbound) is the latest FDA-approved dual-action weight loss medication. It works on both GIP and GLP-1 receptors to help control appetite and improve metabolic function for significant weight loss results.',
    safetyInfo: {
      blackBoxWarning: 'May cause tumors in the thyroid, including thyroid cancer. Monitor for neck symptoms, hoarseness, swallowing difficulty, shortness of breath.',
      commonSideEffects: [
        'Nausea',
        'Diarrhea',
        'Vomiting',
        'Constipation',
        'Abdominal pain',
        'Indigestion',
        'Injection site reactions',
        'Fatigue',
        'Allergic reactions',
        'Belching',
        'Hair loss',
        'Heartburn'
      ],
      seriousSideEffects: [
        'Severe stomach problems',
        'Kidney failure',
        'Gallbladder problems',
        'Pancreatitis',
        'Serious allergic reactions',
        'Low blood sugar',
        'Vision changes',
        'Depression/suicidal thoughts'
      ],
      contraindications: [
        'Type 1 diabetes',
        'Diabetic ketoacidosis',
        'Retinopathy',
        'Kidney disease',
        'MEN 2 syndrome',
        'Thyroid cancer',
        'Pancreatitis history'
      ],
      specialNotes: [
        'Pregnancy Exposure Registry available',
        'Birth control pills may be less effective during use'
      ]
    }
  },
  // Hair Loss
  {
    id: 5,
    slug: 'finasteride',
    name: 'Finasteride',
    category: 'Hair Loss',
    price: 49,
    image: '/assets/images/products/finasteride.png',
    description: 'FDA-approved treatment for hair loss',
    dosage: '1mg tablets',
    fullDescription: 'Finasteride is an FDA-approved oral medication for treating male pattern baldness. It works by blocking the conversion of testosterone to DHT, a hormone that causes hair follicle miniaturization and hair loss.',
    safetyInfo: {
      commonSideEffects: [
        'Decreased libido',
        'Erectile dysfunction',
        'Decreased ejaculation volume',
        'Breast tenderness/enlargement',
        'Rash'
      ],
      seriousSideEffects: [
        'Persistent sexual dysfunction post-discontinuation',
        'Depression/mood changes',
        'Testicular pain',
        'Allergic reactions'
      ],
      keyWarnings: [
        'May increase the risk of high-grade prostate cancer',
        'May alter PSA levels',
        'Sexual effects may persist after stopping (Post-Finasteride Syndrome)',
        'Not approved for women/children'
      ],
      contraindications: [
        'Pregnancy',
        'Allergy to finasteride',
        'Under 18 years of age',
        'Liver disease'
      ]
    }
  },
  // Wellness
  {
    id: 6,
    slug: 'mic-b12-injection',
    name: 'MIC + B12 Injection',
    category: 'Wellness',
    price: 79,
    image: '/assets/images/products/mic+b12.png',
    description: 'Lipotropic blend for energy and metabolism',
    dosage: '10ml vial',
    fullDescription: 'MIC + B12 Injection combines lipotropic compounds (Methionine, Inositol, Choline) with Vitamin B12 to support fat metabolism, energy production, and overall wellness. This combination helps the body break down fat more efficiently.',
    safetyInfo: {
      commonSideEffects: [
        'Injection site discomfort/redness',
        'Skin itching',
        'Muscle cramps/weakness',
        'Nausea',
        'Urination issues',
        'Ankle/feet swelling',
        'Fatigue'
      ],
      precautions: [
        'Avoid if pregnant, nursing, or planning pregnancy/breastfeeding',
        'Discontinue if severe reactions occur (irregular heartbeat, difficulty breathing)'
      ]
    }
  },
  {
    id: 7,
    slug: 'glutathione',
    name: 'Glutathione',
    category: 'Wellness',
    price: 89,
    image: '/assets/images/products/glutathione.png',
    description: 'Master antioxidant for cellular health',
    dosage: '200mg/ml',
    fullDescription: 'Glutathione is known as the "master antioxidant" and plays a crucial role in protecting cells from oxidative stress, supporting immune function, and promoting detoxification. Injectable glutathione provides superior bioavailability.',
    safetyInfo: {
      commonSideEffects: [
        'Mild injection site redness/soreness/swelling',
        'Headache',
        'Temporary fatigue/dizziness',
        'Flushing',
        'Nausea'
      ],
      seriousSideEffects: [
        'Allergic/anaphylactic reactions',
        'Chest tightness',
        'Shortness of breath',
        'Joint pain',
        'Unusual weakness/tingling'
      ],
      keyWarnings: [
        'Rare anaphylactic reactions reported',
        'Use cautiously with asthma or sulfur allergies',
        'May alter antioxidant levels'
      ],
      contraindications: [
        'Known hypersensitivity',
        'Current/recent cancer diagnosis (unless oncologist-approved)',
        'Pregnancy/breastfeeding'
      ]
    }
  },
  // Hormone Therapy
  {
    id: 8,
    slug: 'female-bhrt-kit',
    name: 'Female BHRT Kit',
    category: 'Hormone Therapy',
    price: 189,
    image: '/assets/images/products/female_bhrt_kit.png',
    description: 'Bioidentical hormone replacement therapy',
    dosage: 'Custom compounded',
    fullDescription: 'The Female BHRT Kit provides bioidentical hormone replacement therapy customized to your individual needs. These hormones are molecularly identical to those naturally produced by your body, offering a more natural approach to hormone balance.',
    safetyInfo: {
      blackBoxWarning: 'Increased cardiovascular disease, breast cancer, endometrial cancer, and dementia risk. Use lowest effective dose for shortest duration.',
      commonSideEffects: [
        'Skin irritation',
        'Breast tenderness',
        'Bloating',
        'Nausea',
        'Headache',
        'Mood changes',
        'Vaginal irritation',
        'Drowsiness',
        'Spotting/breakthrough bleeding'
      ],
      seriousSideEffects: [
        'Blood clots (DVT/PE)',
        'Stroke/heart attack',
        'Gallbladder disease',
        'Breast lumps',
        'Nipple discharge',
        'Vision changes',
        'Severe headache/chest pain'
      ],
      contraindications: [
        'Breast/endometrial cancer history',
        'Active blood clots',
        'Liver dysfunction',
        'Pregnancy',
        'Unexplained vaginal bleeding',
        'Allergies to components'
      ]
    }
  },
  // Anti-Aging
  {
    id: 9,
    slug: 'nad-injection',
    name: 'NAD+ Injection',
    category: 'Anti-Aging',
    price: 149,
    image: '/assets/images/products/nad+injection.png',
    description: 'Cellular rejuvenation and energy support',
    dosage: '100mg/ml',
    fullDescription: 'NAD+ (Nicotinamide Adenine Dinucleotide) Injection delivers this essential coenzyme directly into your system for optimal absorption. NAD+ supports cellular energy production, DNA repair, and healthy aging at the cellular level.',
    safetyInfo: {
      commonSideEffects: [
        'Injection site redness/tenderness',
        'Mild flushing',
        'Lightheadedness',
        'Temporary fatigue',
        'Mild nausea'
      ],
      seriousSideEffects: [
        'Allergic reactions',
        'Dizziness/fainting',
        'Persistent fatigue/flu-like symptoms',
        'Flushing with rapid heartbeat'
      ],
      keyWarnings: [
        'Do not exceed prescribed dose',
        'Subcutaneous injection requires proper technique',
        'Individuals with autoimmune/cardiovascular/metabolic conditions need closer monitoring'
      ],
      contraindications: [
        'Known hypersensitivity to NAD+',
        'Pregnancy/breastfeeding',
        'Active infection',
        'Uncontrolled chronic illness',
        'Ongoing cancer treatment (without specialist approval)'
      ],
      specialNotes: [
        'Compounded and prescribed off-label',
        'Not FDA-approved'
      ]
    }
  },
  {
    id: 10,
    slug: 'nad-nasal-spray',
    name: 'NAD+ Nasal Spray',
    category: 'Anti-Aging',
    price: 129,
    image: '/assets/images/products/nad+nasal_spray.png',
    description: 'Convenient NAD+ delivery system',
    dosage: '50mg/ml',
    fullDescription: 'NAD+ Nasal Spray offers a convenient, non-invasive method to supplement NAD+ levels. The nasal delivery system provides rapid absorption through the nasal mucosa for quick cellular benefits.',
    safetyInfo: {
      commonSideEffects: [
        'Nasal dryness/irritation',
        'Sneezing',
        'Headache',
        'Mild dizziness'
      ],
      seriousSideEffects: [
        'Allergic reactions',
        'Dizziness/fainting',
        'Persistent fatigue/flu-like symptoms',
        'Flushing with rapid heartbeat'
      ],
      keyWarnings: [
        'Do not exceed prescribed dose',
        'Individuals with autoimmune/cardiovascular/metabolic conditions need closer monitoring'
      ],
      contraindications: [
        'Known hypersensitivity to NAD+',
        'Pregnancy/breastfeeding',
        'Active infection',
        'Uncontrolled chronic illness',
        'Ongoing cancer treatment (without specialist approval)'
      ],
      specialNotes: [
        'Compounded and prescribed off-label',
        'Not FDA-approved'
      ]
    }
  },
  {
    id: 11,
    slug: 'nad-patches',
    name: 'NAD+ Patches',
    category: 'Anti-Aging',
    price: 119,
    image: '/assets/images/products/nad+patches.png',
    description: 'Transdermal NAD+ for sustained release',
    dosage: '400mg patches',
    fullDescription: 'NAD+ Patches provide sustained transdermal delivery of NAD+ throughout the day. This convenient patch system offers steady absorption without the need for injections or frequent dosing.',
    safetyInfo: {
      commonSideEffects: [
        'Skin irritation/itching/redness under patch'
      ],
      seriousSideEffects: [
        'Allergic reactions',
        'Dizziness/fainting',
        'Persistent fatigue/flu-like symptoms',
        'Flushing with rapid heartbeat'
      ],
      keyWarnings: [
        'Do not exceed prescribed dose',
        'Individuals with autoimmune/cardiovascular/metabolic conditions need closer monitoring'
      ],
      contraindications: [
        'Known hypersensitivity to NAD+',
        'Pregnancy/breastfeeding',
        'Active infection',
        'Uncontrolled chronic illness',
        'Ongoing cancer treatment (without specialist approval)'
      ],
      specialNotes: [
        'Compounded and prescribed off-label',
        'Not FDA-approved'
      ]
    }
  },
  // Peptide Therapy
  {
    id: 12,
    slug: 'sermorelin',
    name: 'Sermorelin',
    category: 'Peptide Therapy',
    price: 199,
    image: '/assets/images/products/sermorelin.png',
    description: 'Growth hormone releasing peptide',
    dosage: '9mg vial',
    fullDescription: 'Sermorelin is a growth hormone-releasing hormone (GHRH) analog that stimulates the pituitary gland to produce and release growth hormone naturally. It supports muscle development, fat metabolism, sleep quality, and overall vitality.',
    safetyInfo: {
      commonSideEffects: [
        'Fatigue/mild dizziness',
        'Injection site pain/redness/swelling',
        'Taste changes/dry mouth (ODT)',
        'Itching',
        'Trouble swallowing',
        'Flushing',
        'Headache',
        'Sleepiness',
        'Hyperactivity/restlessness'
      ],
      keyWarnings: [
        'May affect hormone levels/metabolism',
        'Regular monitoring important',
        'Rare allergic reactions possible'
      ],
      contraindications: [
        'Hypersensitivity to sermorelin',
        'Pregnancy/breastfeeding',
        'Active cancer or unresolved cancer history'
      ],
      drugInteractions: [
        'Glucocorticoids may blunt growth hormone stimulation',
        'Thyroid medications may alter hormonal balance'
      ]
    }
  },
  // Sexual Health
  {
    id: 13,
    slug: 'sildenafil-tadalafil',
    name: 'Sildenafil + Tadalafil',
    category: 'Sexual Health',
    price: 99,
    image: '/assets/images/products/sildenafil+tadalafil.png',
    description: 'Compounded ED treatment',
    dosage: 'Custom blend',
    fullDescription: 'This compounded combination of Sildenafil and Tadalafil provides both rapid onset and extended duration for erectile dysfunction treatment. The dual-action formula offers flexibility and reliability for intimate moments.',
    safetyInfo: {
      commonSideEffects: [
        'Headache',
        'Flushing',
        'Nasal congestion',
        'Indigestion',
        'Back pain (more common with tadalafil)',
        'Muscle aches',
        'Visual disturbances (blurred vision, color vision changes)'
      ],
      seriousSideEffects: [
        'Hypotension (especially with nitrates)',
        'Cardiovascular events (heart attack, stroke, arrhythmias)',
        'Priapism (prolonged erection >4 hours)',
        'Hearing loss',
        'Vision loss (NAION)'
      ],
      contraindications: [
        'Do not use with nitrate medications',
        'Avoid other ED medications',
        'Avoid with serious heart conditions',
        'Separate from NO boosters by 2+ hours'
      ],
      specialNotes: [
        'Baseline medication assessment required',
        'Ongoing monitoring for side effects',
        'Cardiovascular symptoms assessment during exercise',
        'Follow-up visits recommended'
      ]
    }
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
};

export const categories = ['All', 'Weight Management', 'Hair Loss', 'Wellness', 'Hormone Therapy', 'Anti-Aging', 'Peptide Therapy', 'Sexual Health'];
