module.exports = function () {
    return {
        sass: {
            files: ['./src/styles/**/*.scss'],
            tasks: ['sass:dev']
        },
        index: {
            files: ['./src/index.html'],
            task: ['copy:index']
        }
    };
};
