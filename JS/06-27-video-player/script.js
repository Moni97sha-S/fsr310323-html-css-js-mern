/* We will implement the following functionalities:
    1. Render the playlist dynamically.
    2. Render the first video from the playlist automatically and dynamically.
    3. The video card click from the playlist should load the video and data in the video player section.
    4. On the video card click, the current video should get the highlighted border.
*/

//? Static Data:-
//! Thumbnail Cards side-list
const playlistData = [
    {
      "id": "1",
      "title": "Croissants | Flour and Stone",
      "thumbnail": "https://i.vimeocdn.com/video/600595198_390x220.webp"
    },
    {
      "id": "2",
      "title": "Perfect Mashed Potatoes and Gravy",
      "thumbnail": "https://i.vimeocdn.com/video/604150056_390x220.webp"
    },
    {
      "id": "3",
      "title": "The Heart of Soba",
      "thumbnail": "https://i.vimeocdn.com/video/726986673_390x220.webp"
    },
    {
      "id": "4",
      "title": "Grilled Cheese 9 Ways",
      "thumbnail": "https://i.vimeocdn.com/video/570486309_390x220.webp"
    },
    {
      "id": "5",
      "title": "Pineapple Cheesecake",
      "thumbnail": "https://i.vimeocdn.com/video/602705517_390x220.webp"
    },
    {
      "id": "6",
      "title": "Lemony Chicken Noodle Soup",
      "thumbnail": "https://i.vimeocdn.com/video/537261616_390x220.jpg"
    },
    {
      "id": "7",
      "title": "Pumpkin Roll",
      "thumbnail": "https://i.vimeocdn.com/video/608805594_590x332.jpg"
    },
    {
      "id": "8",
      "title": "How to Brine a Turkey",
      "thumbnail": "https://i.vimeocdn.com/video/601730519_590x332.jpg"
    },
    {
      "id": "9",
      "title": "Stop Motion Dry-Brined Turkey Recipe",
      "thumbnail": "https://i.vimeocdn.com/video/456852083_590x332.jpg"
    },
    {
      "id": "10",
      "title": "Butternut Squash Ravioli",
      "thumbnail": "https://i.vimeocdn.com/video/600328152_590x332.jpg"
    }
  ]

