//@ts-nocheck
import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
/** Routes List start */

const HomeWeb = lazy(() => import('../../blocks/dashboard/src/HomeWeb.web'));
const OurApproch = lazy(() =>
  import('../../blocks/dashboard/src/OurApproch.web')
);
const EkoPoints = lazy(() =>
  import('../../blocks/dashboard/src/EkoPoints.web')
);
const IndividualLogin = lazy(() =>
  import('../../blocks/email-account-login/src/IndividualLoginWeb.web')
);

const IndividualForgot = lazy(() =>
  import('../../blocks/forgot-password/src/IndividualForgotWeb.web')
);

const IndividualPasswordSuccess = lazy(() =>
  import('../../blocks/forgot-password/src/IndividualPasswordSuccessWeb.web')
);

const IndividualSignup = lazy(() =>
  import('../../blocks/email-account-registration/src/IndividualSignupWeb.web')
);

const IndividualSignupOtpWeb = lazy(() =>
  import('../../blocks/email-account-registration/src/IndividualSignupOtpWeb.web')
);

const IndividualSignUpPassWeb = lazy(() =>
  import('../../blocks/email-account-registration/src/IndividualSignUpPassWeb.web')
);

const IndividualSignupPasswordSuccessWeb = lazy(() =>
  import('../../blocks/email-account-registration/src/IndividualSignupPasswordSuccessWeb.web')
);

const IndividualNav = lazy(() =>
  import('../../blocks/dashboard/src/IndividualNav')
);

const IndividualScreen = lazy(() =>
  import('../../blocks/dashboard/src/IndividualScreen.web.tsx')
);

const IndividualOffset = lazy(() =>
  import('../../blocks/dashboard/src/IndvOffset/OffsetOneTimeLifeStyle.web')
);
const OffsetOneTimeFlight = lazy(() =>
  import('../../blocks/dashboard/src/IndvOffset/OffsetOneTimeFlight.web')
);

const OffsetOneTimeCar = lazy(() =>
  import('../../blocks/dashboard/src/IndvOffset/OffsetOneTimeCar.web')
);

const OffsetOneTimeTransport = lazy(() =>
  import('../../blocks/dashboard/src/IndvOffset/OffsetOneTimeTransport.web')
);

const OffsetOneTimeHouse = lazy(() =>
  import('../../blocks/dashboard/src/IndvOffset/OffsetOneTimeHouse.web')
);

const IndividualProfile = lazy(() =>
  import('../../blocks/CustomisableUserProfiles/src/IndiviCustomisableUserProfiles.web')
);

const IndividualProject = lazy(() =>
  import('../../blocks/dashboard/src/IndvProject/IndividualProject.web')
);
const IndividualGiftCardDetail = lazy(() =>
  import('../../blocks/dashboard/src/IndvGiftCard/IndividualGiftCardView.web')
);

const IndividualSubscription = lazy(() =>
  import('../../blocks/dashboard/src/IndvProject/IndividualSubscription.web')
);

const IndividualPlantTree = lazy(() =>
  import('../../blocks/dashboard/src/IndvPlantTree/IndividualPlantTree.web')
);

const IndividualGiftCard = lazy(() =>
  import('../../blocks/dashboard/src/IndvGiftCard/IndividualGiftCard.web')
);

const IndividualAddtoCartWeb = lazy(() =>
  import('../../blocks/dashboard/src/IndvAddToCart/IndividualAddtoCart.web')
);
const IndividualAddtoCartAndPayment = lazy(() =>
  import('../../blocks/dashboard/src/IndvAddToCart/IndividualAddtoCartAndPayment.web')
);

const SubscriptionOffset = lazy(() =>
  import('../../blocks/dashboard/src/IndvOffset/SubscriptionOffset.web')
);

const IndividualFaq = lazy(() =>
  import('../../blocks/dashboard/src/IndvFaq/IndividualFaq.web')
);

const IndividualPrivacy = lazy(() =>
  import('../../blocks/dashboard/src/IndvPrivacy/IndividualPrivacy.web')
);

const IndividualTerm = lazy(() =>
  import('../../blocks/dashboard/src/IndvTerm/IndividualTerm.web')
);

