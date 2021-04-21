module.exports = {
  //   reactScriptsVersion: 'react-scripts',
  //   babel: {
  //     presets: ['@babel/preset-react'],
  //     plugins: ['transform-class-properties', 'istanbul']
  //   },
  jest: {
    collectCoverage: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: '/jest-coverage',
    coverageReporters: ['json'],
    // The test environment that will be used for testing
    testEnvironment: 'node',
    babel: {
      addPresets: true /* (default value) */,
      addPlugins: true /* (default value) */
    }
    // configure: { /* Any Jest configuration options: https://jestjs.io/docs/en/configuration. */ },
    // configure: (jestConfig, { env, paths, resolve, rootDir }) => { return jestConfig; }
  },
  babel: {
    env: {
      test: { plugins: [] },
      e2e: { presets: ['@babel/preset-react'], plugins: ['transform-class-properties', 'istanbul'] }
    }
  }
}
