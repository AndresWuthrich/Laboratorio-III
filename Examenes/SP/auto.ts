namespace vehiculos
{
    export class Auto extends Vehiculo{
        private cantidadPuertas:number;

        constructor(marca:string, modelo:number, precio:number, cantidadPuertas:number){
            super(marca, modelo, precio);
            this.cantidadPuertas= cantidadPuertas;
        }

        public getPuertas(){
            return this.cantidadPuertas;
        }
    }
}