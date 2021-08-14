const fs = require('fs');
require('colors');

const crearArchivo = async(base = 5, listar = true, hasta = 10) => {

    try {

        let salida = "";
        let salida2 = '';
        for (let i = 0; i <= hasta; i++) {
            salida += (`${ base } X ${ i } = ${base*i}\n`);
            salida2 += (`${base} ${'X'.green} ${i} ${'='.green} ${base*i}\n`);
        }
        if (listar === true) {
            console.log("==================".green);
            console.log(`   Tabla del:`.green, base);
            console.log("==================".green);
            console.log(salida2);
        }

        fs.writeFileSync(`./datos/tabla-${base}.txt`, salida);
        return `tabla-${base} .txt creada`
    } catch (err) {
        throw err
    }
}
module.exports = { crearArchivo }