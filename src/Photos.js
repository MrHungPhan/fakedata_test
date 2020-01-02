import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "./services";

function Photos() {
  const { idAlbum } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("didmount photo");
    setLoading(true);
    request
      .get(`albums/${idAlbum}/photos`)
      .then(res => {
        const { data } = res;
        setPhotos(data.filter(it => it.albumId.toString() === idAlbum ));
        setLoading(false);
      })
      .catch(errors => console.log(errors));
  }, [idAlbum]);

  function renderPhotos() {
    return photos.map(it => {
      return (
        <div key={it.id} >
          <p>- {it.title}</p>
          <img src={it.thumbnailUrl} alt="" />
        </div>
      );
    });
  }

  return (
    <div>
      <h1>Photo List</h1>
      {loading && <p>Loading...</p>}
      {!loading && renderPhotos()}
    </div>
  );
}

export default Photos;
