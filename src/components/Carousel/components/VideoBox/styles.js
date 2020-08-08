import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  /* margin-top:94px; */
  height: 100%;
  max-width:1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0 auto;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    /* margin-top:94px; */
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 100%;
  display: inline-block;
  
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const WatchButton = styled.button`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  color: var(--black);
  background: var(--white);
  border-color: var(--black);
  transition: opacity .3s;
  display: none;
  margin: 0 auto;
  @media (max-width: 800px) {
    display: block;
  }
`;
