export default {
    templateUrl: './routes/catalogo/nuevo/nuevo.html',
    controller: function($scope, sharedService) {
        $scope.enviar = function() {
            sharedService.saveElement(this.elemento);
        }

        $scope.mostrarAyuda = function() {
            console.log('Ayuda de formulario');
        }
        
    }
};