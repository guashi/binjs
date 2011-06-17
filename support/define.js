/**
 * Define a module along with a payload
 * @param module a name for the payload
 * @param payload a function to call with (require, exports, module) params
 */
 
(function() {
  var modules={};
    
var _define = function(module, payload) {
  if (arguments.length === 2)
    if (typeof module !== 'string') {
        if (_define.original)
            _define.original.apply(window, arguments);
        else {
            console.error('dropping module because define wasn\'t a string.');
            console.trace();
        }
        return;
    }
    else {
      console.error('missing module name')
      console.trace();
    }
    modules[module] = payload;
};
if (window.define)
    _define.original = window.define;
    
window.define = _define;
window.define.modules=modules;


/**
 * Get at functionality define()ed using the function above
 */
var _require = function(module, callback) {
    if (Object.prototype.toString.call(module) === "[object Array]") {
        var params = [];
        for (var i = 0, l = module.length; i < l; ++i) {
            var dep = lookup(module[i]);
            if (!dep && _require.original)
                return _require.original.apply(window, arguments);
            params.push(dep);
        };
        if (callback) {
            callback.apply(null, params);
        }
    }

    if (typeof module === 'string') {
        var payload = lookup(module);
        if (!payload && _require.original)
            return _require.original.apply(window, arguments);
        
        if (callback) {
            callback();
        }
    
        return payload;
    };
}

if (window.require)
    _require.original = window.require;
    
window.require = _require;

/**
 * Internal function to lookup moduleNames and resolve them by calling the
 * definition function if needed.
 */
var lookup = function(moduleName) {
    var module_payload = define.modules[moduleName];
    if (module_payload == null) {
        console.error('Missing module: ' + moduleName);
        return null;
    }

    if (typeof module_payload === 'function') {
        var exports = {}, module={ id: moduleName, uri: '' };
        module.exports=exports;

        module_payload(require, exports, module);
        // cache the resulting module object for next time
        define.modules[moduleName] = exports;
        return exports;
    }

    return module_payload;
};

})();
