/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 345px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin:10px 0;
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
export const Card = styled.div`
  position:absolute;
  cursor: pointer;
  color: white;
  width: 100%;
  height: 100%;
  background: rgba(00,00,00,0);
  transition: background .3s;
  &:hover,
  &:focus {
    background: rgba(00,00,00,0.6);
  }
`;

export const MiniVideoCard = styled.a`
  border: 1px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 98px;
  width: 145px;
  height: 50px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  margin-right:8px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  margin:10px 0;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
