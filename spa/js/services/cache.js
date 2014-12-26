appServices
    .factory('serviceCache', [
        function () {
        
            var PREFIX = 'appCache__';

            var o = {

                require: function (key, ifNullCallback) {
                    var value = localStorage.getItem(PREFIX + key) || null;
                    value = o.validate(key, value);
                    return o.notNull(value, ifNullCallback);
                },

                get: function (key) {
                    var data = localStorage.getItem(PREFIX + key) || null;
                    return JSON.parse(data)
                },

                set: function (key, obj) {
                    localStorage.setItem(PREFIX + key, JSON.stringify(obj));
                },
                
                drop: function (key) {
                    localStorage.removeItem(PREFIX + key);
                },
                
                clear: function () {
                    var str = null;
                    for (var key in localStorage) if (key.startsWith(PREFIX)) {
                        o.drop(key.split(PREFIX)[1]);
                    }
                }

            };

            return o;
        }
    ]);