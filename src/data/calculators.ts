// src/data/calculators.ts

/**
 * Central Calculator Registry - Single Source of Truth
 *
 * This file contains all calculator metadata and helper functions.
 * All calculator data should be accessed through this registry.
 *
 * To add a new calculator:
 * 1. Add it to the CALCULATORS array below
 * 2. Make sure it has a unique id and url
 * 3. Add relevant searchTerms for discoverability
 */

// ============================================
// TYPES
// ============================================

export type Category = 'math' | 'health' | 'finance';

export interface Calculator {
  /** Unique identifier (slug) for the calculator */
  id: string;
  /** Display name of the calculator */
  name: string;
  /** Full URL path (starting with /) */
  url: string;
  /** Category the calculator belongs to */
  category: Category;
  /** Emoji icon for the calculator */
  icon: string;
  /** Short description (used in cards and search results) */
  description: string;
  /** Mathematical formula display (optional) */
  formula?: string;
  /** Keywords for search functionality */
  searchTerms: string[];
  /** Whether the calculator is featured on the homepage */
  featured?: boolean;
  /** Whether the calculator appears in trending section */
  trending?: boolean;
  /** IDs of related calculators for recommendations */
  relatedCalculators?: string[];
}

export interface CategoryInfo {
  /** Category identifier */
  id: Category;
  /** Display name of the category */
  name: string;
  /** Emoji icon for the category */
  icon: string;
  /** Short description of the category */
  description: string;
}

// ============================================
// CATEGORY DATA
// ============================================

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'math',
    name: 'Math',
    icon: '📐',
    description: 'Geometry, Algebra, and more'
  },
  {
    id: 'health',
    name: 'Health',
    icon: '❤️',
    description: 'BMI, BMR, and more'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: '💰',
    description: 'Loans, EMI, and more'
  }
];

// ============================================
// CALCULATOR REGISTRY
// ============================================

