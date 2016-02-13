module.exports = function () {
    return {
        options: {
            port: 8080,
            hostname: 'localhost',
            base: './dist',
            debug: true,
            middleware: function (connect, options) {
                var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest,
                    pushState = require('grunt-connect-pushstate/lib/utils').pushState;

                return [
                    proxy,
                    pushState('/index.html'),
                    connect.static(options.base[0]),
                    connect.directory(options.base[0])
                ];
            }
        },
        noop: {},
        mocks: {
            proxies: [
                {
                    context: [''],
                    host: 'localhost',
                    port: 8181,
                    headers: {
                        'mocked-response': true
                    }
                }
            ]
        },
        dev: {
            options: {
                open: 'http://localhost:8080/'
            }
        }
    };
};
