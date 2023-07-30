import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks() {
            const tasks = await getAllTasks();
            setTasks(tasks.data);
        }
        loadTasks();
    }, [])
  return (
    <div>
        {
            tasks.map(task => (
                <TaskCard task={task} key={task.id} />
            ))
        }
    </div>
  )
}
