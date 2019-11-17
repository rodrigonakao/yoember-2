/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'yoember-2',
    environment,
    rootURL: '/',
    locationType: 'auto',

    firebase: {
      apiKey: "AIzaSyAYE9BybBwuVzJaPJaAziSDVulnnuTJG5c",
      authDomain: "library-app-e55bd.firebaseapp.com",
      databaseURL: "https://library-app-e55bd.firebaseio.com",
      projectId: "library-app-e55bd",
      storageBucket: "library-app-e55bd.appspot.com",
      messagingSenderId: "885204068049",
      appId: "1:885204068049:web:45bb654f8751285d77c7f0",
      measurementId: "G-062MN2KET2"
    },

    // if using ember-cli-content-security-policy
    // contentSecurityPolicy: {
    //   'script-src': "'self' 'unsafe-eval' apis.google.com",
    //   'frame-src': "'self' https://*.firebaseapp.com",
    //   'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    // },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
