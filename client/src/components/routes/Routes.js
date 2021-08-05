import React, { Component } from 'react';
import AuthRoutes from './AuthRoutes';
import DashboardRoutes from './DashboardRoutes'
import { connect } from 'react-redux'
 

class Routes extends Component {

  render() {
        if(this.props.token){
            // window.location.assign('/dashboard')
            return(
                <DashboardRoutes/>
            )
        }else{
            return(
                <AuthRoutes/>
            )
        }
    }
}

const mapStateToProps = state => ({
    token:state.auth.token
});
  
export default connect(mapStateToProps,{})(Routes);
// export default Routes;