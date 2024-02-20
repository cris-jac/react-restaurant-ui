import { createTheme } from "@mui/material";

const theme = (paletteType: any) => createTheme({
    palette: {
        mode: paletteType,
        primary: {
            light: (paletteType === 'light') ? '#058B8B' : '#8ac0bf',
            main: (paletteType === 'light') ? '#076761' : 'rgba(193, 214, 213, 0.3)',
            // main: (paletteType === 'light') ? '#076761' : '#64A7A5',
            dark: (paletteType === 'light') ? '#075B55' : '#4f9592',
            contrastText: (paletteType === 'light') ? '#fff' : '#000',
        },
        secondary: {
            light: (paletteType === 'light') ? '#c8d9a5' : '#ecf2e1',
            main: (paletteType === 'light') ? '#A2BF69' : '#D1DFB4',
            dark: (paletteType === 'light') ? '#84a549' : '#94b459',
            contrastText: (paletteType === 'light') ? '#000' : '#000',
        },
        info: {
            light: (paletteType === 'light') ? '#737373' : '#b2b2b2',
            main: (paletteType === 'light') ? '#5f5f5f' : '#878787',
            dark: (paletteType === 'light') ? '#474747' : '#727272',
            contrastText: (paletteType === 'light') ? '#000' : '#000',
        },
        background: {
          default: (paletteType === 'light') ? '#fafdf4' : '#272824',

        },
        text: {
            primary: (paletteType === 'light') ? '#075B55' : '#85b5b2',
            // secondary: (paletteType === 'light') ? '#84a549' : '#D1DFB4',
            secondary: (paletteType === 'light') ? '#474747' : '#b2b2b2'
        },
        divider: (paletteType === 'light') ? '#D1DFB4' : '#ecf2e1',
        
    },
    typography: {
        fontFamily: 'Piazzolla, sans-serif'
    }
});

export default theme;

// const theme2 = (paletteType: any) => createTheme({
//     palette: {
//       mode: paletteType,
//       // primary: {
//       //   light: (paletteType === 'light') ? '#3df4eb' : '#3df4eb',
//       //   main: (paletteType === 'light') ? '#0df2e7' : '#0df2e7',
//       //   dark: (paletteType === 'light') ? '#09a9a1' : '#09a9a1',
//       //   contrastText: (paletteType === 'light') ? '#fff' : '#fff',
//       // },
//       primary: {
//         light: (paletteType === 'light') ? '#3df4eb' : '#3df4eb',
//         main: (paletteType === 'light') ? '#90b9e0' : '#1f496f',
//         dark: (paletteType === 'light') ? '#09a9a1' : '#09a9a1',
//         contrastText: (paletteType === 'light') ? '#fff' : '#fff',
//       },
//       secondary: {
//         light: (paletteType === 'light') ? '#a6c7e6' : '#4b6d8b',
//         main: (paletteType === 'light') ? '#90bae0' : '#1f496f',
//         dark: (paletteType === 'light') ? '#64829c' : '#15334d',
//         contrastText: (paletteType === 'light') ? '#000' : '#000',
//       },
//       info: {
//         light: (paletteType === 'light') ? '#a6c7e6' : '#4b6d8b',
//         main: (paletteType === 'light') ? '#90bae0' : '#1f496f',
//         dark: (paletteType === 'light') ? '#64829c' : '#15334d',
//         contrastText: (paletteType === 'light') ? '#000' : '#000',
//       },
//       background: {
//         default: (paletteType === 'light') ? '#fbfefd' : '#010403',
//       },
//       text: {
//         primary: (paletteType === 'light') ? '#257B75' : '#e4f7f7',
//         secondary:
//       }
//     //   ,success:{}
//     },
//     // spacing: ["0", "4px", "8px", "16px", "32px", "64px"],
//   });
