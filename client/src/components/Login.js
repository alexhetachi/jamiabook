import React, { Component } from 'react';
import '../styles/commonauth.css'
import '../styles/loginseperate.css'
import { connect } from 'react-redux';
import { login } from '../actions/authActions';

import Canvas from './animation'

class Login extends Component {

    state = {
        email: '',
        password: '',
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state.email)
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email || !password) {
            this.setState({ msg: 'Please enter all fields.' })
        } else if (email.trim() === '' || password.trim() === '') {
            this.setState({ msg: 'Invalid fields.' })
        } else if (reg.test(email) === false) {
            this.setState({ msg: 'Invaild email.' })
        } else if (password.length < 5 || password.length > 25) {
            this.setState({ msg: 'Password must contain 5-25 characters.' })
        } else {
            this.setState({ msg: null })
            const user = {
                email: this.state.email,
                password: this.state.password
            };
            this.props.login(user)
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
            <div className="html">
                <div className="body">
                    <div className="row myrow">
                        <div className="col-md-6 center">
                            <img src="images/connect.png" alt="" className="logo" />

                            <p className="desc">Welcome to the awesome world <br />inside <br />♥ JAMIA MILLIA ISLAMIA ♥</p>
                            {/* <canvas id="cnv"></canvas> */}
                            <Canvas />
                        </div>

                        <div class="col-md-6 center">
                            <form method="post" class="right" onSubmit={this.onSubmit}>
                                <h1 class="heading">Log In</h1>
                                {/* <br/> */}
                                <p id="err">{this.state.msg}</p>
                                <input name="email" type="text" class="frm" placeholder="Email Address" onChange={this.onChange} />
                                <br />
                                <input name="password" type="password" class="frm" placeholder="Password" onChange={this.onChange} />

                                <button type="submit" class="loginbtn">Log In</button>
                                <br />
                                <a class="loginuser" href="/signup">Not a User? Sign Up Instead</a>

                            </form>
                        </div>
                    </div>

                </div>
                {/* <Canvas /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error.msg
});

export default connect(mapStateToProps, { login })(Login);
// export default Login;
