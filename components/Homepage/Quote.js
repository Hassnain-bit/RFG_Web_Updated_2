import React from "react";
import styles from "../../styles/Quote.module.scss";
import GeneralHeading from "../Common/GeneralHeading";

function Quote() {
  return (
    <>
      <div className={styles.quote}>
        <div className="container">
          <div className={styles.form_holder}>
            <GeneralHeading
              small_Title={"Request A"}
              large_Title={"Free Quote"}
            />
            <form>
              <input className="form-control" type="text" placeholder="Name" />
              <input
                className="form-control"
                type="email"
                placeholder="Email"
              />
              <select className="form-select">
                <option selected>Frieght Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <input
                className="form-control"
                type="number"
                placeholder="Phone Number"
              />
              <textarea className="form-control" rows="4" placeholder="Message" />
              <button type="button" className="btn  fs-3 px-4 py-3 px-md-5 py-md-3 ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
