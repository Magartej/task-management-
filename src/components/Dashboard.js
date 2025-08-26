import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    if (currentUser) {
      const q = query(
        collection(db, "tasks"),
        where("userId", "==", currentUser.uid)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksArray = [];
        querySnapshot.forEach((doc) => {
          tasksArray.push({ ...doc.data(), id: doc.id });
        });
        setTasks(tasksArray);
      });

      return () => unsubscribe();
    }
  }, [currentUser]);

  async function addTask(e) {
    e.preventDefault();
    if (!newTask.trim()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "tasks"), {
        title: newTask,
        completed: false,
        userId: currentUser.uid,
        createdAt: new Date(),
      });
      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
    setLoading(false);
  }

  async function toggleTaskCompletion(task) {
    try {
      await updateDoc(doc(db, "tasks", task.id), {
        completed: !task.completed,
      });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }

  async function deleteTask(taskId) {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {currentUser.email}</h1>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      <div className="task-form">
        <form onSubmit={addTask}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            disabled={loading}
          />
          <button type="submit" disabled={loading}>
            Add Task
          </button>
        </form>
      </div>

      <div className="tasks-list">
        <h2>Your Tasks ({tasks.length})</h2>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add your first task above!</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task)}
              />
              <span className="task-title">{task.title}</span>
              <button
                onClick={() => deleteTask(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
