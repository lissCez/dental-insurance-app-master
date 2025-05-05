// BottomNav.tsx
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Users, Building, Info } from "lucide-react";
import clsx from "clsx";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { to: "/home", label: "Início", icon: <Home /> },
    { to: "/calendario", label: "Calendário", icon: <Calendar /> },
    { to: "/pacientes", label: "Pacientes", icon: <Users /> },
    { to: "/perfil", label: "Clínica", icon: <Building /> },
    { to: "/sobre", label: "Sobre", icon: <Info /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-sm flex justify-around py-2 z-50">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={clsx(
            "flex flex-col items-center text-xs transition-colors",
            location.pathname === item.to ? "text-blue-600" : "text-gray-500"
          )}
        >
          <div className="w-6 h-6">{item.icon}</div>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
