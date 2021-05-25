import { getMemberList } from "../utils/libs/api/getMemberList";

const initialState = {
  loading: false,
  memberList: [],
  error: "",
};

export const memberReducer = async (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_FETCH":
      const data = getMemberList();
      return { ...state, loading: action.loading, memberList: data };
    case "FAIL_FETCH":
      return { ...state, loading: false, error: action.error };
    default:
      break;
  }
};
