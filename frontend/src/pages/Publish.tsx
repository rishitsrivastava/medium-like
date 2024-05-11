import axios from "axios";
import { Appbar } from "../components/Appbar"
import JoditEditor from 'jodit-react';
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export const Publish = () => {

    const editor = useRef(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const navigate = useNavigate();

    const publishButton = async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        )
        console.log(response);
        navigate(`/blog/${response.data.id}`)
    }

    return <div>
        <Appbar />
        <div className="m-6">
            <div className="m-10">
                <div className="mb-3 font-medium">
                    Enter Title for the Blog:
                </div>
                <input 
                    type="text" 
                    placeholder="Title..." 
                    className="border w-full mb-6 m-3 p-2" 
                    onChange={c=> setTitle(c.target.value)} 
                />

                <div className="mb-3 font-medium">
                    
                </div>
                <JoditEditor                     
                    ref={editor}
                    value={content}
                    onChange={newContent => setContent(newContent)} 
                    className="max-h-screen m-3"   
                />    
                <button onClick={publishButton} type="button" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Publish</button>

            </div>
        </div>
    </div>                        
}


export const MyEditor = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('')

    return <div className="p-8">
        <form action="">
            <JoditEditor                     
                ref={editor}
                value={content}
                onChange={newContent => setContent(newContent)} 
                className="max-h-screen"   
            />
        </form>
    </div>
}    