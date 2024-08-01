<script setup>
    import {computed} from "vue";
    import {STATUS_DONE} from "@/utils/task";
    
    const props = defineProps({
        task: Object,
    })
    
    const classes = computed(() => {
        return {
            'done': props.task.state === STATUS_DONE
        }
    })
</script>

<template>
<div class="note-item">
    <p :class="classes"> {{ task.name }} </p>
</div>
</template>

<style scoped>
.done {
    text-decoration: line-through;
}
</style>
