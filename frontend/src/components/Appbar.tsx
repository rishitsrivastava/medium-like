import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="font-bold flex flex-col justify-center cursor-pointer" >
            Medium
        </Link>
        <div>
            <Avatar name="Rishit" />
        </div>
    </div>
}