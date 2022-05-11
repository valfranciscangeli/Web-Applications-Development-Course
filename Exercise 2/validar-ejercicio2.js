/* archivo que valida los datos ingresados por un usuario 
Por Valeria Vallejos Franciscangeli para CC5002 ejercicio 2*/

function validar(){

    /* buscamos los inputs que necesitamos validar */
    let nombre = document.getElementById('nombre').value;               /* listo */
    let contraseña = document.getElementById('password').value;         /* listo */
    let categoria = document.getElementById('categoria').value;         /* listo */
    let comentarios = document.getElementById('comentarios').value;    /* listo */
    let privacidad = document.getElementsByName('privacidad');          /* listo */
    let archivo = document.getElementById('archivo').value;             /* listo */

    /* Errors contendrá todos los errores que vayamos encontrando y luego los escribiremos según corresponda*/
    let errors = '<h4>Su formulario tiene fallas:</h4>';

    /* ###########################################################################
    agregamos mensaje y color en caso de que la validación de un dato de falso */
    if (!validar_nombre(nombre)){
        document.getElementById('nombre').style.borderColor = "red";
        errors += '<p>- Debe ingresar un nombre para su archivo de mínimo 5 y máximo 100 caracteres. </p>';
    } 

    if (!validar_archivo(archivo)){
        document.getElementById('archivo').style.borderColor = "red";
        errors += '<p>- Debe cargar un archivo. </p>';
    } 

    if (!validar_privacidad(privacidad)){
        errors += '<p>- Seleccione una de las dos opciones de privacidad disponibles.</p>';
    }

    if (!validar_contraseña(contraseña)){
        document.getElementById('password').style.borderColor = "red";
        errors += '<p>- Debe ingresar una contraseña de máximo 10 caracteres. </p>';
    }

    if (!validar_categoria(categoria)){
        document.getElementById('categoria').style.borderColor = "red";
        errors += '<p>- Debe seleccionar una categoria del menú desplegable. </p>';
    }else{
        document.getElementById('categoria').style.borderColor = "black";
    }

    if (!validar_comentario(comentarios)){
        document.getElementById('comentarios').style.borderColor = "red";
        errors += '<p>- Su comentario no debe exceder los 1000 caracteres. </p>';
    } 

    

    /* ########################################################################### */

    /*Finalmente si hay errores lo escribimos en el contenedor de errores, en nuestro div al costado del formulario*/
    if(errors != '<h4>Su formulario tiene fallas:</h4>'){
        document.getElementById('contenedorErrores').style.backgroundColor = "#c7a9bf"
        document.getElementById('contenedorErrores').style.borderStyle= "solid"
        document.getElementById('contenedorErrores').style.borderColor = "#75344e"
        document.getElementById('contenedorErrores').innerHTML = errors;
        return false;
    }else{
    return true;
    }
}
/*FUNCIONES DE VALIDACION: 
    si un dato es de tipo required se revisa que el input no sea vacío*/

/* funcion que valida que el nombre cumpla con las condiciones pedidas (largo min 5 y max 100) */
function validar_nombre(name){
    if (name==""){
        return false
    }
    return (name.length>4 && name.length<101);
}

/* funcion que valida que, DE HABER contraseña, cumpla con las condiciones pedidas (largo max 10) */
function validar_contraseña(pwrd){
    if (pwrd==""){
        return true;
    }else{
        if (pwrd.length<11){
            return true;
        }else{
            return false;
        }
    }
}

/* funcion que valida que una de las opciones de categoria se haya seleccionado*/
function validar_categoria(category){
    if (category=='1' || category=='2' || category=='3' || category=='4'){
        return true;
    }else{
        return false;
    }

}

/* funcion que valida que, DE HABER comentario, cumpla con las condiciones pedidas (largo max 1000) */
function validar_comentario(comment){
    if (comment==""){
        return true;
    } else{
        if (comment.length<1001){
            return true;
        }else{
            return false;
        }
    }
}

/* funcion que valida que una de las opciones tipo radio de privacidad se haya seleccionado*/
function validar_privacidad(privacy){
    return (privacy[0].checked || privacy[1].checked);
}

/* funcion que valida que se haya cargado un archivo (que no sea vacio)*/
function validar_archivo(file){
    if(file == ""){
        return false;
    }else{
        return true;
    } 
}

