import React from "react";
import { Link } from "react-router-dom";
import "../../scss/adminNav.scss";

function AdminNav() {
  return (
    <div className="adminNav">
      <Link to="/admin">Add Items</Link>
      <Link to="/admin/view">View Items</Link>
    </div>
  );
}

export default AdminNav;
