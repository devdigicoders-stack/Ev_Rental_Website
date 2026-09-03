import React, { useEffect } from 'react';
import SubscriptionPlans from '../components/SubscriptionPlans';

const Plans = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SubscriptionPlans />
    </div>
  );
};

export default Plans;
