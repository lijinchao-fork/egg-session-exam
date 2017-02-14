'use strict';

module.exports = app => {
  app.get('/', 'home.index');

  app.get('/session1', 'home.session1');
  app.get('/session2', 'home.session2');
  app.get('/session', 'home.session');
};
