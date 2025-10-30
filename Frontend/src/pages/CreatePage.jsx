import Navbar from "../components/Navbar"
import RateLimitedUI from "../components/RateLimitedUI";
import { useState } from "react";
import axios from "axios";
import Toast, { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();


    setLoading(true);
    try {
      const response = await axios.post('/api/notes', { title, content });
      Toast.success("Note created successfully!");
      setTitle("");
      setContent("");
      setIsRateLimited(false); // Reset rate limit state on success
      navigate("/");
    } catch (error) {
      console.error("Error creating note:", error);
      if (error.response && error.response.status === 429) {
        setIsRateLimited(true);
        Toast.error("You are being rate limited. Please try again later.");
      } else {
        Toast.error("An error occurred while creating the note.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div>
        <Link to="/" className="text-blue-500 hover:underline p-4 inline-block">← Back to Home</Link> 
      </div>

      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Create a New Note</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows="6"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Note'}
          </button>
        </form>
      </div>
    </div>  
  )
}

export default CreatePage
