import {
  call, takeLatest, put, SagaReturnType,
} from 'redux-saga/effects';

import { getPhotos, getPhoto } from '../services/http';
import { Action, getPhoto as getPhotoDetail, listPhotos } from './actions';

type GetPhotosResponse = SagaReturnType<typeof getPhotos>;
type GetPhotoResponse = SagaReturnType<typeof getPhoto>;

function* listPhotosSaga() {
  try {
    const { data }: GetPhotosResponse = yield call(getPhotos);
    yield put(listPhotos.success(data));
  } catch (e) {
    yield put(listPhotos.failure(e));
  }
}

function* getPhotoSaga({ payload }: Action) {
  try {
    const { data }: GetPhotoResponse = yield call(getPhoto, payload);
    yield put(listPhotos.success(data));
  } catch (e) {
    yield put(listPhotos.failure(e));
  }
}

export default function* mainSaga(): Generator {
  yield takeLatest(listPhotos.start.toString(), listPhotosSaga);
  yield takeLatest(getPhotoDetail.start.toString(), getPhotoSaga);
}
