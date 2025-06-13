import type { TaskFilterProps } from "../../types";

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <div>
      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all-statuses">All Statuses</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all-priorities">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
}

export default TaskFilter;
