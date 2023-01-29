import { Card } from "react-bootstrap";

const CardComponent = ({ children }) => {
  return (
    <Card style={{ width: "18rem", padding: "16px", margin: "8px" }}>
      {children}
    </Card>
  );
};

export default CardComponent;
