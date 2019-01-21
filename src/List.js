import React from "react";
import T from "prop-types";

const List = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.data.map(item => {
          return (
            <li key={item}>
              <a href={item}>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

List.propTypes = {
  data: T.arrayOf(T.string)
};

export { List };
