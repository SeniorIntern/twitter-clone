import { Avatar } from "@mui/material";
import React from "react";
import "../Assets/Styles/Post.css";
import avatarImg from "../Assets/Images/avatar.png";
import {
    ChatBubbleOutline,
    FavoriteBorderOutlined,
    Repeat,
    Share,
    VerifiedUser,
} from "@mui/icons-material";

export default function Post() {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatarImg} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Nikhil Thapa{""}
                            <div className="post__headerSpecial">
                                <span>
                                    <VerifiedUser className="post__badge" />
                                </span>
                            </div>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Aeyyy! Twitter clone looks clean :D</p>
                    </div>
                </div>
                <img
                    src="https://media.giphy.com/media/nNOvniJd8KjNC/giphy.gif"
                    alt="happy dog"
                />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorderOutlined fontSize="small" />
                    <Share fontSize="small" />
                </div>
            </div>
        </div>
    );
}
