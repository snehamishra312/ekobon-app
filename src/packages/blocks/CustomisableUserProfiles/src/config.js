Object.defineProperty(exports, "__esModule", {
  value: true
});

// Customizable Area End
/*** API Constants */
exports.ApiContentType = "application/json";
exports.EditApiContentType = "multipart/form-data";

/*** Methods List */
exports.apiGetMethod = "GET";
exports.apiPostMethod = "POST";
exports.apiPutMethod = "PUT";
exports.apiDeleteMethod = "DELETE";
exports.apiPatchMethod = "PATCH";

/*** API's for Individual Dashboard */
exports.getBasicProfileAPIEndPoint = "account_block/profile";
exports.getCountryAPIEndPoint = "bx_block_catalogue/countries";
exports.updateBasicProfileEditAPIEndPoint = "account_block/update_profile";

// Customizable Area Start
exports.validationApiContentType = "application/json";
exports.validationApiMethodType = "GET";
exports.exampleAPiEndPoint = "EXAMPLE_URL";
exports.exampleAPiMethod = "POST";
exports.exampleApiContentType = "application/json";
exports.textInputPlaceHolder = "Enter Text";
exports.labelTitleText = "CustomisableUserProfiles";
exports.labelBodyText = "CustomisableUserProfiles Body";

exports.btnExampleTitle = "CLICK ME";

exports.baseURL = process.env.REACT_APP_DEV_MODE_BASE_URL;
exports.createPassApiEndPoint = "bx_block_forgot_password/password";
exports.OtpConfirmationEndPoint = "forgot_password/otp_confirmation";
exports.OtpSendApiEndPoint = "bx_block_forgot_password/otp";
exports.resendOtpEndPoint = "bx_block_forgot_password/otp";
exports.forgotPasswordEndPoint = "forgot_password/password";
exports.httpPostMethod = "POST";
/*** API's for Individual Order history */
exports.getOrderTotalHistoryEndPointUrl ="bx_block_order_management/order_histories/total_impact";
exports.getOrderHistoryEndPointUrl ="bx_block_order_management/order_histories/order_history";
exports.getDownloadOrderInvoiceEndPointUrl ="bx_block_order_management/order_histories/invoice";
// Customizable Area End
