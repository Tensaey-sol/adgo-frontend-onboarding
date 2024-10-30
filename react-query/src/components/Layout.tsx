import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="App">
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">My Todo App</div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 transition duration-200">Todo List</Link>
            </li>
            <li>
              <Link to="/submission" className="text-white hover:text-gray-300 transition duration-200">Todo Submission</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto mt-8">
        <Outlet /> 
      </div>
    </div>
  );
}
