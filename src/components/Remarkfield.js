import React from "react";
import Button from '@material-ui/core/Button';


export default function Remarksfield(){

    const [comment, setComment] = React.useState('')

    function handleChange(event) {

        const value = event.target.value;
        setComment(value);

    }

    function handleSubmit(event) {

        event.preventDefaul();
        console.log("Deine Kommentar lautet " + comment);


    }


    return(
        <form onSubmit={handleSubmit}>
            <input value={comment}
                   placeholder="Kommentar"
                   onChange={handleChange}
                   type="text"
            />
            <Button color="secondary" type="submit">haus'raus</Button>
        </form>

    )
}