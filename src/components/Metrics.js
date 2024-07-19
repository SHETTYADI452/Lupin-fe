import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';

const Metrics = () => {
  const metrics = useSelector((state) => state.metrics);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    });
  }, [controls]);

  return (
    <div className="metrics">
      <h2>LUPIN in Numbers</h2>
      <div className="metrics-grid">
        {metrics.map((metric) => (
          <motion.div
            key={metric.id}
            className="metric"
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
          >
            <h3>{metric.Title}</h3>
            <p>{metric.Value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
