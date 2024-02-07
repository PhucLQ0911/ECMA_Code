import { Link } from "react-router-dom";

function HeaderComponent() {
   return <>
      <div className="container mt-5">
         <ul className="flex justify-around">
            <li className="text-white">
               <Link to="/">Home</Link>
            </li>
            <li className="text-white">
               <Link to="/admin/info">Info</Link>
            </li>
            <li className="text-white">
               <Link to="/admin/skills">Skills</Link>
            </li>
            <li className="text-white">
               <Link to="/admin/projects">Projects</Link>
            </li>
            <li className="text-white">
               <Link to="/admin/contacts">Contacts</Link>
            </li>
         </ul>
      </div>
   </>;
}
export default HeaderComponent;
