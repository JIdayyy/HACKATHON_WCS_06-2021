export default function LoginForm(params) {
    return(
        <div className=" text-white p-10 rounded-md">
            <label>Email </label>
            <input className="w-full h-11 bg-gray-500 my-4 px-4 rounded-md"   type="text"/>
            <label>Password: </label>
            <input className="w-full h-11 bg-gray-500 my-4 px-4 rounded-md"   type="text"/>
        </div>
    )
};
