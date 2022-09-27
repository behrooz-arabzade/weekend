import React from 'react'
import { Typography } from '@mui/material';


//Css(Style Sheet)
import useMainNavigationStyle from './useStyle';



const Create = () => {

    const { classes, cx } = useMainNavigationStyle();

    return (
        <Typography fontWeight="bold">
            W<span className={cx(classes.spanLogo)}>E</span>
        </Typography>
    )
}

export default Create;