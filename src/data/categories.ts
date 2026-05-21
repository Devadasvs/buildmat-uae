export interface Category {
  id: string
  name: string
  icon: string
}

export const categories: Category[] = [
  { id: 'structural-steel', name: 'Structural Steel', icon: '🏗️' },
  { id: 'cement-boards', name: 'Cement Boards', icon: '🧱' },
  { id: 'pipes', name: 'Pipes & Fittings', icon: '🔧' },
  { id: 'insulation', name: 'Insulation', icon: '❄️' },
  { id: 'hardware', name: 'Construction Hardware', icon: '🔩' },
  { id: 'tools', name: 'Industrial Tools', icon: '🛠️' },
  { id: 'roofing', name: 'Roofing Materials', icon: '🏠' },
  { id: 'aluminum', name: 'Aluminum Products', icon: '📐' },
  { id: 'concrete', name: 'Concrete Products', icon: '🧱' },
  { id: 'safety', name: 'Safety Equipment', icon: '🦺' },
  { id: 'scaffolding', name: 'Scaffolding', icon: '🪜' },
  { id: 'adhesives', name: 'Adhesives & Sealants', icon: '🧴' },
]