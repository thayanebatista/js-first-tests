const os = require('os')
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = os

    const mem = parseInt(freemem() / 1024 / 1024)
    const total = parseInt(totalmem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)

    const stats = {
        freemem: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }

    console.clear()
    console.log(" == Status == ")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)
    log('Rodando...\n')
}, 1000)

