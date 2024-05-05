
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    
    
    return <div className="border-b border-slate-200 p-4">
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
            {content.slice(0,100) + "..."}
        </div>
        <div className="text-xs text-slate-400 pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
    </div>
}

export function Avatar({name, size = 6} : {name: string, size?: number}) {
    return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer`}>
        <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">
        
    </div>
}