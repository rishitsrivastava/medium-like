import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <div className="font-bold flex flex-col justify-center cursor-pointer">
            Medium
        </div>
        <div>
            <Avatar name="Rishit" size={7}/>
        </div>
    </div>
}