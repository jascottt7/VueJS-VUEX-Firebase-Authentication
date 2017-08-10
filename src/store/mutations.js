import * as types from './mutation-types';


export default {

  [types.SIGN_IN](state, userPayload) {
    state.user = userPayload;
  },

  [types.SIGN_OUT](state) {
    state.user = {};
  },

};

