import Swal from "sweetalert2";


const AddProduct = () => {
    const handelProductAdd = e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const reating = form.reating.value
        const brandName = form.brandName.value
        console.log(image, name, type, price, description, reating, brandName)
        const product = { image, name, type, price, description, reating, brandName }
        fetch('https://assinment10.vercel.app/Product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product added successfilly',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })

    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/YW3hvC2/bmw-emobility-electric-vehicle-sp-desktop.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" text-neutral-content w-full px-10">
                    <div className="w-full">
                        <h1 className="mb-5 text-start text-5xl font-bold">Add Product</h1>
                        <form onSubmit={handelProductAdd} className="w-full mt-5">
                            <div className="flex justify-between w-full gap-10">

                                <input type="text" placeholder="image" name="image" className="input bg-gray-700 input-bordered input-secondary w-1/2" />
                                <input type="text" placeholder="name" name="name" className="input bg-gray-700 input-bordered input-secondary w-1/2" />

                            </div>
                            <div className="flex justify-between items-center w-full gap-10 my-10">
                                <input type="text" placeholder="brand name" name="brandName" className="input bg-gray-700 input-bordered input-secondary w-1/2" />
                                <input type="text" placeholder="type" name="type" className="input bg-gray-700 input-bordered input-secondary w-1/2" />

                            </div>
                            <div className="flex justify-between w-full gap-10 my-10">
                                <textarea name="description" id="" cols="30" rows="10" placeholder="Short description" className="input bg-gray-700 input-bordered input-secondary h-40 w-full p-5"></textarea>
                                <div className=" w-full -mt-10">
                                    <input type="text" placeholder="price" name="price" className="input bg-gray-700 input-bordered input-secondary w-full my-10"  /> <br />
                                    <input type="text" placeholder="reating" name="reating" className="input bg-gray-700 input-bordered input-secondary w-full" />

                                </div>
                            </div>
                            {/* //reating */}
                            <button className="btn btn-warning mt-10 w-full">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;