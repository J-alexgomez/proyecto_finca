function traerInformacion(){
    $.ajax({
        url:"https://g4c87a3a61406b1-db202109291720.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/farm/farm",
        type: "GET",
        datatype: "json",        
        success: function(respuesta){
            var html = '';
            var i;
            for(i=0;i<respuesta.items.length;i++){
                var id = respuesta.items[i].id;
                var address =respuesta.items[i].address;
                var category_id = respuesta.items[i].category_id;
                var exension = respuesta.items[i].exension;
                var name = respuesta.items[i].name;
                

                html +='<tr>' +
                '<td>' + id + '</td>' +
                '<td><input type="text" value="' + address + '"></input></td>' +
                '<td><input type="text" value="' + category_id + '"></input></td>' +
                '<td><input type="text" value="' + exension + '"></input></td>' +
                '<td><input type="text" value="' + name + '"></input></td>' +
                '<td> <button onclick="eliminar('+ respuesta.items[i].id+')">eliminar</button> </td>' +
                '<td> <button onclick="editar('+id+","+ address +')">editar</button> </td>'
                '</tr>';
            }
            $('#datos').html(html);
        }
    });
}
function eliminar(idFinca){
    let fincaID = {
        "id" : idFinca
    };
    let dataToSend = JSON.stringify(fincaID);
    $.ajax({
        url:"https://g4c87a3a61406b1-db202109291720.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/farm/farm",
        type: "DELETE",
        data: dataToSend,
        datatype: "json",    
        contentType: "application/json; charset=utf-8",    
        success: function(){
            console.log('entro a success ELIMINAR');
           // traerInformacion();
        },
        error: function () {
            console.log("error al eliminar la data");
        }
    });
}

function guardarInformacion(){
    let datosFinca = {
        "id": $('#id').val(),
        "address": $('#address').val(),
        "exension": $('#exension').val(),
        "category_id": $('#category_id').val(),
        "name": $('#name').val()        
    };
    let dataToSend = JSON.stringify(datosFinca);
    $.ajax({
        url:"https://g4c87a3a61406b1-db202109291720.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/farm/farm",
        type: "POST",
        data: dataToSend,
        datatype: "json",    
        contentType: "application/json",    
        success: function(){
           traerInformacion();
           console.log('entro a success GUARDAR');
        },
        error: function () {
            console.log("error al eliminar la data");
        }
    });
}

function editar(id,address){
    let datosFinca = {
        "id": id,
        "address": address,
        /*"exension": category_id,
        "category_id": exension,
        "name": name*/       
    };
    let dataToSend = JSON.stringify(datosFinca);
    $.ajax({
        url:"https://g4c87a3a61406b1-db202109291720.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/farm/farm",
        type: "PUT",
        data: dataToSend,
        datatype: "json",    
        contentType: "application/json",    
        success: function(){
           traerInformacion();
           console.log('entro a success GUARDAR');
        },
        error: function () {
            console.log("error al eliminar la data");
        }
    });

    
}

