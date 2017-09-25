var catalogoComponent = require('./catalogo.component');
var catalogoNuevoComponent = require('./nuevo/nuevo.component');
var catalogoListaComponent = require('./lista/lista.component');

var catalogo = angular.module('ejemplo.catalogo',[]);

catalogo.component('catalogo',catalogoComponent.default);
catalogo.component('catalogoNuevo',catalogoNuevoComponent.default);
catalogo.component('catalogoLista',catalogoListaComponent.default);
catalogo.directive('validador',function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function validacion(valor) {
        if (valor > 0) {
          mCtrl.$setValidity('charE', true);
        } else {
          mCtrl.$setValidity('charE', false);
        }
        return valor;
      }
      mCtrl.$parsers.push(validacion);
    }
  };
});

catalogo.controller('catalogoCtrl', function ($scope) {
    this.busqueda = { value: "" };

    this.callback = function() {
        console.log(this.busqueda.value);
    }
});

catalogo.controller('catalogoCtrl', function ($scope) {
  this.busqueda = { value: "" };

  this.callback = function() {
      console.log(this.busqueda.value);
  }
});

catalogo.service('sharedService', function($resource) {
  var apiUrl = 'http://localhost:3030/api/pub/items';

  this.getElements = function() {
    return $resource(apiUrl).query().$promise;
  }

  this.saveElement = function(elemento) {
    $resource(apiUrl).save(elemento);
  }

});

export default catalogo.name;