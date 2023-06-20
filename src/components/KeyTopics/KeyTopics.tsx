import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './KeyTopics.css';

const KeyTopics = () => {
  const cardStyle = {
    borderRadius: '0px',
    border: 'none',
    boxShadow: 'none',
    padding: '2rem',
  };

  return (
    <>
    <h1 className='container'>Another way to do real state</h1>
    <div className="container">
      <div className="card-container">
        <Card style={cardStyle} className="card">
          <h2>Revolutionary Financing</h2>
          <p className="card-description">Join us and be part of the financial revolution that is changing the way real estate projects are funded.</p>
          <Button label="Learn More" className="p-button-sm" />
        </Card>
      </div>
      <div className="card-container middle-card">
        <Card style={cardStyle} className="card">
          <h2>Tokenized Real Estate</h2>
          <p className="card-description">A new world of investment opportunities through tokenized real estate assets backed by blockchain technology.</p>
          <Button label="Learn More" className="p-button-sm" />
        </Card>
      </div>
      <div className="card-container">
        <Card style={cardStyle} className="card">
          <h2>Secure and Transparent</h2>
          <p className="card-description">Experience the security and transparency of smart contracts, ensuring a trustworthy environment for investors and developers.</p>
          <Button label="Learn More" className="p-button-sm" />
        </Card>
      </div>
    </div>
    </>
  );
}

export default KeyTopics;
