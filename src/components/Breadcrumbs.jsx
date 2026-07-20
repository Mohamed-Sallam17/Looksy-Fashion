import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  
  // تقسيم المسار وفلترته
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumbs flex items-center gap-2 text-xs text-gray-400 mb-6 capitalize font-medium">
      <Link to="/" className="hover:text-[var(--hover-color)] transition-colors">
        Home
      </Link>

      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;

        const routeTo = index === 0 ? "/category" : `/category/${value}`;

        if (value.toLowerCase() === "category") {
          return null; 
        }

        return (
          <div key={value} className="flex items-center gap-2">
            <span className="text-gray-300">/</span>
            {isLast ? (
              <span className="text-gray-600 font-semibold">
                {decodeURIComponent(value).replace(/-/g, " ")}
              </span>
            ) : (
              <Link to={routeTo} className="hover:text-blue-600 transition-colors">
                {decodeURIComponent(value).replace(/-/g, " ")}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;