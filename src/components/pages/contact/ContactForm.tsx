import { Box, Button, TextField, Typography, useTheme } from "@mui/material"
import useStyledToast from "../../../helpers/useStyledToast";
import React, { useState } from "react";

const ContactForm = () => {

 const { palette } = useTheme();
 const toastNotify = useStyledToast();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setName("");
        setEmail("");
        setMessage("");

        toastNotify("Your message was sent successfully");
    }


  return (
    <Box paddingY={2}>
        <Typography variant="subtitle2" marginY={2}>Send us a message</Typography>
        <form 
            onSubmit={handleSubmit}
            style={{
                backgroundColor: "rgba(0,0,0,0.05)",
                padding: "16px",
                borderRadius: "2px",
                display: 'flex',
                flexDirection: "column",
                width: "100%"
            }}
        >
            <TextField 
            label="Name"
            value={name}
            variant="standard"
            size="small"
            focused
            sx={{
                margin: "16px"
            }}
            onChange={(e) => setName(e.target.value)}
            />
            <TextField
            label="Email"
            value={email}
            variant="standard"
            size="small"
            focused
            sx={{
                margin: "16px"
            }}
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
            label="Message"
            value={message}
            variant="standard"
            // size="small"
            focused
            sx={{
                margin: "16px"
            }}
            multiline
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            />
            <Button
            type="submit"
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
            >Send</Button>
        </form>
    </Box>
  )
}

export default ContactForm