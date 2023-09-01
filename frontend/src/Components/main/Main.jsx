import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import '../../index.css'
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/Product";
function Main() {
    const handleAlignment = (
        event,
        newValue,
    ) => {
        setMyData(newValue)
    };
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const theme = useTheme();

    const allProductApi = "products?populate=*";
    const menProductApi = 'products?populate=*&filters[productCategory][$eq]=men';
    const womenProductApi = 'products?populate=*&filters[productCategory][$eq]=women';

    const [myData, setMyData] = useState(allProductApi);

    const { data, error, isLoading } = useGetproductByNameQuery(myData);
    // console.log(data.data);
    if (isLoading) {
        return (
            <Typography variant="h6" >
                loading ..........
            </Typography>
        )
    }
    if (data) {
        return (
            <Container sx={{ py: 9 }}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={'wrap'} gap={3}>
                    <Box>
                        <Typography variant="h6">Selected Products</Typography>
                        <Typography fontWeight={300} variant="body1">
                            All our new arrivals in a exclusive brand selection
                        </Typography>
                    </Box>
                    <ToggleButtonGroup
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                                color: "#e94560 !important",
                                backgroundColor: "initial",
                            },
                        }}
                    >
                        <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" color="error" value={allProductApi} aria-label="left aligned">
                            All Products
                        </ToggleButton>
                        <ToggleButton sx={{ mx: '15px!important', color: theme.palette.text.primary }} className="myButton" value={menProductApi} aria-label="centered">
                            MEN category
                        </ToggleButton>
                        <ToggleButton sx={{ color: theme.palette.text.primary }} className="myButton" value={womenProductApi} aria-label="right aligned">
                            Women category
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} justifyContent={'space-between'}>
                    {data.data.map((item) => {
                        return (
                            <Card key={item.id} sx={{
                                maxWidth: 333,
                                mt: 6,
                                ":hover .MuiCardMedia-root ": {
                                    rotate: "1deg",
                                    scale: "1.1",
                                    transition: "0.4s",
                                },
                            }}>
                                <CardMedia
                                    sx={{ height: 270 }}
                                    // @ts-ignore
                                    image={`${item.attributes.productimg.data[0].attributes.url}`}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"center"}
                                    >
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.attributes.productTitle}
                                        </Typography>
                                        {item.attributes.productPrice}$
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.attributes.productDes}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }}
                                        size="large">
                                        <AddShoppingCartOutlined
                                            sx={{ mr: 1 }}
                                            fontSize="small"
                                        />
                                        add to cart
                                    </Button>
                                    <Rating name="read-only" value={item.attributes.productRate} precision={0.5} readOnly />
                                </CardActions>
                            </Card>
                        )
                    })}
                </Stack>
                <Dialog sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton sx={{ position: 'absolute', top: 0, right: 10, transition: '0.6s', "&:hover": { color: 'red', rotate: '180deg', } }} onClick={(handleClose)}>
                        <Close />
                    </IconButton>
                    <ProductDetails />
                </Dialog>
            </Container >
        )
    }

}

export default Main