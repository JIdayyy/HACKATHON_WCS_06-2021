import router from "next/router";
import Image from "next/image";
interface IProps {
  message: string;
}
export default function Error({ message }: IProps) {
  return (
    <div className="w-screen fixed h-screen flex flex-col items-center align-middle justify-center">
      <div className="text-white text-4xl my-10">{message && message}</div>
      <Image width={100} height={100} src="/error.png" alt=""></Image>
      <button
        className="text-white my-8 rounded-lg py-2 px-4 border"
        onClick={() => router.reload()}
      >
        RELOAD
      </button>
    </div>
  );
}
