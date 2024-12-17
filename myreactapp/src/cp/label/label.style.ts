import styled from "styled-components";
import { FontAttr } from "./label.type";

const hex2rgb = (hex:string) => {
  
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    return [ r, g, b ];
}

const disableFont = (c:string) =>  `rgba(${hex2rgb(c)},0.6)`;

const Container = styled.div<{$font:FontAttr}>`

  display: flex;
  align-items: center;

  justify-content: flex-start;
  flex-direction: row;

  position: relative;
 
  width: 100%;

  margin: 2px;

  color: ${(p)=>p.$font.opaque ? disableFont(p.$font.color) : p.$font.color};
  font-size: ${(p)=>p.$font.size };
  font-family: ${(p)=>p.$font.family };
  
`;


export const styles = {
    container: Container,
}