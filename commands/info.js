// ----- Command JS File -----
module.exports = {
    name: 'info',
    description: "gives info",
    execute(message, args){
        message.channel.sendMessage('Masquence is currently working on Dementia, future projects are in mind but dementia is still in a WIP state and will remain so unless announced.')
    }
}