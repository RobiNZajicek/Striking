// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    return config;
  },
};