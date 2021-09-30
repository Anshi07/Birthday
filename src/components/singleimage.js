import './singleimage.css';
import ReactDOM from 'react-dom';


const onMouseEnter = (id) => {
  let element = document.getElementById(id)
   ReactDOM.findDOMNode(element).classList.add("spin") 
 }

 const onMouseLeave = (id) => {
  let element = document.getElementById(id)
  ReactDOM.findDOMNode(element).classList.remove("spin")
 }
function SingleImg(props) {
  return (
    <>
    <div id={props.num} style={{['--v']: `${props.num}` }} onMouseEnter={() => onMouseEnter(`${props.num}`)}
    onMouseLeave={() => onMouseLeave(`${props.num}`) } >
    <img src={`images/${props.num}.jpeg`} alt="..."/></div>

    
    </>
           
  );
}

export default SingleImg;