const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = next({ dev: process.env.NODE_ENV !== 'production' });

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(
      '/api',
      createProxyMiddleware('/api/**', {
        target: process.env.NODE_API,
        changeOrigin: true,
        ws: true,
        pathRewrite: { '/api/': '/' }
      })
    );
    server.get('*', (req, res) => app.getRequestHandler()(req, res));
    server.listen(parseInt(process.env.PORT, 10), (err) => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> server ready on ${process.env.PROXY_URL}`);
    });
  })
  .catch((exception) => {
    // eslint-disable-next-line no-console
    console.error(exception.stack);
    process.exit(1);
  });
