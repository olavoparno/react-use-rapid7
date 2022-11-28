import { LoggerClient, LoggersClientReturn } from './types';

function getMessage(message: string | Record<string, string> | Error) {
  return typeof message === 'object' &&
    !Array.isArray(message) &&
    message !== null
    ? JSON.stringify(message)
    : message;
}

/**
 * @description Logger class
 * @static getInstance: Get instance of R7Logger
 * @method warn: Log warn message
 * @method error: Log error message
 * @method info: Log info message
 * @method log: Log log message
 * @example const logger = R7Logger.getInstance(InjectedLogger, token, { print: process.env.NODE_ENV !== 'production' })
 * logger.warn('message')
 * logger.error('message')
 * logger.info('message')
 * logger.log('message')
 */
export class R7LoggerClient {
  private static instance: LoggersClientReturn;

  private service: LoggerClient;

  private getMessage: typeof getMessage;

  private constructor(
    InjectedLogger: unknown,
    token: string,
    rapid7Options?: object
  ) {
    this.getMessage = getMessage;

    try {
      (InjectedLogger as LoggerClient).init({
        token,
        region: 'us3',
        catchall: true,
        page_info: 'per-page',
        ...rapid7Options,
      });

      this.service = InjectedLogger as LoggerClient;
    } catch (error) {
      this.service = InjectedLogger as LoggerClient;
    }
  }

  static getInstance(
    InjectedLogger: unknown,
    token: string,
    rapid7Options?: object
  ): LoggersClientReturn {
    if (!R7LoggerClient.instance) {
      R7LoggerClient.instance = new R7LoggerClient(
        InjectedLogger,
        token,
        rapid7Options
      ) as unknown as LoggersClientReturn;
    }

    return R7LoggerClient.instance;
  }

  public log(
    message: string | Record<string & number & symbol, string> | Error
  ) {
    const currentMessage = this.getMessage(message);

    this.service.log(currentMessage);
  }

  public warn(
    message: string | Record<string & number & symbol, string> | Error
  ) {
    const currentMessage = this.getMessage(message);

    this.service.warn(currentMessage);
  }

  public error(
    message: string | Record<string & number & symbol, string> | Error
  ) {
    const currentMessage = this.getMessage(message);

    this.service.error(currentMessage);
  }

  public info(
    message: string | Record<string & number & symbol, string> | Error
  ) {
    const currentMessage = this.getMessage(message);

    this.service.info(currentMessage);
  }
}
