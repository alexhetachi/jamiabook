import React, { Component } from 'react';
import '../../styles/dashboard.css'
// import ScriptTag from 'react-script-tag';
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'

class Navbar extends Component{

    render(){
        return(
            <div className='navbarjs'>
                {/* <ScriptTag type="text/javascript" src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" />
                <ScriptTag type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"/> */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
                {/* <!-- Navbar --> */}
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" style={{paddingTop: '0', paddingBottom: '0'}}>
                    <div class="container-fluid" style={{paddingLeft: '5px', paddingRight: '5px'}}>
                        <a class="navbar-brand" href="#"><img src="Images/connect.png" alt="" style={{height: '30px'}}/>&nbsp;&nbsp;JamiaBook</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-secondary" type="submit">Search</button>
                        </form>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <ul class="navbar-nav me-auto mb-0 mb-lg-0">

                            <div class="btn-group btn-group-lg mx-auto" style={{height: '40px', marginTop: '5px'}} role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onclick="window.location.href='index.html'" checked/>
                            <label class="btn btn-outline-secondary btn-sm" style={{paddingTop: '5px'}} for="btnradio1">Feed</label>
                            
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onclick="window.location.href='chat.html'"/>
                            <label class="btn btn-outline-secondary btn-sm" style={{paddingTop: '5px'}} for="btnradio2">Global Chat</label>
                            
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"  onclick="window.location.href='news.html'"/>
                            <label class="btn btn-outline-secondary btn-sm" style={{paddingTop: '5px'}} for="btnradio3">News</label>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <button class="btn btn-outline-secondary text-nowrap btn-sm" type="button" style={{marginTop: '5px', marginBottom: '5px', paddingTop: '0', paddingBottom: '0', height: '38px'}} onclick="window.location.href='me.html'">
                            <img src="Images/user.png" style={{height: '36px', margin: '0', borderRadius: '50%', backgroundColor: 'green'}} alt=""/>&nbsp;&nbsp;{this.props.user?this.props.user.fname:''} {this.props.user?this.props.user.lname:''}
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                            <li class="nav-item dropdown" style={{height: '38px', marginTop: 'auto', marginBottom: 'auto'}}>
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                            <ul class="dropdown-menu mr-0" aria-labelledby="navbarDropdown">
                                {/* <!-- <li><a class="dropdown-item" href="#">Profile</a></li> --> */}
                                <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                                <li><a class="dropdown-item" href="#">Notifications</a></li>
                                <li><a class="dropdown-item" href="#">Instructions</a></li>
                                <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                                <li><a class="dropdown-item" onClick={this.props.logout} style={{cursor:'pointer'}}>Logout</a></li>
                            </ul>
                            </li>
                        </ul>          
                        </div>
                    </div>
                    </nav>

                {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script> */}
            {/* <Sidebar/> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user:state.auth.user,
});

export default connect(mapStateToProps,{logout})(Navbar);
// export default Navbar;