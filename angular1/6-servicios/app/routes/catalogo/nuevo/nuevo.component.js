export default {
    templateUrl: './routes/catalogo/nuevo/nuevo.html',
    controller: function($scope, sharedService) {
        console.log(sharedService.valor);

        $scope.enviar = function() {
            console.log(this.elemento);
        }

        $scope.mostrarAyuda = function() {
            console.log('Ayuda de formulario');
        }
        
    }
};