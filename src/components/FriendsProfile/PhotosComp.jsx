import React from "react";
import styled from "styled-components";
function PhotosComp({ handleSeeAllPhotos }) {
  const photosData = [
    "https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.6435-9/35799287_2073684202954764_7545216993050230784_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=_hZCbwLIc6wAX9Gebht&_nc_ht=scontent.fpnq7-4.fna&oh=f56970935bc300864b0c21ee0de0ea95&oe=61791D41",
    "https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.6435-9/32368897_2037243136515560_6592291929071812608_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_ohc=0aVwZHV9O0AAX-rnVH0&_nc_ht=scontent.fpnq7-1.fna&oh=820f7fe731575d81a96080e7d0a23929&oe=617A3B05",
    "https://scontent.fpnq7-2.fna.fbcdn.net/v/t31.18172-8/17311080_403017623394726_4233606543281570706_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=U8fes0JUmDEAX-7AbGD&_nc_ht=scontent.fpnq7-2.fna&oh=7fd2f146d66a913c50110a91b2fca6b3&oe=61770FBC",
    "https://scontent.fpnq7-3.fna.fbcdn.net/v/t1.18169-9/20799272_1894041747585678_5077664781507234180_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=aVUjHFagV78AX8qzhz7&_nc_ht=scontent.fpnq7-3.fna&oh=d8994f0be4371a2a9d0802f1fc00886b&oe=6178F24E",
    "https://scontent.fpnq7-3.fna.fbcdn.net/v/t1.18169-9/28379174_2011067265817101_4382124196792763882_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=uaX5p2cTUsoAX-tVDa3&_nc_ht=scontent.fpnq7-3.fna&oh=c6495dba4f8250de63cf882e3117fcb3&oe=6178370D",
    "https://scontent.fpnq7-4.fna.fbcdn.net/v/t31.18172-8/28234853_398649490546694_1012216097464701185_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=19026a&_nc_ohc=7nzvz-WWjbkAX9RDGGa&_nc_ht=scontent.fpnq7-4.fna&oh=41664ab0bd53909ad66671820c654df3&oe=6177B8CD",
    "https://scontent.fpnq7-1.fna.fbcdn.net/v/t31.18172-8/28071078_2004738646449963_7932902297441421327_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=54zOVFAdtmkAX_skP6V&_nc_ht=scontent.fpnq7-1.fna&oh=1b10123b14108e463fe203d52c068a45&oe=6177198E",
    "https://scontent.fpnq7-4.fna.fbcdn.net/v/t31.18172-8/27982749_2004441323146362_7572999494274059494_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=pIAfAknp0NYAX8rMOJJ&_nc_ht=scontent.fpnq7-4.fna&oh=c99b7fea322e5232f3ead4e5a8ebc80c&oe=61783394",
    "https://scontent.fpnq7-4.fna.fbcdn.net/v/t1.18169-9/26231609_1987217571535404_8550689058995090995_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=e_XD2SY3qKAAX8_60EM&_nc_ht=scontent.fpnq7-4.fna&oh=724a4dab9a947a10f8d1359332f36e15&oe=617A5CDD",
  ];
  return (
    <PhotosCompStyles>
      <div className="linksForPhotos">
        <span>Photos</span>
        <div onClick={handleSeeAllPhotos}>See All Photos</div>
      </div>
      <div className="photosGrid">
        {photosData.map((el) => {
          return <img src={el} alt="" />;
        })}
      </div>
    </PhotosCompStyles>
  );
}

const PhotosCompStyles = styled.div`
  width: 23rem;
  margin: auto;
    height: 27.18rem;
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
    }
  }
`;

export default PhotosComp;
