export interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  sku: string
  specifications: Array<{ label: string; value: string }>
}

export const products: Product[] = [
  {
    id: 'structural-steel-beam',
    name: 'ASTM A992 Structural Steel Beams',
    category: 'Structural Steel',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3',
    description: 'High-strength structural steel beams ideal for high-rise construction and industrial buildings. Certified to ASTM A992 standards.',
    sku: 'SSB-992-001',
    specifications: [
      { label: 'Material Grade', value: 'ASTM A992' },
      { label: 'Yield Strength', value: '50-65 ksi' },
      { label: 'Tensile Strength', value: '65 ksi min' },
      { label: 'Length', value: '6m - 18m' },
      { label: 'Certification', value: 'ISO 9001:2015' },
    ]
  },
  {
    id: 'cement-board',
    name: 'Fiber Cement Board - 12mm',
    category: 'Cement Boards',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3',
    description: 'Premium fiber cement board for exterior cladding and wet areas. Fire-resistant and moisture-proof.',
    sku: 'FCB-12-001',
    specifications: [
      { label: 'Thickness', value: '12mm' },
      { label: 'Size', value: '1220 x 2440mm' },
      { label: 'Density', value: '1.4 g/cm³' },
      { label: 'Fire Rating', value: 'A1 Non-combustible' },
      { label: 'Water Absorption', value: '< 20%' },
    ]
  },
  {
    id: 'hvac-pipes',
    name: 'Schedule 40 GI Pipes',
    category: 'Pipes',
    image: 'https://images.unsplash.com/photo-1581092335871-4c7d7f5d6f1e?ixlib=rb-4.0.3',
    description: 'Galvanized iron pipes for plumbing and HVAC applications. Hot-dip galvanized for corrosion resistance.',
    sku: 'GI-S40-002',
    specifications: [
      { label: 'Size Range', value: '1/2" - 12"' },
      { label: 'Schedule', value: '40' },
      { label: 'Material', value: 'Galvanized Steel' },
      { label: 'Pressure Rating', value: '150-300 PSI' },
      { label: 'Standard', value: 'ASTM A53' },
    ]
  },
  {
    id: 'rockwool-insulation',
    name: 'Rockwool Insulation - 50mm',
    category: 'Insulation',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e7882a?ixlib=rb-4.0.3',
    description: 'High-density stone wool insulation for thermal and acoustic applications. Non-combustible.',
    sku: 'RWI-50-003',
    specifications: [
      { label: 'Thickness', value: '50mm' },
      { label: 'Density', value: '80 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.038 W/mK' },
      { label: 'Fire Rating', value: 'A1 Non-combustible' },
      { label: 'Size', value: '1200 x 600mm' },
    ]
  },
  {
    id: 'construction-hardware-kit',
    name: 'Heavy Duty Hardware Kit',
    category: 'Hardware',
    image: 'https://images.unsplash.com/photo-1581092335485-5e3f8c5b5f8d?ixlib=rb-4.0.3',
    description: 'Complete hardware kit including anchors, bolts, and fasteners for structural applications.',
    sku: 'HDK-004',
    specifications: [
      { label: 'Includes', value: '300+ pieces' },
      { label: 'Material', value: 'Zinc-plated steel' },
      { label: 'Standards', value: 'DIN/ISO' },
      { label: 'Grades', value: '8.8 - 12.9' },
      { label: 'Case Included', value: 'Yes' },
    ]
  },
  {
    id: 'industrial-drill',
    name: 'Industrial Rotary Hammer Drill',
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?ixlib=rb-4.0.3',
    description: 'Professional rotary hammer drill for concrete and masonry. SDS-Plus system, 800W motor.',
    sku: 'IHD-005',
    specifications: [
      { label: 'Power', value: '800W' },
      { label: 'Impact Energy', value: '2.8 Joules' },
      { label: 'Speed', value: '0-1100 RPM' },
      { label: 'Chuck Type', value: 'SDS-Plus' },
      { label: 'Warranty', value: '3 Years' },
    ]
  },
  {
    id: 'standing-seam-roof',
    name: 'Standing Seam Metal Roofing',
    category: 'Roofing',
    image: 'https://images.unsplash.com/photo-1581092335914-6e6a7b0b0b1f?ixlib=rb-4.0.3',
    description: 'Premium metal roofing system with hidden fasteners. Weather-resistant and energy-efficient.',
    sku: 'SSR-006',
    specifications: [
      { label: 'Material', value: 'Galvalume Steel' },
      { label: 'Gauge', value: '24-26 GA' },
      { label: 'Width', value: '16" coverage' },
      { label: 'Seam Height', value: '1.5"' },
      { label: 'Warranty', value: '40 Years' },
    ]
  },
  {
    id: 'aluminum-profiles',
    name: 'Aluminum Extrusion Profiles',
    category: 'Aluminum',
    image: 'https://images.unsplash.com/photo-1581092336013-2e5a3f8c5b8d?ixlib=rb-4.0.3',
    description: 'Custom aluminum extrusion profiles for curtain walls, windows, and structural framing.',
    sku: 'AEP-007',
    specifications: [
      { label: 'Alloy', value: '6063-T5/T6' },
      { label: 'Finish', value: 'Mill/Anodized/Powder Coated' },
      { label: 'Length', value: '6m standard' },
      { label: 'Tolerance', value: 'DIN EN 755-9' },
      { label: 'Customizable', value: 'Yes' },
    ]
  },
]