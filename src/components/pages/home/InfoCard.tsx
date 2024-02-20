import { useMediaQuery, Container, Card, CardMedia, Box, CardContent, Typography, useTheme } from '@mui/material';
import image from "../../../../public/images/dan-meyers-0AgtPoAARtE-unsplash_1_11zon.jpg"

const InfoCard = () => {
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const localTheme = {
      container: {
        border: "1px solid rgba(0,0,0)",    // Remove prop
      },
      card: {
        display: "flex",
        borderRadius: "0px",
        position: "relative",
        bgcolor: "rgba(0, 0, 0, 0)",
        border: "none",
        boxShadow: "none",
        maxWidth: "100%",
        padding: "20px",
        flexDirection: isSmScreen ? 'column' : 'row',
        justifyItems: 'center',
        alignItems: isSmScreen ? 'center' : 'flex-start',
      },
      cardMedia: {
        borderRadius: "0px",
        width: "300px",
      },
      box: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
      },
      cardContent: {
        position: "relative",
      },
      title: {
        position: "relative",
        paddingBottom: "30px",
        color: "black",
        zIndex: "0",
        ":after": {
          content: '""',
          position: "absolute",
          width: "120px",
          height: "20px",
          bgcolor: "#C2D6D0",
          top: "15px",
          left: "15px",
          zIndex: "-1",
        },
      },
      paragraph: {
        bgcolor: "#C2D6D0",
        padding: "4px 20px 4px 20px",
        color: "black",
      }
    };
  
    return (
      <Container
        maxWidth="md"
        sx={
          localTheme.container
        }
      >
        <Card
          sx={
            localTheme.card
          }
        >
          <CardMedia
            component="img"
            image={image}
            height="300"
            sx={localTheme.cardMedia}
          />
          <Box
            sx={localTheme.box}
          >
            <CardContent
              sx={
                localTheme.cardContent
              }
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={
                  localTheme.title
                }
              >
                This product
              </Typography>
  
              <Typography
                variant="body2"
                sx={localTheme.paragraph}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                itaque asperiores officia? Ad sunt possimus quam dignissimos
                adipisci odio neque repellendus! Eum officia laudantium assumenda
                recusandae illo ab, vero facilis.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Container>
    );
}

export default InfoCard