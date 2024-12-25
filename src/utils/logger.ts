
import {createLogger,format,transports} from 'winston'
const { combine, timestamp, label, prettyPrint } = format;


const logger = createLogger({
    format : combine(
      timestamp(),
      prettyPrint()
    ),
    transports: [new transports.File({filename:'./logs/errorLogs.log'})],
    exceptionHandlers: [new transports.File(
      {
        filename:'./logs/unhandledExceptionsAndRejections.log',
        handleExceptions: true,
        handleRejections: true,
      }
    )],
    exitOnError : true
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
    format: format.simple(),
  }));
}

export default  logger
