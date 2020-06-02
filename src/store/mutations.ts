import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.CHANGE_LEFT_DRAWER](state: S, payload: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.CHANGE_LEFT_DRAWER](state, payload: boolean) {
    state.leftDrawer = payload;
  },
};
