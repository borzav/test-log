var enabled = true;
module.exports = c = {
    enable: function(value){ enabled = !!value },
    
    log: function () {
        return enabled && console.log.apply(console, arguments)
    },
    warn: function () {
        return enabled && console.warn.apply(console, arguments)
    },
    error: function () {
        return enabled && console.error.apply(console, arguments)
    }
}