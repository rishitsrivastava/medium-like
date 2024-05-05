import { Appbar } from "../components/Appbar"
import { Blog } from "../hooks"

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
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 bg-green-200">
                    Hi
                </div>
            </div>
        </div>
    </div>
}