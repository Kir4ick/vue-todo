<template>
<div class="wrapper">
    <confirm-dialog></confirm-dialog>
    <suspense>
        <router-view>
        </router-view>
    </suspense>
</div>
</template>

<style>
body {
    background: #42b983;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    padding: 0px 20px;
    word-break: break-all;
}

* {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
}

.wrapper {
    background: white;
    margin: 0px auto;
    margin-top: 60px;
    max-width: 800px;
    border-radius: 30px;
    padding: 20px 30px;
}
</style>

<script setup>
import ConfirmDialog from "@/components/ui/ConfirmDialog.vue";
</script>
