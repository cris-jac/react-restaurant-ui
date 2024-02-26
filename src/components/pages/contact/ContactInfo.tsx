import { Box, Grid, Typography } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import image from "../../../assets/mihai-moisa-Djtc1T38-GY-unsplash.jpg";

const infoData = [
    { text: "Azucena Villaflor 10", icon: <LocationOnIcon/> },
    { text: "4321-1234", icon: <LocalPhoneIcon/> },
    { text: "hojas_verdes@test.com", icon: <AlternateEmailIcon/> },
    { text: "Every day: 11:30 - 16:00 hs & 18:30 - 00:00 hs", icon: <AccessTimeIcon /> }
]

const ContactInfo = () => {
  return (
    <Box  marginY={2}>
        <Typography variant="subtitle2" marginY={2}>Let's talk</Typography>

        <Grid container spacing={4}>
            <Grid item xs={12} sm={5} md={6}>
                <img
                    src={image}
                    style={{ width:"100%", objectFit: "cover", height: "300px" }}
                />
            </Grid>
            <Grid item sm={7} md={6}>
                <Box sx={
                    {

                    }
                }>
                    {infoData.map((data, index) => (
                        <Box key={index} sx={{ 
                            display: "flex", 
                            flexDirection: "row", 
                            // alignContent: "center",
                            alignItems: "center", 
                            }}>
                            {data.icon}
                            <Typography variant="body1" gutterBottom paddingX={1}>{data.text}</Typography>
                        </Box>
                    ))}
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default ContactInfo