import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../../actions/postActions';

class AddPost extends Component {

    state={
        myImage:'',
        discp:'',
        msg:null
    }

    onChange = (e) => {
        this.setState({ myImage:e.target.files[0] })
        console.log(e.target.files[0])
        this.setState({ msg:null })
    }

    onTextChange = (e) => {
        this.setState({ discp:e.target.value })
        this.setState({ msg:null })
    }

//  async
    onSubmit = e => {
        e.preventDefault();
        console.log('submitting')
        const formData = new FormData();
        
        formData.append('user_id', this.props.user._id);
        formData.append('fname', this.props.user.fname);
        formData.append('lname', this.props.user.lname);
        formData.append('user_img', this.props.user.profile_imgsrc);
        formData.append('discp', this.state.discp);
        formData.append('myImage', this.state.myImage);
        // console.log(formData.get('user_img'))
        if(!this.state.discp.trim() || !this.state.myImage){
            this.setState({msg:'Please enter all fields.'})
        }else{
            this.setState({msg:null})
            this.props.addPost(formData);
        }
        // this.setState({ discp:'' })
        // this.setState({ myImage:'' })
    }

    componentDidUpdate(prevProps){
        if(prevProps.post != this.props.post){
            if(this.props.post){
                this.setState({ discp:'' })
                this.setState({ msg:null })
            }
        }
    }

    render() {
        return (
            <div>
                <div class="create-post">
                <center><p style={{color:'red'}}><b>{this.state.msg}</b></p></center>
                <form method='post' onSubmit={this.onSubmit}>
                    <img src="Images/user.png" class="user-create-post" alt=""/>
                    <textarea 
                        name="create" 
                        id="textarea" 
                        placeholder="Share Something with the community" 
                        cols="50" 
                        rows="2"
                        onChange={this.onTextChange}
                        value={this.state.discp}
                    />    
                    <input
                        type="file"
                        class="file-input"
                        id="file-choose" 
                        class="extreme-right"
                        name="myImage"
                        onChange={this.onChange}
                        // ref={this.state.myImage}
                    />
                    {/* <label for="file-choose" class="svg-pos"/> */}
                    {/* <table class="extreme-right">
                        <tr>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td><button type="submit" class="submit-button">Post</button></td>
                        </tr>
                    </table> */}
                    <button type="submit" class="submit-button">Post</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user:state.auth.user,
    post:state.post.item,
});

export default connect(mapStateToProps, { addPost })(AddPost);
// export default AddPost;