const IndividualClimateCertificate = lazy(() =>
  import('../../blocks/dashboard/src/IndvClimateCertificate/IndividualClimateCertificate.web')
);

const IndividualPaymentSuccess = lazy(() =>
  import('../../blocks/dashboard/src/IndvPaymentSuccess/IndvPaymentSuccess.web')
);

const IndividualProfileResetPassword = lazy(() =>
  import('../../blocks/CustomisableUserProfiles/src/reset-password/IndividualProfileResetPassword.web')
);

const IndividualProfileResetPasswordOtp = lazy(() =>
  import('../../blocks/CustomisableUserProfiles/src/reset-password/IndividualProfileResetPasswordOtp.web')
);

const IndividualProfileResetPasswordSet = lazy(() =>
  import('../../blocks/CustomisableUserProfiles/src/reset-password/IndividualProfileResetPasswordSet.web')
);

const IndividualProfileResetPasswordSuccess = lazy(() =>
  import('../../blocks/CustomisableUserProfiles/src/reset-password/IndividualProfileResetPasswordSuccess.web')
);

const IndvPaymentSuccessAlert = lazy(() =>
  import('../../blocks/dashboard/src/IndvPaymentSuccess/IndvPaymentSuccessAlert.web')
);
const ClimateProject = lazy(() =>
  import('../../blocks/dashboard/src/LandingPages/ClimateProjects.web')
);
const AboutUs = lazy(() =>
  import('../../blocks/dashboard/src/LandingPages/AboutUs.web')
);
const ContactUs = lazy(() =>
  import('../../blocks/dashboard/src/LandingPages/ContactUs.web')
);
const FAQs = lazy(() =>
  import('../../blocks/dashboard/src/LandingPages/FAQs.web')
);
const PrivacyPolicy = lazy(() =>
  import('../../blocks/dashboard/src/LandingPages/PrivacyPolicy.web')
);
const TermsConditions = lazy(() =>
  import('../../blocks/dashboard/src/LandingPages/TermsConditions.web')
);
const RedeemGift = lazy(() =>
  import('../../blocks/dashboard/src/LandingPages/RedeemGift.web')
);
const ReadMoreArticle = lazy(() =>
  import('../../blocks/dashboard/src/LandingPages/ReadMoreArticle.web')
);
const IndvidualDashboardProjectDetail = lazy(() =>
  import('../../blocks/dashboard/src/IndvProDetail/IndvidualDashboardProjectDetail.web')
);
const IndividualTourBegin = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTourBegin.web')
);
const IndividualTour1 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour1.web')
);
const IndividualTour2 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour2.web')
);
const IndividualTour3 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour3.web')
);
const IndividualTour4 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour4.web')
);
const IndividualTour5 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour5.web')
);
const IndividualTour6 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour6.web')
);
const IndividualTour7 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour7.web')
);
const IndividualTour8 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour8.web')
);
const IndividualTour9 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour9.web')
);
const IndividualTour10 = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTour10.web')
);
const IndividualTourEnd = lazy(() =>
  import('../../blocks/dashboard/src/IndvTour/IndividualTourEnd.web')
);

