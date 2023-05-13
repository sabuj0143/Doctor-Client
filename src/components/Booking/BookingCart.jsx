import Swal from "sweetalert2";

const BookingCart = ({ book }) => {

    const { email, date, img, _id, userName, amount, doctorName, phone } = book;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                //   Delete this Bookings List

                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Booking has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {email}
                    </h2>
                    <p>Date: {date}</p>
                    <p>DoctorName: {doctorName}</p>
                    <p>UserName: {userName}</p>
                    <p>Price : ${amount}</p>
                    <p>Phone: {phone}</p>
                    <p>Email : {email}</p>

                    <div>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BookingCart;