const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/v1', createProxyMiddleware({ target: 'http://localhost:5555', changeOrigin: true }));
app.use('/v2', createProxyMiddleware({ target: 'http://localhost:3333', changeOrigin: true }));

app.listen(3000);