export const CALCULATORS: Calculator[] = [
  // ============ MATH CATEGORY ============
  {
    id: 'circle-area',
    name: 'Circle Area Calculator',
    url: '/math/circle-area',
    category: 'math',
    icon: '⭕',
    description: 'Calculate area from radius, or find radius from area',
    formula: 'A = πr²',
    searchTerms: [
      'circle',
      'area',
      'radius',
      'diameter',
      'pi',
      'circumference',
      'geometry'
    ],
    featured: true,
    trending: true,
    relatedCalculators: ['ellipse-area', 'rectangle-area']
  },
  {
    id: 'rectangle-area',
    name: 'Rectangle Area Calculator',
    url: '/math/rectangle-area',
    category: 'math',
    icon: '▭',
    description: 'Calculate area, find length, or find width',
    formula: 'A = l × w',
    searchTerms: [
      'rectangle',
      'area',
      'length',
      'width',
      'geometry',
      'square'
    ],
    featured: true,
    trending: false,
    relatedCalculators: ['triangle-area', 'parallelogram-area']
  },
  {
    id: 'triangle-area',
    name: 'Triangle Area Calculator',
    url: '/math/triangle-area',
    category: 'math',
    icon: '△',
    description: 'Calculate area, find base, or find height',
    formula: 'A = ½ × b × h',
    searchTerms: [
      'triangle',
      'area',
      'base',
      'height',
      'right triangle',
      'equilateral',
      'isosceles',
      'scalene',
      'geometry'
    ],
    featured: false,
    trending: false,
    relatedCalculators: ['rectangle-area', 'trapezoid-area']
  },
  {
    id: 'trapezoid-area',
    name: 'Trapezoid Area Calculator',
    url: '/math/trapezoid-area',
    category: 'math',
    icon: '⏢',
    description: 'Calculate area, find height, or find a missing base',
    formula: 'A = ½(a + b)h',
    searchTerms: [
      'trapezoid',
      'trapezium',
      'area',
      'base',
      'height',
      'geometry',
      'quadrilateral'
    ],
    featured: false,
    trending: false,
    relatedCalculators: ['parallelogram-area', 'triangle-area']
  },
  {
    id: 'parallelogram-area',
    name: 'Parallelogram Area Calculator',
    url: '/math/parallelogram-area',
    category: 'math',
    icon: '▱',
    description: 'Calculate area, find base, or find height',
    formula: 'A = b × h',
    searchTerms: [
      'parallelogram',
      'area',
      'base',
      'height',
      'geometry',
      'rhombus',
      'quadrilateral'
    ],
    featured: false,
    trending: false,
    relatedCalculators: ['rectangle-area', 'trapezoid-area']
  },
  {
    id: 'ellipse-area',
    name: 'Ellipse Area Calculator',
    url: '/math/ellipse-area',
    category: 'math',
    icon: '⬮',
    description: 'Calculate area, find semi-major axis, or find semi-minor axis',
    formula: 'A = πab',
    searchTerms: [
      'ellipse',
      'area',
      'semi-major',
      'semi-minor',
      'axis',
      'geometry',
      'conic sections',
      'oval'
    ],
    featured: false,
    trending: false,
    relatedCalculators: ['circle-area']
  },

  // ============ HEALTH CATEGORY ============
  {
    id: 'bmi',
    name: 'BMI Calculator',
    url: '/health/bmi',
    category: 'health',
    icon: '⚖️',
    description: 'Calculate your Body Mass Index',
    formula: 'BMI = weight / (height)²',
    searchTerms: [
      'bmi',
      'body mass index',
      'body mass',
      'weight',
      'height',
      'health',
      'fitness',
      'ideal weight'
    ],
    featured: true,
    trending: true,
    relatedCalculators: []
  },

  // ============ FINANCE CATEGORY ============
  {
    id: 'loan',
    name: 'Loan Calculator',
    url: '/finance/loan',
    category: 'finance',
    icon: '🏦',
    description: 'Calculate monthly payments, total interest, and total payment',
    formula: 'EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ - 1)',
    searchTerms: [
      'loan',
      'emi',
      'monthly payment',
      'interest',
      'principal',
      'mortgage',
      'car loan',
      'home loan',
      'personal loan',
      'finance'
    ],
    featured: true,
    trending: true,
    relatedCalculators: []
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get a calculator by its unique ID
 */
export function getCalculatorById(id: string): Calculator | undefined {
  return CALCULATORS.find(calc => calc.id === id);
}

/**
 * Get a calculator by its URL path
 */
export function getCalculatorByUrl(url: string): Calculator | undefined {
  return CALCULATORS.find(calc => calc.url === url);
}

/**
 * Get all calculators in a specific category
 */
export function getCalculatorsByCategory(category: Category): Calculator[] {
  return CALCULATORS.filter(calc => calc.category === category);
}

/**
 * Get the count of calculators in a specific category
 */
export function getCategoryCount(category: Category): number {
  return CALCULATORS.filter(calc => calc.category === category).length;
}

/**
 * Get total number of calculators
 */
export function getTotalCalculatorCount(): number {
  return CALCULATORS.length;
}

/**
 * Get all trending calculators
 */
export function getTrendingCalculators(): Calculator[] {
  return CALCULATORS.filter(calc => calc.trending === true);
}

/**
 * Get all featured calculators
 */
export function getFeaturedCalculators(): Calculator[] {
  return CALCULATORS.filter(calc => calc.featured === true);
}

/**
 * Search calculators by name, description, or searchTerms
 * Case-insensitive search
 * Returns empty array for empty query
 */
export function searchCalculators(query: string): Calculator[] {
  if (!query || query.trim() === '') {
    return [];
  }

  const searchQuery = query.toLowerCase().trim();

  return CALCULATORS.filter(calc => {
    // Search in name
    if (calc.name.toLowerCase().includes(searchQuery)) {
      return true;
    }

    // Search in description
    if (calc.description.toLowerCase().includes(searchQuery)) {
      return true;
    }

    // Search in searchTerms
    if (calc.searchTerms.some(term => term.toLowerCase().includes(searchQuery))) {
      return true;
    }

    return false;
  });
}

/**
 * Get related calculators for a given calculator ID
 * Returns up to 3 related calculators
 */
export function getRelatedCalculators(calculatorId: string): Calculator[] {
  const calc = getCalculatorById(calculatorId);
  if (!calc || !calc.relatedCalculators || calc.relatedCalculators.length === 0) {
    return [];
  }

  const related: Calculator[] = [];
  for (const id of calc.relatedCalculators) {
    const relatedCalc = getCalculatorById(id);
    if (relatedCalc) {
      related.push(relatedCalc);
    }
    if (related.length >= 3) break;
  }

  return related;
}

/**
 * Get all unique categories that have calculators
 */
export function getActiveCategories(): Category[] {
  const categories = new Set<Category>();
  CALCULATORS.forEach(calc => categories.add(calc.category));
  return Array.from(categories);
}

/**
 * Check if a calculator URL is valid (exists in registry)
 */
export function isValidCalculatorUrl(url: string): boolean {
  return CALCULATORS.some(calc => calc.url === url);
}