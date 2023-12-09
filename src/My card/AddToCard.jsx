import { useContext, useEffect, useState } from "react";
import AddToCardDettles from "./AddToCardDettles";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Auth Context/AuthProvider";


const AddToCard = () => {
    const { users } = useContext(AuthContext)
    const loder = useLoaderData()
    console.log(loder)
    const [cards, setCard] = useState([])
    useEffect(() => {
        const emailfiter = loder?.filter(data => data.email === users.email)
        setCard(emailfiter)
    }, [loder,users.email])


    return (
        <div >
            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5">
                {
                    cards.map(card => <AddToCardDettles key={card._id}
                        cards={cards}
                        setCard={setCard}
                        card={card}></AddToCardDettles>)
                }
            </div>
        </div>

    );
};

export default AddToCard;