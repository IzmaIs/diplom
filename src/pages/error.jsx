import {NavLink} from "react-router-dom";

export const Error = () => {
  return (
    <div>
      <span>
        404
        <NavLink to="/">Назад</NavLink>
      </span>
    </div>
  );
};
