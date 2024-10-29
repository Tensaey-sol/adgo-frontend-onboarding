import { useQuery } from "@tanstack/react-query";
import Todo from "./Todo";

const TodoList = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      return await response.json();
    },
  });

  if (isLoading)
    return <div className="text-center text-gray-500 text-lg mt-6">Loading...</div>;

  if (error instanceof Error)
    return (
      <div className="text-center text-red-500 text-lg mt-6">
        An error has occurred: {error.message}
      </div>
    );

  return (
    <div className="max-w-md mx-auto mt-8 space-y-4">
      <Todo id={data.id} title={data.title} completed={data.completed} />
    </div>
  );
};

export default TodoList;
