import { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_to_LIST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000),
          name: action.payload.name,
          nickname: action.payload.nickName,
        },
      ];
    case "ADD_EDIT_PROP":
      const newUsers = state.map((user) => ({ ...user, isEdit: true }));
      return newUsers;

    case "RESET":
      return [];

    case "SUBMIT":
      if (!state) return;
      const submitList = state.filter((user) => user.isEdit === true);
      if (submitList.length === 0) return console.log("리스트가 비었습니다");
      return console.log(submitList);

    default:
      return state;
  }
};

const initialState = [{ id: 1, name: "홍길동", nickname: "히히" }];

const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userReducer, initialState);
  return <UserContext.Provider value={{ users, dispatch }}>{children}</UserContext.Provider>;
};

export default UserProvider;
