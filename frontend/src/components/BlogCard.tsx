import { Link } from "react-router-dom";
import parse from 'html-react-parser';

interface BlogCardProps {
    id: number,
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    
    
    return <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 p-4 min-w-min cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="flex justify-center items-center">
                    <div className="font-medium pl-2 text-sm">
                        {authorName}
                    </div>
                    <div className="flex justify-center flex-col pl-2">
                        <Circle />
                    </div>
                    <div className=" pl-2 font-thin text-slate-500 text-sm">
                        {publishedDate}
                    </div>
                </div>    
            </div>
            <div className="font-bold text-xl pt-1">
                {title}
            </div>
            <div className="text-slate-500 font-thin">
                <div className="">
                    {parse(content.slice(0,100) + '...')}
                </div>
            </div>
            <div className="text-xs text-slate-400 pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>    
}

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">
        
    </div>
}