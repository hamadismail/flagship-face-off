import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';
import Button from '../ui/Button';

const PhoneContainer = ({ phones }) => {
  const [displayPhone, setDisplayPhone] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayPhone(phones);
    } else {
      setDisplayPhone(phones.slice(0, 6));
    }
  }, [phones, showAll]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {displayPhone.map(phone => (
          <PhoneCard key={phone.id} phone={phone} />
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <Button
          type="submit"
          onClick={() => {
            setShowAll(prev => !prev);
            showAll && window.scrollTo({ top: 400, behavior: 'smooth' });
          }}
          label={showAll ? 'Show Less' : 'Show All'}
        />
      </div>
    </div>
  );
};

export default PhoneContainer;
