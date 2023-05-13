import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingCart from "./BookingCart";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    console.log(bookings);

    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    return (
        <div className="grid md:grid-cols-3 gap-4 mx-[50px] mt-12"> 
            {
                bookings.map(book => <BookingCart
                key={book._id}
                book={book}
                ></BookingCart>)
            }
        </div>
    );
};

export default Bookings;