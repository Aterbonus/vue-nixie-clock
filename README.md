# Vue Nixie Clock (WIP)

[Clock in action](https://aterbonus.github.io/vue-nixie-clock)

## How to use

### Single File Component

```html
<template>
  <nixie-clock></nixie-clock>
</template>

<script>
import NixieClock from '@aterbonus/vue-nixie-clock'

export default {
    components: {
        NixieClock
    }
}
</script>
```

### Browser

```html
<div id="nixie-clock"></dib>
<script src="path/to/vue-runtime.min.js"></script>
<script src="path/to/vue-nixie-clock.js"></script>
<script>

    new Vue({
        el: '#nixie-clock',
        render: function(h) {
            return h(VueNixieClock)
        }
    })

</script>
```
