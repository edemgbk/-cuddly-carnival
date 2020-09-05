import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// IMPORT PATH OF MATERIAL-UI COMPONENTS
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

// IMPORT PATH OF MATERIAL-UI ICONS
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const ChoosePlanPayment = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Typography
        variant="h6"
        color="secondary"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Sign up complete! Select a plan
        <br /> that’s right for you.
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={2}>
                <CreditCardIcon />
              </Grid>
              <Grid item xs={6} style={{ textAlign: "left" }}>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  12 Month
                </Typography>
                <Typography variant="subtitle2">
                  Auto-renewal every 365 days
                </Typography>
              </Grid>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", color: "var(--main-red)" }}
                >
                  <Grid container>
                    <Grid item>
                      <AttachMoneyIcon />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">29.99</Typography>
                    </Grid>
                    <Grid item>
                      <NavigateNextIcon style={{ fontSize: 50 }} />
                    </Grid>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChoosePlanPayment;
