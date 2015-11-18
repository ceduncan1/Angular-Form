import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import FormController from './controllers/form.controller';
import ContactsController from './controllers/contacts.controller';

import PARSE from './constants/parse.constant';

import FormService from './services/form.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('PARSE', PARSE)
  .controller('HomeController', HomeController)
  .controller('FormController', FormController)
  .controller('ContactsController', ContactsController)
  .service('FormService', FormService)
;
