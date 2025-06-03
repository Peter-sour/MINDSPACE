import React, {useState} from 'react';
import FeatureCard from '../feature-card/featurecard';
import FeatureModal from '../feature-card/featuremodal';

import '../styles/progress.css';
import '../styles/features.css';

const featuresData = [
  {
    id: "assessment",
    icon: "fa-brain",
    title: "Personalized Assessment",
    frontText: "Take our science-backed assessment to receive personalized insights about your mental well-being and tailored recommendations.",
    backText: "Discover your unique mental well-being profile through our comprehensive assessment tool.",
    modalDescription: "Our science-backed assessment tool uses validated psychological measures to create a comprehensive profile of your mental well-being. In just 15 minutes, you'll receive personalized insights and actionable recommendations.",
    benefits: [
      "Evidence-based questions developed by mental health experts",
      "Detailed analysis of your emotional, cognitive, and behavioral patterns",
      "Customized recommendations based on your unique profile",
      "Track your progress with periodic reassessments",
      "100% confidential and secure"
    ],
    type:"journal",
    ctaText: "Take Your Assessment"
  },
  {
    id: "Interactive Breathing",
    icon: "fa-wind",
    title: "Interactive Breathing",
    frontText: "Engage with dynamic breathing exercises that adapt to your pace and guide you toward deeper relaxation.",
    backText: "Experience personalized breathing sessions with real-time feedback and visual guidance.",
    modalDescription: "Our interactive breathing platform provides real-time visual cues and breathing patterns that sync with your natural rhythm. Choose from various techniques, track your progress, and build a consistent practice that fits seamlessly into your daily routine.",
    benefits: [
      "24/7 moderation by qualified mental health advocates",
      "Themed discussion groups for specific challenges and conditions",
      "Anonymous participation options for your comfort",
      "Peer support training for community members",
      "Regular community events and workshops"
    ],
    type: "breathing",
    ctaText: "Join Our Community"
  },
  {
    id: "library",
    icon: "fa-book-open",
    title: "Resource Library",
    frontText: "Access our extensive collection of articles, videos, and activities curated by mental health professionals.",
    backText: "Explore expert-curated content designed to support your mental health journey.",
    modalDescription: "Access our comprehensive collection of mental health resources, curated by professionals and updated regularly with the latest research and techniques.",
    benefits: [
      "Over 500 articles, videos, and interactive activities",
      "Content categorized by topic for easy navigation",
      "Resources for various learning styles (visual, auditory, interactive)",
      "Evidence-based techniques and strategies",
      "Downloadable worksheets and exercise guides"
    ],
    type: "library",
    ctaText: "Explore Resources"
  },
  {
    id: "tracking",
    icon: "fa-chart-line",
    title: "Mood Tracking",
    frontText: "Monitor your emotional patterns with our interactive mood tracker and gain insights into what influences your well-being.",
    backText: "Visualize your emotional journey and identify patterns that affect your mental well-being.",
    modalDescription: "Our interactive mood tracking tool helps you monitor your emotional patterns over time, identify triggers, and recognize progress in your mental well-being journey.",
    benefits: [
      "Daily mood check-ins that take less than a minute",
      "Visual representations of your emotional patterns",
      "Correlation analysis with activities, sleep, and other factors",
      "Custom reminders to maintain consistent tracking",
      "Export options for sharing with healthcare providers"
    ],
    type: "tracking",
    ctaText: "Start Tracking"
  },
  {
    id: "challenges",
    icon: "fa-medal",
    title: "Growth Challenges",
    frontText: "Engage in daily challenges designed to build resilience, mindfulness, and positive mental health habits.",
    backText: "Take on daily activities that gradually build stronger mental health habits and resilience.",
    modalDescription: "Our daily challenges are designed to gradually build resilience, mindfulness, and positive mental health habits through consistent, manageable activities.",
    benefits: [
      "Progressive difficulty levels to match your journey",
      "Challenges based on cognitive behavioral therapy techniques",
      "Achievement tracking and milestone celebrations",
      "Community challenges to build connection",
      "Personalized recommendations based on your assessment"
    ],
    type: "challenges",
    ctaText: "Begin Challenges"
  },
  {
    id: "expert",
    icon: "fa-user-md",
    title: "Expert Connection",
    frontText: "Get connected with verified mental health professionals when you need more personalized support.",
    backText: "Access professional guidance when you need additional support on your mental health journey.",
    modalDescription: "When you need additional support, our platform connects you with verified mental health professionals who can provide personalized guidance and care.",
    benefits: [
      "Network of licensed therapists, counselors, and coaches",
      "Verification process for all professionals",
      "Multiple communication options (text, voice, video)",
      "Scheduling system for regular sessions",
      "Secure and confidential communications"
    ],
    type: "expert",
    ctaText: "Connect With Experts"
  }
];
const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Empowering Features</h2>
        <p className="section-subtitle">Discover tools designed to support your well-being...</p>
        <div className="features-container">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              frontText={feature.frontText}
              backText={feature.backText}
              featureKey={feature.id}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </div>
      </div>
      <FeatureModal
        isOpen={!!selectedFeature}
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </section>
  );
};

export default FeaturesSection;