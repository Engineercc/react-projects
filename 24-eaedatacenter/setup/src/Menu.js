import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuItems }) => {
  console.log(...menuItems);
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        const { id } = item;
        return <MenuItem key={id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
