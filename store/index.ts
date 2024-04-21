import { createStore } from "vuex";
import state from "./state";

export const store = createStore({
  state,
  mutations: {
    increment(state:any) {
      state.count++;
    },
  },
});