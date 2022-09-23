import React,
{ useState, FC }
    from 'react';

import {
    Autocomplete,
    TextField
} from '@mui/material';


//Style(JSS)
import useStyle from "./useStyle";

interface ISearch {
    title: string[];
    hint?: string | null;
    defaultValue: string;
};

const SearchBox: FC<ISearch> = ({ title, hint, defaultValue }) => {
    const { classes, cx } = useStyle();

    const [userValue, setUserValue] = useState<string>(defaultValue);

    const favourite = title;

    const favouriteOptions = favourite.map((favourite, index) => ({
        id: index + 1,
        label: favourite
    }))

    const onSearchTextChange = (e: any, hint) => {
        setUserValue(hint)
    }

    return (
        <div>
            <Autocomplete
                options={favouriteOptions}
                className={cx(classes.root)}
                renderInput={params => <TextField {...params} label="plese insert your favourite" />}
                value={userValue}
                onChange={onSearchTextChange}
                freeSolo
            />
        </div>
    )
}

export default SearchBox