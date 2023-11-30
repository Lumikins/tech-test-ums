import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import AddUser from "../../components/addUser/AddUser";
import UsersDataTable from "../../components/usersDataTable/UsersDataTable";
import { userRows } from "../../data";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img || "/noavatar.png"}
          alt=""
          className="object-cover rounded-[50%] h-8 w-8"
        />
      );
    },
  },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "firstName", headerName: "First name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created",
    width: 120,
  },
  {
    field: "admin",
    headerName: "Admin",
    width: 100,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  // mock an api call to get all users from db. once done, can display all users in the table (WIP)
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="lg:w-full w-[250px]">
      <div className="flex items-center gap-5">
        <h1 className="my-5 text-xl font-semibold capitalize lg:text-4xl">users list</h1>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add new user
        </Button>
      </div>
      <UsersDataTable columns={columns} rows={userRows} slug="users" />
      {open && <AddUser setOpen={setOpen} slug="users" columns={columns} />}
    </div>
  );
};

export default Users;
