import React, { FC, ChangeEvent } from "react";

import { TextField } from "@mui/material";

//Style(JSS)
import useSearchBoxStyle from "./useStyle";

interface ISearch {
  title?: string;
  hint?: string;
  defaultValue?: string;
  onSearchTextChange: (searchText: string) => void;
}

const SearchBox: FC<ISearch> = ({
  title,
  hint,
  defaultValue,
  onSearchTextChange,
}) => {
  const { classes, cx } = useSearchBoxStyle();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchTextChange(event.target.value);
  };

  return (
    <TextField
      classes={classes}
      label={title}
      type="search"
      placeholder={hint}
      defaultValue={defaultValue}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
