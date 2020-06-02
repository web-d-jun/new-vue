import { createStore } from "vuex";
import { State, state } from "./state";
import { Mutations, mutations } from "./mutations";

export const store = createStore({
  state,
  mutations
});
