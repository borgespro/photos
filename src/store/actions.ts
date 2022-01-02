import { createAsyncAction } from 'react-redux-await-control';

export type Action = {
  type: string;
  payload: any;
};

export const listPhotos = createAsyncAction('LIST_PHOTOS', { saveResult: true });
export const getPhoto = createAsyncAction('GET_PHOTO', { saveResult: true });
