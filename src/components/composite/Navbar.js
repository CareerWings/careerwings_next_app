import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../../utils/constants";
const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((categorie) => (
      <button
        className="category-btn "
        style={{
          color: "#fff",
          background: "#000000",
        }}
        key={categorie.name}
      >
        <span
          style={{
            color: "#5C0099",
            marginRight: "15px",
          }}
        >
          {categorie.icon}
        </span>
        <span>{categorie.name}</span>
      </button>
    ))}
  </Stack>
);
export default Sidebar;




