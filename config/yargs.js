const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'base para la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'muestra o no la tabla'
    })
    .option('f',{
        alias: 'final',
        type:'number',
        default: 10,
        describe: 'numero hasta el cual llega la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero '
        }
        return true
    })

    .argv;

    module.exports = argv;