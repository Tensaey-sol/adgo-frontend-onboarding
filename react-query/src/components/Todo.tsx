interface TodoProps {
    id: number;
    title: string;
    completed: boolean;
  }
  
  const Todo = ({ id, title, completed }: TodoProps) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
        <div className="text-gray-700 font-bold text-lg">Todo #{id}</div>
        <div className="text-gray-900 text-base mt-1">
          <span className="font-semibold">Title:</span> {title}
        </div>
        <div className="text-gray-900 text-base mt-1">
          <span className="font-semibold">Completed:</span>{" "}
          <span className={completed ? "text-green-600" : "text-red-500"}>
            {completed ? "✅" : "❌"}
          </span>
        </div>
      </div>
    );
  };
  
  export default Todo;
  