//! Main video player list
  const videoPlaySectionData = [
    {
      "id": "1",
      "title": "Croissants | Flour and Stone",
      "description": "There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.",
      "views": 22500,
      "vimeoId": 190062231,
      "isLiked": "true",
      "isSaved": "true"
    },
    {
      "id": "2",
      "title": "Perfect Mashed Potatoes and Gravy",
      "description": "Get the recipe for potatoes at http://bit.ly/mashedpotatoesandgravy.",
      "views": 22200,
      "vimeoId": 192650599,
      "isLiked": "false",
      "isSaved": "false"
    },
    {
      "id": "3",
      "title": "The Heart of Soba",
      "description": "Binge more: MOONCAKE: THE LOST ART - foodtalkies.com/mooncake THE GIFT OF MOCHI - foodtalkies.com/mochi NIRVANA - foodtalkies.com/nirvana EARTH - foodtalkies.com/earth Special thanks to: Mutsuko Soma & Tiffany Ran. Direction, Cinematography & Edit: Andrew Gooi - andrewgooi.com Seattle-based chef and soba artisan, Mutsuko Soma, of Kamonegi / kamonegiseattle.com / shares the craft behind these amazing buckwheat noodles.",
      "views": 6297820,
      "vimeoId": 192834629,
      "isLiked": "false",
      "isSaved": "true"
    },
    {
      "id": "4",
      "title": "Grilled Cheese 9 Ways",
      "description": "The best grilled cheese sandwich recipes clubbed into one video. Cheers!!",
      "views": 38600,
      "vimeoId": 166409731,
      "isLiked": "false",
      "isSaved": "true"
    },
    {
      "id": "5",
      "title": "Pineapple Cheesecake",
      "description": "Pineapple Cheesecake: 150g butter snap cookies; 90g butter, melted; 2 packs cream cheese, room temperature; 3/4 cup sugar; 1/2 tsp vanilla extract; 4 eggs; 4 slices canned pineapple (drained first); Preheat oven at 320°F. Lightly grease mini muffin pans with melted butter, then line each recess with strips of wax paper (1in wide x 3in long), crossing at base. Pulse cookies in a food processor until finely crumbled, then add melted butter to combine. Divide mixture into muffin pans and press firmly into bases. Prepare filling by mixing cream cheese, sugar and vanilla extract with an electric mixer. Add eggs, one at a time, beating well after each addition. Pulse sliced pineapple in a food processor into pulp and add to cream cheese mixture. Divide filling into muffin pans and bake 25-30 minutes until just firm. Cool slightly, then chill for at least 2 hours. Serving suggestion: Pipe some whipped cream over the cheesecake and top with a small slice of pineapple that's been dipped in Li-hing powder. Garnish with mint leaves.",
      "views": 998110,
      "vimeoId": 191626548,
      "isLiked": true,
      "isSaved": true
    },
    {
      "id": "6",
      "title": "Lemony Chicken Noodle Soup",
      "description": "blog.moonberry.com/recipe-lemony-chicken-noodle-soup/",
      "views": 30210,
      "vimeoId": 140657270,
      "isLiked": true,
      "isSaved": true
    },
    {
      "id": "7",
      "title": "Pumpkin cream cheese swiss roll",
      "description": "The ultimate Pumpkin cream cheese swiss roll recipe. Really simple to follow.",
      "views": 19829,
      "vimeoId": 196351090,
      "isLiked": true,
      "isSaved": true
    },
    {
      "id": "8",
      "title": "How to Brine a Turkey",
      "description": "Get the recipe at http://bit.ly/tbrine.",
      "views": 12230,
      "vimeoId": 190907060,
      "isLiked": true,
      "isSaved": true
    },
    {
      "id": "9",
      "title": "Stop Motion Dry-Brined Turkey Recipe",
      "description": "This is a short stop motion video of a recipe I created for a turkey cook-off(wine pairing towards the end). With a special thanks to City Winery Chicago. *Background song - 'Go Bang' by SBTRKT",
      "views": 30010,
      "vimeoId": 80687436,
      "isLiked": true,
      "isSaved": true
    },
    {
      "id": "10",
      "title": "Butternut Squash Ravioli with Brown Butter Sage Sauce",
      "description": "Get the recipe at http://bit.ly/ButternutRav.",
      "views": 851029,
      "vimeoId": 189860660,
      "isLiked": true,
      "isSaved": true
    }
  ]
//* Static Data Over

