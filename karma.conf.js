module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    browsers: ['ChromeHeadless'], // Utilisation de Chrome en mode headless pour les tests.

    reporters: ['progress', 'kjhtml', 'coverage'],
    coverageReporter: {
      dir: require('path').join(__dirname, 'coverage'), // Répertoire de sortie pour les rapports de couverture
      subdir: '.',
      reporters: [
        { type: 'lcovonly', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true
  });
};
