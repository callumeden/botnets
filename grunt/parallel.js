module.exports = function () {
    return {
        dev: {
            options: {
                stream: true
            },
            tasks: [
                {
                    grunt: true,
                    args: ['webpack:dev']
                },
                {
                    grunt: true,
                    args: [
                        'connect:dev',
                        'watch'
                    ]
                }
            ]
        }
    };
};
