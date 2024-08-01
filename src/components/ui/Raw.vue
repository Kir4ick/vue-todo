<template>
    <div class="tool-raw">
        <slot name="main"></slot>
        <slot name="tools"></slot>
    </div>
</template>

<style scoped>
    .tool-raw {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
</style>
