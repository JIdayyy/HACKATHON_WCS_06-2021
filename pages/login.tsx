import LoginForm from '../components/LoginForm'


export default function Login():JSX.Element {
    return(
        <div className="w-full bg-blue-900 bg-opacity-80 h-screen flex flex-col items-center justify-center align-middle">
            <LoginForm />
        </div>
    )
};
