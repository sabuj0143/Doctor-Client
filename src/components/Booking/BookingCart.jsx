const BookingCart = ({ book }) => {

    const { email, date, img, userName, amount, doctorName, phone } = book;

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
                        <button className="btn btn-error">Delete</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BookingCart;