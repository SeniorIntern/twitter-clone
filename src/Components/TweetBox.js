import { Avatar, Button } from "@mui/material";
import React from "react";
import "../Assets/Styles/TweetBox.css";
import avatarImg from "../Assets/Images/avatar.png";

export default function TweetBox() {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src={avatarImg} />
                    {/* <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" /> */}
                    {/* <img src={avatarImg} alt="person image" /> */}
                    <input type="text" placeholder="What's Happening?" />
                </div>
                <input
                    className="tweetBox__imageInput"
                    type="text"
                    placeholder="Optional: Enter image url"
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}
