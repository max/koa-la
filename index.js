const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = '🐨 are great!';
});

server.use(router.routes());

if (!module.parent) {
  server.listen(process.env.PORT || 3000, err => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on for pandas...`);
  });
}

module.exports = server;
