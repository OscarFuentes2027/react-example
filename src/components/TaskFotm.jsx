import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

 function TaskFotm() {
  const [title, setTitulo] = useState("");
  const [descripcion, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, descripcion });
    setTitulo("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-4 ">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitulo(e.target.value)}
        value={title}
        className="bg-gray-200 p-3 w-full mb-2"
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        className="bg-gray-200 p-3 w-full mb-2"
        value={descripcion}
      ></textarea>
      <button className="bg-indigo-300 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskFotm;
