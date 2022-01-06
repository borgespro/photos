import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 20px;
`;

export const Title = styled.span`
  margin-top: 25px;
  font-size: 32px;
  font-weight: 600;
`;

export const LinkSource = styled.a`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 400;
  
  text-decoration: none;
`;

export const Image = styled.img`
  margin-top: 30px;
  width: 70%;
  height: auto;
`;

export const ImageInfo = styled.span`
  margin-top: 5px;
  font-size: 15px;
  font-weight: 400;
`;
