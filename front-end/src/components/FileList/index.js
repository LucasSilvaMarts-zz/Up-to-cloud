import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

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

        <div>
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: '#7159c1' }
            }}
            strokeWidth={10}
            percentage={60}
          />
        </div>
      </li>
    </Container>
  );
}

export default FileList;
