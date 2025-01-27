const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: ['host.docker.internal'],
    allowedHosts: [
      'host.docker.internal',
      'localhost',
    ],
  },
});
