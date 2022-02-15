import React from 'react'
import { Button, styled } from '@material-ui/core';
import '../scss/Button.scss'

export default function button() {
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 14,
        padding: '6px 12px',
        border: '1px solid',
        backgroundColor: '#f6e199',
        borderColor: 'black',
        fontFamily: [
          'sans-serif',
        ],
        '&:hover': {
          backgroundColor: 'black',
          borderColor: 'black',
          boxShadow: 'none',
          color:'#f6e199',
        },
      });
      
  return (
      <div className='button-wrap'>
        <BootstrapButton>Custom Button 🍋</BootstrapButton>
        <Button variant="contained">Button2</Button>
        <Button variant="outlined">Button3</Button>
      </div>
  )
}