/** Business Route Start */
const BusinessSignup = lazy(() =>
  import('../../blocks/email-account-registration/src/BusinessSignupWeb.web')
);
const BusinessScreen = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessScreen.web')
);
const BusinessOffsetEmployee = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessOffset/OffsetEmployee.web')
);
const BusinessOffsetFlight = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessOffset/OffsetOneTimeFlight.web')
);
const BusinessOffsetByDistance = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessOffset/OffsetOneTimeFlightByDistance.web')
);
const BusinessOffsetOneTimeCar = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessOffset/OffsetOneTimeCar.web')
);
const BusinessOffsetOneTimeEvent = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessOffset/OffsetOneTimeEvent.web')
);
const BusinessOffsetSubscriptionCar = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessOffset/SubscriptionCar.web')
);
const SubscriptionFlight = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessOffset/SubscriptionFlight.web')
);
const SubscriptionEmployee = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessOffset/SubscriptionEmployee.web')
);
const BusinessCarbonReductionTips = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessCarbonReductionTips/BusinessCarbonReductionTips.web')
);
const BusinessDashboardProjectDetail = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessProjectDetails/BusinessDashboardProjectDetail.web')
);
const BusinessMarketingToolkit = lazy(() =>
  import('../../blocks/dashboard/src/Business/MarketingToolkit/MarketingToolkit.web')
);
const BusinessMarketingTotalImpact = lazy(() =>
  import('../../blocks/dashboard/src/Business/MarketingToolkit/MarketingTotalImpact')
);
const BusinessTourBegin = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTourBegin.web')
);
const BusinessTour1 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour1.web')
);
const BusinessTour2 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour2.web')
);
const BusinessTour3 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour3.web')
);
const BusinessTour4 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour4.web')
);
const BusinessTour5 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour5.web')
);
const BusinessTour6 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour6.web')
);
const BusinessTour7 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour7.web')
);
const BusinessTour8 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour8.web')
);
const BusinessTour9 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour9.web')
);
const BusinessTour10 = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTour10.web')
);
const BusinessTourEnd = lazy(() =>
  import('../../blocks/dashboard/src/Business/BusinessTakeTour/BusinessTourEnd.web')
);
const PartnerLogin = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/PartnerLogin/PartnerLogin.web')
);
const PartnerDasboard = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Dashboard/Dashboard.web')
);
const PartnerApiSetting = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Api_setting/ApiSetting.web')
);
const PartnerProjects = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Partner_Project/Projects.web')
);
const PartnerOrderHistory = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Order_History/OrderHistory.web')
);
const PartnerFlightPage = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/FlightPage/FlightPage.web')
);
const PartnerCliemetAction = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Cliemet_Action/CliemetAction.web')
);
const PartnerEcommerce = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Ecommerce/Ecommerce.web')
);
const PartnerHotel = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/HotelBooking/HotelBooking.web')
);
const PartnerTrackMyFootPrint = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/TrackMyFootprint/TrackMyFootprint.web')
);
const PartnerOffsetPortfolio = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Offset_Portfolio/OffsetPortfolio.web')
);
const PartnerRefineFootprint = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Refine_Footprint/RefineFootPrint.web')
);
const AnonymousDashboard = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/AnonymousDashboard/AnonymousDashboard.web')
);
const AnonymousLogin = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/AnonymousUserAccount/AnonymousLogin/AnonymousLogin.web')
);
const AnonymousRegistration = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/AnonymousUserAccount/AnonymousRegistertAccount/AnonymousRegistation.web')
);
const AnonymousForgotPassword = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/AnonymousUserAccount/AnonymousForgotPassword/AnonymousForgotPassword.web')
);
const PartnerAdminDashboard = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Admin_Panel/AdminDashboard.web')
);
const AddAdminPartner = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Add_Partner/AddPartner.web')
);
const AdminUpdatePartner = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Update_Partner/UpdatePartner.web')
);
const Service = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/Service/Service')
);
const LifeCycle = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/Life_Cycle/Life_Cycle.web')
)
const About = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/About/About_new.web')
);
const Contact = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/Contact/Contact')
);
const Carbon_Neutral = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/Carbon_Neutral/CarbonNeutral.web')
);
const EkoSpark = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/EkoSpark/EkoSpark')
);
const Reporting = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/Reporting/Esg_Reporting')
);
const EkobonApi = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/Api/Api.web')
);
const ServiceDetail = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/Service_Detail/ServiceDetail')
);
const HomePage = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/HomeDashboard/HomeDasboard.web')
);
const FAQPage = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/FAQ/Faq.web')
);
const ClimateProjectPage = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/Climate_Project/Climate_Project.web')
);
const RedeemProject = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/HowToRedeem/How_To_Redeem.web')
);
const OurApprochPage = lazy(() =>
  import('../../blocks/dashboard/src/EkobonDashboard/OurApproach/Our_approach.web')
);
const Offset_details = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Offset_Details/OffsetDetail.web')
);
const UserTransaction = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Admin_Transaction_Table/AllTransaction.web')
);
const AdminProject = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Admin_Project/AdminProject.web')
);
const PaymentSuccessAlertAdmin = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/PaymentSuccessAlert/PaymentSuccessAlert.web.tsx')
);
const AdminOffsetConverstion = lazy(() =>
  import('../../blocks/dashboard/src/Dashboard_Api/Admin_OffsetConverstion/offsetConverstion.web')
);
/** Business Route End */
/** Routes List End */

