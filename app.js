// const add = require('./src/math.wasm');


import('./src/math.wasm').then((value) => {
    console.log("🚀 ~ file: app.js ~ line 5 ~ import ~ value", value)
})

// console.log("🚀  ", add)


