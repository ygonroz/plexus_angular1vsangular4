export default {
    bindings: {
        busqueda: '=',
        callback: '&'
    },
    controller: function($scope, sharedService) {
        sharedService.getElements().then(
            function success(data) {
                $scope.elementos = data;
            }, function error(msg) {
              console.error(msg);
            }
          );

        $scope.borrar = function(id) {
            console.log(id);
            sharedService.deleteElement(id);
        }
    },
    templateUrl: './routes/catalogo/lista/lista.html'
};