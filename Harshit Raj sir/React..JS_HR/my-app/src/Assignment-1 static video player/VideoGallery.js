import React from "react";

const  YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps(){
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLFsfg2xP7cbKQaXpO69E1-RBU3-5av05G&maxResults=20&key=AIzaSyBBwbT6zRmvW9f2mkqGaU45j67G6-WlEOs`);
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}
const VideoGallery = ({ data }) => {
    console.log('data', data);
    return (
        <div>VideoGallery</div>
    );
}

export default VideoGallery;