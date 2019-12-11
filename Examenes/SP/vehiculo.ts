namespace vehiculos
{
    export abstract class Vehiculo{
        private id:number;
        private marca:string;
        private modelo:number;
        private precio:number;

        constructor(marca:string, modelo:number, precio:number){
        //    this.id= id;
            this.marca= marca;
            this.modelo= modelo;
            this.precio= precio;
        }

        public getMarca(){
            return this.marca;
        }

        public getModelo(){
            return this.modelo;
        }

        public getPrecio(){
            return this.precio;
        }

        public getId(){
            return this.id;
        }

        public setId(idNuevo){
            this.id= idNuevo;
        }

    }
}