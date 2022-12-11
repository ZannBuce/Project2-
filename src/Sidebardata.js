import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MailIcon from "@mui/icons-material/Mail";
import GroupIcon from "@mui/icons-material/Group";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "DashBoard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Calendar",
    icon: <CalendarMonthIcon />,
    link: "/calendar",
  },
  {
    title: "MailBox",
    icon: <MailIcon />,
    link: "/mailbox",
  },
  {
    title: "Friends",
    icon: <GroupIcon />,
    link: "/friends",
  },
];
