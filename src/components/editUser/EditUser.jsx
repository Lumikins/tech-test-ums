/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EditUser = ({ setEditUser }) => {
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    let content = [{}];
    content = [{ lastName }, { firstName }, { email }, { phone }, { admin }];

    // add user api call with post `/api/${slug}, {pass all data to submit}`
    fetch(`/api/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "some_token",
      },
      body: JSON.stringify({
        content,
      }),
    }).then(
      setFirstName([]),
      setLastName([]),
      setEmail([]),
      setPhone([]),
      setAdmin("Yes"),
      setEditUser(false)
    );
  };

  const isAdmin = ["Yes", "No"];
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [admin, setAdmin] = useState("Yes");

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/70">
      <div className="relative p-12 bg-white rounded-xl">
        <span
          className="absolute flex items-center justify-center w-8 h-8 text-xl transition-all duration-200 border-2 rounded-md cursor-pointer top-3 right-3 hover:bg-light-color text-primary-bg border-primary-bg"
          onClick={() => setEditUser(false)}
        >
          X
        </span>
        <h1 className="mb-10 text-3xl font-bold text-center capitalize lg:text-5xl text-primary-bg">
          update user details
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "26ch" },
          }}
          noValidate
          autoComplete="off"
          className="flex flex-wrap items-center justify-center max-w-[500px]"
        >
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            required
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            select
            label="Admin"
            defaultValue={admin}
            required
            onChange={(e) => {
              setAdmin(e.target.value);
            }}
          >
            {isAdmin.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <div className="flex items-center justify-center mt-5">
          <Button
            variant="contained"
            onClick={handleSubmit}
            style={{
              width: "100%",
              maxWidth: "24rem",
              color: "black",
              backgroundColor: "rgb(221 221 221 / var(--tw-bg-opacity))",
              display: "flex",
              justifySelf: "center",
            }}
          >
            Update user details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
