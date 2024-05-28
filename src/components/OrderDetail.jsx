import "../styles/Checkout.css";

function OrderDetails({ total }) {
  return (
    <>
      <div className="transaction-info-wrapper">
        <div className="transaction-info-flexbox">
          <div className="transaction-info-row">
            <div>Order value</div>
            <div>{total}&euro;</div>
          </div>

          <div className="transaction-info-row">
            <div>Shipping</div>
            <div>FREE</div>
          </div>
          <div id="transaction-info-bold">
            <div>Total</div>
            <div>{total}&euro;</div>
          </div>
          <div>
            <div id="disclaimer">
              <div>
                By continuing, you agree to{" "}
                <span>
                  <br />
                </span>
                FASHION STORE's{" "}
                <a href="/terms-and-conditions">
                  General Terms and Conditions.
                </a>
              </div>
              <div>
                We will process your personal data in accordance with FASHION
                STORE's <a href="/privacy-policy">Privacy Notice.</a>
              </div>
              <div>
                Please note that the tax amount is an estimation and the final
                amount can change. If the estimated tax is presented as TBD, the
                order value does not include any tax and it will be added when
                the items are shipped.
              </div>
              <div>
                Need help? Please contact{" "}
                <a href="/contact">Customer Service.</a>{" "}
                <span>
                  <br />
                </span>
                For quick help, chat with us!.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderDetails;
