import React from 'react'
import { Box } from '@mui/material';

import MultilineTextFields from '../components/textfield'
import SelectSmall from '../components/select'

import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import '../index.css'

export default function Form2() {
    const theme = () =>
        createTheme({
          direction: 'rtl',
          
        });
      
      const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
      });

      
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme} >
        <div dir="rtl" className='wfull'>
        <Box

            component="form"
            sx={{
                width:'100%',
                display:"flex",
                justifyContent:'center',
                alignItems:'start',
                flexWrap:'wrap',
                background:'grey',
                height:"200px"

            }}
            noValidate
            autoComplete="off"
            >
                <MultilineTextFields />
                <SelectSmall />

            </Box>
        </div>
      </ThemeProvider>
    </CacheProvider>
    
  )
}





