import { useEffect } from 'react';

export const ArtistsList = () => {
  const fetchArtists = async () => {
    try {
      const data = await fetch('http://127.0.0.1:8000/api/artists/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return <div></div>;
};
