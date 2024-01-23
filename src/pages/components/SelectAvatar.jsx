import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import "../../App.css";
import { AvatarCreator } from '@readyplayerme/react-avatar-creator';


const SelectAvatar = ({onNext}) => {
    return (
        <Container className='form_container' style={{ height: "500px", boxShadow: "0 0 2px 0 rgba(9, 13, 20, 0.24)" }}>
            <AvatarCreator style={{width:"100%" , height:'100%'}}  subdomain='https://pound-gaming-landing-page.readyplayer.me/avatar?frameApi=&id=65af404b17afdc08ee43faea'/>
            <Button onClick={onNext}>Submit</Button>
        </Container>
    );
};

export default SelectAvatar;
