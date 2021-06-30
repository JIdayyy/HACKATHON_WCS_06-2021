import router from "next/router";
interface IProps{
  message: string
}
export default function Error({ message }:IProps) {
  return (
    <div className="w-screen fixed h-screen flex flex-col items-center align-middle justify-center">
      {message && message}
      <button onClick={() => router.reload()}>RELOAD</button>
    </div>
  );
}
