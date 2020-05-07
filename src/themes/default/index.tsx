import React, { ReactNode } from "react"
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider, StylesProvider, createMuiTheme } from "@material-ui/core";
import { Normalize } from "styled-normalize"
import { Box, Grid, Container } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f00'
        }
    }
})

type Props = {
    children: ReactNode
}

const Default = ({ children }: Props) => (
    <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <Normalize />
                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box color="primary.main">Header</Box>
                        </Grid>
                        <Grid item xs={12}>{ children }</Grid>
                        <Grid item xs={12}>Footer</Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </MuiThemeProvider>
    </StylesProvider>
)

export default Default