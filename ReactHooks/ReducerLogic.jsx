import { useReducer } from "react";

const initialcheck = [
  {
    id: 1,
    title: "Male",
    complete: false,
  },
  {
    id: 2,
    title: "Female",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((gender) => {
        if (gender.id === action.id) {
          return { ...gender, complete: !gender.complete };
        } else {
          return gender;
        }
      });
    default:
      return state;
  }
}; 

export default function ReducerLogic() {
    const [genders, dispatch] = useReducer(reducer, initialcheck);

    const handleComplete = (gender) => {
      dispatch({ type: "COMPLETE", id: gender.id });
    };
  
    return (
        <>
          {genders.map((gender) => (
            <div key={gender.id}>
              <label>
                <input
                  type="checkbox"
                  checked={gender.complete}
                  onChange={() => handleComplete(gender)}
                />
                {gender.title}
              </label>
            </div>
          ))}
        </>
      );
    }
    