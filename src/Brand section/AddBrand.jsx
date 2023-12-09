import Swal from "sweetalert2";



const AddBrand = () => {
    const handelAddBrand = e => {
        e.preventDefault()
        console.log(e)
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        console.log(name, photo)
        const carBrand = { name, photo }
        fetch('https://assinment10.vercel.app/carBrand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carBrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'car brand addedd',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handelAddSlider = e => {
        e.preventDefault()
        console.log(e)
        const form = e.target
        const brandName = form.name.value
        const photo1 = form.photo1.value
        const photo2 = form.photo2.value
        const photo3 = form.photo3.value
        console.log(name, photo1, photo2, photo3)
        const carImages = { brandName, photo1, photo2, photo3 }
        fetch('https://assinment10.vercel.app/carImages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carImages)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Slider image addedd',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="mt-10">
            <h1 className="text-5xl font-medium mb-10">Add your new Brand</h1>
            <div className="w-full">
                <form onSubmit={handelAddBrand}>
                    <input type="text" placeholder="Brand Name" name="name" className="input input-bordered input-accent w-1/3 mb-5" />
                    <br />
                    <input type="text" placeholder="Brand Logo url" name="photo" className="input input-bordered input-accent w-1/3 mb-5" />
                    <br />
                    <input className="btn w-1/3 btn-accent" type="submit" value="Add Brand" />
                </form>
            </div>
            <h1 className="text-5xl font-medium mb-10 mt-32">Add your new Slider image</h1>
            <div className="w-full">
                <form onSubmit={handelAddSlider}>
                    <input type="text" placeholder="Brand Name" name="name" className="input input-bordered input-accent w-1/3 mb-5" />
                    <br />
                    <input type="text" placeholder="photo 1" name="photo1" className="input input-bordered input-accent w-1/3 mb-5" />
                    <br />
                    <input type="text" placeholder="photo 2" name="photo2" className="input input-bordered input-accent w-1/3 mb-5" />
                    <br />
                    <input type="text" placeholder="photo 3" name="photo3" className="input input-bordered input-accent w-1/3 mb-5" />
                    <br />
                    <input className="btn w-1/3 btn-accent" type="submit" value="Add Brand" />
                </form>
            </div>
        </div>
    );
};

export default AddBrand;