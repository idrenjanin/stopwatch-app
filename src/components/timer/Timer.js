import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import timeFormat from '../../utils/timeFormat'
import styles from './styles'

const Timer = ({ time, classes }) => (
  <Grid container justify={'center'}>
    <span className={classes.timer}>{timeFormat(time)}</span>
  </Grid>
)

export default withStyles(styles)(Timer)
