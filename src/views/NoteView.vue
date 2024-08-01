<script setup>
    import {useRoute, useRouter} from "vue-router";
    import CreateForm from "@/components/layouts/create-form/CreateForm.vue";
    import {getNoteById} from "@/store/notes";
    import {createTask, saveTaskList} from "@/utils/task";
    import {ref, watch} from "vue";
    import {cloneNote, removeNoteById} from "@/utils/notes";
    import TitleInplace from "@/components/layouts/TitleInplace.vue";
    import TaskRaw from "@/components/layouts/TaskRaw.vue";
    import {confirmed} from "@/utils/confirmed";
    
    const route = useRoute()
    const router = useRouter()
    
    const note = getNoteById(route.params.id)
    const noteModel = ref(cloneNote(note))
    
    function cancel() {
        noteModel.value = cloneNote(note)
    }
    
    function save() {
        note.name = noteModel.value.name
        note.taskList = saveTaskList(noteModel.value.taskList)
    }
    
    function addTodo (name) {
        name = name.trim()
        if (name.length === 0) {
            return
        }
        
        noteModel.value.taskList.push(createTask(name))
    }
    
    function updateName (name) {
        noteModel.value.name = name
    }
    
    function removeTask (index) {
        confirmed(() => {
            noteModel.value.taskList.splice(index, 1)
        })
    }
    
    function removeNote () {
        confirmed(() => {
            removeNoteById(route.params.id)
            router.push({ name: 'home' })
        })
    }
</script>

<template>
<div class="note-wrapper">
    <div class="title-wrapper">
        <title-inplace
            :name="noteModel.name"
            @update="updateName"
        ></title-inplace>
    </div>
    
    <div class="toolbar">
        <button class="save-button" @click="confirmed(save)"> сохранить </button>
        <button class="yellow-button" @click="confirmed(cancel)"> отменить </button>
        <button class="danger-button" @click="confirmed(removeNote)"> удалить </button>
    </div>
    
    <div class="form-wrapper">
        <CreateForm
            placeholder="Введите название задачи"
            @submit="addTodo">
        </CreateForm>
    </div>
    
    <div class="todo-wrapper">
        <task-raw
            v-for="(task, index) of noteModel.taskList"
            @remove="removeTask(index)"
            :task="task"
            :editable="true"
        ></task-raw>
    </div>
</div>
</template>

<style scoped>
.note-wrapper {
    padding-top: 50px;
    position: relative;
}

.form-wrapper {
    margin-top: 20px;
}

.todo-wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
}

.toolbar {
    display: flex;
    gap: 10px;
    position: absolute;
    right: 0px;
    top: 0px;
    border-radius: 10px;
}
</style>
