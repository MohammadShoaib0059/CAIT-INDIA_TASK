
import CustomPaginationActionsTable from "./Taskbottom";
import { Taskheader } from "./Taskheader";


export function Taskbar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-10">
                    <Taskheader />
                    <CustomPaginationActionsTable />
                </div>
            </div>

        </div>
    )
}