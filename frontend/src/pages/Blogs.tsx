import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {

    // const [loading, Blogs] = useBlogs();

    return <div> 
        <div>
            <Appbar />
        </div> 

        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard
                    authorName={"Peter V."}
                    title={"How an Ugly Single-PageWebsite Makes $5,000 a Month with Affiliate Marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online, - Making money online is the dream for man"}
                    publishedDate={"Dec 3,2023"}
                />
                <BlogCard
                    authorName={"Peter V."}
                    title={"How an Ugly Single-PageWebsite Makes $5,000 a Month with Affiliate Marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online, - Making money online is the dream for man"}
                    publishedDate={"Dec 3,2023"}
                />
                <BlogCard
                    authorName={"Peter V."}
                    title={"How an Ugly Single-PageWebsite Makes $5,000 a Month with Affiliate Marketing"}
                    content={"No need to create a fancy and modern website with hundreds of pages to make money online, - Making money online is the dream for man"}
                    publishedDate={"Dec 3,2023"}
                />
            </div>
        </div>
    </div>
}