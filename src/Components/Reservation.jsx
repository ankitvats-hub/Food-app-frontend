import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");
    const [tableNumber, setTableNumber] = useState(""); // Table number state
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://food-app-server-wwa1.onrender.com/api/v1/reservation/send", 
                { firstName, lastName, email, phone, date, time, tableNumber },
                {
                    headers: {
                        "Content-type": "application/json"
                    },
                    withCredentials: true
                }
            );
            toast.success(data.message);
            // Reset fields
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setTime("");
            setDate("");
            setTableNumber(""); // Reset table number
            navigate("/success");
            

        } catch (error) {
            toast.error(error.response?.data?.message || "Reservation failed");
            console.log(error)
        }
    };

    return (
        <section className='reservation' id='reservation'>
            <div className="container">
                <div className="banner">
                    <img src='/reservation.png' alt='res' />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>FOR Further Question, Please Call</p>
                        <form onSubmit={handleReservation}>
                            <div>
                                <input
                                    type='text'
                                    placeholder='First Name'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Last Name'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type='date'
                                    placeholder='Date'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <input
                                    type='time'
                                    placeholder='Time'
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='email_tag'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type='number'
                                    placeholder='Phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <select
                                    value={tableNumber}
                                    onChange={(e) => setTableNumber(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Select Table No.</option>
                                    {[...Array(10)].map((_, index) => (
                                        <option key={index + 1} value={index + 1}>
                                            Table {index + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button type='submit'>
                                RESERVE NOW <span><HiOutlineArrowNarrowRight /></span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
