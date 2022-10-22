import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "../Assets/Styles/TweetBox.css";
import avatarImg from "../Assets/Images/avatar.png";
import db from "./firebase";

export default function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Nikhil Thapa",
            username: "nikTH",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src={avatarImg} />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"
                        placeholder="What's Happening?"
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    type="text"
                    placeholder="Optional: Enter image url"
                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}
