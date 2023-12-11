import { Stack } from "@mui/material";

export const SideBar = () => {
  return (
    <div className="">
      <Stack spacing={2} sx={{ fontWeight: "bold" }}>
        <h3>turbo</h3>
        <p>Home</p>
        <p>My Tasks</p>
        <p>inbox</p>

        <h2 className="text-gray-600">Reporting</h2>
        <p>Portforlios</p>
        <p>Goals</p>

        <h2 className="text-gray-600">Favourites</h2>
        <p>Recruiting weekly</p>
        <p>Website launch</p>
        <p>Rebranding video</p>
        <p>Marketing</p>
        <p>Email calender</p>
        <p>Website Dsign Requirements</p>
        <p>Customer Stories</p>
        <p>invite teamates</p>
      </Stack>
    </div>
  );
};

export default SideBar;
