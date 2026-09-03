import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Services from '../components/Services';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Testimonials from '../components/Testimonials';
import ImpactStats from '../components/ImpactStats';
import LeadForm from '../components/LeadForm';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      <Hero />
      <HowItWorks />
      <Services />
      <SubscriptionPlans />
      <Testimonials />
      <ImpactStats />
      <LeadForm />
    </div>
  );
};

export default Home;
