import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import projects from "../projectsData";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ProjectPage() {
  const { projectId } = useParams();
  const [images, setImages] = useState(null);

  useEffect(() => {
    const videoObjects = projects[projectId].videoUrl.map((video) => {
      return {
        original: video.videoThumbnail,
        thumbnail: video.videoThumbnail,
        embedUrl: video.url,
        renderItem: renderVideo,
      };
    });

    const imageObjects = projects[projectId].images.map((image) => {
      return {
        original: image,
        thumbnail: image,
      };
    });

    console.log("image objects = ", imageObjects);

    const allImages = [...videoObjects, ...imageObjects];

    setImages(allImages);
  }, []);

  const renderVideo = (item) => {
    return (
      <div
        className="image-gallery-image"
        style={{
          width: "100%",
          position: "relative",
          paddingTop: "60%" /* 16:9 Aspect Ratio */,
        }}
      >
        <ReactPlayer
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          url={item.embedUrl}
          controls={true}
          width="100%"
          height="100%"
          playing={true}
          light={item.thumbnail}
        />
      </div>
    );
  };
  return (
    <div className="project-page container">
      <div className="project-video-title-container">
        <h1 className="project-name">{projects[projectId].name}</h1>
        {images && (
          <div className="image-gallery">
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
        )}
        {/* <div className="project-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            nostrum ab fuga inventore minima consequuntur ducimus voluptatem
            pariatur non quam eum, nulla magnam quasi harum illo laudantium
            voluptatibus maiores rem! Voluptate, amet culpa unde officiis non
            blanditiis distinctio? Quos odit laborum non quia quod dolorem quo
            dolorum maiores ullam ipsam officia doloribus voluptatibus possimus
            labore ut, aspernatur quibusdam eaque atque.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectPage;
