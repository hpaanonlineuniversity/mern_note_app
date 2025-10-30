import { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";
import axios from "axios";
import Toast from "react-hot-toast";


const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState (false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes');
      //console.log("Fetched notes:", response.data);
      setNotes(response.data); // Successfully fetched notes, update state
      setIsRateLimited(false); // Reset rate limit state on success
      setLoading(false); // Set loading to false after data is fetched

    } catch (error) {
      console.error("Error fetching notes:", error); // Log the full error for debugging
      console.log(error.response.status);
      // Check if the error response exists and if the status code is 429
      if (error.response && error.response.status === 429) {
        setIsRateLimited(true);
        Toast.error("You are being rate limited. Please try again later.");
      }
      // Handle other types of errors 
      else {
        Toast.error("An error occurred while fetching notes.");
      }
    }
    // Ensure loading is set to false in case of error as well
    // so that the loading state is properly managed
    // This can also be done in a finally block
    finally {
      setLoading(false);  
    };
  };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 ">Notes</h1>
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}
        {!loading && notes.length === 0 && (
          <div className="text-center text-secondary py-10">No notes available.</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>

      </div>
     </div>
  
    
  );
};

export default HomePage;