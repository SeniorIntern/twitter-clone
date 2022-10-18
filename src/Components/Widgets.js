import { Search } from "@mui/icons-material";
import React from "react";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import "../Assets/Styles/Widgets.css";

export default function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId="1582320256004939777" />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="RONBupdates"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/officialroutineofnepalbanda"}
                    options={{
                        text: "#twitterCloneIsAwesome",
                        via: "officialroutineofnepalbanda",
                    }}
                />
            </div>
        </div>
    );
}
