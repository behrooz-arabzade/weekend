import React, { FC, useCallback } from "react";
import useTagCardStyle from "./useStyle";
import { ButtonBase, Paper, Typography } from "@mui/material";

interface ITagCardProps {
  tagName: string;
  tagId: number;
  tagImageSrc: string;
  selected?: boolean;
  onSelect: (tagId: number) => void;
}

const TagCard: FC<ITagCardProps> = ({
  tagName,
  tagId,
  tagImageSrc,
  selected,
  onSelect,
}) => {
  const { classes, cx } = useTagCardStyle();

  const handleClick = useCallback(() => {
    onSelect(tagId);
  }, [tagId]);

  return (
    <ButtonBase onClick={handleClick}>
      <Paper className={cx(classes.root)} elevation={3}>
        <img className={cx(classes.image)} src={tagImageSrc} />

        <div className={cx(classes.footer, selected && classes.footerSelected)}>
          <Typography className={cx(classes.name)}>{tagName}</Typography>

          {selected && (
            <img className={cx(classes.addIcon)} src="/icons/close.png" />
          )}

          {!selected && (
            <img className={cx(classes.addIcon)} src="/icons/plus.png" />
          )}
        </div>
      </Paper>
    </ButtonBase>
  );
};

export default React.memo(TagCard);
