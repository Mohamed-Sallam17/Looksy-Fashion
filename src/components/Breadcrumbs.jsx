import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  
  // تقسيم المسار وفلترته
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumbs flex items-center gap-2 text-xs text-gray-400 mb-6 capitalize font-medium">
      {/* رابط الهوم الثابت */}
      <Link to="/" className="hover:text-blue-600 transition-colors">
        Home
      </Link>

      {pathnames.map((value, index) => {
        // التحقق هل الكلمة دي هي الأخيرة؟
        const isLast = index === pathnames.length - 1;

        // حل مشكلة التكرار: بناء اللينك بناءً على مكان الكلمة في المسار
        // لو الكلمة الأولى هي 'category' هتروح لـ /category، ولو واقفين في التانية هتروح لـ /category/اسم_التصنيف
        const routeTo = index === 0 ? "/category" : `/category/${value}`;

        // تخطي عرض كلمة "category" نفسها في الـ Breadcrumbs لو مش حاببها تظهر كـ لينك منفصل ملوش صفحة
        if (value.toLowerCase() === "category") {
          return null; 
        }

        return (
          <div key={value} className="flex items-center gap-2">
            {/* الفاصل */}
            <span className="text-gray-300">/</span>
            
            {isLast ? (
              // الكلمة الأخيرة (اسم المنتج أو اسم التصنيف الحالي) نص فقط
              <span className="text-gray-600 font-semibold">
                {decodeURIComponent(value).replace(/-/g, " ")}
              </span>
            ) : (
              // الكلمة اللي في النص هتروح للرابط المظبوط من غير تكرار
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