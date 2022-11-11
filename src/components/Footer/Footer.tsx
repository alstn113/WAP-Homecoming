import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <p>
        <div>문의 : 010-5592-3721</div>
        <div>
          ©2022 <a href="https://github.com/neko113">neko113</a> | All Rights
          Reserved
        </div>
      </p>
    </footer>
  );
};

export default Footer;
