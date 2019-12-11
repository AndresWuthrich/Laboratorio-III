namespace vehiculos
{
    var lista:Array<Vehiculo> = new Array<Vehiculo>();
    var listaFilter:Array<Vehiculo> = new Array<Vehiculo>();

    // Al momento de cargar el index realiza lo siguiente:
    $(document).ready(function(){
        $("#popup").hide();
        $("#showProm").hide();
//        $("#showProm").setAttribute("onclick","$("#popup").Cerrar()";
        $("#btnAgregar").click(Abrir);
        $("#btnGuardar").click(Agregar);
//        document.addEventListener();
        $("#btnPromedio").click(Promediar);
 
 
         //agrego en thead de la tabla
         let thead=$("#thead");
 
         let thId=document.createElement("th");
         let nThId=document.createTextNode("Id");
         thId.appendChild(nThId);
 
         let th=document.createElement("th");
         let nTh=document.createTextNode("Marca");
         th.appendChild(nTh);
 
         let th1=document.createElement("th");
         let nTh1=document.createTextNode("Modelo");
         th1.appendChild(nTh1);
 
         let th2=document.createElement("th");
         let nTh2=document.createTextNode("Precio");
         th2.appendChild(nTh2);
 
         let th3=document.createElement("th");
         let nth3=document.createTextNode("Puertas/4x4");
         th3.appendChild(nth3);
 
         let th4= document.createElement("th");
         let nTh4= document.createTextNode("Tipo");
         th4.appendChild(nTh4);
 
         let tr= document.createElement("tr");
 
         tr.appendChild(thId);
         tr.appendChild(th);
         tr.appendChild(th1);
         tr.appendChild(th2);
         tr.appendChild(th3);
         tr.appendChild(th4);
         
         thead.append(tr); 
    });

    export function Abrir(){
        $("#popup").show();
    }

    export function Cerrar(){
        $("#showProm").hide();
    }


    export function Mostrar(){
        if($("#selTipo").val()==="Auto"){
            $("#showPuertas").show();
            $("#showCuatro").hide();
        }
        else{
            $("#showPuertas").hide();
            $("#showCuatro").show();
        }
    }

    export function Agregar(){

        let marca:string= String($("#txtMarca").val());
        let modelo:number= Number($("#numMod").val());
        let precio:number= Number($("#numPrecio").val());

//        let tr=document.createElement("tr");

        if($("#selTipo").val()=="Auto")
        {

            let puertas= Number($("#numPuer").val());

            let vehiculo:Auto=new Auto(marca, modelo, precio, puertas);
            lista.push(vehiculo);


            vehiculo.setId(CalcularId());

            // lista.forEach(function(vehiculo, index){
            //     vehiculo.setId(index);
            // });

            CargarTabla(vehiculo);

            // let tdId=document.createElement("td");
            // let nTdId=document.createTextNode(vehiculo.getId().toString());
            // tdId.appendChild(nTdId);
            // var n= vehiculo.getId();

            // let td=document.createElement("td");
            // let nTd=document.createTextNode(vehiculo.getMarca());
            // td.appendChild(nTd);

            // let td1=document.createElement("td");
            // let nTd1=document.createTextNode(vehiculo.getModelo().toString());
            // td1.appendChild(nTd1);

            // let td2=document.createElement("td");
            // let ntd2=document.createTextNode(vehiculo.getPrecio().toString());
            // td2.appendChild(ntd2);

            // let td3=document.createElement("td");
            // let ntd3=document.createTextNode(vehiculo.getPuertas().toString());
            // td3.appendChild(ntd3);

            // let td4= document.createElement("td");
            // let ntd4= document.createTextNode($("#selTipo").val().toString());
            // td4.appendChild(ntd4);

            // tr.appendChild(tdId);
            // tr.appendChild(td);
            // tr.appendChild(td1);
            // tr.appendChild(td2);
            // tr.appendChild(td3);
            // tr.appendChild(td4);
        }else
        {
            if($("#chkCuatro").is(':checked'))           {
                var cuatro:boolean= true;
            }
            else{
                var cuatro:boolean= false;
            }
//            let cuatro:boolean= Boolean($("#chkCuatro").val());

            let vehiculo:Camioneta= new Camioneta(marca, modelo, precio, cuatro);
            lista.push(vehiculo);

            vehiculo.setId(CalcularId());

            // lista.forEach(function(vehiculo, index){
            //     vehiculo.setId(index);
            // });

            CargarTabla(vehiculo);

            // let tdId=document.createElement("td");
            // let nTdId=document.createTextNode(vehiculo.getId().toString());
            // tdId.appendChild(nTdId);
            // var n= vehiculo.getId();

            // let td=document.createElement("td");
            // let nTd=document.createTextNode(vehiculo.getMarca());
            // td.appendChild(nTd);

            // let td1=document.createElement("td");
            // let nTd1=document.createTextNode(vehiculo.getModelo().toString());
            // td1.appendChild(nTd1);

            // let td2=document.createElement("td");
            // let ntd2=document.createTextNode(vehiculo.getPrecio().toString());
            // td2.appendChild(ntd2);

            // let td3=document.createElement("td");
            // let ntd3=document.createTextNode(vehiculo.getCuatro().toString());
            // td3.appendChild(ntd3);

            // let td4= document.createElement("td");
            // let ntd4= document.createTextNode($("#selTipo").val().toString());
            // td4.appendChild(ntd4);

            // tr.appendChild(tdId);
            // tr.appendChild(td);
            // tr.appendChild(td1);
            // tr.appendChild(td2);
            // tr.appendChild(td3);
            // tr.appendChild(td4);
        }

        // agrego boton eliminar
        // let td5= document.createElement("td");

        // //let n=lista.length;

        // let btn=document.createElement("button");
        // btn.setAttribute("class", "borrar");
        // btn.setAttribute("onclick","vehiculos.Eliminar("+n+")");
        // btn.innerHTML="Eliminar";

        // td5.appendChild(btn);
        // tr.setAttribute("id", "fila"+n);
        // tr.appendChild(td5);

        // //agrego en tbody de la tabla
        // let tbody=$("#tbody");
        // tbody.append(tr);

        $("#popup").hide();
    }

    export function CargarTabla(vehiculo){

        let tr=document.createElement("tr");

        if($("#selTipo").val()=="Auto")
        {
            let tdId=document.createElement("td");
            let nTdId=document.createTextNode(vehiculo.getId().toString());
            tdId.appendChild(nTdId);
            var n= vehiculo.getId();

            let td=document.createElement("td");
            let nTd=document.createTextNode(vehiculo.getMarca());
            td.appendChild(nTd);

            let td1=document.createElement("td");
            let nTd1=document.createTextNode(vehiculo.getModelo().toString());
            td1.appendChild(nTd1);

            let td2=document.createElement("td");
            let ntd2=document.createTextNode(vehiculo.getPrecio().toString());
            td2.appendChild(ntd2);

            let td3=document.createElement("td");
            let ntd3=document.createTextNode(vehiculo.getPuertas().toString());
            td3.appendChild(ntd3);

            let td4= document.createElement("td");
            let ntd4= document.createTextNode($("#selTipo").val().toString());
            td4.appendChild(ntd4);

            tr.appendChild(tdId);
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
        }else
        {
            let tdId=document.createElement("td");
            let nTdId=document.createTextNode(vehiculo.getId().toString());
            tdId.appendChild(nTdId);
            var n= vehiculo.getId();

            let td=document.createElement("td");
            let nTd=document.createTextNode(vehiculo.getMarca());
            td.appendChild(nTd);

            let td1=document.createElement("td");
            let nTd1=document.createTextNode(vehiculo.getModelo().toString());
            td1.appendChild(nTd1);

            let td2=document.createElement("td");
            let ntd2=document.createTextNode(vehiculo.getPrecio().toString());
            td2.appendChild(ntd2);

            let td3=document.createElement("td");
            let ntd3=document.createTextNode(vehiculo.getCuatro().toString());
            td3.appendChild(ntd3);

            let td4= document.createElement("td");
            let ntd4= document.createTextNode($("#selTipo").val().toString());
            td4.appendChild(ntd4);

            tr.appendChild(tdId);
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
        }
        
        // agrego boton eliminar
        let td5= document.createElement("td");

        //let n=lista.length;

        let btn=document.createElement("button");
        btn.setAttribute("class", "borrar");
        btn.setAttribute("onclick","vehiculos.Eliminar("+n+")");
        btn.innerHTML="Eliminar";

        td5.appendChild(btn);
        tr.setAttribute("id", "fila"+n);
        tr.appendChild(td5);

        //agrego en tbody de la tabla
        let tbody=$("#tbody");
        tbody.append(tr);
    }

    export function Eliminar(index){
        let fila = $("#fila" + index);
        console.log(fila);

        $("#fila" + index).remove();
     
        lista.forEach(function (vehiculo, index) {

                 if((<Auto>vehiculo).getId() == index){
                     lista.splice(index, 1);
                 }
                 else{
                 if((<Camioneta>vehiculo).getId() == index){
                     lista.splice(index, 1);
                 }
                }
         });    

    }

    export function Filtrar(){
        //remuevo cabecera y filas
        $('#tbody tr').remove();

        //rearmo thead y tbody de la tabla
        let tbody=$("#tbody");

        var trFiltrado = lista.filter(function(vehiculo){
            console.log($("#selFiltro").val());

            let caso= String($("#selFiltro").val()); 

            console.log(caso);

            switch (caso) {
                case "Auto":
                    if('cantidadPuertas' in vehiculo){
                        console.log(vehiculo);
                        return vehiculo;
                    }
                    break;
                case "Camioneta":
                    if('cuatroXcuatro' in vehiculo){
                        console.log(vehiculo);
                        return vehiculo;
                    }
                    break;
                default:
                    console.log(vehiculo);
                    return vehiculo;
                    break;
                }
        }).map(function(vehiculo){


        //    CargarTabla(vehiculo);

                var tdId=document.createElement("tdId");
                let nTdId=document.createTextNode(vehiculo.getId().toString());
                tdId.appendChild(nTdId);

                var td=document.createElement("td");
                let nTd=document.createTextNode(vehiculo.getMarca());
                td.appendChild(nTd);

            let td1=document.createElement("td");
            let nTd1=document.createTextNode(vehiculo.getModelo().toString());
            td1.appendChild(nTd1);

            let td2=document.createElement("td");
            let nTd2=document.createTextNode(vehiculo.getPrecio().toString());
            td2.appendChild(nTd2);

                var td4=document.createElement("td");
                if('cantidadPuertas' in vehiculo){
                    var ntd4=document.createTextNode((<Auto>vehiculo).getPuertas().toString());
                }
                else{
                    var ntd4=document.createTextNode((<Camioneta>vehiculo).getCuatro().toString());
                }
                td4.appendChild(ntd4);
            

            let td5= document.createElement("td");
            if('cantidadPuertas' in vehiculo){
                var ntd5= document.createTextNode("Auto");
            }
            else{
                var ntd5= document.createTextNode("Camioneta");
            }
            td5.appendChild(ntd5);


            let tr=document.createElement("tr");

                tr.appendChild(tdId);
                tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
                tr.appendChild(td4);
            tr.appendChild(td5);

                    // agrego boton eliminar
            let td6= document.createElement("td");

            let n=lista.length;

            let btn=document.createElement("button");
            btn.setAttribute("class", "borrar");
            btn.setAttribute("onclick","vehiculos.Eliminar("+n+")");
            btn.innerHTML="Eliminar";

            td6.appendChild(btn);
            tr.setAttribute("id", "fila"+n);
            tr.appendChild(td6);

            return tr;
        });

         tbody.append(trFiltrado);
    }

    export function CalcularId(){
        return lista.reduce(function(id, vehiculo){
            if(vehiculo.getId() > id)
            {
                id= vehiculo.getId();
            }        
            return id;
        },0);
    }

    export function Promediar(){
        //Hago filtrado x array
        listaFilter = lista.filter(function(vehiculo){
        console.log($("#selFiltro").val());

        let caso= String($("#selFiltro").val()); 

        console.log(caso);

        switch (caso) {
            case "Auto":
                if('cantidadPuertas' in vehiculo){
                    console.log(vehiculo);
                    return vehiculo;
                }
                break;
            case "Camioneta":
                if('cuatroXcuatro' in vehiculo){
                    console.log(vehiculo);
                    return vehiculo;
                }
                break;
            default:
                console.log(vehiculo);
                return vehiculo;
                break;
            }
        });
        
        var acumulado = 0;

        let promedio= listaFilter.reduce(function(prom, vehiculo){
            acumulado += vehiculo.getPrecio();

            console.log(vehiculo.getPrecio());
            
            return acumulado / listaFilter.length;  

        },0);
        
        $("#txtProm").val(promedio);
        $("#showProm").show();

    }

}
