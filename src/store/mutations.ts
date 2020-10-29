import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.CHANGE_LEFT_DRAWER](state: S, payload: boolean): void;
  [MutationTypes.SHOW_HEADER_SHADOW](state: S, payload: boolean): void;
  [MutationTypes.CHANGE_RIGHT_DRAWER](state: S, payload: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.CHANGE_LEFT_DRAWER](state, payload: boolean) {
    state.leftDrawer = payload;
  },
  [MutationTypes.SHOW_HEADER_SHADOW](state, payload: boolean) {
    state.showBoxShdow = payload;
  },
  [MutationTypes.CHANGE_RIGHT_DRAWER](state, payload: boolean) {
    state.rightDrawer = payload;
  },
};
