"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  IoCameraOutline,
  IoChatbubbleOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import ListItem from "./ListItem";
import styles from "./navigation.module.scss";

const Navigation = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState(pathname);

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const item = e.currentTarget.getAttribute("data-list-item");
    if (item) setSelected(item);
  };

  return (
    <div className={styles.navigation}>
      <ul>
        <ListItem
          href="/"
          icon={<IoHomeOutline />}
          text="Home"
          onClick={handleClick}
          isSelected={selected === "/"}
          dataListItem="/"
        />
        <ListItem
          href="/pagetwo"
          icon={<IoPersonOutline />}
          text="Profile"
          onClick={handleClick}
          isSelected={selected === "/pagetwo"}
          dataListItem="/pagetwo"
        />
        <ListItem
          href="/pagethree"
          icon={<IoChatbubbleOutline />}
          text="Message"
          onClick={handleClick}
          isSelected={selected === "/pagethree"}
          dataListItem="/pagethree"
        />
        <ListItem
          href="/pagefour"
          icon={<IoCameraOutline />}
          text="Photos"
          onClick={handleClick}
          isSelected={selected === "/pagefour"}
          dataListItem="/pagefour"
        />
        <ListItem
          href="/pagefive"
          icon={<IoSettingsOutline />}
          text="Settings"
          onClick={handleClick}
          isSelected={selected === "/pagefive"}
          dataListItem="/pagefive"
        />
        <div className={styles.indicator}></div>
      </ul>
    </div>
  );
};

export default Navigation;
