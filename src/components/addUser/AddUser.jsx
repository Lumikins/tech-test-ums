/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

const AddUser = ({ setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let content = [{}];
    content = [
      { lastName },
      { firstName },
      { email },
      { phone },
      { admin },
      { dateCreated },
    ];

    // add user api call with post `/api/${slug}, {pass all data to submit}`
    fetch("/api/users", {
      method: "POST",
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
      setAdmin(""),
      setDateCreated(new Date()),
      setOpen(false)
    );
  };

  const isAdmin = ["Yes", "No"];
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [admin, setAdmin] = useState("");
  const [dateCreated, setDateCreated] = useState(new Date());
  const [select, setSelect] = useState(false);

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/70">
      <div className="relative p-12 bg-white rounded-xl">
        <span
          className="absolute flex items-center justify-center w-8 h-8 text-xl transition-all duration-200 border-2 rounded-md cursor-pointer top-3 right-3 hover:bg-light-color text-primary-bg border-primary-bg"
          onClick={() => setOpen(false)}
        >
          X
        </span>
        <h1 className="mb-10 text-2xl font-bold text-center capitalize lg:text-6xl text-primary-bg">
          add new user
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
          <DatePicker
            label="Created on"
            defaultValue={dateCreated}
            onChange={(e) => {
              setDateCreated(e.target.value);
            }}
          />
          <Select
            id="controlled-open-select"
            open={select}
            onOpen={() => setSelect(true)}
            onClose={() => setSelect(false)}
            label="Admin"
            value={admin}
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
          </Select>
        </Box>
        {/* {columns
            .filter((item) => item.field !== "id" && item.field !== "avatar")
            .map((column) => (
              <div key={column.headerName} className="flex flex-col gap-3 mb-5">
                <label className="text-sm">{column.headerName}</label>
                <input
                  type={column.type}
                  placeholder={column.field}
                  className="p-3 text-white bg-transparent border-2 rounded-lg outline-none border-light-color"
                />
              </div>
            ))} */}
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
            textTransform: "capitalize",
          }}
          >
          create user
        </Button>
          </div>
      </div>
    </div>
  );
};

export default AddUser;
