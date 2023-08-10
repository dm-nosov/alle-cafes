import styled from "styled-components";

const StyledPopup = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: end;
  z-index: 1;
  p {
  }
`;

const ChildrenWrapper = styled.dialog`
  display: block;
  position: relative;
  width: 100%;
  border: 0;
  background-color: white;
  margin: 0 0.25em 0 0.25em;
  padding: 1em 2em 2em 1em;
  border-radius: 1em 1em 0 0;

  p {
    padding-bottom: 0.5em;
    border-bottom: 1px solid var(--editor-background);
  }
  p:last-of-type {
    border-bottom: none;
  }
  menu {
    list-style-type: none;
    display: flex;
    gap: 2em;
    justify-content: end;
  }
`;

export function PopupGeneral({ children, handleClosePopup }) {
  return (
    <StyledPopup onClick={() => handleClosePopup()}>
      <ChildrenWrapper onClick={(event) => event.stopPropagation()}>
        {children}
      </ChildrenWrapper>
    </StyledPopup>
  );
}
