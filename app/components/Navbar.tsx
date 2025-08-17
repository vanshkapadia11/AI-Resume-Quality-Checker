import { ArrowBigLeftDashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const [isPerfect, setIsPerfect] = useState(false);
  useEffect(() => {
    if (location.pathname == "/upload") {
      setIsPerfect(true);
    }
  }, []);
  return (
    <div className="mx-10 flex items-center justify-center">
      <nav className="navbar">
        <Link to="/">
          <p className="md:text-2xl text-xl font-bold text-gradient">
            RESUMIND
          </p>
        </Link>
        <Link to={isPerfect ? "/" : "/upload"} className="primary-button w-fit">
          {isPerfect ? (
            <span className="flex items-center gap-1.5">
              Back <ArrowBigLeftDashIcon size={18} />
            </span>
          ) : (
            <>Upload Resume</>
          )}
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
