<script setup>
    import {ref} from "vue";
    
    const emits = defineEmits(['submit'])
    
    const value = ref('')
    
    const submit = () => {
        emits('submit', value.value)
        value.value = ''
    }
</script>

<template>
    <form @submit.prevent="submit">
        <input v-model="value" placeholder="Введите название задачи" type="text">
        <button type="submit"> сохранить </button>
    </form>
</template>

<style scoped>
form {
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    display: flex;
}

form input {
    width: 60%;
    font-size: 14px;
    outline: none;
    padding: 5px 7px;
    border-radius: 5px;
    border: 1px solid #cecece;
}

form button {
    padding: 5px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background: #0e80c7;
    color: white;
    font-size: 14px;
}
</style>
