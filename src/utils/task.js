export const STATUS_DONE = 'done'
export const STATUS_CREATED = 'new'
export const STATUS_SAVED = 'saved'

export function createTask (name) {
    return {
        id: Math.random(),
        name: name,
        state: STATUS_CREATED
    }
}

export function cloneTaskList (taskList) {
    const result = []
    for (const task of taskList) {
        result.push(cloneTask(task))
    }

    return result
}

function cloneTask (task) {
    return {
        id: task.id,
        name: task.name,
        state: task.state
    }
}

export function saveTaskList (taskList) {
    for (const taskListKey in taskList) {
        if (taskList[taskListKey].state === STATUS_CREATED) {
            taskList[taskListKey].state = STATUS_SAVED
        }
    }

    return taskList
}
