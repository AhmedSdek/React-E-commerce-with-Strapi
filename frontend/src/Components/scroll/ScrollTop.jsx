import { KeyboardArrowUp } from "@mui/icons-material"
import { Fab, Zoom, useScrollTrigger } from "@mui/material"

function ScrollTop() {
    return (
        <Zoom in={useScrollTrigger({ threshold: 100 })}>
            <Fab onClick={() => { window.scrollTo(0, 0) }} size="small" sx={{ position: 'fixed', bottom: '70px', right: '20px' }} color="primary" aria-label="add">
                <KeyboardArrowUp />
            </Fab>
        </Zoom>
    )
}

export default ScrollTop