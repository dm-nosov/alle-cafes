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
`;

const ChildrenWrapper = styled.dialog`
  display: block;
  position: relative;
  width: 100%;
  border: 0;
  background-color: white;
  margin: 0 0.25rem 0 0.25rem;
  padding: 1rem 1rem 4rem 1rem;
  border-radius: 1rem 1rem 0 0;

  menu {
    list-style-type: none;
    display: flex;
    gap: 2rem;
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
