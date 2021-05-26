import { getMemberList } from "../utils/libs/api/getMemberList";

const initialState = {
  loading: false,
  memberList: [],
  error: "",
};

export const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_FETCH":
      return { ...state, loading: action.loading, memberList: action.payload };
    case "FAIL_FETCH":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
