var vehiculos;
(function (vehiculos) {
    var Vehiculo = /** @class */ (function () {
        function Vehiculo(marca, modelo, precio) {
            //    this.id= id;
            this.marca = marca;
            this.modelo = modelo;
            this.precio = precio;
        }
        Vehiculo.prototype.getMarca = function () {
            return this.marca;
        };
        Vehiculo.prototype.getModelo = function () {
            return this.modelo;
        };
        Vehiculo.prototype.getPrecio = function () {
            return this.precio;
        };
        Vehiculo.prototype.getId = function () {
            return this.id;
        };
        Vehiculo.prototype.setId = function (idNuevo) {
            this.id = idNuevo;
        };
        return Vehiculo;
    }());
    vehiculos.Vehiculo = Vehiculo;
})(vehiculos || (vehiculos = {}));
