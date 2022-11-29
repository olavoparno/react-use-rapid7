import { useMemo } from 'react';
import R7Insight from 'r7insight_js';
import { LoggersClientReturn } from './types';
import { R7LoggerClient } from './dependencies';

export function useRapid7Factory<T>(
  InjectedLogger: T,
  token: string,
  rapid7Options?: object
): LoggersClientReturn {
  const logger = useMemo(() => {
    return R7LoggerClient.getInstance(InjectedLogger, token, rapid7Options);
  }, [InjectedLogger, token, rapid7Options]);

  console.log('logger', logger);

  return logger;
}

/**
 * @description useRapid7Logger hook
 * @param {string} token - Rapid7 InsightOps token
 * @param {object=} rapid7Options - optional Rapid7 InsightOps configuration
 * @returns logger instance
 * @example const logger = useRapid7('MY-TOKEN', { print: process.env.NODE_ENV !== 'production' })
 * logger.warn('message')
 * logger.error('message')
 * logger.info('message')
 * logger.log('message')
 */
export function useRapid7(
  token: string,
  rapid7Options?: object
): LoggersClientReturn {
  if (!token) {
    throw new Error('Token is required.');
  }

  return useRapid7Factory(R7Insight, token, rapid7Options);
}
