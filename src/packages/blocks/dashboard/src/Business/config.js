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

// Customizable Area Start
exports.baseURL = process.env.REACT_APP_DEV_MODE_BASE_URL;

/*** API's for Business Dashboard */
exports.getChartAPIEndPoint = "bx_block_graphicalcharts/charts/chart_data";

exports.getCarbonRedctionTipsApiEndPoint =
  "bx_block_carbon_reduction/carbon_reduction_tipes";

  /*** API's for Business Order history */
exports.getOrderHistoryEndPointUrl =
"bx_block_order_management/order_histories/order_history";

/*** Api's for Business Offset */
exports.getEmployeeOrderSummaryAPIEndPoint =
  "bx_block_catalogue/employee/onetime/order_summary";

exports.getEmployeeCalculateAPIEndPoint =
  "bx_block_catalogue/employee/onetime/calculate_impact";

exports.postCarApiEndPoint = "bx_block_catalogue/car/onetime/order_summary";

exports.getSubscriptionEmployeeApiEndPoint = "bx_block_catalogue/employee/subscription/calculate_total";
exports.getSubscriptionFlightApiEndPoint = "bx_block_catalogue/flight/subscription/calculate_total";
exports.getSubscriptionCarApiEndPoint = "bx_block_catalogue/car/subscription/calculate_total";

exports.postEventOneTimeOrderSummaryApiEndPoint =
  "bx_block_catalogue/event/onetime/order_summary";
exports.getOrderSummaryEndPoint =
  "/bx_block_catalogue/car/onetime/calculate_impact";
exports.getEventPeopleCalculateAPIEndPoint =
  "bx_block_catalogue/car/onetime/calculate_impact";
exports.getPeopleEventAPIEndPoint =
  "bx_block_catalogue/employee/subscription/calculate_people_impact";
exports.getFlightEventAPIEndPoint =
  "bx_block_catalogue/flight/onetime/calculate_impact";
exports.getAverageFligthTimeAPIEndPoint =
  "bx_block_catalogue/flight/onetime/index";
exports.getHotelAPIEndPoint =
  "bx_block_catalogue/event/onetime/calculate_impact";
exports.AgroforestryOrderSummaryAPIEndPoint =
  "bx_block_projectmanagement2/plant_trees/agroforestry_order_summary";
exports.MiyawakiOrderSummaryAPIEndPoint =
  "bx_block_projectmanagement2/plant_trees/miyawaki_order_summary";
exports.BusinessOffsetAddToCartAPIEndPoint =
  "bx_block_order_management/cart_items/add_to_cart";

/*** API's for Business marketing tooltip */
exports.postMarketing_toolkitAPIEndPoint = "bx_block_marketing_tooltkit/marketing_tooltkits";

// Customizable Area End
exports.getOrderSummaryEndPoint =
  "/bx_block_catalogue/car/onetime/calculate_impact";
exports.getEventPeopleCalculateAPIEndPoint =
  "bx_block_catalogue/car/onetime/calculate_impact";
exports.getSubscriptionCarDataAPIEndPoint =
  "bx_block_catalogue/car/subscription/calculate_impact";
exports.getSubscriptionEmployeeDataAPIEndPoint =
  "bx_block_catalogue/employee/subscription/calculate_impact";
exports.postSubscriptionEmployeeOrderDataAPIEndPoint =
  "bx_block_catalogue/employee/subscription/order_summary";
exports.postSubscriptionCarOrderDataAPIEndPoint =
  "bx_block_catalogue/car/subscription/order_summary";
exports.getOrderSummaryEndPoint =
  "/bx_block_catalogue/car/onetime/calculate_impact";
exports.getEventPeopleCalculateAPIEndPoint =
  "bx_block_catalogue/car/onetime/calculate_impact";
exports.getFlightListApiEndPoint = "bx_block_catalogue/flight/onetime/index";

exports.postFlightOrderSummaryApiEndPoint =
  "bx_block_catalogue/flight/subscription/order_summary";

exports.getFlightCalculateImapctApiEndPoint =
  "bx_block_catalogue/flight/onetime/calculate_impact";
exports.postFlightApiEndPoint =
  "bx_block_catalogue/flight/onetime/order_summary_distance";

exports.getSubscriptionEmployeeDataAPIEndPoint =
  "bx_block_catalogue/employee/subscription/calculate_impact";
exports.postSubscriptionEmployeeOrderDataAPIEndPoint =
  "bx_block_catalogue/employee/subscription/order_summary";
exports.postSubscriptionCarOrderDataAPIEndPoint =
  "bx_block_catalogue/car/subscription/order_summary";
exports.getflightSubscriptionImpactAPIEndPoint =
  "bx_block_catalogue/flight/subscription/calculate_impact";
  exports.getCountryAPIEndPoint = "bx_block_catalogue/countries";
// Customizable Area End
