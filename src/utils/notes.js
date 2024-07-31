import {TASK_LOCALSTORAGE_KEY} from "@/constants/tasks";

export function getNotes() {
    const tasks = JSON.parse(localStorage.getItem(TASK_LOCALSTORAGE_KEY))

    return tasks === null ? [] : tasks
}

export function setNotes(tasks) {
    localStorage.setItem(TASK_LOCALSTORAGE_KEY, JSON.stringify(tasks))
}
