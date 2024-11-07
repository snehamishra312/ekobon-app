Object.defineProperty(exports, "__esModule", {
  value: true
});

// Customizable Area Start
/*** Methods List */
exports.apiGetMethod = "GET";
exports.apiPostMethod = "POST";
exports.apiPutMethod = "PUT";
exports.apiDeleteMethod = "DELETE";
exports.apiPatchMethod = "PATCH"; 

exports.baseUrl = process.env.REACT_APP_DEV_MODE_BASE_URL;
exports.jsonDataContentType = "application/json";
exports.POST = "POST";
exports.baseUrl1 = "https://3.108.49.27:4000/";

exports.registerAccountEndPoint = "account/accounts";
exports.forgotPasswordEndPoint = "forgot_password/password";
exports.otpConfirmationEndPoint = "forgot_password/otp_confirmation";
exports.resendOtpEndPoint = "bx_block_forgot_password/otp";
exports.placeHolderEmail = "Email";


exports.labelHeader = "Value proposition: why users should sign up.";
exports.labelFirstName = "First name";
exports.lastName = "Last name";
exports.labelEmail = "Email";
exports.labelPassword = "Password";
exports.labelRePassword = "Re-Type Password";
exports.errorCountryCodeNotSelected = "Please select country code";
exports.errorBlankField = "can't be blank";

exports.labelLegalText =
  "Legal text: By signing up you agree to our Terms &amp; conditions and Privacy policy.";

exports.labelLegalTermCondition = "Terms and conditions";
exports.labelLegalPrivacyPolicy = "Privacy policy";
exports.btnTextSignUp = "Sign up";
exports.errorPasswordNotValid = "Password not valid.";

exports.errorTitle = "Error";

exports.errorBothPasswordsNotSame = "Passwords should be same.";
exports.errorAllFieldsAreMandatory = "All fields are mandatory.";

exports.contentTypeApiAddDetail = "application/json";

exports.accountsAPiEndPoint = "account/accounts";

exports.apiMethodTypeAddDetail = "POST";

exports.errorEmailNotValid = "Email not valid.";
exports.urlGetValidations = "profile/validations";
exports.validationApiContentType = "application/json";

exports.validationApiMethodType = "GET";
exports.getCountryAPIEndPoint = "bx_block_catalogue/countries";
exports.getPrivacyAPIEndPoint = "bx_block_settings/settings/privacy_policy";
exports.getTandCAPIEndPoint = "bx_block_settings/settings/term_and_conditions";
exports.postGoogleSignInApiEndpoint = "account/accounts";
exports.postFacebookSignInApiEndpoint = "account/accounts";
exports.getBasicProfileAPIEndPoint = "account_block/profile";
exports.getPartnerLoginEndPointURL = "partnerLogin";

// Customizable Area End
