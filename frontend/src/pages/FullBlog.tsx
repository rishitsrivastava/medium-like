import { Appbar } from "../components/Appbar"
import { Avatar } from "../components/BlogCard"
import { Blog } from "../hooks"
import parse from "html-react-parser"

export const FullBlog = ({blog}: {blog : Blog}) => {

    return <div>
        <Appbar />
        <div className="flex justify-center pt-10">
            <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-3xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-4">
                        Posted on 2nd December 2023
                    </div>
                    <div className="pt-4">
                        {parse(blog.content)}
                    </div>
                    
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 font-medium text-lg">
                        Author:
                    </div>
                    <div className="flex">
                        <div className="flex flex-col justify-center">
                            <Avatar name={blog.author.name || "Anonymous"} size="big" />
                        </div>
                        <div className="pl-2">
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                random catch phrase about the authors ability to grab users attention.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}