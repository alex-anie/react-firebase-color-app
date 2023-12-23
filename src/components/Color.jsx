import { useEffect, useState } from 'react'
import db from '../firebase'

import './color.css'

//::: i imported this function 
import { onSnapshot, collection, setDoc, doc, add } from 'firebase/firestore'

const Dot = ({color})=> {
  const style = {
    height: 10,
    width: 10,
    margin: "0px 10px",
    backgroundColor : color,
    borderRadius: "50%",
    display: "inline-block"
  }

  return <span style={style}></span>
}

//here I'm using colection to target an entire collection 

//You would use doc() if you want to target specific documents in onSnapshot()

// the colors string pared to collection is the name of the json object created in Firestore 

export default function Color() {
  const [colors, setColors] = useState([{name:"Loading...", id: "initial"}]);

  console.log(colors)

  useEffect(
    ()=> onSnapshot(
      collection(db, "colors"), (snapshot)=> setColors(snapshot.docs.map((doc)=> ({...doc.data(), id:doc.id}))
    )),
  []
  );

  const handleNew = async () => {
    const docRef = doc(db, "colors", "color001");
    const payload = {name: "Black", value: "#000"};
    await setDoc(docRef, payload);
  }

  return (
    <>
      <main className='.root'>
          <button className='.button' onClick={handleNew}>New</button>

          <ul>
            {colors &&
              colors.map((color)=>(
                <li key={color.id}>
                  <a href="#">edit</a>
                  <Dot color={color.value} /> {color.name}
            </li>
              ))
            }
          </ul>
      </main>
    </>
  )
}
