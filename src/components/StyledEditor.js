import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
  border-radius: 10px;
  overflow: hidden;
  border: solid 1px #ccc;
`;
export const StyledToolbar = styled.div`
  padding: 5px;
  min-height: 50px;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledToolbarTooltips = styled.p`
  
  background:#000;
  color:white;
  padding:5px;
  border-radius:5px;
  position:absolute;
  top:100%;
  
`;
export const StyledToolbarIconContainer = styled.div`
  display: flex;
 
`;

export const StyledEditorContainer = styled.div`
  padding: 5px;
  width: 100%;
  min-height: 200px;
  background: white;

  flex: 1;
  > div {
    min-height: inherit;
    width: 100%;
    outline: none;
    padding: 0 15px;
  }
`;
export const StyledFooter = styled.div`
  padding: 5px 15px;
  width: 100%;
  height: 50px;
  background: #fbfbfb;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const StyledToolbarIcon = styled.button`
  position:relative;
  background: white;
  width: 38px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 2px;
  border-radius: 5px;
  border: solid 1px transparent;
  transition: 0.3s;
  > i {
    width: 25px;
    height: 25px;
  }
  &:hover {
    background: #f1f1f1;
  }
  > p{
    display:none;
  }
  :hover > p{
   display:block;
  }
`;

export const SEditor = {
  Container: StyledContainer,
  Toolbar: StyledToolbar,

  IconContainer: StyledToolbarIconContainer,
  Icon: StyledToolbarIcon,
  IconTooltips:StyledToolbarTooltips,
  Body: StyledEditorContainer,
  Footer: StyledFooter,
};
