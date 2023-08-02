import VideoGallery from "./VideoGallery";
function App() {
  const videos = [

    {
   
     id: 1,
   
     title: "Example Video 1",
   
     thumbnailUrl: "https://example.com/thumbnail1.jpg",
   
     likes: 1500,
   
     views: 25000,
   
     channelName: "Sample Channel 1",
   
     channelLogoUrl: "https://example.com/channel1_logo.jpg",
   
    },
   
    {
   
     id: 2,
   
     title: "Example Video 2",
   
     thumbnailUrl: "https://example.com/thumbnail2.jpg",
   
     likes: 1200,
   
     views: 18000,
   
     channelName: "Sample Channel 2",
   
     channelLogoUrl: "https://example.com/channel2_logo.jpg",
   
    },
    {
   
     id: 3,
   
     title: "Example Video 3",
   
     thumbnailUrl: "https://example.com/thumbnail3.jpg",
   
     likes: 1300,
   
     views: 18000,
   
     channelName: "Sample Channel 3",
   
     channelLogoUrl: "https://example.com/channel3_logo.jpg",
   
    },
    {
   
     id: 4,
   
     title: "Example Video 4",
   
     thumbnailUrl: "https://example.com/thumbnail4.jpg",
   
     likes: 1400,
   
     views: 18000,
   
     channelName: "Sample Channel 4",
   
     channelLogoUrl: "https://example.com/channel4_logo.jpg",
   
    },
    {
   
     id: 5,
   
     title: "Example Video 5",
   
     thumbnailUrl: "https://example.com/thumbnail5.jpg",
   
     likes: 1500,
   
     views: 18000,
   
     channelName: "Sample Channel 5",
   
     channelLogoUrl: "https://example.com/channel5_logo.jpg",
   
    },
    {
   
     id: 6,
   
     title: "Example Video 6",
   
     thumbnailUrl: "https://example.com/thumbnail6.jpg",
   
     likes: 1600,
   
     views: 18000,
   
     channelName: "Sample Channel 6",
   
     channelLogoUrl: "https://example.com/channel6_logo.jpg",
   
    },
    {
   
     id: 7,
   
     title: "Example Video 7",
   
     thumbnailUrl: "https://example.com/thumbnail7.jpg",
   
     likes: 1700,
   
     views: 18000,
   
     channelName: "Sample Channel 7",
   
     channelLogoUrl: "https://example.com/channel7_logo.jpg",
   
    },
    {
   
     id: 8,
   
     title: "Example Video 8",
   
     thumbnailUrl: "https://example.com/thumbnail8.jpg",
   
     likes: 1800,
   
     views: 18000,
   
     channelName: "Sample Channel 8",
   
     channelLogoUrl: "https://example.com/channel8_logo.jpg",
   
    },
    {
   
     id: 9,
   
     title: "Example Video 9",
   
     thumbnailUrl: "https://example.com/thumbnail9.jpg",
   
     likes: 1900,
   
     views: 18000,
   
     channelName: "Sample Channel 9",
   
     channelLogoUrl: "https://example.com/channel9_logo.jpg",
   
    },
    {
   
     id: 10,
   
     title: "Example Video 10",
   
     thumbnailUrl: "https://example.com/thumbnail10.jpg",
   
     likes: 10000,
   
     views: 18000,
   
     channelName: "Sample Channel 10",
   
     channelLogoUrl: "https://example.com/channel10_logo.jpg",
   
    }
   ];
   
   
  return (
    <div>
      <VideoGallery />
    </div>
  );
}

export default App;
