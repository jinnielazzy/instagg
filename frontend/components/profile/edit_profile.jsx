import React from 'react';
import Textarea from 'react-textarea-autosize';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: this.props.currentUser.bio || "",
      photoFile: null, 
      photoUrl: this.props.currentUser.profile
    }
    
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
        <form className="edit-form" onSubmit={this.handleSubmit}>
          <div className="edit-profile-img">
            <div className="img">
              {preview}
            </div>
            <div className="img-input">
              <input type="file" id="file" onChange={this.handleFile}/>
              <label htmlFor="file" className="btn">upload profile</label>
            </div>
          </div>
          <div className="edit-profile-bio">
            <div className="bio-input">
              <Textarea onChange={this.handleBio} id="bio-update" placeholder="Update your bio..."></Textarea>
            </div>
          </div>
          <input className="submit-btn" type="submit" value="Update It" />
        </form>
      </div>
    )
  }
}

export default EditProfile;