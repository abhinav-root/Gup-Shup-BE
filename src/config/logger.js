const winston = require("winston");
const {
  combine,
  timestamp,
  printf,
  colorize,
  align,
  json,
  prettyPrint,
  metadata,
  ms,
} = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(
    timestamp(),
    json(),
    colorize({ all: true }),
    ms(),
    metadata()
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
