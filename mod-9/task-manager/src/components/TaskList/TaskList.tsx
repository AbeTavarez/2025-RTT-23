import type { Task } from "../../types";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskItem from "../TaskItem/TaskItem";
import { useState } from "react";

function TaskList() {
  // Initial tasks for our mockup
  const tasks: Task[] = [
    {
      id: "1",
      title: "Design landing page",
      description:
        "Create the initial wireframe and mockups for the landing page.",
      status: "pending",
      priority: "high",
      dueDate: "2025-06-20",
    },
    {
      id: "2",
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
      status: "pending",
      priority: "medium",
      dueDate: "2025-06-18",
    },
    {
      id: "3",
      title: "Fix login bug",
      description:
        "Resolve the issue where users can’t log in with Google OAuth.",
      status: "in-progress",
      priority: "high",
      dueDate: "2025-06-14",
    },
    {
      id: "4",
      title: "Write unit tests",
      description: "Add coverage for the user service module.",
      status: "in-progress",
      priority: "low",
      dueDate: "2025-06-22",
    },
    {
      id: "5",
      title: "Deploy to staging",
      description: "Push the latest build to the staging environment for QA.",
      status: "completed",
      priority: "medium",
      dueDate: "2025-06-10",
    },
  ];

  // State variable for the dynamic functionality
  const [tasksState, setTaskState] = useState(tasks);
  const [filters, setFilters] = useState<{
    status?: string;
    priority?: string;
  }>({});

  // Handle deleting a task (passed down to -> onDelete)
  const handleDelete = (taskId: string) => {
    const updatedTasks = tasksState.filter((task) => task.id !== taskId);
    setTaskState(updatedTasks);
  };

  // Handle updating the status of a task (passed down to -> onStatusChange)
  const handleStatusChange = (taskId: string, newStatus: string) => {
    const updatedTasks: Task[] = tasksState.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTaskState(updatedTasks);
  };

  // Handles filtering of the tasks
  const handleFilterChange = (filters: { status: string; priority: string }) =>
    setFilters(filters);

  const filteredTasks = tasksState.filter((task) => {
    const matchesStatus = !filters.status || task.status === filters.status;
    const matchesPriority =
      !filters.priority || task.priority === filters.priority;
    return matchesStatus && matchesPriority;
  });

  return (
    <>
      <TaskFilter onFilterChange={handleFilterChange} />
      {/* TASK FORM */}
      <ul>
        {/* here we map over the state data (taskState) instead of the static array (tasks) */}
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onStatusChange={handleStatusChange}
          />
        ))}
      </ul>
    </>
  );
}
export default TaskList;
