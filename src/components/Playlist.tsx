// import React from 'react';

// const Playlist = ({ playlist }) => {
//     return (
//         <div>
//             <h2>Generated Playlist</h2>
//             <ul>
//                 {playlist.map((song, index) => (
//                     <li key={index}>
//                         <strong>{song.title}</strong> by {song.artist}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Playlist;

import React from "react";

const PlaylistDisplay = ({ playlist }: { playlist: { title: string; artist: string }[] }) => (
    <ul className="list-disc pl-5">
        {playlist.map((song, index) => (
            <li key={index}>
                <strong>{song.title}</strong> by {song.artist}
            </li>
        ))}
    </ul>
);

export default PlaylistDisplay;
