import {  NavLink } from "react-router-dom";
import React from "react";
import { Button } from "antd";

import "./SideBar.css";
function SideBar() {
  return (
    <div className="sidebar " id="sidebar">
      <div>
        <h5 className="title-profile">Sonia Stewart</h5>
      </div>
      <div className="list-sidebar">
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "var(--v-accent-lighten5)",
                  color: "var(--v-anchor-base)",
                }
              : { backgroundColor: "transparent" }
          }
          to="dashboard"
        >
          <li className="list-item-sidebar">Dashboard</li>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "var(--v-accent-lighten5)",
                  color: "var(--v-anchor-base)",
                }
              : { backgroundColor: "transparent" }
          }
          to="order"
        >
          <li className="list-item-sidebar">Orders</li>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "var(--v-accent-lighten5)",
                  color: "var(--v-anchor-base)",
                }
              : { backgroundColor: "transparent" }
          }
          to="customers"
        >
          <li className="list-item-sidebar">Customers</li>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "var(--v-accent-lighten5)",
                  color: "var(--v-anchor-base)",
                }
              : { backgroundColor: "transparent" }
          }
          to="products"
        >
          <li className="list-item-sidebar">Products</li>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "var(--v-accent-lighten5)",
                  color: "var(--v-anchor-base)",
                }
              : { backgroundColor: "transparent" }
          }
          to="promotions"
        >
          <li className="list-item-sidebar">Promotions</li>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "var(--v-accent-lighten5)",
                  color: "var(--v-anchor-base)",
                }
              : { backgroundColor: "transparent" }
          }
          to="stuffMembers"
        >
          <li className="list-item-sidebar">Stuff Members</li>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "var(--v-accent-lighten5)",
                  color: "var(--v-anchor-base)",
                }
              : { backgroundColor: "transparent" }
          }
          to="vehicles"
        >
          <li className="list-item-sidebar">Vehicles</li>
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  backgroundColor: "var(--v-accent-lighten5)",
                  color: "var(--v-anchor-base)",
                }
              : { backgroundColor: "transparent" }
          }
          to="finaliesDeliveries"
        >
          <li className="list-item-sidebar">Finalies Deliveries</li>
        </NavLink>
      </div>
      <div>
        <Button type="primary" className="logout">
          LOG OUT
        </Button>
      </div>
    </div>
  );
}

export default SideBar;
