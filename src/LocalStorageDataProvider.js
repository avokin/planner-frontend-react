class LocalStorageDataProvider {
    getAllTasks() {
        if (this.myTasks == null) {
            let data = window.localStorage.getItem("tasks");
            if (data == null) {
                this.myTasks = [];
                LocalStorageDataProvider.serializeTasks(this.myTasks);
            } else {
                this.myTasks = JSON.parse(data);
            }
        }
        return this.myTasks;
    }

    removeTask(task) {
        const tasks = this.getAllTasks();
        let i = tasks.indexOf(task);
        if (i >= 0) {
            tasks.splice(i, 1)
        }

        LocalStorageDataProvider.serializeTasks(tasks);
    }

    addTask(task) {
        const tasks = this.getAllTasks();
        let maxId = 0;
        for (let i = 0; i < tasks.length; i++) {
            let t = tasks[i];
            if (t.id > maxId) {
                maxId = t.id;
            }
        }
        task.id = maxId + 1;
        tasks.push(task);

        LocalStorageDataProvider.serializeTasks(tasks);
    }

    getTasksFor(day) {
        let tasks = this.getAllTasks();
        let result = [];
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            if ((task.dueDay < day  && !task.isComplete) || (task.dueDay === day)) {
                result.push(task)
            }
        }
        return result;
    }

    static serializeTasks(tasks) {
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

export const INSTANCE = new LocalStorageDataProvider();