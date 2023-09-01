import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material"

import './productStyle.css';
function ProductDetails() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2.5,
                flexDirection: { xs: "column", sm: "row" },
            }}
        >
            <Box sx={{ display: "flex" }}>
                <img
                    width={360}
                    src='imges\1.jpg'
                    alt=""
                />
            </Box>

            <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h5">
                    Womens fashion
                </Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
                    $12.99
                </Typography>
                <Typography variant="body1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sapiente ipsa voluptates tenetur voluptatum obcaecati sint, voluptatibus quasi molestiae nobis ipsam vero, praesentium ex vel asperiores fugiat impedit dolore at!
                </Typography>

                <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    gap={1}
                    my={2}
                >
                    {['imges/1.jpg', 'imges/2.jpg'].map((item) => {
                        return (
                            <img style={{ cursor: 'pointer', borderRadius: '10px' }} key={item} src={item} width={90} alt="" />
                        )
                    })}
                </Stack>

                <Button
                    sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                    variant="contained"
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Buy now
                </Button>
            </Box>
        </Box>
    )
}

export default ProductDetails