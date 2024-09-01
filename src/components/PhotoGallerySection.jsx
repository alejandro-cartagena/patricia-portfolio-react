import React from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import portsViewImg1 from "../images/portsViewImg1.jpg";
import portsViewImg2 from "../images/portsViewImg2.jpg";
import portsViewImg3 from "../images/portsViewImg3.jpg";
import portsViewImg4 from "../images/portsViewImg4.jpg";

const photos = [
  { src: portsViewImg1, width: 800, height: 600 },
  { src: portsViewImg2, width: 800, height: 600 },
  { src: portsViewImg3, width: 800, height: 600 },
  { src: portsViewImg4, width: 800, height: 600 },
];

function PhotoGallerySection() {
  return (
    <div>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        rowConstraints={{ singleRowMaxHeight: 250 }}
      />
    </div>
  );
}

export default PhotoGallerySection;
