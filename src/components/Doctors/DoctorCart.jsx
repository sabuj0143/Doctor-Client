import { Link } from "react-router-dom";

const DoctorCart = ({ doctor }) => {

    const { _id, name, img, title, description, price } = doctor;
    return (
        <>
            <div className="card w-96  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{name}</h2>
                    <p>{title}</p>
                    <p><small> <span className="font-semibold">Description</span> :  {description}</small></p>
                    <p> <span className="font-semibold text-orange-500">Price</span> : ${price}</p>
                    <div className="card-actions">
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-primary">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorCart;