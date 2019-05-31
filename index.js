const proxy = require('express-http-proxy');
const app = require('express')();
const cors = require('cors');
const { host, port = 9000 } = require('minimist')(process.argv.slice(2));

app.use(cors());

app.use('/', proxy(host));

app.listen(port, () => {
  console.log(`Proxy server for ${host} listening on port ${port}`);
});
