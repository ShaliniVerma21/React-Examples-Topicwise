import React, { useState } from 'react';
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import './LikeDislikeComp.css'; // Importing CSS for styling

export default function LikeDislikeComp() {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const handleLike = () => {
        if (liked) {
            // If already liked, remove like
            setLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            // If not liked, add like
            setLiked(true);
            setLikeCount(likeCount + 1);
        }
    };

    const handleDislike = () => {
        if (disliked) {
            // If already disliked, remove dislike
            setDisliked(false);
            setDislikeCount(dislikeCount - 1);
        } else {
            // If not disliked, add dislike
            setDisliked(true);
            setDislikeCount(dislikeCount + 1);
        }
    };

    return (
        <div className="like-dislike-container">
            <div className="like-button" onClick={handleLike}>
                {liked ? (
                    <AiFillLike color="blue" size="500" />
                ) : (
                    <AiOutlineLike color="blue" size="500" />
                )}
                <span className="count">{likeCount}</span>
            </div>
            <div className="dislike-button" onClick={handleDislike}>
                {disliked ? (
                    <AiFillDislike color="red" size="500" />
                ) : (
                    <AiOutlineDislike color="red" size="500" />
                )}
                <span className="count">{dislikeCount}</span>
            </div>
        </div>
    );
}