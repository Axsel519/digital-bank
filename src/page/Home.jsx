/** @format */

import "../styles/Homestyle.css";
import images from "../assets/images/image-mockups.png";
import icononline from "../assets/images/icon-online.svg";
import iconsimple from "../assets/images/icon-budgeting.svg";
import iconfast from "../assets/images/icon-onboarding.svg";
import iconopen from "../assets/images/icon-api.svg";
import currency from "../assets/images/image-currency.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";
import plane from "../assets/images/image-plane.jpg";
import confetti from "../assets/images/image-confetti.jpg";

function Home() {
  return (
    <>
      <div className="generation">
        <div className="generation-text">
          <h1> Next generation digital banking </h1>

          <p>
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more
          </p>

          <div className="header-btn">
            <button>Request Invite</button>
          </div>
        </div>
        <div className="generation-image">
          <img src={images} alt="mockups" />
        </div>
      </div>

      <div className="choose">
        <div className="top">
          <h1>Why choose Digitalbank?</h1>

          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="bottom">
          <div className="online">
            <div className="icon">
              <img src={icononline} alt="icon-online" />
            </div>

            <div className="icon-text">
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world
              </p>
            </div>
          </div>

          <div className="simple">
            <div className="icon">
              <img src={iconsimple} alt="icon-simple" />
            </div>
            <div className="icon-text">
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
          </div>

          <div className="fast">
            <div className="icon">
              <img src={iconfast} alt="icon-fast" />
            </div>
            <div className="icon-text">
              <h3>Fast Onboarding</h3>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
          </div>

          <div className="open">
            <div className="icon">
              <img src={iconopen} alt="icon-open" />
            </div>
            <div className="icon-text">
              <h3> Open API</h3>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="latest ">
        <div className="title">
          <h1>Latest Articles</h1>
        </div>

        <div className="all-details">
          <div className="images">
            <div className="details">
              <img src={currency} alt="currency" />
            </div>

            <div className="text-detais">
              <h6>By Claire Robinson</h6>
              <h4>Receive money in any currency with no fees </h4>
              <p>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single…
              </p>
            </div>
          </div>

          <div className="images">
            <div className="details">
              <img src={restaurant} alt="restaurant" />
            </div>

            <div className="text-detais">
              <h6>By Wilson Hutton</h6>
              <h4>Treat yourself without worrying about money</h4>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>

          <div className="images">
            <div className="details">
              <img src={plane} alt="plane" />
            </div>

            <div className="text-detais">
              <h6>By Wilson Hutton</h6>
              <h4>Take your Digitalbank card wherever you go</h4>
              <p>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>

          <div className="images">
            <div className="details">
              <img src={confetti} alt="confetti" />
            </div>

            <div className="text-detais">
              <h6>By Claire Robinson</h6>
              <h4>Our invite-only Beta accounts are now live!</h4>
              <p>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
