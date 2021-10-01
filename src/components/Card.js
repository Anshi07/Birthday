import RCard from "./Rcard";
import "./Card.css";

const cards = [
  {
    front: { emotions : "ANgry", background: "images/Angry.jpeg" },
    back: {
      description: "EK dum office time bana di hai late aye thy to overtime kro....",
     }
  },
  {
    front: { emotions : "ROmantic", background: "images/romantic.jpeg" },
    back: {
      description: "Pura dhayan tum pr h man kr rha bnd krdun radio bas tumhe sunu...",
     }
  },
 {
    front: { emotions : "LAzy", background: "images/Lazy.jpeg" },
    back: {
      description: "haan laptop khula to hai av v but lana pdega dusry room se...",
     }
  },
 
  {
    front: { emotions : "CUte", background: "images/cute.jpeg" },
    back: {
      description: "Nhii Babu nhii hu nid mai mujhy abhi bus baat karna h aapsy... ",
     }
  },
  {
    front: { emotions : "CAring", background: "images/care.jpeg" },
    back: {
      description: "So jao,subah uthna hai na. kal baat kar lngy thik so jaao abhi jaao..",
     }
  }
  
];

export default function Card() {
  return (
   <section className ="sec">
     {cards.map((card) => (
            <RCard card={card} />
          ))}
          </section>
   
  );
}
