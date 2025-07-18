



 
/* 2.- imprimir las notas */
/* 2.1.- campturar el elemento requerido */

let txtNotaHTMLUno = document.getElementById('txtNotaHTMLUno');
let txtNotaHTMLDos = document.getElementById('txtNotaHTMLDos');
let txtNotaHTMLTres = document.getElementById('txtNotaHTMLTres');

/* 2.2.- imprimir el dato en dicho elemento */

txtNotaHTMLUno.innerHTML = notaUnoHTML;
txtNotaHTMLDos.innerHTML = notaDosHTML;
txtNotaHTMLTres.innerHTML = notaTresHTML;

let promedioHTML = (notaUnoHTML + notaDosHTML + notaTresHTML) / 3;
let txtPromedioHTML = document.getElementById('txtPromedioHTML');
txtPromedioHTML.innerHTML = promedioHTML;

/* 1.- pedir las notas */

let notaUnoCSS = prompt("Ingresa la nota 1 de CSS:");
let notaDosCSS= prompt("Ingresa la nota 2 de CSS:");
let notaTresCSS = prompt("Ingresa la nota 3 de CSS:");

/* 2.- imprimir las notas */
/* 2.1.- campurar el elemento requerido en el HTML*/

let txtNotaCSSUno = document.getElementById("txtNotaCSSUno");
let txtNotaCSSDos = document.getElementById("txtNotaCSSDos");
let txtNotaCSSTres = document.getElementById("txtNotaCSSTres");

/**2.2. - Imprimir el dato en dicho elemento */

txtNotaCSSUno.innerHTML = notaUnoCSS;
txtNotaCSSDos.innerHTML = notaDosCSS;
txtNotaCSSTres.innerHTML = notaTresCSS;

/** Parseo de notas, cálculo de promedio e impresión de promedio */

let promedio = parseFloat()