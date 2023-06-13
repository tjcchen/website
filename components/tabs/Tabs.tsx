import React, { useEffect } from "react";

export interface TabData {
  header: string[];
  body: string[];
}

const Tabs = ({
  data,
  onTabClick,
}: {
  data: TabData;
  onTabClick: () => void;
}) => {
  useEffect(() => {
    console.log(data);
  }, []);

  return <div onClick={onTabClick}>Tabs</div>;
};

export default Tabs;
