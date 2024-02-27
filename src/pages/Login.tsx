import { useState } from "react"
import { useLoginUserMutation } from "../api/userAuthApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import ApiResponseModel from "../interfaces/ApiResponseModel";
import UserModel from "../interfaces/UserModel";
import { jwtDecode } from "jwt-decode";
import { setLoggedInUser } from "../storage/redux/userAuthSlice";
import useStyledToast from "../helpers/useStyledToast";

const Login = () => {

  // style
  const { palette, breakpoints } = useTheme();
  const isSmScreen = useMediaQuery(breakpoints.down("sm"));

  // get set error
  const [error, setError] = useState("");

  // Api Mutation login
  const [loginUser] = useLoginUserMutation();
  // get set credentials
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toastNotify = useStyledToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Api log in 
    const response: ApiResponseModel = await loginUser({
      email: email,
      password: password
    });
    // Check response
    if (response.data) {
      // Destructure token from data response
      const { token } = response.data.result;

      // destructure data from decoded token
      const { id, fullName, email, role }: UserModel = jwtDecode(token);

      // set the token to the local storage
      localStorage.setItem("token", token)

      // State set
      dispatch(setLoggedInUser({
        id, fullName, email, role
      }))

      // redirect
      navigate("/");

    } else if (response.error) {
      // Catch error
      const errorMessages = response.error.data.errorMessages;
      // setError(response.error.data.errorMessages[0]);
      setError(errorMessages[0]);
      // console.log(errorMessages);
      // console.log(errorMessages[0])
      toastNotify(error, "error");
    }
  }

  return (
      <Box maxWidth="md" paddingX={4} margin="auto" sx={{ position: "relative" }}>
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
          // backgroundColor: palette.primary.main,
          backgroundColor: "rgba(0,0,0,0.05)",
          position: "relative"
        }}
        >
          <Typography 
          variant="h3" 
          color={palette.primary.contrastText}
          gutterBottom
          >
            Iniciar sesion
          </Typography>
            <TextField 
              label="Email"
              variant="standard"
              size="small"
              margin="normal"
              focused
              // color="primary"
              value={email}
              type="text"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              sx={{
              //   borderColor: 'skyblue',
              //   // borderRadius: '1px',
                color: palette.primary.contrastText,
              //   // margin: 4
              }}
            />
            
            <TextField
              label="Password"
              variant="standard"
              size="small"
              margin="normal"
              fullWidth
              // color={palette.secondary.contrastText}
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              focused
              sx={{
                  color: palette.primary.contrastText,
                }}
            />

            <Button
              sx={{
                border: "2px solid",
                borderRadius: '1px',
                marginTop: 3,
                paddingX: 3,
                borderColor: palette.text.secondary,
                color: palette.text.secondary,
                bgcolor: palette.info.light,
                // bgcolor: palette.primary.contrastText,
                ":hover": {
                  color: palette.info.light,
                  bgcolor: palette.text.secondary,
                }
              }}
              type="submit"
            >
              Ingresar
            </Button>
          

          <Box
            width="100%"
          >
            <Typography variant="body2" sx={{ 
              textDecoration: "none",
              position: "relative",
              // marginTop: "16px",
              bottom: "-16px",
              textAlign: "right",
              color: palette.primary.contrastText
            }} 
            >No tenes cuenta? &nbsp;
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                Registrate
              </Link>
            </Typography>
          </Box>
        </form>

      </Box>
  )
}

export default Login