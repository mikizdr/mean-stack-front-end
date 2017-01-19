export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    // shows the messages on startup
    this.getMessage();

  }

  getMessage() {
    var vm = this;
    this.$http.get('http://localhost:5000/api/message').then(function(result){
      vm.messages = result.data;
    });
  }

  postMessage() {
    this.$http.post('http://localhost:5000/api/message', {msg: this.message});

    this.message = '';
    // instantly show message after it is added
    this.getMessage();
  }
 }
