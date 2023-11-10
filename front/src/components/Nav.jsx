import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/home" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/alumnos" className="hover:text-cyan-500 transition-colors">
              Alumnos
            </Link>
          </li>
          <li>
            <Link to="/link3" className="hover:text-cyan-500 transition-colors">
              Link 3
            </Link>
          </li>
          <li>
            <Link to="/link4" className="hover:text-cyan-500 transition-colors">
              Link 4
            </Link>
          </li>
          <li>
            <Link to="/link5" className="hover:text-cyan-500 transition-colors">
              Link 5
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
