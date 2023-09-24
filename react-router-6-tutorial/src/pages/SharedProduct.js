import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  );
};
export default SharedLayout;
