/* LOGIN NO LISTO*/
/*  rut: largo 9 a 10 caracteres
    nombre: largo 3 y 20
    apellido pat: largo 3 y 20 
    apellid mat: largo 3 y 20
    edad: entre 18 y 25 años 
    celular: largo entre 9 y 12 caracteres
*/
/* DECLARATION VAR*/

function validar(){
    var rut = document.getElementById("rut").value
    var nombre = document.getElementById("nombre").value
    var appat = document.getElementById("appat").value
    var apmat = document.getElementById("apmat").value
    var edad = document.getElementById("edad").value
    var celular = document.getElementById("celular").value

    if(rut.length >= 9 && rut.length <= 10){
        console.log("tu sistema de validacion funciona!")
        document.getElementById("rut").style.border = "1px solid lightgrey";
        if(nombre.length >= 3 && nombre.length <= 20){
            document.getElementById("nombre").style.border = "1px solid lightgrey";
            console.log("el nombre esta bien!")
            if(appat.length >= 3 && appat.length <= 20){
                console.log("el apellido esta bien!")
                document.getElementById("appat").style.border = "1px solid lightgrey"
                if(apmat.length >= 3 && apmat.length <= 20){
                    console.log("el apellido materno esta bien!")
                    document.getElementById("apmat").style.border = "1px solid lightgrey"
                    if(edad >= 18 && edad <= 25){
                        console.log("tienes la edad que corresponde!")
                        document.getElementById("edad").style.border = "1px solid lightgrey"
                        if(String(celular).length >= 9 && String(celular).length <= 12){
                            console.log("tu celular tiene el largo correspondiente!")
                            document.getElementById("celular").style.border = "1px solid lightgrey"
                            document.getElementById("resultado").innerHTML = "<div class='alert alert-success w-50 mx-auto text-center'>" +
                            "Campos validados correctamente!</div>"
                        }else{
                            console.log("tu celular debe tener un largo de 9 y 12 caracteres")
                            document.getElementById("celular").style.border = "1px solid red"
                            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                            "tu celular debe tener un largo de entre 9 y 12 caracteres</div>"
                        }        
                    }else{
                        console.log("tu edad debe ser entre 18 y 25 años")
                        document.getElementById("edad").style.border = "1px solid red"
                        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                        "tu edad debe ser entre 18 y 25 años para acceder!</div>"
                    }    
                }else{
                    console.log("el apellido materno debe tener entre 3 y 20 caracteres")
                    document.getElementById("apmat").style.border = "1px solid red"
                    document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                    "El apellido materno debe tener entre 3 y 20 caracteres </div>"
                }    
            }else{
                console.log("el apellido debe tener entre 3 y 20 caracteres")
                document.getElementById("appat").style.border = "1px solid red"
                document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                "El apellido debe tener entre 3 y 20 caracteres</div>"
            }
        }else{
            console.log("el nombre debe tener entre 3 y 20 caracteres")
            document.getElementById("nombre").style.border = "1px solid red";
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
            "El nombre debe tener un largo de 3 y 20 caracteres</div>"
        }
    }else{ 
        console.log("tu sistema de validacion no funciona")
        document.getElementById("rut").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
        "El rut debe tener un largo de 9 y 10 caracteres</div>"

    }
}


function validar2() {
    let rut = document.getElementById("rut").value;
    /* 
        username: min 5 max 20
        password: min 8    
    */
    if (String(rut).length >= 9 && String(rut).length <= 10) {
        console.log("has ingresado el primer if")
        document.getElementById("rut")
        if (String(rut).length >= 9) {
            /* Funciono */
            document.getElementById("username").style.border = "1px solid lightgrey";
            document.getElementById("pass").style.border = "1px solid lightgrey";
            /* Alerta */
            document.getElementById("resultado").innerHTML = "<div class='alert alert-success w-50 mx-auto text-center'>" +
                "Acceso Concedido</div>"
        } else {
            /* Pass error */
            /* Borde */
            document.getElementById("pass").style.border = "1px solid red";
            /* Alerta */
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                "Contraseña debe tener minimo 8 caracteres</div>"

        }
    } else {
        /* User Error */
        /* 
            1.- Alerta
            2.- Label
            3.- animaciones
            4.- letras rojo
            5.- borde en rojo 
        */
        /* Borde */
        document.getElementById("username").style.border = "1px solid red";
        /* Alerta */
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>Usuario debe tener minimo 5 y maximo 20 caracteres</div>"
    }
}





function validar1() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;
    /* 
        username: min 5 max 20
        password: min 8    
    */
    if (String(user).length >= 5 && String(user).length <= 20) {
        if (String(pass).length >= 8) {
            /* Funciono */
            document.getElementById("username").style.border = "1px solid lightgrey";
            document.getElementById("pass").style.border = "1px solid lightgrey";
            /* Alerta */
            document.getElementById("resultado").innerHTML = "<div class='alert alert-success w-50 mx-auto text-center'>" +
                "Acceso Concedido</div>"
        } else {
            /* Pass error */
            /* Borde */
            document.getElementById("pass").style.border = "1px solid red";
            /* Alerta */
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
                "Contraseña debe tener minimo 8 caracteres</div>"

        }
    } else {
        /* User Error */
        /* 
            1.- Alerta
            2.- Label
            3.- animaciones
            4.- letras rojo
            5.- borde en rojo 
        */
        /* Borde */
        document.getElementById("username").style.border = "1px solid red";
        /* Alerta */
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>Usuario debe tener minimo 5 y maximo 20 caracteres</div>"
    }
}

















document.getElementById("formulario").addEventListener("submit", function(event) {
    var rut = document.getElementById("rut");
    var nombre = document.getElementById("nombre");
    var apmat = document.getElementById("appat");
    var appat = document.getElementById("apmat");
    var edad = document.getElementById("edad");
    var celular = document.getElementById("celular");

    if(rut.value.length < 9 || rut.value.length > 10){
        console.log("El RUT ingresado debe tener entre 9 y 10 caracteres");
        event.preventDefault(); // Evita que el formulario se envíe
    }

    // Aquí puedes agregar más validaciones para los otros campos

});


