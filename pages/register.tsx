import RegisterForm from '../components/RegisterForm'

export default function register():JSX.Element  {
    return(
        <div className="w-full bg-blue-900 bg-opacity-80 h-screen flex flex-col items-center justify-center align-middle">
            <RegisterForm />
        </div>
    )
};
