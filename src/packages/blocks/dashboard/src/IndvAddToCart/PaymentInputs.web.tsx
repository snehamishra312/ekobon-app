import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import "./PaymentRazorPay.css"
const PaymentInputs = (props: any) => {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  return (
    <div className="fake page custom-card-detail-enter">
      <PaymentInputsWrapper {...wrapperProps}>
        {/*//@ts-ignore*/}
        <svg {...getCardImageProps({ images })} />
        <input
          {...getCardNumberProps({
            onChange: props.handleInputOnChange("cardNumber"),
          })}
          value={props.cardNumber}
        />
        <input
          {...getExpiryDateProps({
            onChange: props.handleInputOnChange("expiryDate"),
          })}
          value={props.expiryDate}
        />
        <input
          {...getCVCProps({ onChange: props.handleInputOnChange("cvvNo") })}
          value={props.cvvNo}
        />
      </PaymentInputsWrapper>
    </div>
  );
};
export default PaymentInputs;
