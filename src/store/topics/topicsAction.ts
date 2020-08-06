import { createAsyncAction } from "typesafe-actions";
import { TopicsData, TopicsRemovePayload } from './topicsType';

export const topics = createAsyncAction(
  'TOPICS_REQUEST', 
  'TOPICS_SUCCESS', 
  'TOPICS_FAILURE'
)<undefined, TopicsData, undefined>()

export const topicsRemove = createAsyncAction(
  'TOPICS_REQUEST', 
  'TOPICS_SUCCESS', 
  'TOPICS_FAILURE'
)<TopicsRemovePayload, TopicsRemovePayload, undefined>()