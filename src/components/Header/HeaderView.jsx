import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="p-4 bg-gray-300 flex justify-between">
      <h1>
        <Link to={"/"} className=" text-red-500 font-bold text-2xl">
          Forum
        </Link>
      </h1>

      <nav className="text-slate-900 flex gap-4 items-center font-medium me-3">
        <NavLink to={"/"}>Posts</NavLink>
        <NavLink to={"create"}>Add a Post</NavLink>
      </nav>
    </header>
  );
};

export default HeaderView;