/** Private Routes start */
import PrivateRoute from './PrivateRoute.web';
import Loader from '../../components/src/Loader.web';
import IndvLayout from '../../blocks/dashboard/src/IndvLayout';
import IndvHeadLayout from '../../blocks/dashboard/src/IndvHeadLayout';
import BusinessLayout from '../../blocks/dashboard/src/Business/BusinessLayout';
/** Private Roues End */

function WebRoutes() {
  // render() {
  return (
    <Router>
      <Suspense fallback={<Loader loading />}>
        <Switch>
          <Route path="/" exact render={props => <HomePage {...props} />} />
          <Route path="/api/partner/login" exact render={props => <PartnerLogin {...props} />} />
          <Route path="/api/partner/dashboard" exact render={props => <PartnerDasboard {...props} />} />
          <Route path="/api/partner/api/setting" exact render={props => <PartnerApiSetting {...props} />} />
          <Route path="/api/partner/projects" exact render={props => <PartnerProjects {...props} />} />
          <Route path="/api/partner/order/history" exact render={props => <PartnerOrderHistory {...props} />} />
          <Route path="/api/partner/flight" exact render={props => <PartnerFlightPage {...props} />} />
          <Route path="/api/partner/climet/project" exact render={props => <PartnerCliemetAction {...props} />} />
          <Route path="/api/partner/ecommerce" exact render={props => <PartnerEcommerce {...props} />} />
          <Route path="/api/partner/hotel" exact render={props => <PartnerHotel {...props} />} />
          <Route path="/api/partner/trackmyfootprint" exact render={props => <PartnerTrackMyFootPrint {...props} />} />
          <Route path="/api/partner/portfolio" exact render={props => <PartnerOffsetPortfolio {...props} />} />
          <Route path="/api/partner/refine/footprint" exact render={props => <PartnerRefineFootprint {...props} />} />
          <Route path="/api/anonymous/dashboard" exact render={props => <AnonymousDashboard {...props} />} />
          <Route path="/api/anonymous/login" exact render={props => <AnonymousLogin {...props} />} />
          <Route path="/api/anonymous/register" exact render={props => <AnonymousRegistration {...props} />} />
          <Route path="/api/anonymous/forgot/password" exact render={props => <AnonymousForgotPassword {...props} />} />
          <Route path="/api/admin" exact render={props => <PartnerAdminDashboard {...props} />} />
          <Route path="/api/add/partner" exact render={props => <AddAdminPartner {...props} />} />
          <Route path="/api/update/partner" exact render={props => <AdminUpdatePartner {...props} />} />
          <Route path='/service' exact render={props => <Service {...props} />} />
          <Route path="/lifecycle" exact render={props => <LifeCycle {...props} />} />
          {/* <Route path='/homepage' exact render={props => <HomePage {...props} />} /> */}
          <Route path='/about' exact render={props => <About {...props} />} />
          <Route path='/contact' exact render={props => <Contact {...props} />} />
          <Route path='/carbon/neutral' exact render={props => <Carbon_Neutral {...props} />} />
          <Route path='/ekospark' exact render={props => <EkoSpark {...props} />} />
          <Route path='/esg/reporting' exact render={props => <Reporting {...props} />} />
          <Route path='/api' exact render={props => <EkobonApi {...props} />} />
          <Route path='/faq' exact render={props => <FAQPage {...props} />} />
          <Route path='/redeem/gift' exact render={props => <RedeemProject {...props} />} />
          <Route path='/our/approach' exact render={props => <OurApprochPage {...props} />} />
          <Route path='/project' exact render={props => <ClimateProjectPage {...props} />} />
          <Route path='/service/detail' exact render={props => <ServiceDetail {...props} />} />
          <Route path='/api/offset/detail' exact render={props => <Offset_details {...props} />} />
          <Route path='/api/admin/transaction' exact render={props => <UserTransaction {...props} />} />
          <Route path='/api/admin/project' exact render={props => <AdminProject {...props} />} />
          <Route path='/payment-success-alert' exact render={props => <PaymentSuccessAlertAdmin {...props} />} />
          <Route path='/api/admin/offset-converstion' exact render={props => <AdminOffsetConverstion {...props} />} />
          <Route
            path="/individual/privacy-policy"
            exact
            render={props => <IndividualPrivacy {...props} />}
          />
          <Route
            path="/individual/terms-conditions"
            exact
            render={props => <IndividualTerm {...props} />}
          />
          <Route
            path="/our-approach"
            render={props => <OurApproch {...props} />}
          />
          <Route
            path="/eko-points"
            render={props => <EkoPoints {...props} />}
          />
          <Route
            path="/login"
            render={props => <IndividualLogin {...props} />}
          />

          <Route
            path="/forgot-password"
            exact
            render={props => <IndividualForgot {...props} />}
          />

          <PrivateRoute
            path="/IndividualNav"
            exact
            render={props => <IndividualNav {...props} />}
          />

          < Route
            path="/new-password-success"
            exact
            render={props => <IndividualPasswordSuccess {...props} />}
          />

          <Route
            path="/individual-signup"
            exact
            render={props => <IndividualSignup {...props} />}
          />

          <Route
            path="/business-signup"
            exact
            render={props => <BusinessSignup {...props} />}
          />

          <Route
            path="/signup-enter-otp"
            exact
            render={props => <IndividualSignupOtpWeb {...props} />}
          />

          <Route
            path="/signup-enter-password"
            exact
            render={props => <IndividualSignUpPassWeb {...props} />}
          />

          <Route
            path="/signup-password-success"
            exact
            render={props => <IndividualSignupPasswordSuccessWeb {...props} />}
          />

          <Route
            path="/profile-reset-password"
            exact
            render={props => <IndividualProfileResetPassword {...props} />}
          />

          <Route
            path="/profile-reset-password-otp"
            exact
            render={props => <IndividualProfileResetPasswordOtp {...props} />}
          />

          <Route
            path="/profile-reset-password-set"
            exact
            render={props => <IndividualProfileResetPasswordSet {...props} />}
          />

          <Route
            path="/profile-reset-password-success"
            exact
            render={props => (
              <IndividualProfileResetPasswordSuccess {...props} />
            )}
          />

          <Route
            path="/climate-project"
            exact
            render={props => <ClimateProject {...props} />}
          />

          <Route
            path="/aboutus"
            exact
            render={props => <AboutUs {...props} />}
          />

          <Route
            path="/contactus"
            exact
            render={props => <ContactUs {...props} />}
          />

          <Route path="/faqs" exact render={props => <FAQs {...props} />} />

          <Route
            path="/privacyPolicy"
            exact
            render={props => <PrivacyPolicy {...props} />}
          />

          <Route
            path="/termscondition"
            exact
            render={props => <TermsConditions {...props} />}
          />

          <Route
            path="/redeemgift"
            exact
            render={props => <RedeemGift {...props} />}
          />

          <Route
            path="/read-more-article"
            exact
            render={props => <ReadMoreArticle {...props} />}
          />

          <Route
            path="/marketing-total-impact/:id"
            exact
            render={props => <BusinessMarketingTotalImpact {...props} />}
          />

          <Route
            path="/individual/project-details"
            exact
            render={props => <BusinessDashboardProjectDetail {...props} />}
          />
          <Route
            path="/business/project-details"
            exact
            render={props => <BusinessDashboardProjectDetail {...props} />}
          />
          <Route path="/individual-payment">
            <IndvHeadLayout>
              <Route
                path="/individual-payment/success"
                exact
                render={props => <IndividualPaymentSuccess {...props} />}
              />
              <Route
                path="/individual-payment/success-alert"
                exact
                render={props => <IndvPaymentSuccessAlert {...props} />}
              />
            </IndvHeadLayout>
          </Route>
          <Route path="/business-payment">
            <IndvHeadLayout>
              <Route
                path="/business-payment/success"
                exact
                render={props => <IndividualPaymentSuccess {...props} />}
              />
              <Route
                path="/business-payment/success-alert"
                exact
                render={props => <IndvPaymentSuccessAlert {...props} />}
              />
            </IndvHeadLayout>
          </Route>
          <Route path="/individual">
            <IndvLayout>
              <Route
                path="/individual/dashboard"
                exact
                render={props => <IndividualScreen {...props} />}
              />
              <Route
                path="/individual/offset-onetime"
                exact
                render={props => <IndividualOffset {...props} />}
              />
              <Route
                path="/individual/offset-onetime-flight"
                exact
                render={props => <OffsetOneTimeFlight {...props} />}
              />
              <Route
                path="/individual/profile"
                exact
                render={props => <IndividualProfile {...props} />}
              />
              <Route
                path="/individual/project"
                exact
                render={props => <IndividualProject {...props} />}
              />
              <Route
                path="/individual/mygiftcard"
                exact
                render={props => <IndividualGiftCardDetail {...props} />}
              />
              <Route
                path="/individual/mysubscription"
                exact
                render={props => <IndividualSubscription {...props} />}
              />
              <Route
                path="/individual/plant-tree"
                exact
                render={props => <IndividualPlantTree {...props} />}
              />
              <Route
                path="/individual/giftCard"
                exact
                render={props => <IndividualGiftCard {...props} />}
              />

              <Route
                path="/individual/AddtoCard"
                exact
                render={props => <IndividualAddtoCartWeb {...props} />}
              />
              <Route
                path="/individual/AddtoCard/payment"
                exact
                render={props => <IndividualAddtoCartAndPayment {...props} />}
              />

              <Route
                path="/individual/offset-subscription"
                exact
                render={props => <SubscriptionOffset {...props} />}
              />

              <Route
                path="/individual/offset-onetime-car"
                exact
                render={props => <OffsetOneTimeCar {...props} />}
              />

              <Route
                path="/individual/offset-onetime-house"
                exact
                render={props => <OffsetOneTimeHouse {...props} />}
              />

              <Route
                path="/individual/offset-onetime-transport"
                exact
                render={props => <OffsetOneTimeTransport {...props} />}
              />

              <Route
                path="/individual/faq"
                exact
                render={props => <IndividualFaq {...props} />}
              />

              {/* <Route
                path="/individual/privacy-policy"
                exact
                render={props => <IndividualPrivacy {...props} />}
              /> */}

              {/* <Route
                path="/individual/terms-conditions"
                exact
                render={props => <IndividualTerm {...props} />}
              /> */}

              <Route
                path="/individual/climate-certificates"
                exact
                render={props => <IndividualClimateCertificate {...props} />}
              />
              <Route
                path="/individual/tour-begin"
                exact
                render={props => <IndividualTourBegin {...props} />}
              />
              <Route
                path="/individual/tour-1"
                exact
                render={props => <IndividualTour1 {...props} />}
              />
              <Route
                path="/individual/tour-2"
                exact
                render={props => <IndividualTour2 {...props} />}
              />
              <Route
                path="/individual/tour-3"
                exact
                render={props => <IndividualTour3 {...props} />}
              />
              <Route
                path="/individual/tour-4"
                exact
                render={props => <IndividualTour4 {...props} />}
              />
              <Route
                path="/individual/tour-5"
                exact
                render={props => <IndividualTour5 {...props} />}
              />
              <Route
                path="/individual/tour-6"
                exact
                render={props => <IndividualTour6 {...props} />}
              />
              <Route
                path="/individual/tour-7"
                exact
                render={props => <IndividualTour7 {...props} />}
              />
              <Route
                path="/individual/tour-8"
                exact
                render={props => <IndividualTour8 {...props} />}
              />
              <Route
                path="/individual/tour-9"
                exact
                render={props => <IndividualTour9 {...props} />}
              />
              <Route
                path="/individual/tour-10"
                exact
                render={props => <IndividualTour10 {...props} />}
              />
              <Route
                path="/individual/tour-end"
                exact
                render={props => <IndividualTourEnd {...props} />}
              />
            </IndvLayout>
          </Route>
          <Route path="/business">
            <BusinessLayout>
              <Route
                path="/business/dashboard"
                exact
                render={props => <BusinessScreen {...props} />}
              />
              <Route
                path="/business/offset-employee"
                exact
                render={props => <BusinessOffsetEmployee {...props} />}
              />
              <Route
                path="/business/offset-flight"
                exact
                render={props => <BusinessOffsetFlight {...props} />}
              />
              <Route
                path="/business/offset-flight-by-distance"
                exact
                render={props => <BusinessOffsetByDistance {...props} />}
              />
              <Route
                path="/business/offset-car"
                exact
                render={props => <BusinessOffsetOneTimeCar {...props} />}
              />
              <Route
                path="/business/offset-event"
                exact
                render={props => <BusinessOffsetOneTimeEvent {...props} />}
              />
              <Route
                path="/business/marketing-toolkit"
                exact
                render={props => <BusinessMarketingToolkit {...props} />}
              />
              <Route
                path="/business/profile"
                exact
                render={props => <IndividualProfile {...props} />}
              />
              <Route
                path="/business/project"
                exact
                render={props => <IndividualProject {...props} />}
              />
              <Route
                path="/business/mysubscription"
                exact
                render={props => <IndividualSubscription {...props} />}
              />
              <Route
                path="/business/faq"
                exact
                render={props => <IndividualFaq {...props} />}
              />
              <Route
                path="/business/terms-conditions"
                exact
                render={props => <IndividualTerm {...props} />}
              />
              <Route
                path="/business/climate-certificates"
                exact
                render={props => <IndividualClimateCertificate {...props} />}
              />
              <Route
                path="/business/plant-tree"
                exact
                render={props => <IndividualPlantTree {...props} />}
              />
              <Route
                path="/business/privacy-policy"
                exact
                render={props => <IndividualPrivacy {...props} />}
              />
              <Route
                path="/business/AddtoCard"
                exact
                render={props => <IndividualAddtoCartWeb {...props} />}
              />
              <Route
                path="/business/AddtoCard/payment"
                exact
                render={props => <IndividualAddtoCartAndPayment {...props} />}
              />
              <Route
                path="/business/subscription-car"
                exact
                render={props => <BusinessOffsetSubscriptionCar {...props} />}
              />
              <Route
                path="/business/subscription-flight"
                exact
                render={props => <SubscriptionFlight {...props} />}
              />
              <Route
                path="/business/subscription-employee"
                exact
                render={props => <SubscriptionEmployee {...props} />}
              />
              <Route
                path="/business/tour-begin"
                exact
                render={props => <BusinessTourBegin {...props} />}
              />
              <Route
                path="/business/tour-1"
                exact
                render={props => <BusinessTour1 {...props} />}
              />
              <Route
                path="/business/tour-2"
                exact
                render={props => <BusinessTour2 {...props} />}
              />
              <Route
                path="/business/tour-3"
                exact
                render={props => <BusinessTour3 {...props} />}
              />
              <Route
                path="/business/tour-4"
                exact
                render={props => <BusinessTour4 {...props} />}
              />
              <Route
                path="/business/tour-5"
                exact
                render={props => <BusinessTour5 {...props} />}
              />
              <Route
                path="/business/tour-6"
                exact
                render={props => <BusinessTour6 {...props} />}
              />
              <Route
                path="/business/tour-7"
                exact
                render={props => <BusinessTour7 {...props} />}
              />
              <Route
                path="/business/tour-8"
                exact
                render={props => <BusinessTour8 {...props} />}
              />
              <Route
                path="/business/tour-9"
                exact
                render={props => <BusinessTour9 {...props} />}
              />
              <Route
                path="/business/tour-10"
                exact
                render={props => <BusinessTour10 {...props} />}
              />
              <Route
                path="/business/tour-end"
                exact
                render={props => <BusinessTourEnd {...props} />}
              />
              <Route
                path="/business/Carbon-Reduction-tips"
                exact
                render={props => <BusinessCarbonReductionTips {...props} />}
              />
            </BusinessLayout>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
  // }
}

//@ts-ignore
export default withRouter(WebRoutes);
