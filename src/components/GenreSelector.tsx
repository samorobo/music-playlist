// import React, { useState } from 'react';
// import axios from 'axios';

// const GenreSelector = ({ setPlaylist }) => {
//     const [genre, setGenre] = useState('');

//     const handleGenerate = async () => {
//         if (!genre) return alert('Please select a genre');

//         try {
//             const response = await axios.post('http://127.0.0.1:5000/api/playlist', { genre });
//             setPlaylist(response.data.playlist);
//         } catch (error) {
//             console.error(error);
//             alert('Failed to generate playlist');
//         }
//     };

//     return (
//         <div>
//             <select value={genre} onChange={(e) => setGenre(e.target.value)}>
//                 <option value="">Select Genre</option>
//                 <option value="Pop">Pop</option>
//                 <option value="Jazz">Jazz</option>
//                 <option value="Rock">Rock</option>
//             </select>
//             <button onClick={handleGenerate}>Generate Playlist</button>
//         </div>
//     );
// };

// export default GenreSelector;





import React from 'react';

// const GenreDropdown = ({ genres, onChange }: { genres: string[]; onChange: (genre: string) => void }) => (
//     <select onChange={(e) => onChange(e.target.value)} className="p-2 border rounded">
//         <option value="">Select a Genre</option>
//         {genres.map((genre) => (
//             <option key={genre} value={genre}>
//                 {genre}
//             </option>
//         ))}
//     </select>


const GenreDropdown = ({ genres, onChange }: { genres: string[]; onChange: (genre: string) => void; }) => {
    // Component logic
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            {genres.map((genre, index) => (
                <option key={index} value={genre}>
                    {genre}
                </option>
            ))}
        </select>
    );
};

);

export default GenreDropdown;