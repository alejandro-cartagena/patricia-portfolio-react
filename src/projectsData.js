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

const projects = [
  {},
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
    name: "Parking Lot",
    videoUrl: [
      { url: parkingLotVideo, videoThumbnail: parkingLotVideoThumbnail },
    ],
    thumbnail: parkingLotImg1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [parkingLotImg1, parkingLotImg2, parkingLotImg3],
  },
  {},
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
];

export default projects;
