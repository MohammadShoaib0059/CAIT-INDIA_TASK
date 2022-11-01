import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableBody';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat, Assignedby, Assignedto, Deadlines, Priority) {
  return { name, calories, fat, Assignedby, Assignedto, Deadlines, Priority };
}

const rows = [
  createData('BGV of new Candidates', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Onboard new Client', '4:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Candidates meeting', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Recruit Candidates', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Schedule Meeting', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Candidates meeting', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('BGV of new Candidates', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Recruit Candidates', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Onboard new Client', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Schedule Meeting', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('BGV of new Candidates', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Candidates meeting', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),
  createData('Recruit Candidates', '2:00 PM', 'Fri 21 May 22', 'Mahohar Patnaik', 'Arvind Karmankar', 'Fri 21 May 22', 'High'),



].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="ps-4 pe-2 pb-4">

      <TableContainer component={Paper} >
        <div className='p-2'>Task List</div>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Assigned by</TableCell>
              <TableCell align="right">Assigned to</TableCell>
              <TableCell align="right">Deadlines</TableCell>
              <TableCell align="right">Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.calories}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.fat}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.Assignedby}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.Assignedto}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.Deadlines}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.Priority}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={12}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
