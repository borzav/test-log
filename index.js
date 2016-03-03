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
    },
    trace: function () {
        return enabled && console.trace.apply(console, arguments)
    },
    debug: function () {
        return enabled && console.debug.apply(console, arguments)
    }
}