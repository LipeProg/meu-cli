const {Command} = require('commander')



function ola(){

    const olaCommand = new Command();

    olaCommand
    .name('ola')
    .arguments('<nome>')
    .description('Diz seu nome')
    .action((nome) => {
        console.log(`seu nome é ${nome}`);
    })

    return olaCommand

}

    
function trabalho(){
    const trabalhoCommand = new Command()
    
    trabalhoCommand
    .name('trabalho')
    .arguments('<trabalho>')
    .description('diz sua profissão')
    .action((trabalho) =>{
        console.log(`sua profissão é ${trabalho}`);



    })
    return trabalhoCommand

}


module.exports = {trabalho, ola};