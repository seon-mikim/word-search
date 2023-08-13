import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    html{
        font-family:'Noto Sans' sans-serif
    
    }

`;

export default GlobalStyle;