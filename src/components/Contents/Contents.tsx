import './Contents.css';
import { motion } from 'framer-motion';

const Contents = () => {
  return (
    <motion.div
      initial={{ opacity: 0.7, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-chalkboard-user"></i>
          </div>
          <div className="content">
            <h2>현직자 선배님들의 강연</h2>
            <h2>포스티잇 QnA</h2>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa fa-gift"></i>
          </div>
          <div className="content">
            <h2>
              <i className="fa fa-block-question"></i>
            </h2>
            <p>2022.11.19 토요일 공개</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-map-location-dot"></i>
          </div>
          <div className="content">
            <h2>장소 및 일시</h2>
            <p>
              <div>11/19 SAT</div>
              <div>부경대학교 창의관 303호</div>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contents;
