module.exports = {
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  }
}
