'use strict';

const auth_controller = 'http://localhost:8000/api/authenticate';

function authenticate(email, password) {
  let promise = Promise.resolve();
  return promise.then(function() {
    return $.post(
      auth_controller,
      { 'email':email, 'password':password }
    ).done(function() {
      window.location = '/index.html';
    });
  });
}

new Vue({
  el: '#loginForm',
  data: {
    email: '',
    password: ''
  },
  methods: {
    btnLoginClick: function () {
      if (this.email !== '' || this.email !== undefined) {
        authenticate(this.email, this.password).then(function() {
          window.location = '/index.html';
        });
      }
    }
  }
});