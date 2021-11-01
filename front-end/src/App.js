import GlobalStyle from './styles/global';
import { Container, Content } from './styles';
import Upload from './components/Upload';
import FileList from './components/FileList';
import { Component } from 'react';

class App extends Component {

  state = {
    uploadedFiles: [],
  };

  handleUpload = files => {
    console.log(files);
  };

  render() {
    return (
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          <FileList />
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
