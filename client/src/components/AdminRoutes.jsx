import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./adminDashbord/Users";
import Sidebar1 from "./adminDashbord/Sidebar1";
import AddnewUser from "./adminDashbord/AddnewUser";
import Product from "./adminDashbord/Products";
import AddnewProduct from "./adminDashbord/AddnewProducts";
import Dashboard from "./adminDashbord/Dashboard";
import UserEdit from "./adminDashbord/UserEdit";
import CreateAdminprofile from '../components/adminDashbord/AdminProfile'

const AdminRoutes = () => {
  return (
    <div>
      <Sidebar1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/edit/:id" element={<UserEdit />} />

          <Route path="/user/addnew" element={<AddnewUser />} />
          <Route path="/products" element={<Product />} />

          <Route path="/products/addnew" element={<AddnewProduct />} />
          <Route path= "/adminprofile/:id" element={<CreateAdminprofile />} />
        </Routes>
      </Sidebar1>
    </div>
  );
};

export default AdminRoutes;
