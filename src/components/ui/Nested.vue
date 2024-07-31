<script setup>
    import {computed} from "vue";
    
    const props = defineProps({
        isOpen: Boolean
    })
    
    const classes = computed(() => {
        return { 'rotate-180': props.isOpen }
    })
</script>

<template>
<svg class="nested-icon" :class="classes" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
        d="M2.49634 6.5825C2.49634 6.4325 2.55638 6.2825 2.66645 6.1725C2.89661 5.9425 3.26686 5.9425 3.49702 6.1725L7.99008 10.6025L12.4932 6.1725C12.7233 5.9425 13.0936 5.9425 13.3237 6.1725C13.5539 6.4025 13.5539 6.7625 13.3237 6.9925L8.41037 11.8325C8.18021 12.0625 7.80996 12.0625 7.5798 11.8325L2.66645 6.9925C2.54637 6.8825 2.49634 6.7325 2.49634 6.5825Z"
        fill="#546782"/>
</svg>
</template>

<style scoped>
    .nested-icon {
        transition: 0.3s linear all;
    }
    
    .rotate-180 {
        transform: rotate(180deg);
    }
</style>
