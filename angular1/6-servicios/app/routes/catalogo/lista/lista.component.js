export default {
    bindings: {
        busqueda: '=',
        callback: '&'
    },
    controller: function(sharedService) {
        console.log(sharedService.valor);
        sharedService.valor = 15;
    },
    templateUrl: './routes/catalogo/lista/lista.html'
};