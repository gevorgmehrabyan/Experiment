import React, {Suspense, lazy, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home/Home'));
const Search = lazy(() => import('./Pages/Search/Search'));
const Login = lazy(() => import('./Pages/Auth/Login/Login'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const Registration = lazy(() => import('./Pages/Auth/Registration/Registration'));
const ForgotPasswordVerify = lazy(() => import('./Pages/Auth/ForgotPasswordVerify/ForgotPasswordVerify'));
const ForgotPassword = lazy(() => import('./Pages/Auth/ForgotPassword/ForgotPassword'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy/PrivacyPolicy'));
const AccountConfirmation = lazy(() => import('./Pages/Auth/AccountConfirmation/AccountConfirmation'));
const CustomerReviewsUnavailable = lazy(() => import('./Pages/OtherPages/CustomerReviewsUnavailable/CustomerReviewsUnavailable'));
const CustomerReviewThankYou = lazy(() => import('./Pages/OtherPages/CustomerReviewThankYou/CustomerReviewThankYou'));
const FeedbackMessage = lazy(() => import('./Pages/OtherPages/FeedbackMessage/FeedbackMessage'));
const PurchaseFailed = lazy(() => import('./Pages/OtherPages/PurchaseFailed/PurchaseFailed'));
const PurchaseSuccessful = lazy(() => import('./Pages/OtherPages/PurchaseSuccsesful/PurchaseSuccessful'));
const About = lazy(() => import('./Pages/About/About'));
const AdsOnElement = lazy(() => import("./Pages/AdsOnElement/AdsOnElement"));
const Careers = lazy(() => import("./Pages/Careers/Careers"));
const GiftCards = lazy( () => import ('./Pages/GitfCards/GiftCards'));
const Order = lazy( () => import ('./Pages/Order/Order'));
const PaymentMethods = lazy( () => import('./Pages/PaymentMethods/PaymentMethods'));
const Returns = lazy( () => import ('./Pages/Returns/Returns'));
const StorePickUp = lazy( () => import ('./Pages/StorePickUp/StorePickUp'));
const OrderDetails = lazy ( () => import('./Pages/Order/OrderDetails/OrderDetails'))

const RouterApp = (props) => {
    const {history} = props;
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, []);
    return (
        <Suspense fallback={<div>holla</div>}>
            <Router history={props.history}>
                <Route
                    path='/'
                    render={props => <Home {...props}/>}
                    exact
                />
                <Route
                    path='/search'
                    render={props => <Search {...props}/>}
                    exact
                />
                <Route
                    path='/contact'
                    render={props => <Contact {...props}/>}
                    exact
                />
                <Route
                    path='/login'
                    render={props => <Login {...props}/>}
                    exact
                />
                <Route
                    path='/registration'
                    render={props => <Registration {...props}/>}
                    exact
                />
                <Route
                    path='/forgot-password'
                    render={props => <ForgotPassword {...props}/>}
                    exact
                />
                <Route
                    path='/forgot-password-verify'
                    render={props => <ForgotPasswordVerify {...props}/>}
                    exact
                />
                <Route
                    path='/account-confirmation'
                    render={props => <AccountConfirmation {...props}/>}
                    exact
                />
                <Route
                    path='/privacy-policy'
                    render={props => <PrivacyPolicy {...props}/>}
                    exact
                />
                <Route
                    path='/customer-reviews-unavailable'
                    render={props => <CustomerReviewsUnavailable {...props}/>}
                    exact
                />
                <Route
                    path='/customer-reviews-thank-you'
                    render={props => <CustomerReviewThankYou {...props}/>}
                    exact
                />
                <Route
                    path='/feedback-message'
                    render={props => <FeedbackMessage {...props}/>}
                    exact
                />
                <Route
                    path='/purchase-failed'
                    render={props => <PurchaseFailed {...props}/>}
                    exact
                />
                <Route
                    path='/purchase-successful'
                    render={props => <PurchaseSuccessful {...props}/>}
                    exact
                />
                <Route
                    path='/about'
                    render={props => <About {...props}/>}
                    exact
                />
                <Route
                    path='/ads-on-element'
                    render={props => <AdsOnElement {...props}/>}
                    exact
                />
                <Route
                    path='/careers'
                    render={props => <Careers {...props}/>}
                    exact
                />
                <Route
                    path='/gift-cards'
                    render={props => <GiftCards {...props}/>}
                    exact
                />
                <Route
                    path='/order'
                    render={props => <Order {...props}/>}
                    exact
                />
                <Route
                    path='/payment-methods'
                    render={props => <PaymentMethods {...props}/>}
                    exact
                />  
                <Route 
                    path='/returns'
                    render={props => <Returns {...props}/>}
                    exact
                />
                <Route 
                    path='/store-pick-up'
                    render={props => <StorePickUp {...props}/>}
                    exact
                />
                <Route 
                    path='/order-details'
                    render={props => <OrderDetails {...props}/>}
                    exact
                />
            </Router>
        </Suspense>
    )
}

export default RouterApp;