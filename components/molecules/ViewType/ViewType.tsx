import React, { useState, useRef, ReactNode, FC } from "react";
import {
  Card,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Popper,
  Button,
  ButtonGroup,
  Grow,
} from "@mui/material";

//icon

interface IType {
  name: string;
  icon: ReactNode;
}
//InterFace
interface IViewType {
  items: Array<IType>;
  selectedTypeName: string;
  onViewTypeClicked: (viewName: string) => void;
}

const ViewType: FC<IViewType> = ({
  items,
  selectedTypeName,
  onViewTypeClicked,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    onViewTypeClicked(items[index].name);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  return (
    <Card>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
          color="inherit"
        >
          {items.find((i) => i.name === selectedTypeName)?.icon}
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {items.map((item, index) => (
                    <MenuItem
                      key={item.name}
                      selected={item.name === selectedTypeName}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {item.icon}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Card>
  );
};

export default ViewType;
