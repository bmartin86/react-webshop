import "../styles/newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="flex-row">
        <h2 className="newsletter-title">SUBSCRIBE for the NEWSLETTER</h2>
      </div>
      <div className="flex-row">
        <h3 className="newsletter-title">
          Get the latest news straight to your inbox
        </h3>
      </div>
      <form action="#" method="get">
        <div className="newsletter-flex">
          <div className="flex-row">
            <input type="email" name="email" placeholder="E-mail*" required />
            <select name="gender" id="gender">
              <option value="Unknown" id="value-1">
                Choose product category
              </option>
              <option value="Female" id="value-2">
                Women
              </option>
              <option value="Male" id="value-3">
                Men
              </option>
              <option value="Children" id="value-4">
                Children
              </option>
            </select>
          </div>
        </div>
        <div className="checkbox">
          <div>
            <input
              type="checkbox"
              required
              name="required-checkbox"
              id="required-checkbox"
            />
          </div>
          <div>
            <label htmlFor="required-checkbox">
              <span>
                I would like to receive information via email on the selected
                subjects and I agree to the processing of my personal
                information (consent).
              </span>
              <span>
                I can withdraw my consent at any time at the end of an email. *
              </span>
            </label>
          </div>
        </div>
        <div className="checkbox">
          <div>
            <input
              type="checkbox"
              name="optional-checkbox"
              id="optional-checkbox"
            />
          </div>
          <div>
            <label htmlFor="optional-checkbox">
              Send me exclusive offers and discounts tailored to my preferences.
            </label>
          </div>
        </div>

        <div className="flex-row">
          <div className="newsletter-submit-box">
            <input type="submit" id="form-submit" value="Sign up now" />
          </div>
        </div>
        <div className="checkbox checkbox-info">
          Fields marked with an (*) are required information.
        </div>
      </form>
    </>
  );
}
export { Newsletter };
