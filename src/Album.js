import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from './services';

function Album() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    console.log("didmount album");
    request
      .get("albums")
      .then(res => {
        const { data } = res;
        setAlbums(data);
      })
      .catch(error => console.log(error));

      return () => {
      }
  }, []);

  function renderAlbums() {
    return albums.map(it => {
      return (
        <li onClick={() => {}} key={it.id}>
          <Link to={`/${it.id}/photos`}>{it.title}</Link>
        </li>
      );
    });
  }

  return <div>
      <h1>Album List</h1>
      {renderAlbums()}
    </div>;
}

export default Album;
