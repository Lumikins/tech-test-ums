import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditUser from "../editUser/EditUser";

const UsersDataTable = ({ rows, columns, slug }) => {
  const handleUserDelete = (id) => {
    // add api request to delete `/api/${slug}/id`
    fetch(`/api/${slug}/${id}`, {
      method: "DELETE",
    });
  };

  const [editUser, setEditUser] = useState(false);

  const handleEditUser = (params) => {
    setEditUser(true);
  };

  const actionsColumn = {
    field: "actions",
    headerName: "Actions",
    width: 120,
    renderCell: (params) => {
      return (
        <div className="flex w-full justify-evenly gap-x-2">
          <div className="cursor-pointer">
            <Link to={`/${slug}/${params.row.id}`}>
              <img src="/public/eye.svg" alt="" />
            </Link>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleEditUser(params)}
          >
            <img src="/public/edit.svg" alt="" />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleUserDelete(params.row.id)}
          >
            <img src="/public/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  return (
    <div>
      <DataGrid
        className="p-5 bg-white"
        rows={rows}
        columns={[...columns, actionsColumn]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
      {editUser && <EditUser setEditUser={setEditUser} columns={columns} />}
    </div>
  );
};

export default UsersDataTable;
