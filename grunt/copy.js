module.exports = function () {
    return {
        index: {
            src: './src/index.html',
            dest: './dist/index.html'
        },
        img: {
            files: [
                {
                    expand: true,
                    cwd: './src/img',
                    src: ['**'],
                    dest: './dist/img'
                }
            ]
        }
    };
};
