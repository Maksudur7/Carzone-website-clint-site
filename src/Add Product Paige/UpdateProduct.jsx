import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id, image, name, type, price, reating, brandName } = product
    console.log(product)
    const handelProductUpdate = e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const type = form.type.value
        const price = form.price.value
        const reating = form.reating.value
        const brandName = form.brandName.value
        console.log(image, name, type, price, reating, brandName)
        const product = { image, name, type, price, reating, brandName }
        fetch(`https://assinment10.vercel.app/Product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    let timerInterval
                    Swal.fire({
                        title: 'car data updated',
                        html: 'Updated... <b></b>',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading()
                            const b = Swal.getHtmlContainer().querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                }
            })

    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Y8vhdVW/supra.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-neutral-content w-full px-10">
                    <div className="w-full">
                        <h1 className="mb-5 text-start text-5xl font-bold">Update Product</h1>
                        <form onSubmit={handelProductUpdate} className="w-full mt-10 border p-5 hero-overlay bg-opacity-80">
                            <div className="lg:flex justify-between w-full gap-10">
                                <span>Image:</span> <br />
                                <input type="text" placeholder="image" name="image" defaultValue={image} className="input bg-gray-700 input-bordered input-success w-1/2" />
                                <br />  <span>Name:</span><br />
                                <input type="text" placeholder="name" name="name" defaultValue={name} className="input bg-gray-700 input-bordered input-success w-1/2" />

                            </div>
                            <div className="lg:flex justify-between items-center w-full gap-10 my-10">
                                <span>BrandName:</span> <br />
                                <input type="text" placeholder="brand name" name="brandName" defaultValue={brandName} className="input bg-gray-700 input-bordered input-success w-1/2" />
                                <br /><span>Type:</span><br />
                                <input type="text" placeholder="type" name="type" defaultValue={type} className="input bg-gray-700 input-bordered input-success w-1/2" />

                            </div>
                            <div className="lg:flex justify-between w-full gap-10 my-10">
                                <span>Price:</span><br />
                                <input type="text" placeholder="price" name="price" defaultValue={price} className="input bg-gray-700 input-bordered input-success w-full" /> <br />
                                <span>Reating:</span>
                                <input type="text" placeholder="reating" name="reating" defaultValue={reating} className="input bg-gray-700 input-bordered input-success w-full" />


                            </div>
                            {/* //reating */}
                            <button className="btn btn-warning mt-10 w-full">Update Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;