import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { FaUser, FaDatabase, FaCog } from 'react-icons/fa';
import './KeyTopics.css';

const KeyTopics = () => {
  const cardStyle = {
    borderRadius: '0px',
    border: 'none',
    boxShadow: 'none',
    padding: '2rem',
  };

  return (
    <div className="container">
      <div className="card-container">
        <Card title="Revolutionary Financing" style={cardStyle} className="card">
          <FaUser size={32} />
          <p className="card-description">Join us and be part of the financial revolution that is changing the way real estate projects are funded.</p>
          <Button label="Learn More" className="p-button-sm" />
        </Card>
      </div>
      <div className="card-container">
        <Card title="Tokenized Real Estate" style={cardStyle} className="card">
          <FaDatabase size={32} />
          <p className="card-description">Discover a new world of investment opportunities through tokenized real estate assets backed by blockchain technology.</p>
          <Button label="Learn More" className="p-button-sm" />
        </Card>
      </div>
      <div className="card-container">
        <Card title="Secure and Transparent" style={cardStyle} className="card">
          <FaCog size={32} />
          <p className="card-description">Experience the security and transparency of smart contracts, ensuring a trustworthy environment for investors and developers.</p>
          <Button label="Learn More" className="p-button-sm" />
        </Card>
      </div>
    </div>
  );
}

export default KeyTopics;
