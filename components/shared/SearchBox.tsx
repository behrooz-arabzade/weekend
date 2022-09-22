import React,{useState, FC} from 'react'
import {
    TextField
} from '@mui/material';


//Style(JSS)
import useSharedStyle from '../shared/useSharedStyle';



const SearchBox:FC = () => {
    const { classes, cx } = useSharedStyle();
    const [tagName , setTagName] =  useState<string>("")
    return (
        <div>
            <TextField
                className={cx(classes.root)}
                label="سرگرمی مورد علاقه خود را وارد کنید"
                name="search"
                value={tagName}
                onChange={e=>{setTagName(e.target.value)}}
            />
        </div>
    )
}

export default SearchBox