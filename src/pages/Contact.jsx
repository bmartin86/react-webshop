import { SocialLinks } from "../components/SocialLinks";
import "../styles/Contact.css";

function Contact() {
  return (
    <main>
      <div id="contact-main-content">
        <section id="contact">
          <ul>
            <li>
              <div class="adresses">
                <address class="bold">FASHION STORE</address>
                <address>+385(0)22/ 123-4567</address>
                <address>fashion.store@info.org</address>
                <address>123 Street, City, Country</address>
              </div>
            </li>

            <li>
              <div class="contact-social-links">
                <SocialLinks />
              </div>
            </li>
          </ul>
        </section>

        <section className="newsletterWrapper">
          <div class="flex-row h2">
            <h2 id="newsletter-title">SEND US A MESSAGE</h2>
          </div>
          <div class="flex-row h3">
            <h3 id="newsletter-title">Please insert Your informations below</h3>
          </div>
          <form action="#" method="get">
            <div class="newsletter-flex">
              <div class="flex-row">
                <select name="gender" id="gender">
                  <option value="Unknown" id="value-1">
                    Please choose salutation
                  </option>
                  <option value="Female" id="value-2">
                    Ms
                  </option>
                  <option value="Male" id="value-3">
                    Mr
                  </option>
                  <option value="Neutral" id="value-4">
                    Mx
                  </option>
                </select>
                <input type="text" name="title" placeholder="Title" />
              </div>
              <div class="flex-row">
                <input
                  type="text"
                  name="first-name"
                  placeholder="First Name*"
                  required
                />
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last Name*"
                  required
                />
              </div>
              <div class="flex-row">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail*"
                  required
                />
                <input type="text" name="company" placeholder="Company" />
              </div>
              <div class="textarea-div">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="7"
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>
            <div class="checkbox">
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
                  I accept the collection and processing of personal data
                  provided in the form, without which my request cannot be
                  fulfilled, and allow FASHION STORE to contact me for the
                  purpose of sending notifications. *
                </label>
              </div>
            </div>
            <div class="checkbox">
              <div>
                <input
                  type="checkbox"
                  name="offers-checkbox"
                  id="offers-checkbox"
                />
              </div>
              <div>
                <label htmlFor="offers-checkbox">
                  Send me exclusive offers and discounts tailored to my
                  preferences.
                </label>
              </div>
            </div>
            <div class="checkbox">
              <div>
                <input
                  type="checkbox"
                  name="newsletter-checkbox"
                  id="newsletter-checkbox"
                />
              </div>
              <div>
                <label htmlFor="newsletter-checkbox">
                  Subscribe me to the newsletter.
                </label>
              </div>
            </div>
            <div class="flex-row">
              <div class="newsletter-submit-box">
                <input type="submit" id="form-submit" value="Send now" />
              </div>
            </div>
            <div class="flex-row">
              <div class="checkbox checkbox-info">
                Fields marked with an (*) are required information.
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
export { Contact };
