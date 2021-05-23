import React, { Component } from 'react';
import Posts from './post/Posts';
import { connect } from 'react-redux'
// import '../styles/dashboard.css'

class Sidebar extends Component{
    render(){
        return(
            <div class="navbarjs">
                <div class="row" style={{marginTop: '50px'}}>
                <div class="col-md-3 hidden-in-mob" style={{padding: '0'}}>
                    <div class="left-upper">
                        {/* <img src="images/college.png" class="wall" alt=""/> */}
                        <img src={this.props.user?this.props.user.backprofile_imgsrc:''} class="wall" alt=""/>
                        <br/>
                        {/* <img src="images/user.png" class="logo" alt=""/> */}
                        <img src={this.props.user?this.props.user.profile_imgsrc:''} class="logo" alt=""/>
                        <br/>
                        <strong>{this.props.user?this.props.user.fname:''} {this.props.user?this.props.user.lname:''} <br/>({this.props.user?this.props.user.branch:''}, {this.props.user?this.props.user.semester:''})</strong>
                        <hr style={{marginTop: '10px', backgroundColor: 'white'}}/>
                        <strong>Notifications</strong>
                        <hr style={{margin: '10px', backgroundColor: 'white'}}/>
                        
                        <div class="left-lower">
                            <div class="notifications">Notofications 1</div>
                            <div class="notifications">Notofications 2</div>
                            <div class="notifications">Notofications 3</div>
                            <div class="notifications">Notofications 4</div>
                            <div class="notifications">Notofications 5</div>
                            <div class="notifications">Notofications 5</div>
                            <div class="notifications">Notofications 6</div>
                            <div class="notifications">Notofications 7</div>
                            <div class="notifications">Notofications 8</div>
                            <div class="notifications">Notofications 9</div>
                            <div class="notifications">Notofications 10</div>
                            <div class="notifications">Notofications 11</div>
                            <div class="notifications">Notofications 12</div>
                            <div class="notifications">Notofications 13</div>
                            <div class="notifications">Notofications 14</div>
                            <div class="notifications">Notofications 15</div>  
                        </div>
                        

                    </div>
                </div>
                {/* posts here */}

                <Posts/>
                
                <div class="col-md-3 hidden-in-mob" style={{padding: '0'}}>
                    <div class="right">
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 1</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 2</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 3</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 4</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 5</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 6</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 7</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 8</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 9</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 10</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 11</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 12</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 13</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 14</div>
                    <div class="contact"><img src="Images/user.png" class="contact-img" alt=""/>&nbsp;&nbsp;Contact user 15</div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user:state.auth.user,
});

export default connect(mapStateToProps,{})(Sidebar);
// export default Sidebar;