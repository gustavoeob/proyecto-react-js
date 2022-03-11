import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where
  } from "firebase/firestore";

  
  
  const useProducts = () => {

    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(false);
    const {category} = useParams();
    
      useEffect(() => {

          const db = getFirestore();
          const itemsCollection = query(
              collection(db, "items"))
              getDocs(itemsCollection).then((snapshot) => {
                  setItems(
                      snapshot.docs.map((doc) => ({
                          id: doc.id,
                          ...doc.data()
                        }))
                        );
                    }).catch((e)=>{
                        console.log(e);
                    }).finally(()=>{
                        setLoading(false)
                    })
                })
                
                
                const useFirestore = () => {
                    
                    if(category){
                        console.log(category)
                    }else{
                        console.log(items)
                    }
                }
            
                return (
                
                <>
                    {items, loading}
                </>

    )
}
export default useProducts;