import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, loginUser } from '../actions'

import '../components/login/Login.css';

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            default: 'active',
            default_content: 'block',
            email: '',
            password: '',
            retypepassword: '',
            isTrue: '',
            messageisTrue: '',
            statusUser: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClick(index) {
        this.setState({
            index
        })
        if (index !== 0) {
            this.setState({
                default: '',
                default_content: 'none'
            })
        } else {
            this.setState({
                default: 'active',
                default_content: 'block'
            })
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        })
    }

    handleSubmitRegister(event) {
        if (this.state.email && this.state.password && this.state.retypepassword) {
            this.props.addUser(this.state.email, this.state.password, this.state.retypepassword)
            this.setState({ email: '', password: '', retypepassword: '' })
        }
        event.preventDefault();
    }

    handleSubmitLogin(event) {
        if (this.state.email && this.state.password) {
            this.props.loginUser(this.state.email, this.state.password)
            this.setState({ email: '', password: '' })
        }
        event.preventDefault();
    }

    render() {
        const status = this.props.data.map(item => item.status)
        console.log(status[0])
        return (
            <div className="panel panel-login">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-6">
                            <button onClick={() => this.handleClick(0)} className={this.state.default} id="login-form-link">Login</button>
                        </div>
                        <div className="col-xs-6">
                            <button onClick={() => this.handleClick(1)} className={this.state.index === 1 ? 'active' : ''} id="register-form-link">Register</button>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={status[0] || status[0] === undefined ? 'd-none' : 'alert alert-danger'} role="alert">
                                Email or Password Wrong!
                            </div>
                            <form id="login-form" onSubmit={this.handleSubmitLogin} style={{ display: this.state.default_content }}>
                                {/* <div className={this.state.isTrue} role="alert">
                                    {this.state.messageisTrue}
                                </div> */}
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="email"
                                        // id="email"
                                        tabIndex="1"
                                        className="form-control"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        // id="password"
                                        tabIndex="2"
                                        className="form-control"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6 col-sm-offset-3">
                                            <input type="submit" name="login-submit" id="login-submit" tabIndex="4" className="form-control btn btn-login" value="Log In" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <form id="register-form" onSubmit={this.handleSubmitRegister} style={{ display: this.state.index === 1 ? 'block' : 'none' }}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        tabIndex="1"
                                        className="form-control"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        tabIndex="2"
                                        className="form-control"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="retypepassword"
                                        id="confirm-password"
                                        tabIndex="3"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        value={this.state.retypepassword}
                                        onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6 col-sm-offset-3">
                                            <input type="submit" name="register-submit" id="register-submit" tabIndex="4" className="form-control btn btn-register" value="Register Now" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.users
})

const mapDispatchToProps = dispatch => ({
    addUser: (email, password, retypepassword) => dispatch(addUser(email, password, retypepassword)),
    loginUser: (email, password) => dispatch(loginUser(email, password))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginBox)