import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const List = (props) => {
  return (
    <ul className="user-list">
      {props.data.map((person) => (
        <li key={person.id}>
          <Person {...person} removePerson={props.removePerson} />
        </li>
      ))}
    </ul>
  );
};

const Person = ({ id, nome, stato, img, removePerson }) => {
  return (
    <article>
      <img src={img} alt="prs" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn">
            <RiDeleteBack2Fill
              className="icon"
              onClick={() => removePerson(id)}
            />
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
