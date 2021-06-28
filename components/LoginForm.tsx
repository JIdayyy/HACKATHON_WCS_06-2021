import { useForm } from "react-hook-form";

export default function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => console.log(data);
  console.log(errors);

  return (
    <div className="w-2/3 ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  ">
        <input
          type="text"
          placeholder="email@email.com"
          {...register("email", {})}
        />
        <input
          type="text"
          placeholder="password"
          {...register("password", {})}
        />
        <input
          type="text"
          placeholder="confirm password"
          {...register("confirm password", {})}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
