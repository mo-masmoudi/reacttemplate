import Store from "../store/crypto";

export const initialState = Store;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "cryptoInfos": {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: null,
          cryptoInfos: action.data
        };
      }
      return initialState;
    }
    default:
      return state;
  }
}
