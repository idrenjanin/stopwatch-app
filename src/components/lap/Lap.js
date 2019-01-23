import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import timeFormat from '../../utils/timeFormat'
import styles from './styles'

const Lap = ({ lap, time, classes }) => (
  <div>
    <Paper className={classes.lapItem}>
      <div className={classes.lapItemNum}>
        <Icon>timelapse</Icon> {lap}
      </div>
      <div className={classes.lapItemTime}>
        <Icon className={classes.lapItemTimeIcon}>timer</Icon> {timeFormat(time)} <br />
      </div>
    </Paper>
  </div>
)

export default withStyles(styles)(Lap)
