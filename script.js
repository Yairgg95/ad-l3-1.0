// FUNCION PARA COLOR ALEATORIO
let colores = ["green","blue","red"]; //DECLACION DE UN ARREGLO CON LOS COLORES PREDEFINIDOS

function cambiarColor(evento) { //DECLARAR FUNCION PARA CAMBIAR COLOR
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; 
    //COLORALEATORIO  OBTENDRA EL VALOR ALEATORIO DE LA FUNCION MATH.RANDOM ENTRE 0 Y 1 (VALOR DECIMAL)
    //Y MULTIPLICA ESE VALOR POR LA CANTIDAD DE ELEMENTOS QUE TIENE EL ARREGLO
    //DICHO DE OTRA FORMA
    //MATH.RANDOM GENERA UN VALOR ALEATORIO ENTRE 0 Y 1
    //EJEMPLO. MATH.RANDOM GENERA EL VALOR 0.72
    //MULTIPLICA ESE VALOR POR LA CANTIDAD DE ELEMENTOS DEL ARREGLO (3) 
    //0.72 * 3 = 2.16 
    //MATH.FLOOR REDONDEA EL VALOR CALCULADO DE LA OPERACIÓN (2.16) = 2
    //POSTERIORMENTE LA FUNCION CAMBIA EL COLOR DEL H1 EN BASE AL RESULTADO DE LA POSICIÓN DEL 
    //ARREGLO, EN ESTE CASO (2, CAMBIA A COLOR ROJO)
    

    //Cambia el color del texto del elemento que ha sido clickeado.
    evento.target.style.color = colorAleatorio;
}

//Permite seleccionar todos los elementos <h5> en el documento HTML y guardarlos en una lista
let elementosH5 = document.querySelectorAll("h5");

// Agrega un evento de clic a cada h5
for (let i = 0; i < elementosH5.length; i++) {
    elementosH5[i].addEventListener("click", cambiarColor);
}