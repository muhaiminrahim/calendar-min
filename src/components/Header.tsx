import React from 'react';
import { AppBar,Button,Toolbar, Typography  } from '@mui/material';
import data from '../utils/headerData.json'

type HeaderProps = {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onLoginClick: () => void;
};

function Header({ onHomeClick, onAboutClick, onLoginClick }: HeaderProps){
    const listButton: JSX.Element[] = []
    for (let index = 0; index < data.length; index++) {
        listButton.push(<Button sx={{color: 'white'}} size='large'>{data[index].name}</Button>)
    }
    
    const toolBar = () => {
        return (
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Calendar-Min
                </Typography>
                {listButton}
            </Toolbar>
        )
    }
    return (
        <AppBar>{toolBar()}</AppBar>
    );
};

export default Header;