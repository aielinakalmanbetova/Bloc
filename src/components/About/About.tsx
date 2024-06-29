import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <div className="card text-bg-dark">
        <img src="/public/pic.avif" alt="card-pic"/>
        <div className="card-img-overlay">
          <h5 className="card-title">About:</h5>
          <p className="card-text fst-italic fs-3 text-center text-white-emphasis pt-xxl-4">Люди проводят всю свою жизнь
            в мечтах о том, как стать счастливее, как жить с большей жизненной силой и как наполнить жизнь страстью. И
            при этом не могут уделить и десяти минут в месяц, чтобы сформулировать на листе бумаге свои цели и серьезно
            задуматься о смысле своей жизни.</p>
        </div>
      </div>
    </div>
  );
};

export default About;