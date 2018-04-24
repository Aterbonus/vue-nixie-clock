<template>
<div class="nixie-clock">
    <nixie-string :string="clockString"></nixie-string>
</div>
</template>

<script>
import NixieChar from './NixieChar'
import NixieString from './NixieString'

export default {
    data() {
        return {
            hours: '00',
            minutes: '00',
            seconds: '00'
        }
    },
    props: {
        active: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        clockString() {
            return `${this.hours}.${this.minutes}.${this.seconds}`
        }
    },
    watch: {
        active(active) {
            if (active) {
                requestAnimationFrame(this.step)
            }
        }
    },
    mounted() {
        this.step()
    },
    methods: {
        step() {
            if (this.active) {
                let date = new Date()

                this.hours = date
                    .getHours()
                    .toString()
                    .padStart(2, '0')
                this.minutes = date
                    .getMinutes()
                    .toString()
                    .padStart(2, '0')
                this.seconds = date
                    .getSeconds()
                    .toString()
                    .padStart(2, '0')

                requestAnimationFrame(this.step)
            }
        }
    },
    components: {
        NixieChar,
        NixieString
    }
}
</script>

<style scoped>
.nixie-clock {
    align-items: center;
    background-color: #000;
    display: inline-flex;
    filter: contrast(1.1);
    justify-content: center;
    min-width: 200px;
}

.nixie-string {
    width: 100%;
}
</style>