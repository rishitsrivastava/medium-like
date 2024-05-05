import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"

export default function Blog() {
  const { id } = useParams();
  const {loading, blog} = useBlog({
    id: id || ""
  });

  if(loading) {
    return <div className="flex justify-center align-middle items-center text-slate-400">
        Loading...
    </div>
}

  return (
    <div>
      blog details
    </div>
  )
}
