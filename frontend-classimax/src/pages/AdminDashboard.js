import React, { useState, useEffect } from "react";
import {
  Typography,
  TableContainer,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Card from "../components/Card";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import { useNavigate, useLocation } from "react-router-dom";
import showNotification from "../functions/notification";
import { ToastContainer } from "react-toastify";

const AdminDashboard = () => {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const [userListings, setUserListings] = useState([]);
  const [showUserListing, setShowUserListing] = useState(false);
  // const navigate = useNavigate();
  // const location = useLocation();
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);



  const handleDeleteClick = (userId) => {
    setDeleteUserId(userId);
    setIsDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axiosPrivate.delete("/users", { data: { id: deleteUserId } });
      console.log("User with ID:", deleteUserId, "deleted.");
      showNotification(`userid: ${deleteUserId} deleted!`);
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user._id !== deleteUserId)
      );
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteUserId(null);
    setIsDialogOpen(false);
  };

  const fetchUserListings = async (userId) => {
    try {
      const response = await axiosPrivate.get(`/adListing/user/${userId}`);
      console.log("getUserListings:", response.data);
      setUserListings(response.data);
      if (response.data.length > 0) {
        setShowUserListing(true);
      } else {
        setShowUserListing(false);
        showNotification("No listings by this user", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteThisProduct = async (productId) => {
    try {
      // localhost:3500/adListing/64c623cceacfe63cf0e73d44
      console.log('productId:',productId);
      const response = await axiosPrivate.delete(`/adListing/${productId}`);
      console.log("delete response:", response);
      showNotification(`deleted product ${productId}`, "success");
    } catch (error) {
      console.log(error);
      showNotification("Product delete failed", "error");
    }
  };
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get("/users", {
          signal: controller.signal,
        });
        console.log("getUsers:", response.data);
        isMounted && setUsers(response.data);
      } catch (error) {
        console.log(error);
        // navigate("/login", { state: { from: location }, replace: true });
      }
    };
    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  
  return (
    <div>
      <ToastContainer />
      <Typography variant="h5" marginLeft="10px" marginTop="10px">
        Users List:
      </Typography>
      {users?.length ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>{user?._id}</TableCell>
                  <TableCell>{user?.username}</TableCell>
                  <TableCell>{user?.active ? "active" : "false"}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => fetchUserListings(user?._id)}
                      variant="contained"
                    >
                      Listings
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteClick(user._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>No users found!!!</Typography>
      )}
      {/* Dialog for delete confirmation */}
      <Dialog open={isDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this user?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
          <Button onClick={handleDeleteCancel} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {/* userListings data */}
      {showUserListing && (
        <div>
          <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
            <Button
              onClick={() => setShowUserListing(false)}
              variant="contained"
            >
              Close Listings
            </Button>
            <Typography>
              {userListings.length == 0 ? (
                <Typography>No Listings by this user</Typography>
              ) : (
                <>Listing by {userListings[0]?.user?.username}</>
              )}
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {userListings?.map((option, index) => (
              <div>
                <Card
                  key={userListings._id}
                  value={
                    option?.images[0] ||
                    "https://i.pinimg.com/originals/70/84/f4/7084f4182630ae4bd2bcc9cbaa831d6e.png"
                  }
                  name={option?.title || "N/A"}
                  category={option?.category || "N/A"}
                  date={
                    new Date(option?.createdAt)?.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    }) || "N/A"
                  }
                  desc={option?.desc || "N/A"}
                  price={option?.price || "N/A"}
                  rating="4"
                />
                <Button
                  color="error"
                  variant="outlined"
                  size="small"
                  style={{marginBottom:'6px'}}
                  onClick={() => deleteThisProduct(option?._id)}
                >
                  Remove Product
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
