import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogsSkeletons } from "../components/BlogsSketons";
import { useBlogs } from "../hooks"

export const Blogs = () => {

    const {loading, blogs} = useBlogs();

    if(loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center flex-col items-center">
                <BlogsSkeletons />
                <BlogsSkeletons />
                <BlogsSkeletons />
            </div>
        </div>
    }

    return <div> 
        <div>
            <Appbar />
        </div> 

        <div className="flex justify-center">
            <div className="max-w-xl">
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"May 4, 2024"}
                />)}
            </div>
        </div>
    </div>
}