import { useEffect, useState } from 'react'
import db from '../firebase'
import {onSnapshot, collection} from 'firebase/firestore'
import {handleEdit, handleNew, handleDelete, handleQueryDelete } from './Utility'
import Dot from "./Dot"

import './color.css'


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

  return (
    <>
      <main className='.root'>
          <button className='button' onClick={handleNew}>New</button>

          <button className='button' onClick={handleQueryDelete}>Query Delete</button>

          <ul>
            {colors &&
              colors.map((color)=>(
                <li key={color.id}>
                  <button className='button2' onClick={() => handleEdit(color.id)}>edit</button>
                  <button className='button2' onClick={() => handleDelete(color.id)}>delete</button>
                  <Dot color={color.value} /> {color.name}
            </li>
              ))
            }
          </ul>
      </main>
    </>
  )
}
