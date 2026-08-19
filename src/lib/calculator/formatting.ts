/**
 * Shared number formatting utilities for FindInCalc.
 *
 * Formatting is display-only.
 * Never round a value before using it in a calculation.
 */

export interface FormatNumberOptions {
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  useGrouping?: boolean;
  notation?: 'standard' | 'scientific' | 'engineering';
}

const DEFAULT_MAX_FRACTION_DIGITS = 10;

/**
 * Format a normal calculator number.
 */
export function formatNumber(
  value: number,
  options: FormatNumberOptions = {}
): string {
  if (!Number.isFinite(value)) {
    return '—';
  }

  const {
    maximumFractionDigits = DEFAULT_MAX_FRACTION_DIGITS,
    minimumFractionDigits = 0,
    useGrouping = true,
    notation = 'standard',
  } = options;

  return new Intl.NumberFormat('en-US', {
    useGrouping,
    notation,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
}

/**
 * Format a calculator result.
 *
 * Default: up to 8 decimal places.
 */
export function formatResult(
  value: number,
  options: FormatNumberOptions = {}
): string {
  return formatNumber(value, {
    maximumFractionDigits: 8,
    ...options,
  });
}

/**
 * Format percentages.
 */
export function formatPercentage(
  value: number,
  maximumFractionDigits = 2
): string {
  if (!Number.isFinite(value)) {
    return '—';
  }

  return `${formatNumber(value, {
    maximumFractionDigits,
    minimumFractionDigits: 0,
    useGrouping: false,
  })}%`;
}

/**
 * Format a decimal without thousands separators.
 */
export function formatDecimal(
  value: number,
  maximumFractionDigits = 10
): string {
  return formatNumber(value, {
    maximumFractionDigits,
    minimumFractionDigits: 0,
    useGrouping: false,
  });
}