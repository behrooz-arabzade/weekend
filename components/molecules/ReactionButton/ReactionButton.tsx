import React, { useState, MouseEvent, ReactNode, FC } from "react";
import { Button, Popover } from "@mui/material";

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
  onReactionSelecte: (reactionId: number) => void;
  selectedItemId: number;
}

const ReactionButton: FC<IReactionButton> = ({
  items,
  onReactionSelecte,
  selectedItemId,
}) => {
  const { classes, cx } = useReactionButton();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [openReaction, setOpenReaction] = useState<boolean>(false);

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenReaction(true);
  };

  const selectHandler = (id: number) => () => {
    onReactionSelecte(id);
  };

  const closeHandler = () => {
    setAnchorEl(null);
    setOpenReaction(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        color={openReaction ? "warning" : "inherit"}
        className={cx(classes.root)}
        aria-describedby={id}
        onClick={clickHandler}
      >
        <Like />
      </Button>
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
                color={selectedItemId === item.id ? "warning" : "inherit"}
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
