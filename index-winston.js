const Koa = require('koa');
const app = new Koa();

const winston = require('winston');
const WinstonContext = require('winston-context');
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.simple()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [new winston.transports.Console()],
});
const winstonLogger = new WinstonContext(logger, '', {});
let requestId = 0;
app.use(async (ctx, next) => {
  const { url, request, query, headers, method, ip } = ctx;

  const userAgent = headers['user-agent'];
  ctx.userAgent = userAgent;

  let meta = {
    httpRequest: {
      requestUrl: url,
      requestMethod: method,
      remoteIp: ip,
      userAgent: userAgent,
    },
    body: request.body,
    query: query,
    headers: headers,
    requestId,
  };
  requestId++;
  winstonLogger.debug(url, meta);
  await next();
});

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
