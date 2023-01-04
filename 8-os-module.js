const os = require('os')
const user = os.userInfo()
const ti = os.uptime()
console.log(ti)
const currnetOS = {
    name:os.type(),
    release:os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
    version : os.version()
}

console.log(currnetOS)