'use client';

import { useState } from 'react';

type CapabilityTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  image: string;
};

type CapabilitesProps = {
  data: CapabilityTab[];
};

const CpCapabilites = ({ data }: CapabilitesProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeData = data[activeTab];

  return (
    <section
      className="cp-capabilities"
    >
      <div className="container">
        {/* Tabs */}
        <div className="capabilities-tabs">
          {data.map((tab, index) => (
            <button
              type="button"
              key={tab.id}
              className={`capability-tab ${activeTab === index ? 'active' : ''
                }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        {activeData && (
          <>
            <div className="wrapper">
              <div className="content-wrap">
                <h3 className='title'>{activeData.title}</h3>
                <p className='description'>{activeData.description}</p>
                <ul className='list'>
                  {activeData.points.map((point, index) => (
                    <li className='item' key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="image-wrap">
                <img src={activeData.image} alt={activeData.title}/>
              </div>
              <span className="card-zigzag"></span>
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default CpCapabilites;