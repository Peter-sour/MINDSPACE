import React, { useState } from 'react';
import '../styles/testimoni.css'; // Kamu bisa pakai CSS lama atau Tailwind di sini

import testimoni1Img from '../assets/images/testimoni1.jpeg';
import testimoni2Img from '../assets/images/testimoni2.jpeg';
import testimoni3Img from '../assets/images/testimoni3.jpeg';

const testimonials = [
  {
    name: 'Emma',
    age: 16,
    duration: '6 months',
    text: `MindSpace helped me understand that I wasn't alone in dealing with anxiety. The resources and supportive community gave me tools to manage my thoughts and feelings in a healthier way. Now I feel more confident handling stressful situations`,
    avatar: testimoni1Img,
  },
  {
    name: 'Miguel',
    age: 17,
    duration: '1 year',
    text: `Before finding MindSpace, I struggled with expressing my emotions. The journaling prompts and community discussions helped me find my voice and connect with others who understood what I was going through. It's been life-changing`,
    avatar: testimoni2Img,
  },
  {
    name: 'Aisha',
    age: 15,
    duration: '8 months',
    text: `The daily mindfulness challenges on MindSpace helped me develop better focus and reduced my stress levels significantly. I've become more present in my relationships and schoolwork, and I'm so grateful for these new skills.`,
    avatar: testimoni3Img,
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">
          Hear from teens who have found support and growth through MindSpace.
        </p>

        <div className="testimonials-container">
          <div
            className="testimonials-slider"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              width: `${testimonials.length * 33}%`,
            }}
          >
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-slide" style={{ width: '100%' }}>
                <div className="testimonial-card">
                  <div className="testimonial-quote">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <img src={t.avatar} alt={t.name} className="author-avatar" />
                    <div className="author-info">
                      <h4>{t.name}, {t.age}</h4>
                      <p>MindSpace Member for {t.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
