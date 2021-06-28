import LoginForm from '../components/LoginForm';

export default function Login(): JSX.Element {
  return (
    <div className="w-full bg-backGround absolute top-0 h-screen flex flex-col items-center justify-center align-middle">
      <LoginForm />
    </div>
  );
}
