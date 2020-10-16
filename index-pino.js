const Koa = require('koa');
const app = new Koa();

const pino = require('koa-pino-logger')();
app.use(pino);

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
