/////////////////////////
// Portsview Resources /
///////////////////////
// videos
import portsViewVideo from "./videos/portsView.mp4";
import portsViewVideo2 from "./videos/portsView2.mp4";
// video thumbnails
import portsViewVideoThumbnail1 from "./images/portsViewVideoThumbnail1.png";
import portsViewVideoThumbnail2 from "./images/portsViewVideoThumbnail2.png";
// images
import portsViewImg1 from "./images/portsViewImg1.jpg";
import portsViewImg2 from "./images/portsViewImg2.jpg";
import portsViewImg3 from "./images/portsViewImg3.jpg";
import portsViewImg4 from "./images/portsViewImg4.jpg";

/////////////////////////////
// Blue Mountain Resources /
///////////////////////////
import blueMountainImg1 from "./images/blueMountainImg1.jpg";
import blueMountainImg2 from "./images/blueMountainImg2.jpg";
import blueMountainImg3 from "./images/blueMountainImg3.jpg";
import blueMountainImg4 from "./images/blueMountainImg4.jpg";
import blueMountainThumbnail from "./images/blueMountainThumbnail.png";

import blueMountainVideo from "./videos/blueMountainVideo.mp4";

///////////////////////////
// Parking Lot Resources /
/////////////////////////
// video
import parkingLotVideo from "./videos/parkingLot.mp4";
// video thumbnail
import parkingLotVideoThumbnail from "./images/parkingLotVideoThumbnail.png";
// images
import parkingLotImg1 from "./images/parking-lot.jpg";
import parkingLotImg2 from "./images/parkingLotImg2.jpg";
import parkingLotImg3 from "./images/parkingLotImg3.jpg";

//////////////////////////////
// Pollo Tropical Resources /
////////////////////////////
import polloTropicalVideo1 from "./videos/polloTropical.mp4";
import polloTropicalVideo2 from "./videos/polloTropical2.mp4";

import polloTropicalVideoThumbnail1 from "./images/polloTropicalVideoThumbnail1.png";
import polloTropicalVideoThumbnail2 from "./images/polloTropicalVideoThumbnail2.png";

/////////////////////
// House Resources /
///////////////////
import houseImg1 from "./images/houseImg1.png";
import houseImg2 from "./images/houseImg2.png";
import houseImg3 from "./images/houseImg3.png";
import houseImg4 from "./images/houseImg4.png";

//////////////////////////
// Costa Rica Resources /
////////////////////////
import costaRicaImg1 from "./images/costaRicaImg1.png";
import costaRicaVideo from "./videos/costaRicaProjectVideo.mp4";

const projects = [
  {
    name: "Portsview Miami",
    videoUrl: [
      { url: portsViewVideo, videoThumbnail: portsViewVideoThumbnail1 },
      { url: portsViewVideo2, videoThumbnail: portsViewVideoThumbnail2 },
    ],
    thumbnail: portsViewImg1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [portsViewImg1, portsViewImg2, portsViewImg3, portsViewImg4],
  },
  {
    name: "Blue Mountain",
    videoUrl: [
      { url: blueMountainVideo, videoThumbnail: blueMountainThumbnail },
    ],
    thumbnail: blueMountainImg1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
      blueMountainImg1,
      blueMountainImg2,
      blueMountainImg3,
      blueMountainImg4,
    ],
  },
  {
    name: "Pollo Tropical",
    videoUrl: [
      {
        url: polloTropicalVideo1,
        videoThumbnail: polloTropicalVideoThumbnail1,
      },
      {
        url: polloTropicalVideo2,
        videoThumbnail: polloTropicalVideoThumbnail2,
      },
    ],
    thumbnail: polloTropicalVideoThumbnail1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [],
  },
  {
    name: "Parking Lot",
    videoUrl: [
      { url: parkingLotVideo, videoThumbnail: parkingLotVideoThumbnail },
    ],
    thumbnail: parkingLotImg1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [parkingLotImg1, parkingLotImg2, parkingLotImg3],
  },
  {
    name: "House",
    videoUrl: [],
    thumbnail: houseImg1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [houseImg1, houseImg2, houseImg3, houseImg4],
  },
  {
    name: "Costa Rica Hotel",
    videoUrl: [{ url: costaRicaVideo, videoThumbnail: costaRicaImg1 }],
    thumbnail: costaRicaImg1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [],
  },
];

export default projects;
