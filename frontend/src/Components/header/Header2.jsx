import { ExpandMore, ShoppingCart } from "@mui/icons-material"
import { Container, IconButton, Stack, Typography, useTheme } from "@mui/material"
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";

const Search = styled('div')(({ theme }) => ({
    flexGrow: '0.4',
    position: 'relative',
    border: '1px solid #777',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
        border: '1px solid #444',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '70%',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(3),
        width: '50%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    color: '#777',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
const options = ["All Categories", "CAR", "Clothes", "Electronics"];

function Header2() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event,
        index,
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theem = useTheme();
    return (
        <Container sx={{ my: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Stack sx={{ alignItems: 'center' }}>
                <ShoppingCart />
                <Typography variant="body2" >
                    E-Commerce
                </Typography>
            </Stack>
            <Search sx={{ borderRadius: '22px', display: 'flex', justifyContent: 'space-between' }}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <div>
                    <List
                        component="nav"
                        aria-label="Device settings"
                        // @ts-ignore
                        sx={{ bgcolor: theem.palette.myColor.main, borderTopRightRadius: '22px', borderBottomRightRadius: '22px', p: '0' }}
                    >
                        <ListItem sx={{ cursor: 'pointer' }}
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                sx={{ width: 100, textAlign: 'center', ".MuiTypography-root": { fontWeight: 'bold' } }}
                                secondary={options[selectedIndex]}
                            />
                            <ExpandMore sx={{ fontSize: '16px' }} />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                sx={{ fontSize: '13px' }}
                                key={option}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Search>
            <Stack direction={'row'} alignItems={'center'}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
                <IconButton>
                    <Person2OutlinedIcon />
                </IconButton>
            </Stack>
        </Container>
    )
}

export default Header2