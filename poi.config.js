module.exports = {
    cleanOutDir: true,
    hash: false,
    format: process.env.NODE_ENV === 'development' ? undefined : 'umd',
    html: {
        template: 'src/index.html'
    },
    inlineImageMaxSize: 100000,
    moduleName: 'VueNixieClock'
}
