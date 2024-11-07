import React from "react";
// Customizable Area Start
import AnonymousForgotPasswordController, {
    Props,
} from "./AnonymousForgotPasswordController.web";
import '../../Style/Demo.css';
import '../../Style/Core.css';
import '../../Style/Flight.css';
import '../../Style/Signup.css';
import '../../Style/theme.css';

export default class AnonymousForgotPassword extends AnonymousForgotPasswordController {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {
            userName
        } = this.state;
        return (
            <div>
                <div className="ct_main_bg">
                    <div className="container-fluid">
                        <div className="ct_login_bg ct_width_400">
                            <form>
                                <div className="ct_header  text-center">
                                    <h4 className='ct_font_18'>Reset Password</h4>
                                    <p>
                                        We'll email you instructions to reset your password.
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 mb-4 mb-md-0">
                                        <div className="ct_right_form border-0 ps-0 ms-0" >
                                            <div className="form-group">
                                                <label className="ct_label">Username</label>
                                                <input type="text" className="form-control" value={userName} onChange={(e) => this.setState({ userName: e.target.value })} />
                                            </div>
                                            <div className='text-center'>
                                                <input className="btn ct_submit_btn mt-2 disableed mx-auto" onClick={(event) => this.onHandleSubmit(event)} id="submit" name="submit" type="submit" value="Reset Password"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-footer mt-4 text-sm text-center">
                                <a href="/api/anonymous/login" title="Forgot username?" data-qa-forgot-username="">
                                    Login </a>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
