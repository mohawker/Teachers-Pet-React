import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function UserProfile(props) {
  const { classes } = props;
  function getRandomColor() {
    var hue = 'rgba(' + (Math.floor(Math.random() * 70)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 50)) + ',' + (1-(Math.random())*0.2) + ')';
    return hue;
  }
  return (
    <div>
      <div class="studentRow">
        <div style={{marginLeft: '50px',filter: 'drop-shadow(0px 7px 1px black)'}}>
          <div style={{float:'left', marginRight:'2px', marginTop: '14px', height: '63px', width: '73px', background: getRandomColor(), color: 'white', textAlign:'center', verticalAlign: 'end', position: 'relative', borderRadius: '7%'}}>
            {/* <img style={{position:'absolute', right:'21px', top:'-20px', borderRadius:'50%', width:'55px'}} src={require('../../assets/img/student1.jpg')}></img> */}
            <div style={{textAlign: 'center', verticalAlign:'middle', marginTop: '20px',fontSize:'13px'}}>Er Jun Jia</div>
          </div>
          



        </div>
        

        <br/>
      </div>

    </div>
  );
}

export default withStyles(styles)(UserProfile);
