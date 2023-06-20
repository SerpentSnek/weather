// import {MouseEvent} from "react";
// props vs state
/**
 * props:
 *      input passed to a component, 
 *      similar to func args, 
 *      treat as immutable
 * state:
 *      data managed by component,
 *      similar to local vars,
 *      mutable,
 *      changes cause a rerender of DOM
 */

import { useState } from "react";

// { items: [], heading: string }
interface ListGroupProps {
        items: string[];
        heading: string;
        // (item: string) => void)
        onSelectItem: (item: string) => void; // similar to onClick
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
  
//   let selectedInd = 0;
  
  // hooks. remember those?
  const [selectedInd, setSelectedInd] = useState(-1);
//   const [name, setName] = useState('')

  
  // event handler
//   const handleClick = (event: MouseEvent) => console.log(event);
  //   items=[];
  //   const message =
  //   const getMessage = () => {
  //         return items.length===0 ? <p>no item found</p> : null;
  //   }

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length===0 ? <p>no item found</p> : null} */}
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedInd === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => { 
                setSelectedInd(index); 
                onSelectItem(item);
            }}
            
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
