import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { useNavigate } from "react-router-dom";
import { IconMenuDeep } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { tutorialModal } from "../features/tutorialModal";

export default function Sidemenu() {
  const [state, setState] = React.useState({
    right: false,
  });

  const dispatch = useDispatch();

  const handleOpenTutorialModal = () => {
    dispatch(tutorialModal({ value: true }));
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const currentYear = new Date().getFullYear();

  const options = [
    {
      id: 1,
      title: "How to Participate",
      func: handleOpenTutorialModal,
    },
    {
      id: 2,
      title: "Terms and Conditions",
    },
    {
      id: 3,
      title: "Privacy Policy",
    },
    {
      id: 4,
      title: "Contact Us",
    },
  ];
  const navigate = useNavigate();

  let searchViaText = "";
  const handleSearch = (event) => {
    searchViaText = event.target.value;
  };

  const handleSearchKey = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${searchViaText}`);
      setState({ ...state, right: false });
    }
  };

  const list = (anchor) => (
    <Box
      sx={{
        backgroundColor: "#320071",
        height: "100%",
        width: "300px",
      }}
      role="presentation"
    >
      <div>
        <div className="flex items-center justify-end px-5 h-[69px]">
          <button onClick={toggleDrawer(anchor, false)}>
            <IconX color="white" size={32} />
          </button>
        </div>

        <div
          className="grid text-[#f2f2f2] py-4"
          onClick={toggleDrawer(anchor, false)}
        >
          {options.map((options, i) => {
            return (
              <button
                onClick={options.func}
                className="flex gap-4 p-4 text-[24px] items-center hover:bg-[#490e92] justify-end duration-150 text_with_cadbury_font border-y-[#562291] border-y"
                key={i}
              >
                {options.title}
              </button>
            );
          })}
        </div>
      </div>
      <img
        src="https://seeklogo.com/images/M/mondelez-international-logo-1DB9B5EBF1-seeklogo.com.png"
        alt="mondelez-international"
        className="w-full absolute bottom-0 bg-white object-contain p-5 h-[100px]"
      />
    </Box>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <IconMenuDeep color="white" size={32} />
          </button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}
