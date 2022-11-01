import './Style/Taskheader.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function IconLabelButtons() {
    return (
        <Stack direction="row" spacing={2}>
            <Button type="button" class="btn btn-danger w-100" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" variant="contained">{<AddIcon />}
                Add New Task
            </Button>

            <div class="modal fade modal-xl " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Task</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form >
                                <div class="row">
                                    <div className='col-4'>
                                        <div className='mb-3'>
                                            <label for="recipient-name" class="col-form-label">Task Name:</label>
                                            <input type="text" class="form-control" placeholder='Get Appointment letter from HR' id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label">Description:</label>
                                            <textarea class="form-control" id="message-text" placeholder='Write Description from HR'></textarea>
                                        </div>
                                        <div className='mb-3'>
                                            <label for="recipient-name" class="col-form-label">Related To:</label>
                                            <input type="text" class="form-control" id="recipient-name" placeholder='HR Departmant' />
                                        </div>
                                    </div>

                                    <div className='col-4'>
                                        <div className='mb-3'>
                                            <label for="recipient-name" class="col-form-label">Assign To:</label>
                                            <input type="text" class="form-control" placeholder='Vishal' id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <div class="alert alert-primary" role="alert">
                                                Gautam Sharma&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bi bi-x-lg'></span>
                                            </div>
                                            <div class="alert alert-secondary" role="alert">
                                                Harshad Joshi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bi bi-x-lg'></span>
                                            </div>
                                            <div class="alert alert-success" role="alert">
                                                Kavish sen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='bi bi-x-lg'></span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='mb-3'>
                                            <label for="recipient-name" class="col-form-label">Set Daedline:</label>
                                            <input type="date" class="form-control" id="recipient-name" />
                                        </div>
                                        <div className='mb-3'>
                                            <FormControl>
                                                <FormLabel id="demo-radio-buttons-group-label">Set Priority</FormLabel>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="female"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="High" control={<Radio />} label="High" />
                                                    <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                                                    <FormControlLabel value="Low" control={<Radio />} label="Low" />
                                                </RadioGroup>
                                            </FormControl>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </Stack>
    );
}



