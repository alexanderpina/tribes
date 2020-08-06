export enum RequestStatus {
  IDLE = 'IDLE', 
  FETCH = 'FETCH', 
  SUCCESS = 'SUCCESS', 
  FAILURE = 'FAILURE'
}

export type RequestData<T> = {
  data: T
}