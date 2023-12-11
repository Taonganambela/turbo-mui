import { Button } from "@mui/material";
import { Avatar, Stack } from "@mui/material";

export const NavBar = () => {
  return (
    <div className="font-bold">
      <div>
        <div>
          <Stack direction="row">
            <div>
              <h3>Customer Stories-Q4</h3>
              <h2>On Track</h2>
            </div>

            <Button variant="text">share</Button>

            <input type="text" placeholder="search" />

            <Avatar>TN</Avatar>
          </Stack>
        </div>

        <div className="border border-1 border-gray-300 p-2 rounded-md">
          <Stack direction="row" spacing={2}>
            <p>OverView</p>
            <p>List</p>
            <p>Board</p>
            <p>TimeLine</p>
            <p>Calender</p>
            <p>Dashboard</p>
            <p>More...</p>
            <p>
              <Button variant="contained">Add Chart</Button>
            </p>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
