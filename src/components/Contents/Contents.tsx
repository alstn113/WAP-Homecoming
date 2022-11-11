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
            <h2>선배님들의 강연</h2>
            <h2>및</h2>
            <h2>포스티잇 QnA</h2>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa fa-gift"></i>
          </div>
          <div className="content">
            <h2>? ? ?</h2>
            <h2>2022/11/19 토요일</h2>
            <h2>공개!</h2>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-map-location-dot"></i>
          </div>
          <div className="content">
            <h2>장소 및 일시</h2>
            <h2>창의관 303호</h2>
            <h2>2022/11/19 토요일</h2>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contents;
