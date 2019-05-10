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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[caption]', this.state.body);
    if (this.state.photoFile) {
      formData.append('post[photo]', this.state.photoFile);
    }
    this.props.createPost(formData)
      .then(() => this.props.fetchUser(this.state.user_id))
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

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <div className="create-post-container">
        <h1>Create a post</h1>
        {preview}
        <form onSubmit={this.handleSubmit}> 
          <input type="file" onChange={this.handleFile}/>
          <input type="text" onChange={this.handleCaption} placeholder="Caption"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Upload;