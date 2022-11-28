type MessageHandler = (
  message: string | Record<string & number & symbol, string> | Error
) => void;

type InitOptions = {
  token: string;
  region: string;
  page_info: string;
  catchall: boolean;
};

export type LoggersClientReturn = {
  warn: MessageHandler;
  error: MessageHandler;
  info: MessageHandler;
  log: MessageHandler;
};

export type LoggerClient = {
  init(options: InitOptions): void;
  info: MessageHandler;
  warn: MessageHandler;
  error: MessageHandler;
  log: MessageHandler;
};
