import React from "react";
// Customizable Area Start
import FlightPageController, {
    Props,
} from "./FlightPageController.web";
import { FlightIcon } from "../../assets"
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';

export default class FlightPage extends FlightPageController {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {
            flight_type,
            dropdown_menu,
            selected_value,
            selected_value2,
            totalOffset
        } = this.state;

        return (
            <div className="ct_main_bg">
                <div className="container-fluid">
                    <div className="ct_login_bg">
                        <form>
                            <div className="ct_header">
                                <h4>Welcome!</h4>
                                <p>
                                    The Sky is Waitnig for you <a href="#">Learn more.</a>
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="ct_left_form">
                                        <img src={FlightIcon} width="400" height="700"></img>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4 mb-md-0">
                                    <div className="ct_right_form">
                                        <div className="row">
                                            <div>
                                                <label className="text-start d-block"> To:</label>
                                                <select className="form-control" style={{ alignItems: "left", padding: "10px" }}
                                                    id="demo-simple-select-helper"
                                                    value={selected_value}
                                                    onChange={(e) => this.handleChange(e)}
                                                >
                                                    <option value=" Select Code">
                                                        Select Code
                                                  </option>
                                                    {dropdown_menu.map((ob: any, index: any) => (

                                                        <option value={ob.airport_code}>{ob.airport_code}</option>
                                                    ))}
                                                </select></div>
                                           &nbsp; &nbsp;
                                        <div>
                                                <label className="text-start d-block"> From:</label>
                                                <select className="form-control" style={{ alignItems: "left", padding: "10px" }}
                                                    id="demo-simple-select-helper"
                                                    value={selected_value2}
                                                    onChange={(e) => this.handleChangeDropdownValue(e)}
                                                >
                                                    <option value=" Select Code">
                                                        Select Code
                                            </option>
                                                    {dropdown_menu.map((ob: any, index: any) => (
                                                        <option value={ob.airport_code}>{ob.airport_code}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        &nbsp;&nbsp;
                                        <div className="form-group ">
                                            <select className="form-control" style={{ alignItems: "left", padding: "10px" }}
                                                id="demo-simple-select-helper"
                                                value={flight_type}
                                                onChange={(e) => this.handleSelectFlight(e)}
                                            >
                                                <option value="Select_code">Select Code</option>
                                                <option value="Economy">Economy</option>
                                                <option value="Business">Business</option>
                                                <option value="First_class">First Class</option>
                                            </select>
                                        </div>

                                        <div className="d-flex align-items-center gap-2 ct_check_terms" >
                                            <input type="checkbox" onClick={this.onNoxChekced} />
                                            <label>Nox</label>
                                        </div>

                                        <div className="ct_calculator_btn">
                                            <button onClick={(e) => this.onHandleSubmit(e)} value="button">Calculate offset</button>
                                        </div>
                                        <div className="row justify-content-end">
                                            <div className="col-md-6 mb-4 mb-md-0 ">
                                                <div className="form-group">
                                                    <p style={{ fontWeight: "600px", textAlign: "end" }}><strong>Total Offset &nbsp;&nbsp;&nbsp;{totalOffset ? totalOffset.toFixed(2) : 0}</strong> </p>
                                                </div>
                                            </div>
                                        </div>
                                        <input className="btn ct_submit_btn mt-4 disableed " id="submit" name="submit" type="submit" onClick={(e) => this.onHandlePayment(e)}></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
