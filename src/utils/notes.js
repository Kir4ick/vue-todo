import {TASK_LOCALSTORAGE_KEY} from "@/constants/tasks";
import {cloneTaskList} from "@/utils/task";
import {getNoteList, removeNote} from "@/store/notes";

export function getNotes () {
    const tasks = JSON.parse(localStorage.getItem(TASK_LOCALSTORAGE_KEY))

    return tasks === null ? [] : tasks
}

export function setNotes (notes) {
    localStorage.setItem(TASK_LOCALSTORAGE_KEY, JSON.stringify(notes))
}

export function cloneNote (note) {
    return {
        id: note.id,
        name: note.name,
        taskList: cloneTaskList(note.taskList)
    }
}

export function removeNoteById (id) {
    const noteList = getNoteList()

    for (const noteIndex in noteList) {
        if (noteList[noteIndex].id != id) {
            continue
        }

        removeNote(noteIndex)
        return
    }
}
