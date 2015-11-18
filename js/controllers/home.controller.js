let HomeController = function(PARSE) {
  
  console.log(PARSE);

  let vm = this;

  vm.title = 'Home Page';

};

HomeController.$inject = ['PARSE'];

export default HomeController;