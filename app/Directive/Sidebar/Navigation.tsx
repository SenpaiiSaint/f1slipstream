"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  FiHome,
  FiDollarSign,
  FiBarChart,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiPieChart,
  FiCreditCard,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";

type MenuItem = {
  title: string;
  Icon: IconType;
  subItems?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    title: "Home",
    Icon: FiHome,
    subItems: [
      { title: "", Icon: FiHome },
      { title: "", Icon: FiHome },
    ],
  },
  {
    title: "Spending",
    Icon: FiCreditCard,
    subItems: [
      { title: "", Icon: FiHome },
      { title: "", Icon: FiHome },
    ],
  },
  {
    title: "Portfolio",
    Icon: FiPieChart,
    subItems: [
      { title: "", Icon: FiHome },
      { title: "", Icon: FiHome },
    ],
  },
  {
    title: "Invest",
    Icon: FiTrendingUp,
    subItems: [
      { title: "", Icon: FiHome },
      { title: "", Icon: FiHome },
    ],
  },
  {
    title: "Advice",
    Icon: FiTarget,
    subItems: [
      { title: "", Icon: FiHome },
      { title: "", Icon: FiHome },
    ],
  },
  {
    title: "Estate Planning",
    Icon: FiLayers,
    subItems: [
      { title: "", Icon: FiHome },
      { title: "", Icon: FiHome },
    ],
  },
  {
    title: "Equity",
    Icon: FiBarChart,
    subItems: [
      { title: "", Icon: FiHome },
      { title: "", Icon: FiHome },
    ],
  },
  {
    title: "Tax",
    Icon: FiDollarSign,
    subItems: [
      { title: "", Icon: FiHome },
      { title: "", Icon: FiHome },
    ],
  },
];

export const Navigation = () => {
  const [navigation, setNavigation] = useState<string>("Home");
  const [expandedNavigation, setExpandedNavigation] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedNavigation((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="space-y-1">
      {menuItems.map((item) => (
        <div key={item.title}>
          <Route
            title={item.title}
            Icon={item.Icon}
            selected={navigation === item.title}
            hasSubItems={!!item.subItems}
            isExpanded={expandedNavigation.includes(item.title)}
            onSelect={() => setNavigation(item.title)}
            onToggleExpand={() => toggleExpand(item.title)}
          />

          {item.subItems && (
            <motion.div
              initial="collapsed"
              animate={expandedNavigation.includes(item.title) ? "expanded" : "collapsed"}
              exit="collapsed"
              variants={{
                expanded: { opacity: 1, height: "auto"},
                collapsed: { opacity: 0, height: 0},
              }}
              transition={{ duration: 0.3, ease: "easeInOut"}}
              className="overflow-hidden"
            >
              <div className="ml-4 space-y-1">
                {item.subItems.map((subItem) => (
                  <Route
                    key={subItem.title}
                    title={subItem.title}
                    Icon={subItem.Icon}
                    selected={navigation === subItem.title}
                    hasSubItems={false}
                    isExpanded={false}
                    onSelect={() => setNavigation(subItem.title)}
                    onToggleExpand={() => {}}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

type RouteProps = {
  selected: boolean;
  Icon: IconType;
  title: string;
  hasSubItems: boolean;
  isExpanded: boolean;
  onSelect: () => void;
  onToggleExpand: () => void;
};

const Route = ({
  selected,
  Icon,
  title,
  hasSubItems,
  isExpanded,
  onSelect,
  onToggleExpand,
}: RouteProps) => {
  return (
    <button
      onClick={() => {
        if (hasSubItems) {
          onToggleExpand();
        } else {
          onSelect();
        }
      }}
      className={`flex items-center justify-between gap-2 w-full rounded px-2 py-1.5 text-md font-bold transition-colors ${
        selected
          ? "bg-white text-stone-950 shadow-md"
          : "bg-transparent text-stone-700 hover:bg-stone-200 hover:shadow-md"
      }`}
    >
      <div className="flex items-center gap-2">
        <Icon className={selected ? "text-red-500" : ""} />
        <span>{title}</span>
      </div>
      {hasSubItems && (
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs"
        >
          <FiChevronDown />
        </motion.span>
      )}
    </button>
  );
};


{/* Remove Drop Menu isnt applicable for what I want at this current point in the app, */}