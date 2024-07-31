<script setup>
    import TaskItem from "@/components/layouts/task/task-item/TaskItem.vue";
    
    defineProps({
        taskList: Array
    })
</script>

<template>
    <ul>
       <li v-for="note of taskList" :key="task.id">
           <task-item :task="task"></task-item>
       </li>
    </ul>
</template>

<style scoped>

</style>
