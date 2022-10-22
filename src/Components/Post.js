import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "../Assets/Styles/Post.css";
import {
    ChatBubbleOutline,
    FavoriteBorderOutlined,
    Repeat,
    Share,
    VerifiedUser,
} from "@mui/icons-material";

// setup react-flip-move using forwardRef
const Post = forwardRef(
    ({ displayName, username, verified, text, image, avatar }, ref) => {
        return (
            <div className="post" ref={ref}>
                <div className="post__avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                {displayName}
                                {""}
                                <span className="post__headerSpecial">
                                    {verified && (
                                        <VerifiedUser className="post__badge" />
                                    )}
                                    @{username}
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>

                    <img src={image} />
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
);

export default Post;
