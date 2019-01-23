import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Lap from '../lap/Lap'
import styles from './styles'

const LapList = ({ laps, classes }) => (
  <div className={classes.listRoot}>
    {laps.map((time, index) => (
      <Lap key={index} time={time} lap={index + 1} />
    ))}
  </div>
)

export default withStyles(styles)(LapList)
