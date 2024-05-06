import { Appbar } from "../components/Appbar"
import JoditEditor from 'jodit-react';
import { useRef, useState } from "react";

export const Publish = () => {

    return <div>
        <Appbar />
        <div>
            <MyEditor />
        </div>
    </div>
}


export const MyEditor = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('')

    return <div>
        <Appbar />
        <div>
            <div>
                <JoditEditor                     
                    ref={editor}
                    value={content}
                    onChange={newContent => setContent(newContent)}    
                />
            </div>
        </div>
    </div>
}    