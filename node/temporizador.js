const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/1 * 13 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// Cancelando o temporizador.
setTimeout(function () {
    tarefa1.cancel()
    console.log('Tarefa 1 Finalizada!');
}, 5000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [ new schedule.Range( 1, 5 ) ]
regra.hour = 13 // Executa enquanto é 13 horas e alguma coisa.
regra.second = 30 // Executa em cada segundo trinta.

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds());
})