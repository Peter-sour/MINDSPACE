import React, { useState } from 'react';
import '../styles/global.css'; // Gunakan file CSS asli kamu di sini

const filters = [
  { label: 'All Resources', value: 'all' },
  { label: 'Anxiety', value: 'anxiety' },
  { label: 'Depression', value: 'depression' },
  { label: 'Mindfulness', value: 'mindfulness' },
  { label: 'Relationships', value: 'relationships' },
  { label: 'Self-Care', value: 'self-care' },
];

const resources = [
  {
    id: 1,
    title: 'Breathing Techniques for Instant Calm',
    description: 'Learn 5 powerful breathing exercises that can help reduce anxiety in moments of stress.',
    image: '/images/anxiety.jpeg',
    tag: 'Anxiety',
    category: 'anxiety mindfulness',
  },
  {
    id: 2,
    title: 'Effective Mood Journaling Guide',
    description: 'Discover how structured journaling can help manage depression symptoms and improve mood.',
    image: 'https://i.pinimg.com/736x/d4/64/59/d46459500de8d84a8470d3197ee3bded.jpg',
    tag: 'Depression',
    category: 'depression self-care',
  },
  {
    id: 3,
    title: '10-Minute Meditation for Teens',
    description: 'A simple, guided meditation practice designed specifically for busy teenage schedules.',
    image: 'https://i.pinimg.com/736x/ef/d6/79/efd679c69939b92a49cc5b226c1f7f72.jpg',
    tag: 'Mindfulness',
    category: 'mindfulness self-care',
  },
  {
    id: 4,
    title: 'Healthy Communication Skills',
    description: 'Build better relationships with friends and family through improved communication techniques.',
    image: 'https://i.pinimg.com/736x/0e/1b/00/0e1b00e89a37fac2ffce9460ac3c00eb.jpg',
    tag: 'Relationships',
    category: 'relationships',
  },
  {
    id: 5,
    title: 'Creating Your Self-Care Routine',
    description: 'Learn how to design a personalized self-care plan that fits your unique needs and schedule.',
    image: 'https://i.pinimg.com/736x/11/87/ff/1187ff6952d5f659a391d7d51c0355d0.jpg',
    tag: 'Self-Care',
    category: 'self-care',
  },
  {
    id: 6,
    title: 'Healthy Coping Mechanisms',
    description: 'Discover positive ways to handle stress, anxiety, and difficult emotions in everyday life.',
    image: 'https://i.pinimg.com/736x/e8/05/9e/e8059eaad1004c03711f66219e1d98a1.jpg',
    tag: 'Coping Skills',
    category: 'anxiety depression',
  },
];

const ResourceSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredResources = resources.filter(resource =>
    activeFilter === 'all' || resource.category.includes(activeFilter)
  );

  return (
    <section className="resources" id="resources">
      <div className="container">
        <h2 className="section-title">Helpful Resources</h2>
        <p className="section-subtitle">
          Explore our collection of expert-curated resources designed to support various aspects of teen mental health.
        </p>

        <div className="filter-container">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`filter-button ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="resources-grid">
          {filteredResources.map(resource => (
            <div key={resource.id} className="resource-card" data-category={resource.category}>
              <img src={resource.image} alt={resource.title} className="resource-image" />
              <div className="resource-content">
                <span className="resource-tag">{resource.tag}</span>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <a href="#m" className="resource-link">
                  Explore <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;
