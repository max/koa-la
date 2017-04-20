const listen = require('test-listen');
const request = require('request-promise');
const test = require('ava');
const server = require('./index.js');

let url;

test.before(async () => {
  url = await listen(server.listen());
});

test('endpoint responds with koalas', async t => {
  const body = await request(url);
  t.deepEqual(
    body,
    '🐨 are great!'
  );
});
