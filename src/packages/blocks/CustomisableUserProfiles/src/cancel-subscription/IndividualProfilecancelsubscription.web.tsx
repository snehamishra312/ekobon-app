import React from "react";
import IndividualProfilecancelsubscriptionController, {
  Props,
} from "./IndividualProfilecancelsubscriptionController.web";
import { Modal, Button } from "antd";
import "../IndiviCustomisableUserProfiles.web.css";
class IndividualProfilecancelsubscription extends IndividualProfilecancelsubscriptionController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { isShowModalCancel } = this.state;
   
    return (
      <>
        <Modal
          title=""
          visible={isShowModalCancel}
          centered
          onCancel={() => this.handleBack()}
          width={500}
          footer={
            <div className="reset-password-modal-footer mb-4">
              <Button
                onClick={() => this.handleCancelSusbcription(this.props?.dataList?.id)}
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
            <p>Cancel Subscription</p>
          </div>
          <div className="reset-pass-modal-txt mt-2">
            <p>Are you sure, you want to cancel the subscription.</p>
          </div>
        </Modal>
      </>
    );
  }
}

export default IndividualProfilecancelsubscription as React.ComponentType<any>;
