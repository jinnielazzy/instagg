import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      photoFile: null,
      photoUrl: null,
      body: ""
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCaption = this.handleCaption.bind(this);
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[caption]', this.state.body);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.createPost(formData)
      // .then(() => this.props.fetchUser(this.state.user_id))
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

    reader.onloadend = () => {
      this.setState({
        photoFile: file, 
        photoUrl: reader.result
      })
    };

    if (file) {
      reader.readAsDataURL(file);
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

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <div className="create-post-container">
        <h1>Create a post</h1>
        <div className="preview-container">
          {preview}
        </div>
        <div className="post-form-container">
          <form className="post-form" onSubmit={this.handleSubmit}> 
            <div className="file-input">
              <input type="file" id="file" onChange={this.handleFile}/>
              <label htmlFor="file" className="btn">upload picture</label>
            </div>
            <div className="text-input">
              <textarea className="text" rows="4" onChange={this.handleCaption} placeholder="Add your caption..."></textarea>
            </div>
            <input className="submit-btn" type="submit" value="Post It"/>
          </form>
        </div>
        {this.renderErrors()}
      </div>
    )
  }
}

export default Upload;