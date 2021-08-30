import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { Animal } from "./APIResponseTypes";

interface IProps {
  id: number;
  name: string;
  animal :Animal
  breed: string;
  images: string[];
  location: string;
}

const Pet: FunctionComponent<IProps> = ({ id, name, animal, breed, images, location }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
