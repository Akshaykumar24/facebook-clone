import React from "react";

import styled from "styled-components";
import { useState } from "react";
import { getData } from "../../utils/localStorage";
function AboutCompo({ handleEditProfileOpen }) {
    const [userData, setUserData] = useState(
        getData("frndData").user
            ? getData("frndData").user
            : getData("frndData").userOnline
    );

    return (
        <AboutCompoStlyled>
            <HeadingStyled>
                <h1>About</h1>
            </HeadingStyled>
            <InfoSectionStyled>
                <h3>Personal Information</h3>
                <div className="flexbox">
                    <div>First Name</div>
                    <div>{userData.first_name}</div>
                </div>
                <div className="flexbox">
                    <div>Last Name</div>
                    <div>
                        {userData.last_name ? (
                            userData.last_name
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <div className="flexbox">
                    <div>Email</div>
                    <div>
                        {userData.email ? (
                            userData.email
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="flexbox">
                    <div>Date Of Birth</div>
                    <div>
                        {userData.dob ? (
                            userData.dob
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="flexbox">
                    <div>Gender</div>
                    <div>
                        {userData.gender ? (
                            userData.gender
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="flexbox">
                    <div>Mobile No.</div>
                    <div>
                        {userData.mobile ? (
                            userData.mobile
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </InfoSectionStyled>
            <InfoSectionStyled>
                <h3>Work Information</h3>
                <div className="flexbox">
                    <div>Currently working at</div>
                    <div>
                        {userData.work1 ? (
                            userData.work1
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="flexbox">
                    <div>Worked at </div>
                    <div>
                        {userData.work2 ? (
                            userData.work2
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </InfoSectionStyled>
            <InfoSectionStyled>
                <h3>Education Information</h3>
                <div className="flexbox">
                    <div>Studied at</div>
                    <div>
                        {userData.education1 ? (
                            userData.education1
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="flexbox">
                    <div>Studied at</div>
                    <div>
                        {userData.education2 ? (
                            userData.education2
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </InfoSectionStyled>
            <InfoSectionStyled>
                <h3>Additional Information</h3>
                <div className="flexbox">
                    <div>Bio</div>
                    <div>
                        {userData.bio ? (
                            userData.bio
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="flexbox">
                    <div>Relationship</div>
                    <div>
                        {userData.relationship ? (
                            userData.relationship
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="flexbox">
                    <div>Interested In </div>
                    <div>
                        {(userData.gender === "Male" ? "Women" : "Men") ? (
                            userData.gender === "Male" ? (
                                "Women"
                            ) : (
                                "Men"
                            )
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </InfoSectionStyled>
        </AboutCompoStlyled>
    );
}

const AboutCompoStlyled = styled.div`
margin-top: 1rem;
  width: 55rem;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
  padding: 2rem;
     box-shadow: 0px 0px 13px var(--icons-gray-color);
  border-radius: 1rem;
  background-color: var(--border-color);

`;
const HeadingStyled = styled.div`
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 2rem;
    }
`;
const InfoSectionStyled = styled.div`
border-top: 1px solid var(--font-light-color);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  width: 100%;
  padding-top:1rem;
  h3{
      font-size: 1.3rem;
  }
  .flexbox {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    &>div:nth-child(1){
        color: var(--font-dark-color);
        font-weight: 600;
    }
      &>div:nth-child(2){
        color: var(--font-light-color);
        font-weight: 600;
    }
  }
`;

export default AboutCompo;
