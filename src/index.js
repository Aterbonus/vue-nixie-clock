import Vue from 'vue'
import NixieClock from './NixieClock'

new Vue({
    el: '#app',
    render(h) {
        return h(NixieClock)
    }
})