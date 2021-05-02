import { makeStyles } from '@material-ui/core';

const useGlobalStyles = makeStyles({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  flexColumn: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
});

export default useGlobalStyles;
