import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Controls from '../controls/Controls'
import Timer from '../timer/Timer'
import LapList from '../lapList/LapList'
import styles from './styles'
import { timerInterval } from '../../constants/time'

const INITIAL_STATE = {
  isOn: false,
  time: 0,
  timeList: []
}

class Stopwatch extends Component {
  constructor() {
    super()
    this.state = INITIAL_STATE
  }

  updateTimer(extraTime) {
    this.setState({ time: this.state.time + extraTime })
  }

  start() {
    this.setState({ isOn: true }, () => {
      this.timer = setInterval(() => {
        this.updateTimer(timerInterval)
      }, timerInterval)
    })
  }

  stop() {
    this.setState({ isOn: false }, () => clearInterval(this.timer))
  }

  newLap() {
    if (this.state.isOn) {
      this.setState({
        timeList: [...this.state.timeList, this.state.time]
      })
    }
  }

  reset() {
    this.setState(INITIAL_STATE, () => clearInterval(this.timer))
  }

  bindActions() {
    return {
      start: () => this.start(),
      stop: () => this.stop(),
      newLap: () => this.newLap(),
      reset: () => this.reset()
    }
  }

  render() {
    const { classes } = this.props
    return (
      <Grid container justify={'center'}>
        <Grid className={classes.stopWatchRoot}>
          <Grid item>
            <Timer time={this.state.time} />
            <Controls actions={this.bindActions()} isOn={this.state.isOn} />
          </Grid>
          <Grid item>
            <LapList laps={this.state.timeList} />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Stopwatch)
