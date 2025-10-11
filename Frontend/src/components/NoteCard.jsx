import { Link, useNavigate } from 'react-router'
import { Trash2Icon , Edit2Icon , ViewIcon } from 'lucide-react'
import { formatDate } from '../lib/util.js'
import Toast, { toast } from "react-hot-toast";
import axios from 'axios'

const NoteCard = ({note,setNotes}) => {

    const navigate = useNavigate();

     const API_BASE_URL = import.meta.env.DEV 
  ? 'http://localhost:3000'  // Browser ကနေခေါ်ရင်
  : 'http://backend:3000';    // Docker container ထဲကခေါ်ရင်

    const handleDelete =  async (e,id) =>{
        e.preventDefault();

        if(!window.confirm("Are you sure you want to delete this note")) return;

        try{
            
            const response = await axios.delete(`${API_BASE_URL}/api/notes/${id}`); 

            navigate("/");

            //setNotes((prev) => prev.filter(note => note._id !== id)) //get rid of the deleted one
            setNotes((prev) => {
            // Array ဟုတ်မဟုတ် စစ်ဆေးပါ
            if (!Array.isArray(prev)) {
                //console.error('prev is not an array:', prev);
                return []; // or whatever default value makes sense
            }
            return prev.filter(note => note._id !== id);
            });


        
            Toast.success("Note successfully deleted");
           
        }catch(error){
            console.error("Error in handle Delete",error)
            Toast.error("Failed to delete note");
        }
    }


    return <Link to={`/notes/${note._id}`} className="card p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
        <div className='card-body  flex flex-col gap-2'>
            <h2 className="card-title text-xl font-bold">{note.title}</h2>
            <p className='text-base-content line-clamp-3'>{note.content}</p>
            <div className='mt-auto text-sm text-gray-500'>
                <span className='text-sm'>
                    Last updated : { formatDate(note.updatedAt) }
                </span>
                <div>
                    <button>
                        <ViewIcon className='inline h-4 w-4 mr-1' />
                        View Note
                    </button>
                    <button>
                        <Edit2Icon className='inline h-4 w-4 mr-1' />
                        Edit Note
                    </button>
                    <button onClick={(e) => handleDelete(e, note._id)}>
                        <Trash2Icon className='inline h-4 w-4 mr-1' />
                        Delete Note
                    </button>
                </div>
            </div>

        </div>
    </Link>
}

export default NoteCard