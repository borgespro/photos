import React, { useEffect } from 'react';
import { useAwaitControl } from 'react-redux-await-control';
import { useParams, useNavigate } from 'react-router-dom';

import { getPhoto } from '../../store/actions';
import { Photo } from '../../typings/photo';

import {
  Container, Title, LinkSource, Image, ImageInfo,
} from './Detail.styled';

export default function Detail() {
  const navigate = useNavigate();
  const { photoId } = useParams();

  const getPhotoControl = useAwaitControl(getPhoto);
  const photo: Photo = getPhotoControl.result() as any;
  const loading: boolean = getPhotoControl.isRunning() as any;
  const failure: boolean = getPhotoControl.hasFailure() as any;

  useEffect(() => {
    getPhotoControl.start(photoId);
    return () => getPhotoControl.clear();
  }, [photoId]);

  useEffect(() => {
    if (failure) {
      navigate('/');
    }
  }, [failure]);

  if (loading || !photo) {
    return (
      <Container>
        <p>Carregando...</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{photo.author}</Title>
      <LinkSource href={photo.url}>{photo.url}</LinkSource>
      <Image src={photo.download_url} />
      <ImageInfo>{`${photo.height} X ${photo.width}`}</ImageInfo>
    </Container>
  );
}
