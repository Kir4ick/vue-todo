<script setup>
    import {useRoute} from "vue-router";
    import CreateForm from "@/components/layouts/create-form/CreateForm.vue";
    import {getNoteByName} from "@/store/tasks";
    
    const route = useRoute()
    
    const note = getNoteByName(route.params.name)
    
    function addTodo(name) {
        note.taskList.push({
            id: Math.random(),
            name: name,
            state: 'new'
        })
    }
</script>

<template>
  <div class="about">
    <h1>{{ note.name }}</h1>
    <div class="form-wrapper">
        <CreateForm @submit="addTodo"></CreateForm>
    </div>
  </div>
</template>
