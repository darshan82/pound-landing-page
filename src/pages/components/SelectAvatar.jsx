import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import "../../App.css";
import
{
    AvatarCreator,
} from "@readyplayerme/react-avatar-creator";

const config = {
    clearCache: true,
    bodyType: "fullbody",
    quickStart: false,
    language: "en",
};

const style = { width: "100%", height: "100vh", border: "none", margin: 0 };

function App()
{
    const handleOnUserSet = (event) =>
    {
        console.log(`User ID is: ${event.data.id}`);
    };

    const handleOnAvatarExported = (event) =>
    {
        console.log(`Avatar URL is: ${event.data.url}`);
    };

    const handleUserAuthorized = (event) =>
    {
        console.log(`User is:`, event.data);
    };

    const handleAssetUnlocked = (event) =>
    {
        console.log(`Asset unlocked is: ${event.data.assetId}`);
    };
    return (
        <Container className='form_container' style={{ height: "500px", boxShadow: "0 0 2px 0 rgba(9, 13, 20, 0.24)" }}>

            <AvatarCreator
                subdomain="demo"
                config={config}
                style={style}
                onAvatarExported={handleOnAvatarExported}
                onUserAuthorized={handleUserAuthorized}
                onAssetUnlock={handleAssetUnlocked}
                onUserSet={handleOnUserSet}
            />
        </Container>
    );
}

export default App;
