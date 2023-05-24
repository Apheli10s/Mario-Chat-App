import { useEffect, useState } from "react";
import { FormField } from "./FormField";
import { avatarImages } from "../library/avatar.js"
import "../styles/AvatarField.css"


export function AvatarFormField(props){         //if statemente smo ukljucili; ako dodjemo do zadnje slike da nas vrati na pocetak
    const [index, setIndex] = useState(0);        //ako idemo u nazad i predjemo prvu sliku, da odemo na kraj
    
    useEffect(()=>{
        props.onChange(index);
    }, [index, props]) 

    function handlePreviousAvatar(){
        if(index <= 0){    
            setIndex(avatarImages.length - 1);
        } else {
        setIndex(index - 1);
        }
    };

    function handleNextAvatar(){
        if(index >= avatarImages.length - 1){    
            setIndex(0)
        } else {
        setIndex(index + 1);
        }
    }

    return(
        <FormField className="Avatar">
            <button type="button" className="leftAvatar" onClick={handlePreviousAvatar}>Previous</button>
            <img  className="imageAvatar" src={avatarImages[index]}  alt={index}/>
            <button type="button" className="rightAvatar" onClick={handleNextAvatar}>Next</button>
        </FormField>
    );
}