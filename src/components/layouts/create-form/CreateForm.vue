<script setup>
    import {ref} from "vue";
    
    defineProps({
        placeholder: String
    })
    
    const emits = defineEmits(['submit'])
    
    const value = ref('')
    
    const submit = () => {
        emits('submit', value.value)
        value.value = ''
    }
</script>

<template>
    <form @submit.prevent="submit">
        <input v-model="value" :placeholder="placeholder" type="text">
        <button class="save-button" type="submit"> сохранить </button>
    </form>
</template>

<style scoped>
form {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
    display: flex;
}

form input {
    width: 65%;
    font-size: 14px;
    outline: none;
    padding: 5px 7px;
    border-radius: 5px;
    border: 1px solid #cecece;
}
</style>
