import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./index').store>;
  export type RootState = StateType<typeof import('./rootReducer').default>;
  export type RootAction = ActionType<typeof import('./rootActions').default>;
  interface Types {
    RootAction: RootAction;
  }
}