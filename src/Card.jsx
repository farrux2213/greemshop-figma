// import image1 from "/image1.svg";
// import back from "/back.svg";

const Card = (props) => {
  return (
    <div className="product">
      <div className="product-img">
        <img src={props.img} className="image" alt="imageFlower" />
      </div>
      <div className="product-text">
        <p className="nameFlower1">{props.title}</p>
        <p className="priceFlower1">{props.price}</p>
      </div>
    </div>
  );
};

export default Card;
