import React from 'react';

import { AppBar } from '../../components';
import { Container, Content } from './Base.styled';

type BaseProps = {
  children: React.ReactNode;
};

export default function Base({ children }: BaseProps) {
  return (
    <Container>
      <AppBar />
      <Content>
        {children}
      </Content>
    </Container>
  );
}
