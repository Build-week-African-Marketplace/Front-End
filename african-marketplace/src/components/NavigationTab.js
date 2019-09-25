import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import '../NavBarOverrides.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 1000
  }
}));

export default function NavTab(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="green">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          {props.uniqueCategorySet.map((category, index) => (
            <Tab label={category} {...a11yProps(index + 1)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        
        {/* <div>DJKDJ</div> */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div class="listed-items">
            {props.pricingData.map((product, index) => (
              <div key={index} className="product">
                {/* <img src={product.image} alt={product.productName} /> */}
                <h3>{product.productName}</h3>
                <p>${product.price}</p>
                <p>{product.subCategory}</p>
              </div>
            ))}
          </div>
        </TabPanel>

        {props.uniqueCategorySet.map((category, index) => (
          <TabPanel value={value} index={index + 1} dir={theme.direction}>
            <div class="listed-items">
              {props.pricingData
                .filter(product => product.subCategory === category)
                .map((product, index) => (
                  <div key={index} className="product">
                    {/* <img src={filteredProduct.image} alt={filteredProduct.productName} /> */}
                    <h3>{product.productName}</h3>
                    <p>${product.price}</p>
                    <p>{product.subCategory}</p>
                  </div>
                ))}
            </div>
          </TabPanel>
        ))}
        {/* <TabPanel value={value} index={1} dir={theme.direction}>
          Item 2
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel> */}
      </SwipeableViews>
    </div>
  );
}
