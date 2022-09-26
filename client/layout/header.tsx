/* import packages */
import React, { useEffect,useState } from "react";
import { cms } from "../constant/constant";

/**
 * @desc Common Header Component
 */
const Header = ({ id }) => {
  const [state, setState] = useState({
    title: "",
    id: ""
  });
  useEffect(() => {
    const x = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      console.log("res", res);
    }
    // x();
  }, [id]);

  console.log("state", state);
  return (
    <header className="header mb-4">
      <div className="container d-flex align-center">
        <h3 className="brand-title">{cms.label.brand}</h3>
        <ul className="nav-bar">
          <li>
            <a href="/product">{cms.label.allProducts}</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
