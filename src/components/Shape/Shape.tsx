import React from 'react';

import { Container } from './Shape.styled';

type ShapeProps = {
  hoverElevation?: number | null;
  elevation: number;
  children: React.ReactNode;
};

export default function Shape({
  elevation,
  hoverElevation,
  children,
}: ShapeProps) {
  return (
    <Container
      level={elevation}
      hoverElevation={
        hoverElevation === null || hoverElevation === undefined ? elevation : hoverElevation
      }
    >
      {children}
    </Container>
  );
}

Shape.defaultProps = {
  hoverElevation: null,
};
