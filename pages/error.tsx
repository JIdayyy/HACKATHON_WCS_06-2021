import Error from "../components/Error";

export default function error() {
  return (
    <div className="w-full bg-backGround top-0 absolute h-screen flex flex-col items-center justify-center align-middle">
      <Error message="error" />
    </div>
  );
}
