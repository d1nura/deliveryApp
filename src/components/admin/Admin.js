import React from "react";
import "../../scss/admin.scss";
import AdminNav from "./AdminNav";
import AddShpItems from "./AddShpItems";
import { BrowserRouter, Route } from "react-router-dom";
import ViewItems from "./ViewItems";

function Admin() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AdminNav />
        <div className="admin">
          <Route path="/admin" exact component={AddShpItems} />
          <Route path="/admin/view" exact component={ViewItems} />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Admin;
