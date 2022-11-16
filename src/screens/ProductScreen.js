import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const params = useParams();
  const { day } = params;
  return (
    <div className="div">
      <h1>{day}</h1>
    </div>
  );
};
export default ProductScreen;
