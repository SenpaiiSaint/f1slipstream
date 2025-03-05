"use client"

import React, {useState} from 'react'
import { motion } from 'motion/react'
import {
    FiHome,
    FiActivity,
    FiBriefcase,
    FiShield,
    FiSettings,
    FiChevronDown,
} from "react-icons/fi";
import { IconType } from 'react-icons';

type MenuItem = {
    title: string;
    Icon: IconType;
    subItems?: MenuItem[];
};

cosnt menuItems: MenuItem[] = [
    {
        title: "Dashboard",
        Icon: FiHome,
        subItems: [
            { title: "Overview", Icon: FiHome },
            { title: "Blank", Icon: FiHome }
        ]
    },
    {
        title: "Dashboard",
        Icon: FiHome,
        subItems: [
            { title: "Overview", Icon: FiHome },
            { title: "Blank", Icon: FiHome }
        ]
    },
    {
        title: "Dashboard",
        Icon: FiHome,
        subItems: [
            { title: "Overview", Icon: FiHome },
            { title: "Blank", Icon: FiHome }
        ]
    },
    {
        title: "Dashboard",
        Icon: FiHome,
        subItems: [
            { title: "Overview", Icon: FiHome },
            { title: "Blank", Icon: FiHome }
        ]
    },
    {
        title: "Dashboard",
        Icon: FiHome,
        subItems: [
            { title: "Overview", Icon: FiHome },
            { title: "Blank", Icon: FiHome }
        ]
    },
];

export const Navigation = () => {
    const [navigation, setNavigation] = useState<string>("Dashboard");
    const [expandedNavigation, setExpandedNavigation] = useState<string[]>([]);

    const toggleExpand = (title: string) => {
        setExpandedNavigation((prev) => 
            prev.includes(title) ? prev. filter((item) => item !== title) : [...prev, title]
        );
    };
    
  return (
    <></>
  )
}
