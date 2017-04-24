angular
  // module gives the app a name
  .module('peopleApp',[])
  // .controller part attaches a function as a controller
  .controller('PageController', PageController);

  // controller function to use
  function PageController() {
    // save the value of this so we can use different this in other functions
    var vm = this;
    vm.classList = "People and their Jobs";
    vm.newPerson = [
      {'name': 'kevin', 'occupation': 'teacher'},
      {'name': 'michael', 'occupation': 'admin'},
      {'name': 'brianna', 'occupation': 'instructor'}
    ];
  }
