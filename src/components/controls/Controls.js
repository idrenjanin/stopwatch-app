import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import styles from './styles'

const Controls = ({ actions, isOn, classes }) => (
  <Grid container justify={'space-between'} className={classes.controlsRoot}>
    {!isOn ? (
      <Button variant="contained" color="primary" onClick={actions.start}>
        <Icon>play_arrow</Icon> Start
      </Button>
    ) : (
      <Button variant="contained" color="primary" onClick={actions.stop}>
        <Icon>stop</Icon> Stop
      </Button>
    )}
    <Button variant="contained" color="primary" onClick={actions.newLap}>
      <Icon>add</Icon> New Lap
    </Button>
    <Button variant="contained" color="primary" onClick={actions.reset}>
      <Icon>replay</Icon> Reset
    </Button>
  </Grid>
)

export default withStyles(styles)(Controls)
