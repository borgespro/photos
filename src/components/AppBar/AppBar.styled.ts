import styled from 'styled-components';

import camera from '../../images/camera.svg';

export const Container = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  
  z-index: 1;

  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  padding-left: 24px;
  padding-right: 24px;
  min-height: 64px;
`;

export const Icon = styled.img.attrs(() => ({
  alt: 'photos',
  src: camera,
}))`
  margin-right: 16px;
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textLight};
  
  padding-bottom: 3px;
`;
