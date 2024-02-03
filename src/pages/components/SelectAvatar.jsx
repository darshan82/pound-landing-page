import React, { useState } from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';
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

const style = { padding: 0, width: "100%", height: "100%", border: "none", margin: 0, borderRadius: "10px" };

function SelectAvatar({ onNext, state, setState })
{
    const handleOnUserSet = (event) =>
    {
        console.log(`User ID is: ${event.data.id}`);
    };

    const handleOnAvatarExported = (event) =>
    {

        const avatar3DUrl = event.data.url; // This is the 3D avatar URL
        const avatarId = avatar3DUrl.split('/').pop().split('.')[0]; // Extract the avatar ID from the URL
        const avatar2DUrl = `https://models.readyplayer.me/${avatarId}.png`;

        setState((prevState) =>
        {
            return { ...prevState, avatar: avatar2DUrl, avatar2DUrl }
        })
        onNext()

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
        <Container className='form_container' style={{ display: "flex", flexDirection: "column", height: "530px", boxShadow: "0 0 2px 0 rgba(9, 13, 20, 0.24)", padding: 0 }}>
            {/* <div style={{height:"430px"}}> */}

            <AvatarCreator
                subdomain="pound-gaming.readyplayer.me?frameApi=v1.avatar.exported"
                config={config}
                style={style}
                onAvatarExported={handleOnAvatarExported}
                onUserAuthorized={handleUserAuthorized}
                onAssetUnlock={handleAssetUnlocked}
                onUserSet={handleOnUserSet}
            />
            {/* </div> */}
            {/* <div className='py-3 px-2'>

                <Button  type='submit' className='button w-100' block  disabled={false}>
              {false ? <Spinner animation="border" size="sm" className="mr-2" /> : "Submit"}
              
            </Button>
                </div> */}
        </Container>
    );
}

export default SelectAvatar;
