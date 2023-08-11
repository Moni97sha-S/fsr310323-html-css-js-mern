import React, { useState } from "react";
import "../style/MovieBookForm.css";

function MovieBookForm() {
  const [formData, setFormData] = useState({
    username: "abc",
    email: "abc@example.com",
    movie: "jawan",
    time: "12:00",
    ticket: 1,
  });

  function handleChange(e) {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    //! Destructuring props inside e.target | name & value are attribute/props of name's input tag.
    const { name, value } = e.target;
    // setFormData({ name: value });

    //? ONE LINE CALLBACK TO UPDATE EACH VALUE SEPARATELY | Don't mingle with prevData of prevInput | Spread operator
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <div className="movieBookingForm">
      <h2>Movie Booking Form</h2>

      <form>
        <label>UserName:</label>
        <input
          type="text"
          name="nme"
          value={formData.username}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="eml"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Movie:</label>
        <input
          type="text"
          name="mov"
          value={formData.movie}
          onChange={handleChange}
        />

        <label>Time:</label>
        <input
          type="time"
          name="tme"
          value={formData.time}
          onChange={handleChange}
        />

        <label>Tickets:</label>
        <input
          type="number"
          name="tikt"
          value={formData.ticket}
          onChange={handleChange}
        />

        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default MovieBookForm;
