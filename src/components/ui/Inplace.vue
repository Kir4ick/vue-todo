<script setup>
    
    import {ref} from "vue";
    
    const isOpen = ref(false)
    
    const closeCallback = () => {
        isOpen.value = false
    }
</script>

<template>
    <div>
        <div v-if="!isOpen" @click="isOpen = true" class="display">
            <slot name="display"></slot>
        </div>
        <slot :close="closeCallback" v-if="isOpen" name="content"></slot>
    </div>
</template>

<style scoped>
    .display {
        cursor: pointer;
    }
</style>
