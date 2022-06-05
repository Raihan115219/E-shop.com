import React from "react";

function ContactInfo() {
  return (
    <div>
      <div class="col-lg-5 mb-5">
        <div class="content-box ms-sm-5">
          <ul class="info-box clearfix">
            <li>
              <i class="fas fa-phone-alt"></i>
              <p>Any Question</p>
              <div class="">
                <a>+91745618</a>
              </div>
            </li>
            <li>
              <i class="fa fa-envelope-open"></i>
              <p>Any Question? Email US</p>
              <div class="">
                <a href="#">demo@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
