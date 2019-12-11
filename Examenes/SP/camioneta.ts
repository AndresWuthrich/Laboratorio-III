namespace vehiculos
{
    export class Camioneta extends Vehiculo{
        private cuatroXcuatro:boolean;

        constructor(marca:string, modelo:number, precio:number, cuatroXcuatro:boolean){
            super(marca, modelo, precio);
            this.cuatroXcuatro= cuatroXcuatro;
        }

        public getCuatro(){
            return this.cuatroXcuatro;
        }
    }
}