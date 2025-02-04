"use client";
import React from "react";
import { SplitButton } from "primereact/splitbutton";
import ButtonStyle from '../../css/SingleEvent.module.css';

const DropAction = ({ items }) => {
  // Convert links into a command function inside the client component
  const processedItems = items.map((item) => ({
    ...item,
    command: () => window.open(item.link, "_blank"),
  }));

  return (
    <SplitButton  label="ADD TO CALENDAR" icon="pi pi-plus" model={processedItems} className={ButtonStyle["calendar-button"]} />
  );
};

export default DropAction;
