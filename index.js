const Koa = require('koa');

const server = new Koa();

server.use(async ctx => {
  ctx.body = '🐨 are great!';
});

if (!module.parent) {
  server.listen(process.env.PORT || 3000, err => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on for pandas...`);
  });
}

module.exports = server;
