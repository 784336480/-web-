import req from '../utils/http'

export const GET_SERIALIZATIONANIME=params=>req('post','/anime/serializationanime',params);
