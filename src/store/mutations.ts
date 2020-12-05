import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SHOW_HEADER_SHADOW](state: S, payload: boolean): void;
  [MutationTypes.SHOW_PROGRESS_BAR](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_LEFT_DRAWER](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_RIGHT_DRAWER](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_IS_MOBILE](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_PROGRESS_BAR_PERCENT](state: S, payload: string): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SHOW_HEADER_SHADOW](state, payload: boolean) {
    state.showBoxShdow = payload;
  },
  [MutationTypes.SHOW_PROGRESS_BAR](state, payload: boolean) {
    state.showProgressBar = payload;
  },
  [MutationTypes.CHANGE_LEFT_DRAWER](state, payload: boolean) {
    state.leftDrawer = payload;
  },
  [MutationTypes.CHANGE_RIGHT_DRAWER](state, payload: boolean) {
    state.rightDrawer = payload;
  },
  [MutationTypes.CHANGE_IS_MOBILE](state, payload: boolean) {
    state.isMobile = payload;
  },
  [MutationTypes.CHANGE_PROGRESS_BAR_PERCENT](state, payload: string) {
    state.progressBarPercent = payload;
  },
};
