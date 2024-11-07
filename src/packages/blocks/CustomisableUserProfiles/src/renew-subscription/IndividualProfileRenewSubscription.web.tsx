import React from "react";
import IndividualProfileRenewSubscriptionController, {
  Props,
} from "./IndividualProfileRenewSubscriptionController.web";
import { Modal, Button } from "antd";
import "../IndiviCustomisableUserProfiles.web.css";

class IndividualProfileRenewSubscription extends IndividualProfileRenewSubscriptionController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { isShowModalRenew } = this.state;

    return (
      <>
        <Modal
          title=""
          visible={isShowModalRenew}
          centered
          onCancel={() => this.handleBack()}
          width={500}
          footer={
            <div className="reset-password-modal-footer mb-4">
              <Button
                onClick={() => this.handleAddToCartData(this.props.dataList)}
                className="csncel_subcription"
              >
                YES
              </Button>
              <Button
                onClick={() => this.handleBack()}
                className="csncel_subcription"
              >
                NO
              </Button>
            </div>
          }
          className="idv-signup-reset-pass-modal"
        >
          <div className="reset-pass-modal-head">
            <p>Renew Subscription</p>
          </div>
          <div className="reset-pass-modal-txt mt-2">
            <p>Are you sure, you want to renew the subscription.</p>
          </div>
        </Modal>
      </>
    );
  }
}

export default IndividualProfileRenewSubscription as React.ComponentType<any>;
