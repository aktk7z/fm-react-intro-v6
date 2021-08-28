import { FunctionComponent } from "react";
import Pet from "./Pet";
import { Pet as PetType } from "./APIResponseTypes";

const Results: FunctionComponent<{pets: PetType[]}> = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
          // A BAD idea
          //   <Pet {...pet} key={pet.id} />
        ))
      )}
    </div>
  );
};

export default Results;
