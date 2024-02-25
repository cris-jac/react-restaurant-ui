import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import React, { useState } from "react";
import { useRegisterUserMutation } from "../api/userAuthApi";
import ApiResponseModel from "../interfaces/ApiResponseModel";
import { NavLink, useNavigate } from "react-router-dom";
import useStyledToast from "../helpers/useStyledToast";
import { SD_Roles } from "../utility/SD";

const Register = () => {
    // style
    const { palette, breakpoints } = useTheme();
    const isSmScreen = useMediaQuery(breakpoints.down("sm"));

    // hooks
    const navigate = useNavigate();
    const toastNotify = useStyledToast();

    // get set credentials
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState("");

    // Declare api mutation - register
    const [registerUser] = useRegisterUserMutation();

    // handle checkbox changes
    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsAdmin(e.target.checked);
    };

    //
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Api register
      const response: ApiResponseModel = await registerUser({
        username: username,
        name: name,
        email: email,
        password: password,
        role: isAdmin ? SD_Roles.ADMIN : SD_Roles.CUSTOMER
      });

      if (response.data) {
        // notify and redirect
        toastNotify("Great! you are registered. Please log in");
        navigate("/login");
      } else if (response.error) {
        // Catch error
        setError(response.error.data.errorMessages[0]);
        console.log(error);
        toastNotify(error, "error");
      }
    }



  return (
    <Box maxWidth="md" paddingX={4} margin="auto" position="relative">
        <form 
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 'auto',
          width: isSmScreen ? "100%": "400px",
          padding: '32px',
          borderTop: '2px solid',
          borderBottom: '2px solid',
          borderColor: palette.text.secondary,
          borderRadius: '1px',
          backgroundColor: 'rgba(0,0,0,0.05)',
          position: "relative"
        }}
        >
          <Typography 
          variant="h3" 
          // marginBottom={2}
          gutterBottom
          >
            Crear cuenta
          </Typography>
            <TextField 
              label="Email"
              variant="standard"
              size="small"
              margin="normal"
              focused
              sx={{
                  color: palette.secondary.contrastText,
                }}
              value={email}
              type="text"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <TextField
              label="Name"
              variant="standard"
              size="small"
              margin="normal"
              // focused
              fullWidth
              focused
              sx={{
                  color: palette.secondary.contrastText,
                }}
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label="Username"
              variant="standard"
              size="small"
              margin="normal"
              // focused
              fullWidth
              focused
              sx={{
                  color: palette.secondary.contrastText,
                }}
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              label="Password"
              variant="standard"
              size="small"
              margin="normal"
              // focused
              fullWidth
              focused
              sx={{
                  color: palette.secondary.contrastText,
                }}
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box width="100%" marginTop={2}>
              <FormControlLabel
                // value={""}
                sx={{
                  color: palette.secondary.contrastText
                }}
                control={
                  <Checkbox
                    checked={isAdmin}
                    onChange={handleCheckbox}
                    sx={{
                      color: palette.secondary.contrastText
                    }}
                  />
                }
                label="Admin"
                labelPlacement="end"
              />
            </Box>

            <Button
              sx={{
                border: "2px solid",
                borderRadius: '1px',
                marginTop: 3,
                paddingX: 3,
                borderColor: palette.text.secondary,
                color: palette.text.secondary,
                bgcolor: palette.info.light,
                ":hover": {
                  color: palette.info.light,
                  bgcolor: palette.text.secondary,
                }
              }}
              type="submit"
            >
              Registrarse
            </Button>

            <Box
            width="100%"
          >
            <Typography variant="body2" sx={{ 
              textDecoration: "none",
              position: "relative",
              color: palette.primary.contrastText,
              bottom: "-16px",
              textAlign: "right"
            }} 
            >Ya tenes cuenta? &nbsp;
              <NavLink to={"/login"} style={{ textDecoration: "none", color: palette.text.primary }}>
                Ingresa
              </NavLink>
            </Typography>
          </Box>
        </form>
      </Box>
  )
}

export default Register