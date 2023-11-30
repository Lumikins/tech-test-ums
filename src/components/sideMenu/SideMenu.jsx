import { Link } from "react-router-dom";
import { sideMenu } from "../../data";

const SideMenu = () => {
  return (
    <div className="flex flex-col h-screen mt-1">
      {sideMenu.map((item) => (
        <div key={item.id} className="flex flex-col gap-2 mb-5">
          <span className="hidden text-xs uppercase font-extralight text-light-color lg:flex">
            {item.title}
          </span>
          {item.listItems.map((listItem) => (
            <Link
              key={listItem.id}
              to={listItem.url}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-light-bg"
            >
              <img src={listItem.icon} alt="" className="w-10 h-10 lg:h-5 lg:w-5" />
              <span className="hidden capitalize lg:flex">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
