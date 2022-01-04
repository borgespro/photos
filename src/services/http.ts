import axios from 'axios';
import { API_URL, REQ_LIMIT } from '../globals/constants';

export const getPhotos = (page: number = 1) => axios.get(`${API_URL}/v2/list`, { params: { page, limit: REQ_LIMIT } });
export const getPhoto = (id: string) => axios.get(`${API_URL}/id/${id}/info`);
