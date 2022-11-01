import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import IconLabelButtons from './AddTask';
import './Style/Taskheader.css';
export function Taskheader() {
    return (
        <div className="container-fluid-header p-4">
            <div className="row ">
                {/* <div className="col-">

                </div> */}
                <div className="col-12">
                    <div className="row">
                        <div className="col-8">
                            <div className="task-header">
                                <div className='task-header-Top'>
                                    <div className=''>Task</div>
                                    <div>{<CalendarMonthIcon />}<span>9 May,2022</span></div>
                                </div>
                                <hr></hr>
                                <div className='task-header-bottom'>
                                    <div className='box-1'>
                                        <button className='btn btn-primary w-100'>
                                            <div>66</div>
                                            <div>Ongoing</div>
                                        </button>
                                    </div>
                                    <div className='box-2'>
                                        <button className='btn btn-success w-100'>
                                            <div>24</div>
                                            <div>Delayed</div>
                                        </button>
                                    </div>
                                    <div className='box-3'>
                                        <button className='btn btn-warning w-100'>
                                            <div>10</div>
                                            <div>Completed</div>
                                        </button>
                                    </div>
                                    <div className='box-4'>

                                        <button className='btn btn-danger'>
                                            <div>100</div>
                                            <div>Assignments</div>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <IconLabelButtons />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}