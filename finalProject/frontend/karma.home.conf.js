module.exports = function(config) {
    const baseConfig = require('./karma.conf.js');
    baseConfig(config);
  
    config.set({
      files: [
        'frontend/src/app/components/home/home.component.spec.ts'
      ]
    });
  };
  