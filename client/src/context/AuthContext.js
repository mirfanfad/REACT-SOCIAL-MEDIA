import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: 
  {
    _id: "6152c06602c5176bd49fa92c",
    username: "Irfan",
    email: "mirfanfad@gmail.com",
    password: "$2b$10$fsv/sRnxXeR0AIuX2tuiQOmTw1NGbzp0bfviEZGkWkYM5tXboSUY6",
    profilePicture: "person/2.jpeg",
    coverPicture: "",
    followers: [],
    followings: ["6152b9b132e986a5c7c380ec"],
    isAdmin: false,
    createdAt: { $date: { $numberLong: "1632813158562" } },
    updatedAt: { $date: { $numberLong: "1633067854107" } },
    __v: { $numberInt: "0" },
    city: "Jakarta",
    from: "Banten",
    relationship: { $numberInt: "1" },
    desc: "Hey There!",
  }
  ,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
