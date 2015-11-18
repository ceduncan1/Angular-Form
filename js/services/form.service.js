let FormService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/message';

  this.getAllMsgs = getAllMsgs;
  this.addMsg = addMsg;

  function Msg (msgObj) {
    this.name = msgObj.name;
    this.email = msgObj.email;
    this.site = msgObj.site;
    this.msg = msgObj.msg;
  }

  function getAllMsgs () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addMsg (msgObj) {
    let m = new Msg(msgObj);
    return $http.post(url, m, PARSE.CONFIG);
  }

};

FormService.$inject = ['$http', 'PARSE'];

export default FormService;