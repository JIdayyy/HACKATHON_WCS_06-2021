import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
const userState = atom({
  key: "userState",
  default: {
    id: "",
    firstname: "",
    startSession: null,
  },
});

const errorState = atom({
  key: "errorState",
  default: false,
});

const authState = atom({
  key: "authState",
  default: false,
});

export { userState, errorState, authState };
