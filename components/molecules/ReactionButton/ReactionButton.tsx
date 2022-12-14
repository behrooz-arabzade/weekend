import React, { useState, MouseEvent, ReactNode, FC } from "react";
import { Button, Popover, IconButton } from "@mui/material";

//Icon
import Like from "components/molecules/ReactionButton/Like";

//Css(Style Sheet)
import useReactionButton from "./useStyle";

//InterFace
interface IReactionButton {
  items: Array<{
    id: number;
    icon: ReactNode;
  }>;
  onReactionSelected?: (reactionId: number) => void;
  selectedItemId: number;
}

const ReactionButton: FC<IReactionButton> = ({
  items,
  onReactionSelected,
  selectedItemId,
}) => {
  const { classes, cx } = useReactionButton();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [openReaction, setOpenReaction] = useState<boolean>(false);

  const [selectedItemIdState, setSelectedItemIdState] = useState<number>(selectedItemId);

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenReaction(true);
  };

  const selectHandler = (id: number) => () => {
    // TODO handle reaction api here
    setSelectedItemIdState(id);
    onReactionSelected && onReactionSelected(id);
  };

  const closeHandler = () => {
    setAnchorEl(null);
    setOpenReaction(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton
        color={openReaction ? "warning" : "inherit"}
        className={cx(classes.root)}
        aria-describedby={id}
        onClick={clickHandler}
      >
        <Like />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closeHandler}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <div className={cx(classes.listIcons)}>
          {items.map((item) => {
            return (
              <Button
                key={item.id}
                onClick={selectHandler(item.id)}
                color={selectedItemIdState === item.id ? "warning" : "inherit"}
              >
                {item.icon}
              </Button>
            );
          })}
        </div>
      </Popover>
    </>
  );
};

export default ReactionButton;
