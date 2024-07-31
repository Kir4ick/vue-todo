import {reactive, watch} from "vue";
import {getNotes, setNotes} from "@/utils/notes";

const noteList = reactive(getNotes())

watch(noteList, (newNoteList) => {
    setNotes(newNoteList)
})

export function getNoteList() {
    return noteList
}

export const createNewTask = (name) => {
    noteList.push({
        id: Math.random(),
        name: name,
        taskList: []
    })
}

export function removeNote (index) {
    noteList.splice(index, 1)
}

export function getNoteByName(name) {
    for (const taskKey in noteList) {
        if (noteList[taskKey].name !== name) {
            continue
        }

        return noteList[taskKey]
    }
}
