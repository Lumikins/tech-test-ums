const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:h-screen h-96 lg:justify-start gap-y-10">
      <div className="flex justify-center w-full lg:py-10">
        <h2 className="text-xl font-medium lg:text-6xl">Welcome Admin</h2>
      </div>
      <div className="flex justify-center w-full lg:py-10">
        <p className="text-sm text-center lg:text-left lg:text-xl">
          Please choose an option from the menu to the left
        </p>
      </div>
    </div>
  );
};

export default Home;
