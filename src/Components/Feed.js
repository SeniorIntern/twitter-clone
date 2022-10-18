import React from "react";
import "../Assets/Styles/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

export default function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post />
            <Post />
            <Post />
        </div>
    );
}
