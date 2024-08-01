<script setup>
    import Inplace from "@/components/ui/Inplace.vue";
    import CreateForm from "@/components/layouts/create-form/CreateForm.vue";
    
    defineProps({
        name: String
    })
    
    const emit = defineEmits(['update'])
    const submit = (value, close) => {
        if (value.trim().length < 0) {
            return
        }
        
        emit('update', value)
        close()
    }
</script>

<template>
<inplace>
    <template #display>
        <h1 class="title"> {{ name }} </h1>
    </template>
    <template #content="{ close }">
        <div class="update-title-form">
            <CreateForm
                style="width: 75%"
                placeholder="Введите новое название заметки"
                @submit="(value) => { submit(value, close) }">
            </CreateForm>
            <button @click="close" class="danger-button"> отменить </button>
        </div>
    </template>
</inplace>
</template>

<style scoped>
.update-title-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}
</style>
