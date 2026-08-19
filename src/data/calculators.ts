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
  /** Whether the calculator is coming soon (not yet implemented) */
  isComingSoon?: boolean;
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

  // --- Area Calculators ---
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

  // --- Volume Calculators (Coming Soon) ---
  {
    id: 'sphere-volume',
    name: 'Sphere Volume Calculator',
    url: '/math/sphere-volume',
    category: 'math',
    icon: '⚽',
    description: 'Calculate volume of a sphere',
    formula: 'V = ⁴⁄₃πr³',
    searchTerms: ['sphere', 'volume', 'radius', 'ball', 'geometry'],
    featured: false,
    trending: false,
    relatedCalculators: ['circle-area', 'cylinder-volume'],
    isComingSoon: true
  },
  {
    id: 'cube-volume',
    name: 'Cube Volume Calculator',
    url: '/math/cube-volume',
    category: 'math',
    icon: '🧊',
    description: 'Calculate volume of a cube',
    formula: 'V = s³',
    searchTerms: ['cube', 'volume', 'side', 'geometry'],
    featured: false,
    trending: false,
    relatedCalculators: ['rectangle-area'],
    isComingSoon: true
  },
  {
    id: 'cylinder-volume',
    name: 'Cylinder Volume Calculator',
    url: '/math/cylinder-volume',
    category: 'math',
    icon: '🥫',
    description: 'Calculate volume of a cylinder',
    formula: 'V = πr²h',
    searchTerms: ['cylinder', 'volume', 'radius', 'height', 'geometry'],
    featured: false,
    trending: false,
    relatedCalculators: ['circle-area', 'sphere-volume'],
    isComingSoon: true
  },
  {
    id: 'cone-volume',
    name: 'Cone Volume Calculator',
    url: '/math/cone-volume',
    category: 'math',
    icon: '🍦',
    description: 'Calculate volume of a cone',
    formula: 'V = ⅓πr²h',
    searchTerms: ['cone', 'volume', 'radius', 'height', 'geometry'],
    featured: false,
    trending: false,
    relatedCalculators: ['cylinder-volume', 'pyramid-volume'],
    isComingSoon: true
  },
  {
    id: 'prism-volume',
    name: 'Rectangular Prism Volume Calculator',
    url: '/math/prism-volume',
    category: 'math',
    icon: '📦',
    description: 'Calculate volume of a rectangular prism',
    formula: 'V = l × w × h',
    searchTerms: ['prism', 'volume', 'rectangular', 'box', 'geometry'],
    featured: false,
    trending: false,
    relatedCalculators: ['cube-volume', 'rectangle-area'],
    isComingSoon: true
  },
  {
    id: 'pyramid-volume',
    name: 'Pyramid Volume Calculator',
    url: '/math/pyramid-volume',
    category: 'math',
    icon: '🔺',
    description: 'Calculate volume of a pyramid',
    formula: 'V = ⅓Bh',
    searchTerms: ['pyramid', 'volume', 'base', 'height', 'geometry'],
    featured: false,
    trending: false,
    relatedCalculators: ['cone-volume', 'triangle-area'],
    isComingSoon: true
  },

  // ============ HEALTH CATEGORY ============

  // --- Implemented Health Calculators ---
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
    relatedCalculators: ['bmr', 'body-fat']
  },
  {
    id: 'bmr',
    name: 'BMR Calculator',
    url: '/health/bmr',
    category: 'health',
    icon: '🔥',
    description: 'Calculate your Basal Metabolic Rate',
    formula: 'BMR = 10 × weight + 6.25 × height - 5 × age + 5',
    searchTerms: [
      'bmr',
      'basal metabolic rate',
      'metabolism',
      'calories',
      'fitness'
    ],
    featured: true,
    trending: true,
    relatedCalculators: ['bmi', 'calorie']
  },
  {
    id: 'calorie',
    name: 'Calorie Calculator',
    url: '/health/calorie',
    category: 'health',
    icon: '🍎',
    description: 'Calculate your daily calorie needs',
    formula: 'TDEE = BMR × Activity Factor',
    searchTerms: [
      'calorie',
      'calories',
      'daily calorie',
      'food',
      'diet',
      'tdee'
    ],
    featured: true,
    trending: true,
    relatedCalculators: ['bmr', 'ideal-weight']
  },
  {
    id: 'ideal-weight',
    name: 'Ideal Weight Calculator',
    url: '/health/ideal-weight',
    category: 'health',
    icon: '🎯',
    description: 'Find your ideal weight range',
    formula: 'Devine: 50 + 0.9 × (height - 152.4)',
    searchTerms: [
      'ideal weight',
      'healthy weight',
      'weight range',
      'fitness'
    ],
    featured: false,
    trending: false,
    relatedCalculators: ['bmi', 'body-fat']
  },
  {
    id: 'body-fat',
    name: 'Body Fat Calculator',
    url: '/health/body-fat',
    category: 'health',
    icon: '💧',
    description: 'Estimate your body fat percentage',
    formula: 'Navy Method',
    searchTerms: [
      'body fat',
      'fat percentage',
      'fitness',
      'health',
      'navy method'
    ],
    featured: true,
    trending: true,
    relatedCalculators: ['bmi', 'ideal-weight']
  },

  // ============ FINANCE CATEGORY ============

  // --- Implemented Finance Calculators ---
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
    relatedCalculators: ['emi', 'mortgage']
  },
  {
    id: 'emi',
    name: 'EMI Calculator',
    url: '/finance/emi',
    category: 'finance',
    icon: '📈',
    description: 'Calculate Equated Monthly Installment for loans',
    formula: 'EMI = P × r × (1+r)ⁿ / ((1+r)ⁿ - 1)',
    searchTerms: [
      'emi',
      'equated monthly installment',
      'loan',
      'payment',
      'finance'
    ],
    featured: true,
    trending: true,
    relatedCalculators: ['loan', 'mortgage']
  },
  {
    id: 'mortgage',
    name: 'Mortgage Calculator',
    url: '/finance/mortgage',
    category: 'finance',
    icon: '🏠',
    description: 'Calculate home loan payments including taxes, insurance, and PMI',
    formula: 'M = P [ i(1+i)^n ] / [ (1+i)^n - 1 ]',
    searchTerms: [
      'mortgage',
      'home loan',
      'property',
      'real estate',
      'housing',
      'finance'
    ],
    featured: true,
    trending: true,
    relatedCalculators: ['loan', 'emi']
  },
  {
    id: 'sip',
    name: 'SIP Calculator',
    url: '/finance/sip',
    category: 'finance',
    icon: '📊',
    description: 'Calculate returns on Systematic Investment Plans',
    formula: 'FV = P × ((1+r)ⁿ - 1) / r × (1+r)',
    searchTerms: [
      'sip',
      'systematic investment plan',
      'mutual fund',
      'investment',
      'finance',
      'wealth'
    ],
    featured: true,
    trending: true,
    relatedCalculators: []
  },
  {
    id: 'credit-card',
    name: 'Credit Card Calculator',
    url: '/finance/credit-card',
    category: 'finance',
    icon: '💳',
    description: 'Calculate credit card payments, interest, and payoff time',
    formula: 'Monthly Interest = Balance × (APR / 12)',
    searchTerms: [
      'credit card',
      'credit card payment',
      'interest',
      'debt',
      'finance',
      'payoff'
    ],
    featured: true,
    trending: true,
    relatedCalculators: ['loan']
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
 * By default, returns implemented calculators only (isComingSoon === false)
 * Set includeComingSoon to true to include coming soon calculators
 */
export function getCalculatorsByCategory(
  category: Category,
  includeComingSoon: boolean = false
): Calculator[] {
  return CALCULATORS.filter(calc => 
    calc.category === category && 
    (includeComingSoon || !calc.isComingSoon)
  );
}

/**
 * Get all coming soon calculators in a specific category
 */
export function getComingSoonByCategory(category: Category): Calculator[] {
  return CALCULATORS.filter(calc => 
    calc.category === category && 
    calc.isComingSoon === true
  );
}

/**
 * Get the count of calculators in a specific category
 * By default, counts implemented calculators only
 * Set includeComingSoon to true to include coming soon calculators
 */
export function getCategoryCount(
  category: Category,
  includeComingSoon: boolean = false
): number {
  return CALCULATORS.filter(calc => 
    calc.category === category && 
    (includeComingSoon || !calc.isComingSoon)
  ).length;
}

/**
 * Get total number of calculators
 * By default, counts implemented calculators only
 * Set includeComingSoon to true to include coming soon calculators
 */
export function getTotalCalculatorCount(includeComingSoon: boolean = false): number {
  return CALCULATORS.filter(calc => includeComingSoon || !calc.isComingSoon).length;
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
    // Search only implemented calculators, not coming soon
    if (calc.isComingSoon) return false;

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
    if (relatedCalc && !relatedCalc.isComingSoon) {
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
  CALCULATORS.forEach(calc => {
    if (!calc.isComingSoon) {
      categories.add(calc.category);
    }
  });
  return Array.from(categories);
}

/**
 * Get all unique categories that have calculators (including coming soon)
 */
export function getAllCategories(): Category[] {
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