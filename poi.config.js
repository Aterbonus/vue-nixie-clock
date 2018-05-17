module.exports = {
    cleanOutDir: process.env.NODE_ENV === 'production',
    css: {
        extract: false
    },
    filename: {
        css: 'vue-nixie-clock.css',
        js: 'vue-nixie-clock.js'
    },
    hash: false,
    format: process.env.NODE_ENV === 'development' ? undefined : 'umd',
    html: {
        template: 'src/index.html'
    },
    inlineImageMaxSize: 100000,
    moduleName: 'VueNixieClock',
    configureWebpack(config) {
        config.output.libraryExport = 'default'
    }
}
