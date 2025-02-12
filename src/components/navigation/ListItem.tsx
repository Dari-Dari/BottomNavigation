import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./navigation.module.scss";

type ListItemProps = {
  href: string;
  icon: ReactNode;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (arg: any) => void;
  isSelected: boolean;
  dataListItem: string; // Новый проп для пути
};

const ListItem = ({
  href,
  icon,
  text,
  onClick,
  isSelected,
  dataListItem,
}: ListItemProps) => {
  return (
    <li
      className={`${styles.list} ${isSelected ? styles.active : ""}`}
      data-list-item={dataListItem} // Используем dataListItem
      onClick={onClick}
    >
      <Link href={href} legacyBehavior>
        <a>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.text}>{text}</span>
        </a>
      </Link>
    </li>
  );
};

export default ListItem;
