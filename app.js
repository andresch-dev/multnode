//Pruebas

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Listar Archivo: ${ archivo}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Crear Archivo: ${ archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('No reconocido');
}
//let base = '5';
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

//let argv2 = process.argv;