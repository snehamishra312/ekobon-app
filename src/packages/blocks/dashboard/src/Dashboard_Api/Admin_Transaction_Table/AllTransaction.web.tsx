import React from "react";
import AllTransactionController, {
    Props,
} from "./AllTransactionController.web";
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';
import { LOGO, AvtarIcon } from '../../assets';

export default class AllTransaction extends AllTransactionController {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const {
            allTransactionData,
            allInvestedProject
        } = this.state;
        return (
            <>
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                            <div className="app-brand demo mt-4 pb-4">
                                <a href="/" className="app-brand-link ">
                                    <img src={LOGO} alt="" />
                                </a>
                                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                                </a>
                            </div>
                            <div className="menu-inner-shadow"></div>
                            <ul className="menu-inner py-1">
                                <li className="menu-item">
                                    <a href="/api/admin" className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">Admin Dashboard</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/api/add/partner" className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">Add Partner</div>
                                    </a>
                                </li>
                                <li className="menu-item active">
                                    <a href="/api/admin/transaction" className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">All Transaction</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="/api/admin/project" className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">Projects</div>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href='/api/admin/offset-converstion' className="menu-link">
                                        <i className="bi bi-house-door"></i>
                                        <div data-i18n="Analytics">Offset Converstion </div>
                                    </a>
                                </li>
                            </ul>
                        </aside>
                        <div className="layout-page">
                            <div className="content-wrapper">
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <div className="row">
                                        <div className="col-lg-12 mb-4 order-0">
                                            <div className="card">
                                                <div className="card-header d-flex align-items-center justify-content-between">
                                                    <h4 className="card-title m-0 me-2"><strong>Order History</strong></h4>
                                                </div>
                                                <div className="table-responsive text-nowrap ">
                                                    <table className="table ct_order_table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th> NO.</th>
                                                                <th>Transaction Id</th>
                                                                <th>Partner Name</th>
                                                                <th>Order Id</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="table-border-bottom-0">
                                                            {allTransactionData && allTransactionData?.map((item: any, index: any) => (
                                                                <tr>
                                                                    <td>{index + 1}</td>
                                                                    <td>{item?.transaction_id}</td>
                                                                    <td>{item?.partner_name}</td>
                                                                    <td>{item?.order_id}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="card mt-4">
                                                <div className="card-header d-flex align-items-center justify-content-between">
                                                    <h4 className="card-title m-0 me-2"><strong>Invested Projects</strong></h4>
                                                </div>
                                                <div className="table-responsive text-nowrap ">
                                                    <table className="table ct_order_table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th>ORDER NO.</th>
                                                                <th>Amount Invested</th>
                                                                <th>Total OFFSET (Kg)</th>
                                                                <th>Investable Type</th>
                                                            </tr>
                                                        </thead>
                                                        {/* <tbody className="table-border-bottom-0">
                                                            {allInvestedProject && allInvestedProject.map((item: any, index: any) => (
                                                                <tr>
                                                                    <td>{index + 1}</td>
                                                                    <td>{item.order_id}</td>
                                                                    <td>{item.kgco2e}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody> */}
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-backdrop fade"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </>
        );
    }
}
