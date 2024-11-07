import React from "react";
// Customizable Area Start
import AnonymousRegistrationController, {
    Props,
} from "./AnonymousRegistrationController.web";
import '../../Style/Demo.css';
import '../../Style/Core.css';
import '../../Style/Flight.css';
import '../../Style/Signup.css';
import '../../Style/theme.css';

export default class AnonymousRegistration extends AnonymousRegistrationController {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {
            firstName,
            LastName,
            country,
            phoneNumber,
            email,
            password
        } = this.state;

        return (
            <>
                <div className="ct_main_bg">
                    <div className="container-fluid">
                        <div className="ct_login_bg">
                            <h2 className="ct_logo text-center">EKOBON</h2>
                            <form>
                                <div className="ct_header text-center">
                                    <h4>Create your account</h4>
                                    <p>
                                        We're working on integrating ekobon <a href="#">Learn more.</a>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="ct_left_form">
                                            <img src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/qqpihxzv8uzlvqynolkk5lkqc0kk/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22authImg.jpg%22%3B%20filename%2A%3DUTF-8%27%27authImg.jpg&response-content-type=image%2Fjpeg" width="500" height="500"></img>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <div className="ct_right_form">
                                            <h5>
                                                Sign up with Ekobon
                                            </h5>
                                            <div className="form-group">
                                                <label className="ct_label">First Name</label>
                                                <input type="text" required className="form-control" onChange={(e) => this.setState({firstName : e.target.value })} value={firstName} />
                                            </div>

                                            <div className="form-group">
                                                <label className="ct_label">Last Name</label>
                                                <input type="text" required className="form-control" onChange={(e) => this.setState({ LastName: e.target.value })} value={LastName} />
                                            </div>

                                            <div className="form-group">
                                                <label className="ct_label">Email</label>
                                                <input type="text" required className="form-control" onChange={(e) => this.setState({ email: e.target.value })} value={email} />
                                            </div>

                                            <div className="form-group">
                                                <label className="ct_label">Password</label>
                                                <input type="password" required className="form-control" onChange={(e) => this.setState({ password: e.target.value })} value={password} />
                                            </div>

                                            <div className="form-group">
                                                <label className="ct_label">Phone Number</label>
                                                <input type="text" required className="form-control" onChange={(e) => this.setState({ phoneNumber: e.target.value })} value={phoneNumber} />
                                            </div>

                                            <div className="form-group">
                                                <label className="ct_label">Country</label>
                                                <input type="text" required className="form-control" onChange={(e) => this.setState({ country: e.target.value })} value={country} />
                                            </div>
                                            <input className="btn ct_submit_btn mt-2 disableed mx-auto d-block mt-5 " id="submit" name="submit" type="submit" value="SignUp" onClick={(e) => this.onHandleSubmit(e)}></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-footer text-sm text-center mt-5">
                                    <p className="mb-4">
                                        By providing your email address or using a single sign-on provider to create an account, you agree to our <a href="https://www.linode.com/legal" title="Terms of Service" target="__blank">Terms of Service</a>
                                        and that you have reviewed our <a href="https://www.linode.com/legal-privacy" title="Privacy Policy" target="__blank">Privacy Policy</a> and <a href="https://www.linode.com/legal-cookies" title="Cookie Policy" target="__blank">Cookie Policy</a>.
                                    </p>
                                    <p>
                                        Already have an account?
                                        <a href="/api/anonymous/login" title="Log in" data-qa-log-in="">Log in</a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
