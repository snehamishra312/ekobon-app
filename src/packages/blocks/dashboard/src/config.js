Object.defineProperty(exports, "__esModule", {
  value: true,
});

// Customizable Area Start
exports.dashboardGetUrl = "/dashboard/dashboards";
exports.dashboarContentType = "application/json";
exports.dashboarApiMethodType = "GET";
exports.dashboardHost = "<calculated when request is sent>";
exports.dashboarUserAgent = "PostmanRuntime/7.26.5";
exports.dashboarAccept = "*/*";
exports.dashboarAcceptEncoding = "gzip, deflate, br";
exports.dashboarConnection = "keep-alive";
exports.dashboartoken = "";
exports.labelTitleText = "dashboard";
exports.baseURL = process.env.REACT_APP_DEV_MODE_BASE_URL;
exports.labelBodyText = "dashboard Body";
// exports.baseUrl1 = "http://3.111.2.55:4000/";
exports.baseURLDashboard = "https://3.108.49.27:4000/"
exports.baseUrl1 = "https://3.108.49.27:4000/";
// exports.baseUrl1 = "https://backend.ekobon.com/"
exports.baseUrl12 = "http://192.168.1.30:4000/"
exports.baseUrl2 = "http://192.168.1.18:4000/"
exports.validationApiContentType = "application/json";
exports.faqEndPointUrl = "bx_block_settings/faqs";
exports.PrivacyPolicyEndPointUrl = "bx_block_settings/settings/privacy_policy";
exports.TermConditionEndPointUrl =
  "bx_block_settings/settings/term_and_conditions";
exports.landingClimateProjectsEndPointUrl =
  "bx_block_projectmanagement2/climate_projects";
exports.AboutUsEndPointUrl = "bx_block_settings/settings/about_us";
exports.ContactUsEndPointUrl = "bx_block_contact_us/contacts";
exports.OffsetLifeStyleGetData = "bx_block_catalogue/lifestyle/index";
exports.OffsetLifeStyleOrderSummery =
  "bx_block_catalogue/lifestyle/order_summary";
exports.GetApiMethodType = "GET";
exports.offsetSubscriptionLifestyleEndPointUrl =
  "bx_block_catalogue/lifestyle/subscription/index";
exports.offsetSubscriptionVehicleEndPointUrl =
  "bx_block_catalogue/vehicle/index";
exports.offsetSubscriptionAccomodationEndPointUrl =
  "bx_block_catalogue/accomodation/index";
exports.offsetSubscriptionFlightEndPointUrl =
  "bx_block_catalogue/air_travel/index";
exports.offsetOneTimetransportTrainEndPointUrl =
  "bx_block_catalogue/train_types";
exports.offsetOneTimetransportBusEndPointUrl = "bx_block_catalogue/bus_types";
exports.offsetOneTimetransportTwoWheelerEndPointUrl =
  "bx_block_catalogue/two_wheeler_types";
exports.offsetOneTimeHouseHoldEndPointUrl = "bx_block_catalogue/order_summary";
exports.orderSummaryFlightEndPointUrl =
  "bx_block_catalogue/order_summary_flight";
exports.postFlightApiEndPoints = "bx_block_catalogue/order_summary_flight";
exports.orderSummaryCarEndPointUrl =
  "bx_block_catalogue/order_summary_car_travel";
exports.orderSummaryTrainEndPointUrl = "bx_block_catalogue/order_summary_train";
exports.orderSummaryBusEndPointUrl = "bx_block_catalogue/order_summary_bus";
exports.orderSummaryTwoWheelerEndPointUrl =
  "bx_block_catalogue/order_summary_two_wheeler";
exports.getContact_usDetailsEndPointUrl =
  "bx_block_settings/settings/contact_us";

/*** API for Offset Subscription */
exports.getLifeStyleSubscriptionEndPointUrl =
  "bx_block_catalogue/lifestyle/subscription/order_summary";
exports.getVehicalSubscriptionEndPointUrl =
  "bx_block_catalogue/vehicle/order_summary";
exports.getAirTravelSubscriptionEndPointUrl =
  "bx_block_catalogue/air_travel/order_summary";
exports.getAccomodationSubscriptionEndPointUrl =
  "bx_block_catalogue/accomodation/order_summary";

/*** API Constants */
exports.ApiContentType = "application/json";
exports.EditApiContentType = "multipart/form-data";

