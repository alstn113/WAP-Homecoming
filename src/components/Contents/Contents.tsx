import './Contents.css';

const Contents = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <i className="fas fa-rocket"></i>
        </div>
        <div className="content">
          <h2>Card One</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quas
            voluptatum aliquid aspernatur! Laudantium ipsa eligendi corrupti
            aliquam rerum optio provident iure fugit debitis, mollitia ad,
            expedita dolore laboriosam tempore.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="fas fa-gem"></i>
        </div>
        <div className="content">
          <h2>Card Two</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quas
            voluptatum aliquid aspernatur! Laudantium ipsa eligendi corrupti
            aliquam rerum optio provident iure fugit debitis, mollitia ad,
            expedita dolore laboriosam tempore.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="icon">
          <i className="fas fa-globe"></i>
        </div>
        <div className="content">
          <h2>Card Three</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quas
            voluptatum aliquid aspernatur! Laudantium ipsa eligendi corrupti
            aliquam rerum optio provident iure fugit debitis, mollitia ad,
            expedita dolore laboriosam tempore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contents;
