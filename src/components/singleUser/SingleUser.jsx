import Button from "@mui/material/Button";

const SingleUser = ({ id, img, title, info }) => {
  return (
    <div className="flex items-center py-10 gap-y-10">
      <div className="flex-1">
        <div className="info">
          <div className="flex items-center gap-x-5">
            <img
              src={img || "/profile.svg"}
              alt=""
              className="object-cover w-10 h-10 lg:h-24 lg:w-24 rounded-2xl"
            />
            <h1 className="text-sm font-medium lg:text-2xl">{title}</h1>
            <Button variant="contained">Update</Button>
          </div>
          <div className="text-xl">
            {Object.entries(info).map((item) => (
              <div className="mx-0 my-8" key={item[0]}>
                <span className="mr-3 font-bold capitalize lg:text-2xl">{item[0]} :</span>
                <span className="text-sm lg:text-lg">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
