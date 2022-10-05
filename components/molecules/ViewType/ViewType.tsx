import React,{useState, useRef, ReactNode, FC} from 'react';
import { Card, Paper, ClickAwayListener, MenuList, MenuItem, Popper, Button, ButtonGroup, Grow } from '@mui/material';



//icon
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';





//InterFace
interface IViewType {
    items:Array<{
        name:string;
        icon:ReactNode;
    }>;
    defaultType:number;
    onViewTypeClicked:(viewName: string) => void;
}

const ViewType:FC<IViewType> = ({
    items,
    defaultType,
    onViewTypeClicked

}) => {


    const [open, setOpen] = useState<boolean>(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(defaultType);

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
        onViewTypeClicked(items[selectedIndex].name)
        
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
            <ButtonGroup  variant="contained" ref={anchorRef} aria-label="split button">
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                    color="inherit"
                >
                    {items[selectedIndex].icon}
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
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {items.map((item, index) => (
                                        <MenuItem
                                            key={index}
                                            selected={index === selectedIndex}
                                            onClick={ event => handleMenuItemClick(event, index)}
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
        </Card >
    )
}

export default ViewType;