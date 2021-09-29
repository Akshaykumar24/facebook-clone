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
}

//for bottom border of profile page menu
.menuBorder-bottom{
    border-bottom:4px solid var(--primary-color);
    color: var(--primary-color) !important;
}
`;
