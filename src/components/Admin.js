import React from "react";
import "../scss/admin.scss";

function Admin() {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <h3>Add shopping items</h3>
      <form>
        <input type="text" placeholder="image url"></input>
        <input type="text" placeholder="title"></input>
        <input type="text" placeholder="price"></input>
        <form-group>
          <label>Set selector</label>
          <select>
            <option>True</option>
            <option>False</option>
          </select>
        </form-group>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}

export default Admin;
