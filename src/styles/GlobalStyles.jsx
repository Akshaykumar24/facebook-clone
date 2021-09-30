// import { createGlobalStyle } from "styled-components";

// export const GlobalStyles = createGlobalStyle`
// :root{
//     --primary-color:rgb(24,119,242);
//     --font-light-color:rgb(101,103,107);
//     --font-dark-color:rgb(5,5,5);
//     --background-gray-color:rgb(228,230,235);
//     --primary-background-color:rgb(255,255,255);
//     --secondary-background-color:rgb(240,242,245);
//     --border-color:rgb(255,255,255);
//     --border-color2:rgb(204,206,210);
//    --box-shadow-color: rgb(222,224,227);
//    --icons-gray-color:rgb(140,147,157);
//    --hover-effect:rgb(222 225 227);
// }

// //for bottom border of profile page menu
// .menuBorder-bottom{
//     border-bottom:4px solid var(--primary-color);
//     color: var(--primary-color) !important;
// }
// `;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --primary-color:rgb(24,119,242);
    --font-light-color:rgb(101,103,107);
    --font-dark-color:rgb(5,5,5);
    --background-gray-color:rgb(228,230,235);
    --primary-background-color:rgb(255,255,255);
    --secondary-background-color:rgb(240,242,245);
    --border-color:rgb(255,255,255);
    --border-color2:rgb(204,206,210);
   --box-shadow-color: rgb(222,224,227);
   --icons-gray-color:rgb(140,147,157);
   --hover-effect:rgb(222 225 227);
   
   //vaibhav
   --accent: hsl(214, 89%, 52%);

  --primary-1: #1877f2;
  --primary-2: rgb(134, 218, 255);
  --primary-3: rgb(95, 170, 255);
  --primary-4: rgb(0, 140, 255);

  --secondary-1: rgb(118, 62, 230);
  --secondary-2: rgb(147, 96, 247);
  --secondary-3: rgb(219, 26, 139);
  --secondary-4: #42b72a;
  --secondary-5: #32af19;
  --secondary-6: #146fe7;

  --primary-background: #fff;
  --secondary-background-1: #f0f2f5;
  --secondary-background-2: #e4e6eb;
  --secondary-background-3: #edeff1;

  --hover-overlay: rgba(0, 0, 0, 0.05);
  --media-hover: rgba(68, 73, 80, 0.15);
  --hover-overlay-2: rgba(68, 73, 80, 0.25);

  --supplementary-1: rgb(235, 83, 63);
  --supplementary-2: rgb(241, 168, 23);
  --supplementary-3: rgb(218, 218, 218);
  --supplementary-4: rgb(50, 52, 54);

  --shadow-1: rgba(0, 0, 0, 0.1);
  --shadow-2: rgba(0, 0, 0, 0.2);
  --shadow-5: rgba(0, 0, 0, 0.5);
  --shadow-7: rgba(0, 0, 0, 0.7);
  --shadow-8: rgba(0, 0, 0, 0.8);
  --shadow-9: rgba(224, 224, 224, 0.7);

  --primary-icon: #050505;
  --primary-text: #050505;

  --secondary-icon: #65676b;
  --secondary-text: #65676b;

  --black: #000;
  --white: #fff;

  --navBar-height: 50px;
  --nav-bar-background: #ffffff;
  --nav-bar-background-gradient: linear-gradient(
    to top,
    #ffffff,
    rgba(255, 255, 255),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0)
  );

  --cover-photo-over-lay-gradient: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0.1) 50%
  );

  --divider: #ced0d4;
  --comment-background: #f0f2f5;

  --primary-button-hover: #216fdb;
  --disabled-button-text: #bcc0c4;
  --secondary-button-background: #e4e6eb;

  --placeholder-text: #8a8d91;
  --filter-invert: 0;
  --filter-placeholder-icon: invert(59%) sepia(11%) saturate(200%)
    saturate(135%) hue-rotate(176deg) brightness(96%) contrast(94%);
}

//for bottom border of profile page menu
.menuBorder-bottom{
    border-bottom:4px solid var(--primary-color);
    color: var(--primary-color) !important;
}

body {
  /* margin: 0; */
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* line-height: 1.34; */
  background-color: var(--secondary-background-2);
}
* {
  /* margin: 0; */
  /* padding: 0; */
  box-sizing: border-box;
  color: var(--primary-text);
  /* font-size: 16px; */
}
input,
button,
textarea {
  outline: none;
}
button {
  cursor: pointer;
}`;
