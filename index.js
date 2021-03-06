const proxy = require('express-http-proxy');
const app = require('express')();
const cors = require('cors');
const { host, port = 9000 } = require('minimist')(process.argv.slice(2));
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


app.use(cors());

app.use('/', proxy(host, { limit: '200mb' }));

app.listen(port, () => {
  console.log(`Proxy server for ${host} listening on port ${port}`);
});
