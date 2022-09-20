import { Button, ButtonBase, Paper, Typography } from "@mui/material";
import React, { FC, useCallback } from "react";
import cs from "classnames";
import useTagCardStyle from "./useStyle";

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
  const styles = useTagCardStyle();

  const handleClick = useCallback(() => {
    onSelect(tagId);
  }, [tagId]);

  return (
    <ButtonBase onClick={handleClick}>
      <Paper className={cs(styles.root)} elevation={3}>
        <img className={cs(styles.image)} src={tagImageSrc} />

        <div className={cs(styles.footer, selected && styles.footerSelected)}>
          <Typography className={cs(styles.name)}>{tagName}</Typography>

          {selected && (
            <img className={cs(styles.addIcon)} src="/icons/close.png" />
          )}

          {!selected && (
            <img className={cs(styles.addIcon)} src="/icons/plus.png" />
          )}
        </div>
      </Paper>
    </ButtonBase>
  );
};

export default React.memo(TagCard);
