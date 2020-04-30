const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en Consola', opt)
    .command('crear', 'Crear un archivo', opt)
    .help()
    .argv;


module.exports = {
    argv
}