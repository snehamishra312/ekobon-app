import React from "react";
import { Statistic } from "antd";

const { Countdown } = Statistic;

const OTPCounter = (props: any) => {
  return (
    <>
      <Countdown
        title="OTP will expire after :"
        value={props.Otptime}
        onFinish={props.OtpFinishTime}
        format="mm:ss"
      />
    </>
  );
};

export default OTPCounter;
