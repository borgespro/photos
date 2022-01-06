import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '../../components';
import { Container, Content } from './Base.styled';

export default function Base() {
  return (
    <Container>
      <AppBar />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}
