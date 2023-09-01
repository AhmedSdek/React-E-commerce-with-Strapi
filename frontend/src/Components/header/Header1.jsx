import { useContext, useState } from "react";
import { Box, Container, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import { ColorModeContext } from "../../theme";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const options = [
    'Ar',
    'En'
];
function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event,
        index
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{
            bgcolor: '#2b3445',
            borderBottomRightRadius: '5px'
        }}>
            <Container>
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography
                        sx={{
                            mr: 2,
                            p: "4px 10px",
                            bgcolor: "#D23F57",
                            borderRadius: "12px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#fff",
                        }}
                        variant="body2"
                    >
                        HOT
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "12px",
                            fontWeight: 300,
                            color: "#fff",
                        }}
                        variant="body2"
                    >
                        Free Express Shipping
                    </Typography>
                    <Box flexGrow={1}></Box>
                    <div>
                        {theme.palette.mode === "light" ? (
                            <IconButton
                                sx={{ color: 'white' }}
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                            >
                                <LightModeOutlined />
                            </IconButton>
                        ) : (
                            <IconButton
                                onClick={() => {
                                    localStorage.setItem(
                                        "mode",
                                        theme.palette.mode === "dark" ? "light" : "dark"
                                    );
                                    colorMode.toggleColorMode();
                                }}
                                color="inherit"
                            >
                                <DarkModeOutlined fontSize="small" />
                            </IconButton>
                        )}
                    </div>

                    <List
                        component="nav"
                        aria-label="Device settings"
                        sx={{ m: '0', p: '0' }}
                    >
                        <ListItem
                            sx={{ '&:hover': { cursor: 'pointer' }, p: '5px' }}
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}
                        >
                            <ListItemText
                                sx={{ '.MuiTypography-root': { fontSize: '13px', color: 'white' } }}
                                secondary={options[selectedIndex]}
                            />
                            <ExpandMore sx={{ fontSize: '15px', color: 'white' }} />
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
                                key={option}
                                selected={index === selectedIndex}
                                sx={{ fontSize: '12px', p: '3p 10px', minHeight: '10px' }}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    <TwitterIcon
                        sx={{
                            fontSize: "16px",
                            color: "#fff",
                        }}
                    />
                    <FacebookIcon
                        sx={{
                            fontSize: "16px",
                            mx: 1,
                            color: "#fff",
                        }}
                    />
                    <InstagramIcon
                        sx={{
                            fontSize: "16px",
                            color: "#fff",
                        }}
                    />
                </Stack>
            </Container>
        </Box>
    )
}

export default Header1;
