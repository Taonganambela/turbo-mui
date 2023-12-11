import { Stack, Card, CardContent, Box } from "@mui/material";

export const AsideBar = () => {
  return (
    <div>
      <div className=" border border-1 border-gray-300 mt-4 rounded-md p-2 font-bold">
        <Stack direction="row" spacing={2} sx={{ fontWeight: "bold" }}>
          <h2>Created yesterday</h2>
          <h2>All Tasks</h2>
          <h2>filter</h2>
          <h2>Sort</h2>
          <h2>customize</h2>
          <h2>dots</h2>
        </Stack>
      </div>

      <div className="mt-2 w-full p-4 font-bold">
        <Stack direction="row" spacing={6} textAlign="center">
          <p>To do</p>
          <p>... Doing</p>
          <p>... done</p>
          <p>...Untittled Section</p>
          <p>+icon</p>
        </Stack>
      </div>

      <div className="flex items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
          <Stack spacing={2} sx={{ fontWeight: "bold" }}>

            <Stack direction="row" spacing={4}>
            <div className=" border-2 border-gray-300 rounded-md">
              <Box>
                <Card>
                  <CardContent>
                    <h2>Coyghgkuyge</h2>
                  </CardContent>
                </Card>
              </Box>
            </div>
            <div className=" border-2 border-gray-300 rounded-md">
              <Box>
                <Card>
                  <CardContent>
                    <h2>ghfghgfh</h2>
                  </CardContent>
                </Card>
              </Box>
            </div>

            <div className=" border-2 border-gray-300 rounded-md">
              <Box>
                <Card>
                  <CardContent>
                    <h2>cnfgnf</h2>
                  </CardContent>
                </Card>
              </Box>
            </div>

            <div className=" border-2 border-gray-300 rounded-md">
              <Box>
                <Card>
                  <CardContent>
                    <h2>ghfhgghfoutline</h2>
                  </CardContent>
                </Card>
              </Box>
            </div>
            </Stack>

              <Stack direction="row" spacing={4}>
              <div className="border-2 border-gray-300 rounded-md">
              <Box>
                <Card>
                  <CardContent>
                    <h2>Cghfgfgor outline</h2>
                  </CardContent>
                </Card>
              </Box>
            </div>

            <div className="border-2 border-gray-300 rounded-md">
              <Box>
                <Card>
                  <CardContent>
                    <h2>Cghfgfgor outline</h2>
                  </CardContent>
                </Card>
              </Box>
            </div>

            <div className="border-2 border-gray-300 rounded-md">
              <Box>
                <Card>
                  <CardContent>
                    <h2>Cghfgfgor outline</h2>
                  </CardContent>
                </Card>
              </Box>
            </div>

            <div className="border-2 border-gray-300 rounded-md">
              <Box>
                <Card>
                  <CardContent>
                    <h2>Cghfgfgor outline</h2>
                  </CardContent>
                </Card>
              </Box>
            </div>
              </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
};
