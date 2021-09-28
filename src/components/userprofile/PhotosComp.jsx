import React from "react";
import styled from "styled-components";
function PhotosComp() {
    const photosData = [
        "https://www.facebook.com/photo/?fbid=2073684199621431&set=pob.100009396125662",
        "https://www.facebook.com/photo/?fbid=2037243133182227&set=pob.100009396125662",
        "https://www.facebook.com/photo/?fbid=403017623394726&set=pob.100009396125662",
        "https://www.facebook.com/photo/?fbid=1894041747585678&set=pob.100009396125662",
        "https://www.facebook.com/photo/?fbid=2011067265817101&set=pob.100009396125662",
        "https://www.facebook.com/photo/?fbid=398649490546694&set=pob.100009396125662",
        "https://www.facebook.com/photo/?fbid=2004738646449963&set=pob.100009396125662",
        "https://www.facebook.com/photo/?fbid=2004441323146362&set=pob.100009396125662",
        "https://www.facebook.com/photo/?fbid=1987217571535404&set=pob.100009396125662"

    ];
    return (
        <PhotosCompStyles>
            <div>
                <span></span>
                <div></div>
            </div>
            <div className="photosGrid">
                {photosData.map((el) => {
                    return <img src={el} alt="" />
                })}
            </div>
        </PhotosCompStyles>
    );
}

const PhotosCompStyles = styled.div`
  width: 23rem;
  margin: auto;
`;

export default PhotosComp;
