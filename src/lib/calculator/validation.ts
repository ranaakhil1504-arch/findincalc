/**
 * Shared numeric validation for FindInCalc calculators.
 *
 * Validation is intentionally strict: Number("12abc") is rejected rather
 * than partially parsed. Formatting and UI concerns stay outside this module.
 */
export type ValidationResult =
  | { valid: true; value: number }
  | { valid: false; message: string };

export function validateNumber(
  value: unknown,
  name = 'Value',
  options: { min?: number; max?: number; minExclusive?: boolean; maxExclusive?: boolean } = {}
): ValidationResult {
  const trimmed = typeof value === 'string' ? value.trim() : value;

  if (trimmed === '' || trimmed === null || trimmed === undefined) {
    return { valid: false, message: `Please enter a ${name}` };
  }

  // Number() gives us strict whole-input validation. In particular,
  // Number('12abc') is NaN, unlike parseFloat('12abc') which returns 12.
  const num = typeof value === 'number' ? value : Number(String(value).trim());

  if (!Number.isFinite(num)) {
    return { valid: false, message: 'Please enter a valid number' };
  }

  const { min, max, minExclusive = false, maxExclusive = false } = options;

  if (min !== undefined && (minExclusive ? num <= min : num < min)) {
    return {
      valid: false,
      message: minExclusive
        ? `${name} must be greater than ${min}`
        : `${name} must be at least ${min}`,
    };
  }

  if (max !== undefined && (maxExclusive ? num >= max : num > max)) {
    return {
      valid: false,
      message: maxExclusive
        ? `${name} must be less than ${max}`
        : `${name} must be at most ${max}`,
    };
  }

  return { valid: true, value: num };
}

export function validatePositiveNumber(
  value: unknown,
  name = 'Value',
  max = 1e10,
): ValidationResult {
  return validateNumber(value, name, { min: 0, minExclusive: true, max });
}

export function validateNonNegativeNumber(
  value: unknown,
  name = 'Value',
  max = 1e10,
): ValidationResult {
  return validateNumber(value, name, { min: 0, max });
}