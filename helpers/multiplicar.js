//de esta forma importamos los requerimientos para trabajar con archivos
const { rejects } = require('assert');
const { Console } = require('console');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

//el ejemplo siguiente es usando el new Promise
//const crearArchivo = (base) => {

//  return new Promise((resolve, reject) => {
//    let data = '';
//  for (let i = 1; i <= 10; i++) {
//    data += `${base} x ${i} = ${base * i} \n`;
//}

//fs.writeFileSync(`tabla del ${base}.txt`, data,);
//resolve(`tabla- ${base}.txt`);

//})

//}


//en este ejemplo usamos async  
const crearArchivo = async (base, listar, total) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= total; i++) {

            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${colors.yellow(base)} x ${colors.yellow(i)} = ${colors.green(base * i)} \n`;
           

        }
       
        //console.log(salida)
        if (listar) {
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida,);

        return `tabla- ${base}.txt`;

    } catch (err) {
        throw err;
    }

}
//en node se sobre entienden los objetos redundantes es decir crearArchivo = crearArchivo;
module.exports = {
    crearArchivo
}