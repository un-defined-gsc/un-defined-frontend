"use client";

import { ThemeProvider, createTheme } from '@mui/material'
import { theme as defaultTheme } from "@/configs/theme";
import { trTR } from '@mui/material/locale'

import overrides from "@/theme/overrides";
import typography from "@/theme/typography";

const ThemeComponent = ({ children }) => {

    const theme = createTheme(
        defaultTheme,
        {
            components: { ...overrides(defaultTheme) },
            typography: { ...typography(defaultTheme) }
        },
        trTR
    )

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeComponent