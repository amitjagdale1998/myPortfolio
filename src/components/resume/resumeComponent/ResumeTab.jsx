import * as React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TerminalIcon from '@mui/icons-material/Terminal';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import '../resumeCss/resumeTab.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Education from './Education';
import WorkHistory from './WorkHistory';
import Skill from './Skill';
import Projects from './Projects';
import Intrests from './Intrests';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ResumeTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='sidebar'>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
        <div className='col'>
        <div className='row' id='tabs'>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab className='tab' icon={<SchoolIcon/>} label="Education"  {...a11yProps(0)} />
        <Tab className='tab' icon={<WorkHistoryIcon/>} label="Work History " {...a11yProps(1)} />
        <Tab className='tab' icon={<TerminalIcon/>} label="Programming Skill" {...a11yProps(2)} />
        <Tab className='tab' icon={<AppShortcutIcon/>} label="Projects" {...a11yProps(3)} />
        <Tab className='tab' icon={<SportsEsportsIcon/>} label="Intrests" {...a11yProps(4)} />
        
      </Tabs>
      </div>
      
      <div className='row gy-5' id='tabpanel'>
      <TabPanel value={value} index={0}>
        <Education/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WorkHistory/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Skill/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Projects/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Intrests/>
      </TabPanel>
      </div>
      </div>
    </Box>

    </div>
  );
}
