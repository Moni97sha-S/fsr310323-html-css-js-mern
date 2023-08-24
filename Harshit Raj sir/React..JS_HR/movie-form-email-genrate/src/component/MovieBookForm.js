import React, { useState } from "react";
import "../style/MovieBookForm.css";
import emailjs from "emailjs-com";

function MovieBookForm() {
  //! CSS ANIMATION for Form
  const [submitted, setSubmitted] = useState(false);
  // const [formData, setFormData] = useState({
  //   username: "abc",
  //   email: "abc@example.com",
  //   movie: "jawan",
  //   time: "12:00",
  //   ticket: 1,
  // });
  const [formData, setFormData] = useState({
    username: "",
    emailId: "",
    movieName: "",
    timeVal: "",
    ticketNum: 1,
  });

  function handleChange(e) {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    //! Destructuring props inside e.target | name & value are attribute/props of name's input tag.
    const { name, value } = e.target;
    // console.log(value);
    let eventName = name; // username, emailId, tickeNum etc.
    let eventValue = value;
    // console.log(eventName, eventValue);
    // setFormData({ name: value });

    //? ONE LINE CALLBACK TO UPDATE EACH VALUE SEPARATELY | Don't mingle with prevData of prevInput | Spread operator
    // setFormData((prevData) => ({ ...prevData, username: eventValue }));
    // setFormData((prevData) => ({ ...prevData, [name]: eventValue }));
    setFormData((prevData) => ({ ...prevData, [eventName]: eventValue }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(e.target);

    // alert("Booking done sucessfully!!!!");

    const response = await emailjs.sendForm(
      "service_zgaaj8h",
      "template_grnwgdg",
      e.target,
      "UK4PeNNmxiWmEiWzM"
    );
    console.log("Email sent successfully", response);
    setSubmitted(true);
  }

  return (
    <div className={`movieBookingForm ${submitted ? "submitted" : " "}`}>
      <h2>Movie Booking Form</h2>

      <form onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="emailId"
          value={formData.emailId}
          onChange={handleChange}
        />

        <label>Movie:</label>
        <input
          type="text"
          name="movieName"
          value={formData.movieName}
          onChange={handleChange}
        />

        <label>Time:</label>
        <input
          type="time"
          name="timeVal"
          value={formData.timeVal}
          onChange={handleChange}
        />

        <label>Tickets:</label>
        <input
          type="number"
          name="ticketNum"
          // timeformat="auto"
          value={formData.ticketNum}
          onChange={handleChange}
        />

        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default MovieBookForm;
