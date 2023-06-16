import React from "react";
import CompanyLogo from "../../images/companyLogo.png";

const Footer = () => {
  return (
    <footer
      class="text-center text-lg-start bg-white  "
      style={{ paddingTop: "45px", color: "black !important" }}
    >
      {/* <!-- Section: Social media --> */}
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* <!-- Left --> */}
        {/* <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div> */}
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        {/* <div>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div> */}
        {/* <!-- Right --> */}
      </section>
      {/* <!-- Section: Social media --> */}

      {/* <!-- Section: Links  --> */}
      <section class="">
        <div class="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div class="row mt-3">
            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 class="text-uppercase fw-bold mb-4">
                <img src={CompanyLogo} alt="" width={"100%"} />
              </h6>
              <p style={{ textAlign: "justify" }}>
                Olivia Clothing puts a great effort into making clothes that fit
                and please every individual customer.We only make products that
                we consider attractive, high quality, contemporary, genuine and
                affordable.
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" class="text-reset">
                  Fashion
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  T-shart
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset"></a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Jacket
                </a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a href="#!" class="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Help
                </a>
              </p>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3"></i> Badda,Dhaka,Bangladesh
              </p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@olivia.com
              </p>
              <p>
                <i class="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}

      {/* <!-- Copyright --> */}
      <div
        class="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
          Olivia Fashion
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
