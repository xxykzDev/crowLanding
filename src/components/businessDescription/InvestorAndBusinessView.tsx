import { Button } from "primereact/button";
import imagen from "../../assets/mano-que-presenta-casa-modelo-campana-prestamos-hipotecarios.jpg";
import "./InvestorAndBusinessView.css";

const DivWithImageLayout = () => {
  return (
    <div className="content">
      <div className="otra">
        <img
          src={imagen}
          alt="Imagen"
          className="column-image"
          style={{ width: "600px", height: "600px" }}
        />
        <h3>Are you a builder?</h3>
        <p>
          A construction company can benefit from crypto crowdfunding for real
          estate projects, leveraging the advantages of cryptocurrency. By
          utilizing blockchain technology and crypto investments, they can
          access a global pool of investors, streamline transactions, enhance
          transparency, and unlock new funding opportunities.
        </p>
        <Button label="Find out more" className="p-button-sm" />
      </div>
    </div>
  );
};

export default DivWithImageLayout;
