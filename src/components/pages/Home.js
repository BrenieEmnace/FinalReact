import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { grey, green } from '@material-ui/core/colors';
import List from "../student/List";
import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles({
 headingColor: {
  backgroundColor: grey[500],
  color: "white"
 },
 addStuColor: {
  backgroundColor: green[400],
  color: "white"
 },
})

const Home = () => {
 const classes = useStyles();
 const [student, setStudent] = useState({
  stuname: "",
  stuaddress: "",
  stunumber: "",
  email: ""
 });
 const [status, setStatus] = useState();

 function onTextFieldChange(e) {
  setStudent({
   ...student,
   [e.target.name]: e.target.value
  })
 }

 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.post(`http://localhost:3333/students`, student)
   setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 if (status) {
  return <Home />
 }
 return (
  <>
   <Box textAlign="left" className={classes.headingColor} p={2} mb={2}>
    <Typography variant="h5">Final Project</Typography><a style={{color: 'white', textDecoration: 'none', marginLeft: '45%'}} href="/">Dashboard</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a style={{color: 'white', textDecoration: 'none'}} href="/students">Students</a>
   </Box>
   <Grid container justify="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} className={classes.addStuColor} mb={2} style={{ backgroundColor: "blue" }}>
      <Typography variant="h4">Add Student</Typography>
     </Box>
     <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <TextField autoComplete="stuname" name="stuname" required="name" variant="outlined" fullWidth id="stuname" label="Name" onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="stuaddress" name="stuaddress" required="address" variant="outlined" fullWidth id="stuaddress" label="Address" onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="stunumber" type="number" name="stunumber" required="number" variant="outlined" fullWidth id="stunumber" label="Contact Number" onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="email" type="email" name="email" required="email" variant="outlined" fullWidth id="email" label="Email Address" onChange={e => onTextFieldChange(e)} />
       </Grid>
      </Grid>
      <Box m={3}>
       <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}>Add</Button>
      </Box>
     </form>
    </Grid>
    <List />

    <Grid item md={6} xs={12}>
     
    </Grid>
   </Grid>
  </>
 )
}

export default Home
