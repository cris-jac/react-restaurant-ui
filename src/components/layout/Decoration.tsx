import { Box, Typography } from "@mui/material"

const Decoration = () => {
  return (
    // <Box 
    //     sx={{ 
    //       width: '50px',
    //       height: '50px',
    //       bgcolor: '#C2D6D0',
    //       position: 'absolute',
    //       top: '50%',
    //       left: '50%',
    //       zIndex: 0,
    //       transform: 'translate(-50%, -50%)',
    //       ":before": {
    //         content: '""',
    //         display: 'block',
    //         width: '50%',
    //         height: '50%',
    //         bgcolor: 'secondary.main',
    //         position: 'relative',
    //         top: '50%',
    //         left: '50%',
    //         transform: 'translate(50%, 50%)',
    //         zIndex: -1
    //       }

    //     }}
    //   />

    <Typography sx={{
        position: 'absolute',
        
        ":before": {
            content: '""',
            display: 'block',
            width: '50%',
            height: '50%',
            bgcolor: 'secondary.main',
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(50%, 50%)',
            zIndex: -1
          }


    }}>
        This is a test
    </Typography>
  )
}

export default Decoration