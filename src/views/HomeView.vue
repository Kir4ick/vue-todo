<script setup>
    import CreateForm from "@/components/layouts/create-form/CreateForm.vue";
    import {confirmed} from "@/utils/confirmed";
    import {createNewTask, getNoteList, removeNote} from "@/store/tasks";
    import {MAX_TODO_IN_MAIN_PAGE} from "@/constants/todo";
    
    const noteList = getNoteList()
    
    function updateTodoState(taskIndex, todoIndex) {
        noteList[taskIndex].taskList[todoIndex].state = 'done'
    }
</script>

<template>
    <div class="home">
        <h1>Лучший TODO сервис</h1>
        <div class="create-form-wrapper">
            <CreateForm @submit="createNewTask"></CreateForm>
        </div>
        <div class="notes-wrapper">
            <div class="note-item" v-for="(note, index) of noteList">
                <div class="task-data">
                    <span>
                        Заметка:
                        <router-link :to="{ name: 'task', params: { name: note.name }}">
                            {{ note.name }}
                        </router-link>
                    </span>
                    <div class="todo-wrapper">
                        <div style="display: flex" v-for="(todo, taskIndex) of note.taskList.slice(0, MAX_TODO_IN_MAIN_PAGE)">
                            <!--                    <input v-if="todo.state === 'new'" @change="updateTodoState(index, taskIndex)" type="checkbox" >-->
                            <div>{{ todo.name }}</div>
                        </div>
                    </div>
                </div>
                <button @click="confirmed(removeNote, index)">
                    удалить
                </button>
            </div>
        </div>
    </div>
</template>

<style>
    .create-form-wrapper {
        margin-top: 20px;
    }
    
    .notes-wrapper {
        text-align: left;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;
    }
    
    .note-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    
    .note-item button {
        padding: 8px 15px;
        background: #ce3a3a;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 10px;
    }
    
    .note-item a {
        color: #3c8cd7;
        font-weight: normal;
        text-decoration: none;
    }
    
    .todo-wrapper {
        margin-top: 10px;
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 5px;
    }
</style>
