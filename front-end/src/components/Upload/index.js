import React from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

const Upload = () => {
  return (
    <Dropzone accept="image/*" onDropAccepted={() => {}}>
      { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          Jogue seus arquivos aqui
        </DropContainer>
      ) }
    </Dropzone>
  );
}

export default Upload;
