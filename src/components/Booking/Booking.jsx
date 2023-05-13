import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const Booking = () => {
    const service = useLoaderData();
    const { name, price, _id, img } = service;
    const {user} = useContext(AuthContext)

    const handleAddBook = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const amount = form.amount.value;
        const doctor = form.doctor.value;
        // console.log(name, email, phone, amount, doctor, date);
        const book = {
            userName: name,
            email: email,
            phone: phone,
            date: date,
            img: img,
            amount: amount,
            bookId: _id,
            doctorName: doctor,
        }
        // console.log(book);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                // alert('Booking Added Successfully');
                Swal.fire({
                    title: 'Successful!',
                    text: 'Booking Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                form.reset();
            }
        })
    }

    return (
        <div className="container w-[50%] mx-auto">
            <form onSubmit={handleAddBook}>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Enter your email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name="phone" placeholder="Enter your phone number" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deu amount</span>
                        </label>
                        <input type="text" name="amount" defaultValue={'$' + price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Doctor Name</span>
                        </label>
                        <input type="text" name="doctor" defaultValue={name} placeholder="Enter your services" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Confirm Booking</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Booking;