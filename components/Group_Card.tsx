import Image from 'next/image'

export default function Group_Card() {
    return(
        <div className="w-72 h-80 bg-blue-600 flex flex-col items-center align-middle justify-between p-4 rounded-xl text-white">
            <Image width={120} height={230} src="/profile_placeholder.png"/>
            <div className="w-full h-full flex flex-col items-left align-middle justify-center">
            <div className="text-2xl">Space Rocket</div>
            <div className="text-xl">Développement Web</div>
            <div className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quo corporis sed, maiores iste minus a necessitatibus doloribus beatae itaque optio hic </div>
            </div>
            <div className="w-full"><button className="text-sm font-bold bg-blue-400 rounded-xl px-4 py-1">Meet the Squad</button></div>
        </div>
    )
};
