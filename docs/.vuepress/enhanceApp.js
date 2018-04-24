export default ({Vue}) => {
    Vue.component('vue-nixie-clock', () => import('../../src/NixieClock.vue'))
}