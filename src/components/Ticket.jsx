import { styled } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import isValidTaxId from "../utilities";

// Custom Box component
const CustomBox = styled(Box)({
  display: "inline-block",
  fontWeight: "bold",
  paddingRight: "2%",
});

// Component styles
const styles = {
  typographyElement: {
    fontSize: {
      lg: 20,
      md: 8,
      sm: 7,
      xs: 6,
    },
    paddingBottom: "1%",
  },
  cardActions: {
    justifyContent: "center",
    paddingTop: "15%",
  },
  buttonElement: {
    textTransform: "capitalize",
    marginRight: "5%",
    width: 180,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    padding: "5% 5% 0",
  },
  cardElement: {
    maxWidth: 205,
    height: 300,
    borderLeft: "8px solid blue",
    outline: "2px solid black",
    overflow: "auto",
  },
  buttonOverride: {
    color: "blue",
    border: "2px solid black",
    fontWeight: "bolder",
    fontSize: "larger",
  },
};

// Destructure props
const Ticket = ({
  ticket: { Name, Id, StartDate, DueDate, Assignee, TaxId, Status },
}) => {
  // Handle border color
  const getBorderColor = (status) => {
    let color;
    switch (status) {
      case 0:
        color = "red";
        break;
      case 1:
        color = "blue";
        break;
      case 2:
        color = "green";
        break;
      default:
        color = "black";
    }
    return color;
  };

  // Handle status display message
  const getStatusMessage = (status) => {
    switch (status) {
      case 0:
        status = "Open";
        break;
      case 1:
        status = "In Progress";
        break;
      case 2:
        status = "Finished";
        break;
      default:
        status = "Open";
    }
    return status;
  };

  // Format dates
  const startDate = new Date(StartDate);
  const formatedStartDate = startDate.toLocaleDateString("en-GB");
  const dueDate = new Date(DueDate);
  const formatedDueDate = dueDate.toLocaleDateString("en-GB");

  return (
    <Card
      sx={styles.cardElement}
      style={{ borderColor: getBorderColor(Status) }}
    >
      <CardActions style={styles.cardActions}>
        <Button
          variant="outlined"
          sx={styles.buttonOverride}
          style={styles.buttonElement}
        >
          {Name}
        </Button>
      </CardActions>
      <CardContent style={styles.cardContent}>
        <Typography sx={styles.typographyElement}>
          <CustomBox>Id:</CustomBox>
          {Id}
        </Typography>
        <Typography sx={styles.typographyElement}>
          <CustomBox>Start date:</CustomBox>
          {formatedStartDate}
        </Typography>
        <Typography sx={styles.typographyElement}>
          <CustomBox>Due date:</CustomBox>
          {formatedDueDate}
        </Typography>
        <Typography sx={styles.typographyElement}>
          <CustomBox>Assignee:</CustomBox>
          <CustomBox>{Assignee}</CustomBox>
        </Typography>
        <Typography sx={styles.typographyElement}>
          <CustomBox>Status:</CustomBox>
          {getStatusMessage(Status)}
        </Typography>
        <Typography sx={styles.typographyElement}>
          <CustomBox>Tax Id:</CustomBox>
          <CustomBox color={TaxId && isValidTaxId(TaxId) ? "black" : "red"}>
            {TaxId}
          </CustomBox>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Ticket;
