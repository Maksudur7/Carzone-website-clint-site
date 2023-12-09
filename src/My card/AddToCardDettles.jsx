import { GiCrossedSwords } from 'react-icons/gi';
import { GiSelfLove } from 'react-icons/gi';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const AddToCardDettles = ({ card, cards, setCard }) => {
    const { _id, image, name, price, } = card
    console.log(card)
    console.log(cards)

    const handelDeletProduct = id => {
        fetch(`https://assinment10.vercel.app/addCar/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    const swalWithBootstrapButtons = Swal.mixin({
                        customClass: {
                            confirmButton: 'btn btn-success',
                            cancelButton: 'btn btn-danger'
                        },
                        buttonsStyling: false
                    })

                    swalWithBootstrapButtons.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Yes, delete it!',
                        cancelButtonText: 'No, cancel!',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your card has been deleted.',
                                'success'
                            )
                            const relodData = cards.filter(car => car._id !== id)
                            setCard(relodData)
                        } else if (
                            /* Read more about handling dismissals below */
                            result.dismiss === Swal.DismissReason.cancel
                        ) {
                            swalWithBootstrapButtons.fire(
                                'Cancelled',
                                'Your imaginary file is safe :)',
                                'error'
                            )
                        }
                    })

                }
            })
    }


    return (
        <div>
            <div className="lg:flex  border p-5 gap-5">
                <div className="h-52 lg:w-[800px]">
                    <img className=" w-96 h-full" src={image} alt="" />
                </div>
                <div className="text-start flex justify-between gap-4 lg:mt-0 mt-10">
                    <div>
                        <h1>{name}</h1>
                        <div className="rating my-2">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        {/* <p>{description}</p> */}
                        <h1 className="text-2xl font-medium text-red-600 my-7 mt-3">{price}</h1>
                    </div>
                    <div>
                        <div className="btn-group btn-group-vertical gap-5">
                            <button onClick={() => handelDeletProduct(_id)} className="btn btn-active"><GiCrossedSwords></GiCrossedSwords></button>
                            <button className="btn"><GiSelfLove></GiSelfLove></button>
                            <button className="btn">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AddToCardDettles.propTypes ={
    card: PropTypes.object.isRequired,
    cards: PropTypes.object.isRequired,
    setCard: PropTypes.object.isRequired
}

export default AddToCardDettles;