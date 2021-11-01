import React from 'react';

import { Container, FileInfo, Preview } from './styles';

const FileList = () => {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview src="" />
          <div>
            <strong>profile.png</strong>
            <span>64kb <button onClick={() => {}}>Excluir</button></span>
          </div>
        </FileInfo>


      </li>
    </Container>
  );
}

export default FileList;
