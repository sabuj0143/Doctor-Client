import { useState } from "react";
import DoctorCart from "./DoctorCart";


const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    fetch('doctors.json')
        .then(res => res.json())
        .then(data => {
            setDoctors(data)
        })

    return (
        <div>
            <div className="text-center">
                <h2 className="font-semibold text-5xl ">OUR DOCTORS</h2>
                <p className="mt-2"><small>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  Aenean massa. Cum sociis natoque penatibus <br /> et magnis dis parturient montes, nascetur ridiculus mus</small></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-[50px] gap-4 mt-12">

                {
                    doctors.map(doctor => <DoctorCart
                        key={doctor.id}
                        doctor={doctor}
                    >

                    </DoctorCart>)
                }
            </div>
        </div>
    );
};

export default Doctors;