import { useTheme } from "@mui/material";
import { TypeOptions, toast } from "react-toastify"

const useStyledToast = () => {
    const { palette, typography } = useTheme();

    const toastNotification = (message: string, type: TypeOptions = "success") => {
    
        toast(message, {
            type: type,
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                border: '2px solid',
                borderColor: palette.secondary.contrastText,
                borderRadius: '1px',
                background: palette.secondary.light,
                color: palette.secondary.contrastText,
                fontFamily: typography.button.fontFamily,
                fontSize: typography.button.fontSize,
            }
        })
    }

  return toastNotification;
}

export default useStyledToast
