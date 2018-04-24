<template>
<div class="container">
    <vue-nixie-clock></vue-nixie-clock>
</div>
</template>

<style scoped>
.container {
    align-items: center;
    background-color: #000;
    display: flex;
    height: calc(100vh - 3.6rem);
    justify-content: center;
}

.nixie-clock {
    width: 800px;
}
</style>