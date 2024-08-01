<script setup>
    import CreateForm from "@/components/layouts/create-form/CreateForm.vue";
    import {confirmed} from "@/utils/confirmed";
    import {createNewTask, getNoteList, removeNote} from "@/store/notes";
    import {MAX_TODO_IN_MAIN_PAGE} from "@/constants/todo";
    import TaskItem from "@/components/layouts/TaskItem.vue";
    import TaskRaw from "@/components/layouts/TaskRaw.vue";
    
    const noteList = getNoteList()
    
    function updateTodoState(taskIndex, todoIndex) {
        noteList[taskIndex].taskList[todoIndex].state = 'done'
    }
</script>

<template>
    <div class="home">
        <h1 class="title">Лучший TODO сервис</h1>
        <div class="create-form-wrapper">
            <CreateForm
                placeholder="Введите название заметки"
                @submit="createNewTask"
            >
            </CreateForm>
        </div>
        <div class="notes-wrapper">
            <div class="note-item" v-for="(note, index) of noteList">
                <div class="task-data">
                    <span>
                        Заметка:
                        <router-link :to="{ name: 'task', params: { id: note.id }}">
                            {{ note.name }}
                        </router-link>
                    </span>
                    <div class="todo-wrapper">
                        <task-raw :task="task" :editable="false" v-for="task of note.taskList.slice(0, MAX_TODO_IN_MAIN_PAGE)">
                            <task-item
                                :task="task"
                            ></task-item>
                        </task-raw>
                    </div>
                </div>
                <button class="danger-button" @click="confirmed(removeNote, index)">
                    удалить
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .create-form-wrapper {
        margin-top: 20px;
    }
    
    .notes-wrapper {
        text-align: left;
        margin-top: 20px;
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
