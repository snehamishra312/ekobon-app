import React from "react";
// Customizable Area Start
import HotelBookingController, {
    Props,
} from "./HotelBookingController.web";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import { HotelBookingIcon } from '../../assets';

export default class HotelBooking extends HotelBookingController {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {
            country,
            hotelRating,
            totalOffset,
        } = this.state;
        return (
            <div>

                <div className="ct_main_bg">
                    <div className="container-fluid">

                        <div className="ct_login_bg">
                            <h2 className="ct_logo text-center">EKOBON</h2>
                            <form>
                                <div className="ct_header text-center">
                                    <h4>Make a Reservation</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <div className="ct_left_form">
                                            <img src={HotelBookingIcon} width="400" height="700"></img>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <div className="ct_right_form">
                                            <div className="form-group">
                                                <label className="ct_label">Country</label>
                                                <input type="text" required className="form-control" value={country} onChange={(e) => this.setState({ country: e.target.value })} />
                                            </div>

                                            <div className="form-group">
                                                <label className="ct_label">Hotel Rating</label>
                                                <input type="text" required className="form-control" value={hotelRating} onChange={(e) => this.setState({ hotelRating: e.target.value })} />
                                            </div>

                                            <div className="ct_calculator_btn">
                                                <button onClick={(e) => this.onHandleSubmit(e)} value="button">Calculate Total Offset</button>
                                            </div>

                                            <div className="row justify-content-end">
                                                <div className="col-md-6 mb-4 mb-md-0 ">
                                                    <div className="form-group">
                                                        <p style={{ fontWeight: "600px", textAlign: "end" }}><strong>Total Offset &nbsp;&nbsp;&nbsp;{totalOffset ? totalOffset : 0}</strong> </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <input className="btn ct_submit_btn mt-2 disableed mx-auto d-block mt-5 " id="submit" name="submit" type="submit" onClick={(e) => this.onHandlePayment(e)} value="Submit" ></input>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
