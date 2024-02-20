import { Container, Grid, Typography, Divider, List, ListItem, ListItemText, ButtonGroup, Button, useTheme } from "@mui/material";
// import theme from "../../theme";

const Footer = () => {
  // const classes = useStyles();
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const primaryText = theme.palette.primary.contrastText;

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      backgroundColor: primaryColor,
      color: primaryText,
      width: '100%',
      boxShadow: '4px 4px 4px 4px rgba(0,0,0,0.2)'
    }}>
      <Container maxWidth="sm">
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Company Name
            </Typography>
            <Typography variant="body1" component="p">
              123 Main Street, Anytown USA 12345
            </Typography>
            <Typography variant="body1" component="p">
              Phone: (123) 456-7890 | Email: info@company.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Divider light />
            <List component="nav">
              <ListItem button>
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contact Us" />
              </ListItem>
            </List>
          </Grid>


        </Grid> */}
        <Container sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center' 
        }}>
          <Typography>Logo</Typography>
          <List sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'center'
          }}>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </List>
        </Container>
        <Divider/>
        <Container sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center'
        }}>
          <Typography>All rights reserved</Typography>
          <ButtonGroup sx={{ display: 'flex', flexDirection: 'row' }}>
            <Button>1</Button>
            <Button>2</Button>
          </ButtonGroup>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
