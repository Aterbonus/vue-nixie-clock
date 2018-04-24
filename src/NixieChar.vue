<template>
    <div :class="['nixie-char', 'nixie-char-' + rchar]"></div>
</template>

<script>

const charMap = {
    '.': 'dot'
}

export default {
    props: {
        char: {
            required: true,
            validator(value) {
                return /^[\d.]$/.test(value)
            }
        }
    },
    computed: {
        rchar() {
            return charMap[this.char] || this.char
        }
    }
}
</script>

<style lang="scss" scoped>
$chars: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'dot';

@each $char in $chars {
    .nixie-char-#{$char} {
        background-image: url(./img/#{$char}.png);
    }
}

.nixie-char {
    background-color: #000;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: inline-block;
    flex: 1 1;
    min-width: 1rem;

    &:before {
        content: '';
        display: inline-block;
        padding-top: 287.692307692%;
    }
}
</style>
