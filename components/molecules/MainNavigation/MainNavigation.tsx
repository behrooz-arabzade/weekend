import React, { Component, FC } from "react";

import { useRouter } from "next/router";

import { Grid, AppBar, Button, ButtonBase } from "@mui/material";

//CSS(Style Sheet)
import useMainNavigationStyle from "./useStyle";

//InterFace
interface IMainNavigation {
  items: Array<{
    id: string;
    icon: React.ReactNode;
  }>;
  onItemSelected: (id: string) => void;
  selectedItemId: string;
}

const MainNavigation: FC<IMainNavigation> = ({
  items,
  onItemSelected,
  selectedItemId,
}) => {
  const { classes, cx } = useMainNavigationStyle();

  const onItemClicked = (id: string) => () => {
    onItemSelected(id);
  };

  return (
    <div className={cx(classes.root)}>
      {items.map((item) => {
        return (
          <ButtonBase
            className={cx(
              classes.grid,
              selectedItemId === item.id && classes.gridSelected
            )}
            key={item.id}
            onClick={onItemClicked(item.id)}
          >
            {item.icon}
          </ButtonBase>
        );
      })}
    </div>
  );
};

export default MainNavigation;
