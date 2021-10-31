import React from "react";
import styled from "styled-components";
import { getData } from "../../utils/localStorage";
import { useState } from "react";
function PhotosComp({ handleSeeAllPhotos }) {
  const [frndsPosts, setFrndsPosts] = useState(
    getData("frndsPosts")?.posts ? getData("frndsPosts").posts : []
  )

  const [photos, setPhotos] = useState(frndsPosts.filter((el) => {
    return el.body_photo.length > 0
  }))

  return (
    <PhotosCompStyles>
      <div className="linksForPhotos">
        <span>Photos</span>
        <div onClick={handleSeeAllPhotos}>See All Photos</div>
      </div>
      <div className="photosGrid">
        {photos.length > 0 ? photos.slice(0, 9).map((el) => {
          return <img src={el.body_photo} alt="" />;
        }) : <h1>No photos to show</h1>}
      </div>
    </PhotosCompStyles>
  );
}

const PhotosCompStyles = styled.div`
  width: 100%;
  margin: auto;
    height: auto;
  display: grid;
  padding: 15px;
  grid-gap: 1rem;
  box-shadow: 0 0 4px var(--icons-gray-color);
  border-radius: 1rem;
    background-color: var(--border-color);
  .linksForPhotos {
    display: flex;
    column-gap: 9rem;
    padding: 2px 2px;
    align-items: center;
    & > span {
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
      :hover{
          text-decoration: underline;
      }
    }
    & > div {
      width: 7rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--ofont-primary-color);
      :hover {
        background-color: var(--background-gray-color);
        cursor: pointer;
      }
    }
  }
  .photosGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
    width: 100%;

    img {
       width: 100%;
      height: 6.6rem;
      object-fit: cover;
    }
  }
`;

export default PhotosComp;
