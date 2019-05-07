import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: this.props.currentUser.bio || "",
      photoFile: null, 
      photoUrl: this.props.currentUser.profile
    }
    
    // debugger
    this.handleBio = this.handleBio.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBio(e) {
    e.preventDefault();
    this.setState({
      bio: e.target.value
    })
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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[bio]', this.state.bio);
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }
    this.props.updateUser(formData).then(() => this.props.history.push('/profile'));
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : <img src='user.png'/>;

    return (
      <div className="edit-profile-container">
        <h1>Edit Profile</h1>
        <form className="edit-form" onSubmit={this.handleSubmit}>
          {preview}
          <label>Profile: 
            <input type="file" onChange={this.handleFile}/>
          </label>
          <label>Bio:
            <textarea onChange={this.handleBio} cols="30" rows="10"></textarea>
          </label>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default EditProfile;