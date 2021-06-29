import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    id: "",
    firstname: "",
    startSession: null,
  },
});

export { userState };
