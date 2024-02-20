import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Details = () => {
  const { palette } = useTheme();

  const typo = {
    padding: "0px 20px",
    borderLeft: "4px solid #85ada1",
    color: palette.primary.contrastText,
  };

  return (
    <Box maxWidth="xs" sx={{ p: "4px" }}>
      <Typography variant="h3" gutterBottom sx={typo}>
        Lorem ipsum dolor sit amet.
      </Typography>
      <Typography
        gutterBottom
        variant="h4"
        color="rgba(0,0,0,0)"
        sx={{
          padding: "0px 20px",
          bgcolor: "#85ada1",
          color: palette.background.default,
          borderLeft: "4px solid #85ada1",
        }}
      >
        $ 2333.23
      </Typography>
      <Typography gutterBottom variant="body2" sx={typo}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa porro at
        eos voluptatibus quos accusantium ducimus sunt, deleniti ad? Consequatur
        iure eaque eius nemo praesentium.
      </Typography>

      <Box
        marginBottom={1}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Typography variant="body2" sx={typo}>
          Cantidad
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "1px solid",
            borderColor: "#85ada1",
          }}
        >
          <IconButton
            sx={{
              bgcolor: "#85ADA1",
              borderRadius: "0px",
              padding: "4px",
            }}
          >
            <RemoveIcon
              sx={{
                color: palette.primary.contrastText,
              }}
            />
          </IconButton>
          <span
            style={{
              backgroundColor: palette.background.default,
              fontSize: palette.secondary.light,

              borderColor: "#85ada1",
              width: "40px",
              textAlign: "center",
              color: palette.primary.contrastText,
            }}
          >
            10
          </span>

          <IconButton
            sx={{
              bgcolor: "#85ADA1",
              borderRadius: "0px",
              padding: "4px",
            }}
          >
            <AddIcon
              sx={{
                color: palette.primary.contrastText,
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Button
        sx={{
          bgcolor: palette.primary.dark,
          border: "2px solid",
          borderColor: "#85ada1",
          color: palette.secondary.main,
          ":hover": {
            bgcolor: "#85ada1",
            color: "white",
          },
        }}
      >
        Aniadir al carro
      </Button>
    </Box>
  );
};

export default Details;
