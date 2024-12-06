import React, { useState } from "react";
import axios from "axios";

function App() {
  const [genre, setGenre] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const generatePlaylist = async () => {
    if (!genre) {
      setError("Please select a genre!");
      return;
    }

    setLoading(true);
    setError("");
    setPlaylist([]); // Clear playlist during loading
    try {
      const response = await axios.get(
        `https://backend-ne7e.onrender.com/ ${genre}`
      );
      setPlaylist(response.data.playlist);
    } catch (err) {
      setError("Failed to fetch playlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E1B2B] text-white flex flex-col items-center">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-600">
        <div className="flex items-center space-x-2">
          {/* GitHub Link */}
          <a
            href="https://github.com/your-repo-url" // Replace with your GitHub repository URL
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
        <button className="flex items-center space-x-2 font-semibold">
          Logout
        </button>
      </header>

      <main className="flex flex-col items-center mt-12 px-4 w-full">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 flex items-center space-x-2">
          <span>Spotify AI</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="Spotify"
            className="w-8 h-8"
          />
        </h1>

        {/* Select and Button */}
        <div className="flex items-center space-x-4 mb-6">
          <select
            className="px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={genre}
            onChange={handleGenreChange}
          >
            <option value="">Select Genre</option>
            <option value="Pop">Pop</option>
            <option value="Jazz">Jazz</option>
            <option value="Rock">Rock</option>
            <option value="Afrobeats">Afrobeats</option>
            <option value="Amapiano">Amapiano</option>
            <option value="Ragg">Raggae</option>
            <option value="Hip-hop">Hip-hop</option>
          </select>
          <button
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700"
            onClick={generatePlaylist}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Playlist"}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center mt-6">
            <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Playlist */}
        {playlist.length > 0 && !loading && (
          <div className="flex justify-center mt-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              {playlist.map((song, index) => (
                <li
                  key={index}
                  className="bg-white text-[#0E1B2B] px-4 py-2 rounded-md shadow-md"
                >
                  <strong>{song.title}</strong> by {song.artist}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
