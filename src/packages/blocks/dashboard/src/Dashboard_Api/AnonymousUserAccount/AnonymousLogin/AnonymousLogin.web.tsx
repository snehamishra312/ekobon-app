import React from "react";
import AnonymousLoginController, {
    Props,
} from "./AnonymousLoginController.web";
import '../../Style/Demo.css';
import '../../Style/Core.css';
import '../../Style/Flight.css';
import '../../Style/Signup.css';
import '../../Style/theme.css';
export default class AnonymousLogin extends AnonymousLoginController {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {
            email,
            password
        } = this.state;
        return (
            <div className="ct_main_bg">
                <div className="container-fluid">
                    <div className="ct_login_bg">
                        <form>
                            <div className="ct_header">
                                <h4>Welcome!</h4>
                                <p>
                                    We're working on integrating ekobon. <a href="#">Learn more.</a>
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="ct_left_form">
                                        <img src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/qqpihxzv8uzlvqynolkk5lkqc0kk/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22authImg.jpg%22%3B%20filename%2A%3DUTF-8%27%27authImg.jpg&response-content-type=image%2Fjpeg" height="500"></img>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="ct_right_form">
                                        <div className="form-group">
                                            <label className="ct_label">Username</label>
                                            <input type="text" className="form-control" value={email} onChange={(e) => this.setState({ email: e.target.value })} />
                                        </div>
                                        <div className="form-group mb-2 ">
                                            <label className="ct_label">Password</label>
                                            <input type="password" className="form-control" value={password} onChange={(e) => this.setState({ password: e.target.value })} />
                                        </div>
                                        <div className="d-flex align-items-center gap-2 ct_check_terms" >
                                            <input type="checkbox" />
                                            <label>Trust this device for 30 days</label>
                                        </div>

                                        <input className="btn ct_submit_btn mt-4 disableed " id="submit" name="submit" type="submit" value="Log in" onClick={(e) => this.onHandleLoginSubmit(e)}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-footer mt-5 text-sm">
                                <p className="mb-4">Need an account?
                                    <a href="/api/anonymous/register" title="Need an account?" className="ml-1" data-qa-create-account="">Sign up here.</a>
                                </p>
                                Forgot your
                                <a href="/api/anonymous/forgot/password" title="Forgot username?" data-qa-forgot-username="">
                                    {" "}password</a>?
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
