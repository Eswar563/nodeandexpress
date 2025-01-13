//Exporting Module
//The module.exports is a special object included in every JavaScript file in the Node JS application by default.

module.exports = {

    add:(a, b) => {
       return a + b
    },
    sub: (a, b) => {
        return a - b
    },
    multi: (a, b) => {
        return a * b
    },
    divid: (a, b) => {
        return a / b
    }
    
}

const add = (a, b) => {
    return a + b
}

module.exports = add 