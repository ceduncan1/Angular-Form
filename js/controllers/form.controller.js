let FormController = function(FormService, $scope) {
  
  let vm = this;

  vm.addMsg = addMsg;

  // vm.nameErr = true;
  // vm.emailErr = true;
  // vm.emailErrAt = true;
  // vm.siteErr = true;
  // vm.siteErrAddress = true;
  // vm.msgErr = true;


  function addMsg (msgObj) {
    FormService.addMsg(msgObj).then( (res) => {
      console.log(res);
    });
  }

  let validateName = (name) => {
    if (name.length !== 0) {
      vm.nameErr = false;
    }
  };

  let validateEmailLength = (email) => {
    if (email.length !== 0) {
      vm.emailErr = false;
    }
  };

  let validateEmailAt = (email) => {
    if (email.includes('@')) {
      vm.emailErrAt = false;
    }
  };

  let validateSite = (site) => {
    if (site.length !== 0) {
      vm.siteErr = false;
    }
  };

  let validateSiteAddress = (site) => {
    if (site.startsWith('http://') || site.startsWith('https://')) {
      vm.siteErrAddress = false;
    }
  };

  let validateMsg = (msg) => {
    if (msg.length !== 0) {
      vm.msgErr = false;
    }
  };

  // let validateForm = function () {
  //   if (vm.nameErr === false) && (vm.emailErr === false) && (vm.emailErrAt === false) && (vm.siteErr === false) && (vm.siteErrAddress === false) && (vm.msgErr === false) {
  //     vm.validForm = false;
  //   }
  // };

  $scope.$watch('msgObj.email', function (newVal, prevVal) {
    if(!newVal) return;
    // console.log(prevVal, newVal);
    validateEmailAt(newVal);
  });

};

FormController.$inject = ['FormService', '$scope'];

export default FormController;
