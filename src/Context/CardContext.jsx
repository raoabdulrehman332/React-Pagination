import { createContext, useState } from "react";

export const CardContext = createContext();


function CardContextProvider({children}){

    const [cardItem, setcardItem] = useState([])

    function addCardItem(item){
        const arr = cardItem
        const itemIndex = cardItem.findIndex((data)=> data.id == item.id)
        // console.log("arr==>",arr);
        // console.log("itemIndex==>",itemIndex);       
        if(itemIndex == -1){
            arr.push({...item , quantity:1})
        }else{
            arr[itemIndex].quantity++;
        }
        setcardItem([...arr])
    }

    function removItem(id){
        const arr = cardItem
        const itemIndex = cardItem.findIndex((data)=> data.id == id)
        arr.splice(itemIndex, 1)
        setcardItem([...arr])
    }

    function isItem(id){
        const arr = cardItem
        const itemIndex = cardItem.findIndex((data)=> data.id == id)
       if(itemIndex == -1){
        return null
       }else{
        return arr[itemIndex]
       }
    }

   return <CardContext.Provider 
   value={{cardItem ,isItem ,removItem,addCardItem}}>
        {children}
    </CardContext.Provider>
}

export default CardContextProvider;