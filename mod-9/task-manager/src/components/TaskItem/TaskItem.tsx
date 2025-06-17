import type { TaskItemProps } from "../../types";
import { TrashIcon } from "@heroicons/react/24/outline";

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <li>
      <div>
        <div>{task.title}</div>
        <div>{task.description}</div>
        <div>Priority: {task.priority}</div>
        <div>Due: {task.dueDate}</div>
      </div>

      <div>
        <select
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          value={task.status}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button onClick={() => onDelete(task.id)}>
          <TrashIcon className="text-pink-500 size-6" />
        </button>
      </div>
    </li>
  );
}
export default TaskItem;
