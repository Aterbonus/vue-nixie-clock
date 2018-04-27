<template>
    <div class="nixie-string">
        <nixie-char v-for="(char, i) in string" :char="char" :key="i"></nixie-char>
    </div>
</template>

<script>
import NixieChar from './NixieChar'

export default {
    name: 'nixie-string',
    props: {
        string: {
            type: String,
            default: ''
        }
    },
    components: {
        NixieChar
    }
}
</script>

<style scoped>
.nixie-string {
    align-items: center;
    background-color: #000;
    display: inline-flex;
    justify-content: center;
}
</style>