import winston from 'winston';

export const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    }),
    new winston.transports.File({ filename: 'access.log' }),
  ],
  exitOnError: false,
});

export const loggerStream = {
  write: (message) => {
    logger.info(message);
  },
};
