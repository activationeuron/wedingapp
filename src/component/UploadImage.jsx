import React, { useState } from 'react';
function UploadImage() {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChange = async (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);

      const blob = new Blob(
        [e.target.files[0]],
        { type: e.target.files[0].type },
        'test.pas'
      );
      let fileData = await blob.arrayBuffer();
      console.log(fileData);
    }
  };

  return (
    <div>
      <div>
        <div>Home</div>
        <input type='file' name='' id='' onChange={onChange} />
      </div>
    </div>
  );
}

export default UploadImage;
