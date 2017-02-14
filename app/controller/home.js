'use strict';

exports.index = function* index() {
  this.body = 'hi, egg';
};

exports.session1 = function* session1() {
    yield this.service.home.session1();
    this.body = this.session;
};

exports.session2 = function* session2() {
    yield this.service.home.session2();
    this.body = this.session;
};


exports.session = function* session() {
    this.body = this.session;
};