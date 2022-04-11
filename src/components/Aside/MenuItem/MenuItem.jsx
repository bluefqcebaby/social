import { IconContext } from "react-icons"
import { NavLink } from "react-router-dom"

export default function MenuItem({ route = "/", logo, text }) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        isActive
          ? "gap-2 cursor-pointer bg-slate-200  px-2 py-1 flex items-center"
          : "gap-2 cursor-pointer hover:bg-slate-200  px-2 py-1 flex items-center"
      }
    >
      <IconContext.Provider value={{ className: "text-indigo-500" }}>{logo}</IconContext.Provider>
      {text}
    </NavLink>
  )
}