/*** API's for Individual Plan Trees */
exports.getAgroforestry_VarietiesAPIEndPoint =
  "bx_block_projectmanagement2/agroforestry_varieties";
exports.getMiyawaki_VarietiesAPIEndPoint =
  "bx_block_projectmanagement2/miyawaki_varieties";
exports.AgroforestryOrderSummaryAPIEndPoint =
  "bx_block_projectmanagement2/plant_trees/agroforestry_order_summary";
exports.MiyawakiOrderSummaryAPIEndPoint =
  "bx_block_projectmanagement2/plant_trees/miyawaki_order_summary";

/*** Methods List */
exports.apiGetMethod = "GET";
exports.apiPostMethod = "POST";
exports.apiPutMethod = "PUT";
exports.apiDeleteMethod = "DELETE";
exports.apiPatchMethod = "PATCH";

/*** API's for Individual Dashboard */
exports.getTreesPlantCountAPIEndPoint = "account_block/plant_trees";
exports.getClimateProjectAPIEndPoint = "account_block/projects";
exports.getAllCountAPIEndPoint = "account_block/count_plant";
exports.getCarbonFootprintAPIEndPoint = "bx_block_footprint/footprints";

/*** API's for Individual Gift Card */
exports.giftCardsListEndPointUrl = "bx_block_products/products/gift_card";
exports.giftCardDetailEndPointUrl = "bx_block_products/products";
exports.giftCardOrderSummaryEndPointUrl =
  "bx_block_products/products/order_summary";
exports.giftCardCategoriesEndPointUrl = "gift_cards/categories";
exports.getMyGiftCardEndPointUrl = "gift_cards";
exports.getAddToCardEndPointUrl = "bx_block_order_management/cart_items/reedem_cart"

/*** API's for Individual Cart */
exports.CartSummeryListEndPointUrl = "bx_block_order_management/cart_items";
exports.AddToCartEndPointUrl =
  "bx_block_order_management/cart_items/add_to_cart";
exports.RemoveOrderSummeryCartEndPointUrl =
  "bx_block_order_management/cart_items/remove_to_cart";
exports.RemoveOrderDeleteCartEndPointUrl = "/payment/destroy_cart"

exports.RemoveOrderIdEndPointUrl = "/payment/destroy_cart"

/*** API's for Individual My Projects */
exports.myProjectsListEndPointUrl = "bx_block_my_project/my_projects";
exports.renewableEnergyProjectsListEndPointUrl =
  "bx_block_my_project/my_projects/renewable_energy_projects";
exports.forestryProjectsListEndPointUrl =
  "bx_block_my_project/my_projects/forestry_projects";
exports.energyEfficiencyProjectsListEndPointUrl =
  "bx_block_my_project/my_projects/energy_efficiency_projects";

/*** API's for My Subscriptions */
exports.myProjectsSubscriptionsListEndPointUrl =
  "bx_block_my_project/my_subscription_projects";

/*** API's for Individual Order history */
exports.getOrderHistoryEndPointUrl =
  "bx_block_order_management/order_histories/order_history";

/*** API's for Individual Climate Certificates */
exports.climateCertificatesListEndPointUrl =
  "bx_block_projectmanagement2/certificates";

/*** API's for Individual Order Continue */
exports.CardDetailsEndPointUrl = "bx_block_order_management/carts/cart_detail";
exports.individualApplyGiftCodeEndPointUrl =
  "bx_block_order_management/orders/apply_coupon";
exports.individualRemoveGiftCodeEndPointUrl =
  "bx_block_order_management/orders/remove_coupon";
exports.individualAddToGiftCardEndPointUrl = "gift_cards";
exports.individualRedemGiftCardEndPointUrl = "redemptions/redeem";
exports.individualOrderContinueEndPointUrl = "bx_block_order_management/orders";
exports.individualAddNewCardEndPointUrl = "bx_block_order_management/add_card";
exports.individualGetCardListEndPointUrl =
  "bx_block_order_management/card_list";
exports.individualRemoveCardEndPointUrl =
  "bx_block_order_management/remove_card";
exports.getGiftCardImageEndPointUrl = "bx_block_order_management/carts/image"
exports.individualCreatePaymentEndPointUrl =
  "bx_block_order_management/create_payments";
exports.individualConfirmPaymentsEndPointUrl =
  "bx_block_order_management/confirm_payments";
exports.individualRetrievePaymentsEndPointUrl =
  "bx_block_order_management/retrieve_payments";
exports.individualAddDefaultCardEndPointUrl =
  "bx_block_order_management/add_default_card";
