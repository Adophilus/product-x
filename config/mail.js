export default {
  sender: 'admin@product-x.localhost',
  templates: {
    directory: './emails'
  },
  transport: {
    host: '127.0.0.1',
    port: 1025,
    ssl: false,
    tls: true,
    auth: {
      user: 'product-x',
      pass: 'product-x'
    }
  }
}
