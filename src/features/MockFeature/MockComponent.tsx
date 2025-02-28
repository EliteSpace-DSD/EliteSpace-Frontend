import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../stores/store";
import { addPerson } from "./mockSlice";

export const MockComponent = () => {
  const people = useSelector((state: RootState) => state.mock.mockArray);
  const dispatch = useDispatch();

  const handleAddPerson = () => {
    const newPerson = "Herbert";
    dispatch(addPerson(newPerson));
  };

  return (
    <div>
      <div>
        <h1>Mock Component</h1>
        {people.map((person: string, index) => {
          return (
            <div key={index}>
              <p>{person}</p>
            </div>
          );
        })}
      </div>
      <button onClick={handleAddPerson}>Add person</button>
    </div>
  );
};
