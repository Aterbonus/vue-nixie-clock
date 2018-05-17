<template>
<div class="nixie-clock">
    <nixie-string :string="clockString"></nixie-string>
</div>
</template>

<script>
import NixieString from './NixieString'

export default {
    name: 'nixie-clock',
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
                const date = new Date()

                this.hours = this.leftPad(date.getHours())
                this.minutes = this.leftPad(date.getMinutes())
                this.seconds = this.leftPad(date.getSeconds())

                requestAnimationFrame(this.step)
            }
        },
        leftPad(number) {
            return String(number >= 10 ? number : '0' + number)
        }
    },
    components: {
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