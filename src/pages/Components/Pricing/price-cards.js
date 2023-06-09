import React, { useState } from 'react';
import { FcApproval } from 'react-icons/fc';
import { FcCheckmark } from 'react-icons/fc';

const PricingSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (cardId) => {
    setExpandedCard(cardId === expandedCard ? null : cardId);
  };

  const pricingCards = [
    {
      id: 1,
      icon: FcCheckmark,
      plan: 'Basic',
      price: '$9.99/mo',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ],
    },
    {
      id: 2,
      icon: FcApproval,
      plan: 'Pro',
      price: '$19.99/mo',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
      ],
    },
    {
      id: 3,
      icon: FcApproval,
      plan: 'Premium',
      price: '$29.99/mo',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
        'Feature 7',
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {pricingCards.map((card) => (
          <div
            className={`pricing-card ${
              expandedCard === card.id ? 'expanded' : ''
            }`}
            key={card.id}
            onClick={() => toggleExpand(card.id)}
          >
            <div className="card-header">
              <div className="card-icon">

                <span className="icon"></span>
              </div>
              <div className="card-plan">{card.plan}</div>
              <div className="card-price">{card.price}</div>
            </div>
            {expandedCard === card.id && (
              <ul className="card-features">
                {card.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-icon"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            <button className="buy-now-button">Buy Now</button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .pricing-section {
          padding: 60px 0;
        }

        .pricing-container {
          display: flex;
          justify-content: center;
        }

        .pricing-card {
          background-color: #fff;
          border-radius: 8px;
          border: 2px solid black;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 30px;
          margin: 0 20px;
          max-width: 300px;
          text-align: center;
          cursor: pointer;
          width:1000px;
          height:300px;
          transition: all 0.3s ease;
        }

        .pricing-card.expanded {
          height: auto;
        }

        .card-header {
          position: relative;
          margin-bottom: 30px;
        }

        .card-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: royalblue;
          margin: 0 auto;
          position: relative;
          font-size: 100px;
          z-index: 1;
        }

        .card-plan {
          font-size: 24px;
          margin-top: 20px;
          font-size: 50px;
        }

        .card-price {
          font-size: 16px;
          color: #888;
          margin-top: 10px;
          font-size: 50px;
        }

        .card-features {
          margin-bottom: 30px;
          list-style: none;
          padding: 0;
          font-size: 50px;
        }

        .card-features li {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }

        .feature-icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          margin-right: 10px;
          background-color: royalblue;
        }

        .buy-now-button {
          background-color: royalblue;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          font-size: 30px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .buy-now-button:hover {
          background-color: #007bff;
        }
      `}</style>
    </section>
  );
};

export default PricingSection;
