export default theme => ({
  lapItem: {
    display: 'flex',
    marginBottom: 16
  },
  lapItemNum: {
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.primary.main,
    padding: '12px 24px',
    color: 'white',
    borderRadius: 3,
    width: '36px'
  },
  lapItemTime: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 18,
    color: theme.palette.primary.dark
  },
  lapItemTimeIcon: {
    marginRight: 8
  }
})
