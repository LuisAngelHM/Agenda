function guardar_contactos(formu){
    var fecha = formu.fechana.value.split('-');
    console.log(fecha);
    new_fecha = fecha[2]+"-"+fecha[1]+"-"+fecha[0];
    console.log(new_fecha);
    if (formu.nombre.checkValidity() && formu.calle.checkValidity() && formu.numero.checkValidity() && formu.codigop.checkValidity() && formu.ciudad.checkValidity() && formu.pais.checkValidity())
        var op = confirm("¿Deseas enviar los datos?");
        if (op==true){
            arreglo = [];
            contacto = {
            nombre: formu.nombre.value,
            social: formu.social.value,
            fecha: new_fecha,
            direccion:{
                calle: formu.calle.value,
                numero: formu.numero.value,
                codigo: formu.codigop.value,
                ciudad: formu.ciudad.value,
                pais: formu.pais.value
                },
            telefono: formu.telefono.value
            };
            
            if (localStorage.getItem("contactos")){
                arreglo = localStorage.getItem("contactos");
                arreglo = JSON.parse(arreglo);
                arreglo.push(contacto);
                localStorage.setItem("contactos", JSON.stringify(arreglo));
                redireccionar();
                }
            else{
                arreglo.push(contacto);
                console.log(arreglo)
                localStorage.setItem("contactos", JSON.stringify(arreglo));
                redireccionar();
                }
            
            
            
        }
        
}

function redireccionar(){
    window.location.href = "contactos.html";
}

function mostrar_datos(){
    arreglo = localStorage.getItem("contactos")
    arreglo = JSON.parse(arreglo);
    tabla = document.getElementById("tabla");
    if (arreglo){
        for (i=0; i<arreglo.length; i++){
            strs = "<tr> <td>"+arreglo[i].nombre+"</td> <td>"+arreglo[i].social+"</td> <td>"+arreglo[i].fecha+"</td> <td>"+arreglo[i].direccion.calle+"</td> <td>"+arreglo[i].direccion.numero+"</td> <td>"+arreglo[i].direccion.codigo+"</td> <td>"+arreglo[i].direccion.ciudad+"</td> <td>"+arreglo[i].direccion.pais+"</td> <td>"+arreglo[i].telefono+"</td> </tr>";
            TrElement = document.createElement("tr");
	        TrElement.innerHTML = strs;
	        document.getElementById("tabla").appendChild(TrElement);
        }
    }
    else{
        location.href="index.html";
    }
}
