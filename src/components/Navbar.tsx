import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  let todosData = searchParams.get("todos");
  return (
    <nav>
        <Link to="/" className={todosData === null ? "active" : ""}>Todo</Link>
        <Link to="/?todos=active" className={todosData === "active" ? "active" : ""}> Active</Link>
        <Link to="/?todos=completed" className={todosData === "completed" ? "active" : ""}> Completed</Link>
    </nav>
  )
}

export default Navbar
