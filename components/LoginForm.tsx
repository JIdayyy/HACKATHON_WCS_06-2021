import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data: object) => console.log(watch);
  console.log(errors);

  const [show, setShow] = useState(false);

  return (
    <div className="w-2/3  rounded-lg p-8 md:p-16 bg-backGround md:w-1/3 ">
      <button onClick={() => setShow(!show)}>
        <p className="flex justify-end text-white text-xs ">X</p>
      </button>
      <div className="flex flex-col mb-7">
        <p className="text-white text-lg font-bold ">Login</p>
        <p className="text-white">
          Join and work with the fiver freelance community
        </p>
      </div>

      <form
        className="flex flex-col space-y-3  "
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-white">Email</p>
        <input
          className="rounded-md bg-grayinput bg-opacity-30 shadow-inputShadow p-1"
          type="text"
          placeholder="email@email.com"
          {...register("email", {})}
        />
        <p className="text-white ">Password</p>
        <input
          className="rounded-md bg-grayinput bg-opacity-30 shadow-inputShadow p-1"
          type="text"
          placeholder="password"
          {...register("password", {})}
        />
        <p className="text-white ">Confirm Password</p>
        <input
          className="rounded-md bg-grayinput bg-opacity-30 shadow-inputShadow p-1"
          type="text"
          placeholder="confirm password"
          {...register("confirm password", {})}
        />

        <input
          className="rounded-md p-1 text-white bg-buttonBlue shadow-inputShadow"
          type="submit"
          value="Connect"
        />
      </form>
      <div className="flex flex-col text-center mt-2 mb-8 text-white">
        <p className="text-xs">
          {"Don't have an account? "}
          <span className="text-blue-500">Sign in</span>
        </p>
        <p className="text-xs">
          Forgot Password?
          <span className="text-blue-500">New password</span>
        </p>
      </div>
    </div>
  );
}