//! JS code for Video Player starts
// $(document).ready(function () {

    //! Build/Create playlist cards & render data from json using loop dynamically - 1st functionality over
    /*
        <div id="card1" class="playlist-card active-card">
            <img src="https://i.vimeocdn.com/video/600595198_390x220.webp" alt="thumbnail1 image" class="thumbnail">
            <h3 class="video-card-title">Croissants | Flour and Stone</h3>
        </div>
    */
    function createCard(obj){
      let cardDiv = document.createElement("div");
      cardDiv.classList.add("playlist-card");
      // cardDiv.id = "card2";
      cardDiv.id = `${obj.id}`;

      //? Create IMAGE Tag
      let img = document.createElement("img");
      img.classList.add("thumbnail");
      // img.src = playlistData[1]["thumbnail"];
      // img.src = playlistData[1].thumbnail;
      img.src = obj.thumbnail;

      //? Create h3 Tag
      let h3 = document.createElement("h3");
      h3.classList.add("video-card-title");
      h3.innerText = obj.title;

      cardDiv.appendChild(img);
      cardDiv.appendChild(h3);
      // console.log(cardDiv); --> Built a card
      return cardDiv;
    }
    // let playlistWrapper = document.querySelector("#playlist-wrapper");
    // playlistWrapper.appendChild(cardDiv);

    for(let i = 0; i < playlistData.length; i++){
      let card = createCard(playlistData[i]);
      // console.log(card);
      let playlistWrapper = document.querySelector("#playlist-wrapper");
      playlistWrapper.appendChild(card);
    }

    //! On click of thumbnail card something triggers - 3rd functionality over

      //? 1. 1st we need to grab all cards from playlist-wrapper div
      let playlistCards = document.querySelectorAll(".playlist-card");
      // console.log(playlistCards);
      playlistCards.forEach((card) => {
        // console.log(card);
        //? forEach NodeList elements (each card) attach event listener
        card.addEventListener("click", function () {
          console.log(card);

          //? for Video
          let videoPlayer = document.getElementById("video-player");
          // videoPlayer.src = `https://player.vimeo.com/video/${videoPlaySectionData[0].vimeoId}`;
          
          //TODO: index of videoPlaySectionData = clicked card's id (card.id) - 1 ===> Eg:- 2rd index = 3 - 1
          console.log(card.id);

          //! videoPlayer.src = `https://player.vimeo.com/video/${videoPlaySectionData[card.id - 1]["vimeoId"]}`;
          videoPlayer.src = `https://player.vimeo.com/video/${videoPlaySectionData[card.id - 1]["vimeoId"]}?autoplay=1&muted=0&background=0&loop=1&autopause=0`;

          // videoPlayer.setAttribute("autoplay", "1");

          //? For Video views
          let videoCount = document.getElementById("views-count");
          videoCount.innerText = videoPlaySectionData[card.id - 1]["views"];

          //? For Video Titles
          let videoTitle = document.getElementById("video-title");
          videoTitle.innerText = videoPlaySectionData[card.id - 1]["title"];

          //? For Video Description
          let videoDescription = document.getElementById("video-description");
          videoDescription.innerText = videoPlaySectionData[card.id - 1]["description"];

          //! On click of video card, the current video card ONLY should get higlighted border - 4th functionality over
          //? Border
          let cards = document.querySelectorAll(".playlist-card");
          for(let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("active-card");
          }
          card.classList.toggle("active-card");
          
        });
        
      });
      
      /* To get higlighted border without looping for button tags not for div tags using nodeName property
      //! On click of video card, the current video card ONLY should get higlighted border - 4th functionality over
          //? Border
          let cardGroup = document.getElementById("playlist-wrapper");
          let prevCard = null;
          const cardPressed = (e) => {
            if(e.target.nodeName === "DIV") {
              e.target.classList.add('active');
            
              //prevCard !== null
              if(prevCard){
                prevCard.classList.remove('active');
              }
              prevCard = e.target;
            }
          }
          cardGroup.addEventListener("click", cardPressed);
        */
// });
  //! On successfully loaded the page, render 1st playlist automatically & dynamically - 4th functionality
  document.addEventListener("DOMContentLoaded", function() {

    //? for Video
    let videoPlayer = document.getElementById("video-player");
    videoPlayer.src = `https://player.vimeo.com/video/${videoPlaySectionData[0]["vimeoId"]}`;

    //? for Views
    let viewsCount = document.getElementById("views-count");
    viewsCount.innerHTML = videoPlaySectionData[0]["views"];

    //? for Title
    let videoTitle = document.getElementById("video-title");
    videoTitle.innerHTML = videoPlaySectionData[0]["title"];

    //? for Description
    let videoDescription = document.getElementById("video-description");
    videoDescription.innerHTML = videoPlaySectionData[0]["description"];

    let firstPlaylistCard = document.getElementById("1");
    console.log(firstPlaylistCard);
    firstPlaylistCard.classList.add("active-card");

  });

