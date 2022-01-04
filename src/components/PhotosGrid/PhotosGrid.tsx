import React, { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAwaitControl } from 'react-redux-await-control';

import { listPhotos } from '../../store/actions';
import { Photo } from '../../typings/photo';

import PhotoBox from '../PhotoBox';
import { Container, ListWrapper } from './PhotosGrid.styled';

type ListPhotoControl = {
  data: Photo[];
  currentPage: number;
};

export default function PhotosGrid(): React.ReactElement {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [
    photosControl, setPhotosControl,
  ] = useState<ListPhotoControl>({ currentPage: 0, data: [] });

  const listPhotosControl = useAwaitControl(listPhotos);

  const result: Photo[] = listPhotosControl.result(page) as any;
  const loading = listPhotosControl.isRunning(page);
  const success = listPhotosControl.isSuccessful(page);

  const nextPage = useCallback(() => {
    if (!loading) {
      setPage(page + 1);
    }
  }, [page, loading]);

  useEffect(() => {
    if (result.length && !loading && photosControl.currentPage !== page) {
      setPhotosControl({ data: [...photosControl.data, ...result], currentPage: page });
    }

    if (!!success && !result.length) {
      setHasMore(false);
    }
  }, [result, page, photosControl, loading, success]);

  useEffect(() => {
    listPhotosControl.start(page, { actionId: page });

    return () => {
      listPhotosControl.cancel({ actionId: page });
      listPhotosControl.clear({ actionId: page });
    };
  }, [page]);

  return (
    <Container>
      <InfiniteScroll
        dataLength={photosControl.data.length}
        next={nextPage}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={(
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        )}
      >
        <ListWrapper>
          {
            photosControl.data.map((photo) => <PhotoBox key={photo.id} data={photo} />)
          }
        </ListWrapper>
      </InfiniteScroll>
    </Container>
  );
}