exports.getProjectListEndPointUrl =
  "bx_block_projectmanagement2/climate_projects";

exports.individualRazorpayOrderEndPointUrl =
  "bx_block_order_management/razorpays/orders";
exports.individualRazorpayOrderVerifyEndPointUrl =
  "bx_block_order_management/razorpays/verify_signature";
exports.getChartAPIEndPoint = "bx_block_graphicalcharts/charts/chart_data";
exports.getChartAPIEndPointForIndividual =
  "bx_block_graphicalcharts/charts/chart_data";
exports.getProjectDistributionChartApiEndPoint =
  "bx_block_graphicalcharts/charts/individual_chart_data";
// Customizable Area End

exports.cancelSubscriptionEndPointUrl =
  "bx_block_my_project/my_subscription_projects/cancel";

exports.zaakpayPaymentEndPointUrl =
  "payments/zaakpay";

exports.zaakpayCheckoutEndPointUrl = "payments/check_transaction_status";
exports.getPartnerLoginEndPointURL = "partnerLogin";
exports.investedProjectsEndPointURL = "transact/investedProjects";
exports.dashboardPointURL = "carbon/offsetYearly";
exports.dashboard2PointURL = "carbon/offsetHourly";
exports.dashboard3PointURL = "carbon/offsetWeekly";
exports.getmyFootPrintMonthlyEndPointURL = "transact/myFootPrintMonthly";
exports.getApiResponseDetailEndPointURL = "carbon/apiClassYearly";
exports.getMonthlyApiResponseEndPointURL = "carbon/apiClassHitMonthly";
exports.getWeeklyApiResponseEndPointURL = "carbon/apiClassHitWeekly";
exports.getHourlyApiResponseEndPointURL = "carbon/apiClassHourly";
exports.getDailyApiResponseEndPointURL = "carbon/apiClassHitDaily";
exports.getOrderHistoryDetailsEndPointURL = "transact/orderHistory";
exports.getInvestedProjectDetailsEndPointURL = "transact/investedProjects";
exports.getAirportEndPointURL = "carbon/getAirports";
exports.postFlightEndPointURL = "carbon/flight";
exports.addsPartnerOffsetEndPointURL = "carbon/addPartnersOffset"
exports.getBillingHistoryOfFootprint = "transact/bankbillingHistory"
exports.getAllProjectDataEndPointURL = "transact/getProjects";
exports.saveProjectDetailEndPointURL = "carbon/addMyPartnerProject";
exports.ecommerceEndPointURL = "carbon/ecommerce";
exports.getOrderHistoryDetailsEndPointURL = "transact/orderHistory";
exports.loginAccountEndPoint = "login";
exports.registerAccountEndPoint = "signUp";
exports.forgotPasswordEndPointURL = "forgetPassword";

exports.addPartnerEndPoint = "admin/addpartner"
exports.getAllusersEndPoint = "admin/getallusers"
exports.getAllOffsetConverstionEndPoint = "admin/getallusers"
exports.deletePartnerEndPoint = "admin/delete/partner"
exports.getUserbyIdEndPoint = "admin/getuserbyid"
exports.updateUserEndPoint = "admin/update/user"
exports.hotelBookingEndPointURL = "carbon/hotelBook";
exports.getAllTransactionEndPoint = "transact/getalltransaction";
exports.getAllInvestedProjectEndPoint = "transact/getAllInvestedProject";
exports.getAllClimateProjectEndPoint = "transact/getAllClimateProject";
exports.getBankmyClimateAction = "transact/bankmyclimateAction";
exports.getBankmyClimateActionCurrentMonth = "transact/bankmyclimateActionCurrent";
exports.bankEquivalentToEndPointURL = "transact/bankEquivalentTo";
exports.bankRefineMyFootprintEndPointURL = "transact/bankRefineMyFootprint";
exports.bankOrderHistoryDataEndPointURL = "transact/myBankprojectsHistory";
exports.bankProjectsDistributionEndPointURL = "transact/myBankprojectsDistribution";
exports.bankPayNowEndPointURL = "payment/bankpayNow";
exports.createRefineEndPointURL = "transact/CreatebankRefineMyFootprint";
exports.bankApiPaymentEndPointURL = "payment/bankpayNow";
exports.partnerProjectsDistributionEndPointURL = "transact/myProjectsDistribution";
exports.contactUs1EndPointURL = "contactus";
exports.contactUs2EndPointURL = "requestDemo";