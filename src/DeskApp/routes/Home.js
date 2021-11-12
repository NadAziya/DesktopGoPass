import React from "react";
import { ImHome } from "react-icons/im";
import { RiDashboardLine } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { BiStats } from "react-icons/bi";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import Logo from "../../Images/LogoApp.jpg";

import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";

export default function Appli(props) {
  const history = createBrowserHistory();

  function handleClick1() {
    history.push("/dashboard");
    window.location.reload(false);
  }
  function handleClick() {
    history.push("/");
    window.location.reload(false);
  }
  function handleClick2() {
    history.push("/historique");
    window.location.reload(false);
  }

  function handleClick3() {
    history.push("/statistique");
    window.location.reload(false);
  }

  return (
    <div className="h-screen ">
      <ProSidebar>
        <div className="mx-auto pt-4">
          <img
            className="rounded-full"
            src={Logo}
            alt="logo"
            height="100px"
            width="100px"
          />
          <h1 className="text-center text-2xl">GoPass</h1>
        </div>
        <div className="  my-auto  ">
          <Menu iconShape="square">
            <div className="flex flex-col space-y-6">
              <MenuItem icon={<ImHome size={30} />}>
                <button onClick={handleClick}>Accueil</button>
              </MenuItem>
              <MenuItem icon={<RiDashboardLine size={30} />}>
                <button onClick={handleClick1}>Liste des patients</button>
              </MenuItem>
              <MenuItem icon={<FaHistory size={30} />}>
                <button onClick={handleClick2}>Historique</button>
              </MenuItem>
              <MenuItem icon={<BiStats size={30} />}>
                <button onClick={handleClick3}>Statistiques</button>
              </MenuItem>
            </div>
          </Menu>
        </div>
      </ProSidebar>
    </div>
  );
}
