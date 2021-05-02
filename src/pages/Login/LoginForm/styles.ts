import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
  peopleBackground: {
    backgroundImage: `url('/images/row-of-young-adults-at-work.jpg')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
});

export default useStyles;
