import LoginForm from "../components/LoginForm";
import {useState} from 'react'

export default function Login(): JSX.Element {
 
  return (
    <div className="w-full bg-backGround top-0 absolute h-screen flex flex-col items-center justify-center align-middle">
      <LoginForm />
    </div>
  );
}
