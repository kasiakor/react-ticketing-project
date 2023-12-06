import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAccessToken } from "../services/tokenProvider";
import Ticket from "./Ticket";

const Dashboard = () => {
  // React States
  const [tickets, setTickets] = useState([]);
  const accessToken = useAccessToken()[0];
  const navigate = useNavigate();

  // Get tickets data
  useEffect(() => {
    const api = "https://frontendtest.unixfor.gr/api/Tickets/GetTickets";
    if (!accessToken) {
      navigate("/");
    }
    axios
      .get(api, { headers: { Authorization: `Bearer ${accessToken}` } })
      .then((response) => {
        setTickets(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <Grid container spacing={8}>
        {tickets.length > 0 &&
          tickets.map((ticket) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={uuidv4()}>
              <Ticket ticket={ticket} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
