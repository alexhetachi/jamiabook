import React, { Component } from 'react';
// import ScriptTag from 'react-script-tag/lib/ScriptTag';
import '../styles/signupseperate.css'
import '../styles/commonauth.css'
import { connect } from 'react-redux';
import { signup } from '../actions/authActions';

import Canvas from './animation'

class SignUp extends Component {

    state = {
        fname: '',
        lname: '',
        email: '',
        password: '',
        gender: '',
        dob: '',
        branch: '',
        semester: '',
        msg: null,
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state.email)
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { fname, lname, email, password, gender, dob, branch, semester } = this.state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (!fname || !lname || !email || !password || !gender || !dob || !branch || !semester || branch === '--Branch--' || semester === '--Semester--') {
            this.setState({ msg: 'Please enter all fields.' })
        } else if (fname.trim() === '' || lname.trim() === '' || email.trim() === '' || password.trim() === '') {
            this.setState({ msg: 'Invalid fields.' })
        } else if (fname.length < 3 || fname.length > 10 || lname.length < 3 || lname.length > 10) {
            this.setState({ msg: 'Name must contain 3-10 characters.' })
        } else if (reg.test(email) === false) {
            this.setState({ msg: 'Invaild email.' })
        } else if (password.length < 5 || password.length > 25) {
            this.setState({ msg: 'Password must contain 5-25 characters.' })
        } else {
            const user = {
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                password: this.state.password,
                gender: this.state.gender,
                dob: this.state.dob,
                semester: this.state.semester,
                branch: this.state.branch,
                profile_imgsrc: './images/user.png',
                backprofile_imgsrc: './images/college.png',
                address: 'not given',
                phoneno: 'null'
            };
            console.log(user)
            this.props.signup(user)

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.error !== this.props.error) { //illogical but working
            // console.log('worked: '+prevProps.error+" 2nd: "+this.props.error)
            this.setState({ msg: this.props.error.msg })
        }
    }

    render() {
        return (
            <div class="html">
                <div class="body">
                    <div class="row myrow">
                        <div class="col-md-6 center">
                            <img src="./images/connect.png" alt="" class="logo" />

                            <p class="desc">Welcome to the awesome world <br />inside <br />♥ JAMIA MILLIA ISLAMIA ♥</p>
                            {/* <canvas id="cnv"></canvas> */}
                            <div class="background-canvas">
                                <Canvas />
                            </div>
                            
                        </div>

                        <div class="col-md-6 center">
                            <form method="post" class="right" onSubmit={this.onSubmit}>
                                <h1 class="heading">Sign Up</h1>
                                {/* <br/> */}
                                <p id="err">{this.state.msg}</p>
                                <input name="fname" type="text" class="fname" placeholder="First Name" onChange={this.onChange} />
                                <input name="lname" type="text" class="lname" placeholder="Last Name" onChange={this.onChange} />
                                <br />
                                <input name="email" type="text" class="frm" placeholder="Email Address" onChange={this.onChange} />
                                <br />
                                <input name="password" type="password" class="frm" placeholder="Password" onChange={this.onChange} />
                                <br />
                                <label class="one">Gender</label>
                                <div class="two">
                                    <input type="radio" id="male" name="gender" value="male" onChange={this.onChange} />
                                    <label for="male" class="gender">Male</label>
                                </div>
                                <div class="three">
                                    <input type="radio" id="female" name="gender" value="female" onChange={this.onChange} />
                                    <label for="female" class="gender">Female</label>
                                </div>

                                <br />
                                <label for="dob">DOB : </label>
                                <input type="date" id="dob" name="dob" onChange={this.onChange} />
                                <br />
                                <select name="branch" id="branch" class="branch" onChange={this.onChange}>
                                    <option>--Branch--</option>
                                    <option>Computer Sciences Engineering</option>
                                    <option>Electronics Engineering</option>
                                    <option>Electrical Engineering</option>
                                    <option>Mechanical Engineering</option>
                                    <option>Civil Engineering</option>
                                </select>
                                <br />
                                <label for="Semester"></label>
                                <select name="semester" id="semester" class="branch" onChange={this.onChange}>
                                    <option>--Semester--</option>
                                    <option>Semester I</option>
                                    <option>Semester II</option>
                                    <option>Semester III</option>
                                    <option>Semester IV</option>
                                    <option>Semester V</option>
                                    <option>Semester VI</option>
                                    <option>Semester VII</option>
                                    <option>Semester VIII</option>
                                    <option>Passout / Alumni</option>

                                </select>
                                <br />

                                <button type="submit" class="signupbtn">Sign Up</button>
                                <br />
                                <a class="loginuser" href="/">Already a User? Log In Instead</a>

                            </form>
                        </div>
                    </div>
                    {/* <br/><br/><br/><br/><br/><br/> */}
                </div>
                {/* <ScriptTag type="text/javascript" src="./animation.js"></ScriptTag> */}
                {/* <Canvas /> */}
            </div>
        )

    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    error: state.error.msg
});

export default connect(mapStateToProps, { signup })(SignUp);
// export default SignUp;
