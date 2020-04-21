import React from 'react';
import Textarea from 'react-textarea-autosize';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      photoFile: null,
      photoUrl: null,
      body: "",
      error: false
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCaption = this.handleCaption.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    if (this.state.error) return;

    e.preventDefault();
    const formData = new FormData();
    formData.append('post[caption]', this.state.body);

    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }

    this.props.createPost(formData)
      .then(() => this.props.history.push('/posts'));
  }

  handleCaption(e) {
    this.setState(
      {
        body: e.currentTarget.value
      }
    )
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    if (file === undefined || file.type.split("/")[0] !== 'image') {
      this.setState({
        photoFile: null,
        photoUrl: null,
        body: "",
        error: true
      });
    } else {
      reader.onloadend = () => {
        this.setState({
          photoFile: file, 
          photoUrl: reader.result,
          error: false
        });
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }

  renderErrors() {
    return (
      this.props.errors.map((error, i) => (
        <div className="upload-post-error" key={`error-${i}`}>
          <span>{error}</span>
        </div>
      ))
    );
  }

  renderPreview() {
    const preview = this.state.photoUrl;

    if (preview) {
      return <img src={this.state.photoUrl} />;
    } else if (this.state.error) {
      return (
        <div className="upload-post-error">
          <span>Wrong file uploaded, it must be an image file</span>
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div className="create-post-container">
        <h1>Create a post</h1>
        <div className="preview-container">
        {this.renderPreview()}
        </div>
        <div className="post-form-container">
          <form className="post-form" onSubmit={this.handleSubmit}> 
            <div className="file-input">
              <input type="file" id="file" onChange={this.handleFile}/>
              <label htmlFor="file" className="btn">upload picture</label>
            </div>
            <div className="text-input">
              <Textarea className="text" rows="4" onChange={this.handleCaption} placeholder="Add your caption..."></Textarea>
            </div>
            <button className="submit-btn">Post It</button>
          </form>
        </div>
        {this.renderErrors()}
      </div>
    )
  }
}

export default Upload;