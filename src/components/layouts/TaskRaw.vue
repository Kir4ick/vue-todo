<script setup>
    import {STATUS_CREATED, STATUS_DONE, STATUS_SAVED} from "@/utils/task";
    import Raw from "@/components/ui/Raw.vue";
    import TaskItem from "@/components/layouts/TaskItem.vue";
    
    const props = defineProps({
        task: Object,
        editable: Boolean
    })
    
    const emit = defineEmits(['remove'])
    
    const change = () => {
        if (props.task.state === STATUS_DONE) {
            props.task.state = STATUS_CREATED
            return
        }
        
        props.task.state = STATUS_DONE
    }
</script>

<template>
<Raw>
    <template #main>
        <label class="raw-label">
            <input
                v-if="editable"
                type="checkbox"
                :checked="task.state === STATUS_DONE"
                :disabled="task.state !== STATUS_SAVED"
                @change="change"
            >
            <task-item :task="task"></task-item>
        </label>
    </template>
    <template #tools>
        <button
            @click="emit('remove')"
            class="danger-button"
            v-if="editable"
        >
            удалить
        </button>
    </template>
</Raw>
</template>

<style scoped>
.raw-label {
    display: flex; align-items: center; column-gap: 20px; cursor: pointer; width: 60%;
}
</style>
