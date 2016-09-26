// Logger with private fields
var Logger = function (handlerName) {
    // handlers
    var handlers = {
        console: {
            log: function (message, level) {
                if (level === undefined) {
                    level = 'log';
                }
                console[level](message);
            }
        },
        alert: {
            log: function (message) {
                alert(message);
            }
        },
        api: {
            log: function (message) {
                var request = new XMLHttpRequest();
                request.open('post', 'localhost', false);
                request.send(message);
            }
        }
    };

    var Logger = {};

    var handler;
    if (handlerName === undefined) {
        handler = handlers.console;
    } else {
        for (var defaultHandler in handlers) {
            if (defaultHandler == handlerName) {
                handler = handlers[defaultHandler];
                break;
            }
        }
    }

    /**
     * Extends Logger with custom handler implementations.
     * @param fn handler implementation that has to contain log method
     */
    Logger.extend = function (fn) {
        var getType = {};
        if (!fn instanceof Function) {
            throw "Passed function is undefined or incorrect";
        }
        handler = {log: fn};
    };

    Logger.debug = function (message) {
        handler.log(message, 'debug');
    };
    Logger.log = function (message) {
        handler.log(message, 'log');
    };
    Logger.trace = function (message) {
        handler.log(message, 'trace');
    };
    Logger.info = function (message) {
        handler.log(message, 'info');
    };
    Logger.warn = function (message) {
        handler.log(message, 'warn');
    };
    Logger.error = function (message) {
        handler.log(message, 'error');
    };

    // global errors handler
    window.onerror = function (message, source, lineno, colno, error) {
        Logger.error(message);
        return false;
    }

    return Logger;
}