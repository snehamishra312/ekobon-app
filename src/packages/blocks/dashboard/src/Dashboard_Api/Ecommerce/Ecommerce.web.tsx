import React from "react";
// Customizable Area Start
import EcommerceController, {
    Props,
} from "./EcommerceController.web";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';

export default class Ecommerce extends EcommerceController {
    constructor(props: Props) {             
        super(props);
    }
    render() {
        const {
            refcode,
            totalOffset,
        } = this.state;
        return (
            <div>
                <div className="ct_main_bg">
                    <div className="container-fluid">
                      <div className="row ">
                        <div className="col-md-8 mx-auto">
                        <div className="ct_login_bg py-4 px-3">
                            <h2 className="ct_logo text-center mb-5">EKOBON</h2>
                            <form>
                                <div className="ct_header text-center">
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <div className="ct_left_form">
                                            <img src="https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/qqpihxzv8uzlvqynolkk5lkqc0kk/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22authImg.jpg%22%3B%20filename%2A%3DUTF-8%27%27authImg.jpg&response-content-type=image%2Fjpeg" width="500" height="500"></img>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <div className="ct_right_form">
                                    
                                            <div className="form-group">
                                                <label className="ct_label">REf code</label>
                                                <input type="text" required className="form-control" value={refcode} onChange={(e) => this.setState({ refcode: e.target.value })} />
                                            </div>

                                            <div className="ct_calculator_btn" >
                                                <button onClick={(e) => this.onHandleSubmit(e)} value="button">Calculate offset</button>
                                            </div>
                                            <div className="row justify-content-end">
                                                <div className="col-md-6 mb-4 mb-md-0 ">
                                                    <div className="form-group">
                                                        <p style={{ fontWeight: "600px", textAlign:"end" }}><strong>Total Offset &nbsp;&nbsp;&nbsp;{totalOffset ? totalOffset : 0}</strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <input className="btn ct_submit_btn mt-2 disableed mx-auto d-block mt-4 " id="submit" name="submit" type="submit" onClick={(e) => this.onHandlePayment(e)} value="Submit" ></input>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>

                      </div>
                    </div>
                </div>
            </div>
        );
    }
}
