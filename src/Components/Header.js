import GridViewIcon from '@mui/icons-material/GridView';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import './Style/Taskheader.css';
import { Link } from 'react-router-dom';


export function Header() {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "whitesmoke", boxShadow: "0 2px 2px 1px #DEE1E3" }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:(void)">
            <button class="btn btn-light" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
              <div>{<MenuIcon />}</div>
            </button>
            <img src="./Images/logo.png" width="50%" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="badge rounded-circle m-2 p-2 text-dark" href="javascript:(void)" style={{ backgroundColor: "#DEE1E3" }}>

                  <Badge badgeContent={4} color="primary">
                    <CircleNotificationsIcon color="action" />
                  </Badge>
                </a>
              </li>
              <li class="nav-item">
                <a class="badge rounded-circle m-2 p-2 text-dark" href="javascript:(void)" style={{ backgroundColor: "#DEE1E3" }}>
                  <span class="">{<AccountCircleIcon />}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div className='Menu-buttons'>
            <ul>
              <li className='pb-4'> <button className="btn btn-light w-100 ">
                <Link style={{ textDecoration: "none" }} to="/">
                  <span className='text-danger' >{<GridViewIcon />}My Apps</span>
                </Link>
              </button></li>
              <li className='pb-4'><button className="btn btn-light w-100 ">
                <span className='text-black'>{<SupervisorAccountIcon />}Resources</span>
              </button></li>
              <li className='pb-4'><button className="btn btn-light w-100 ">
                <span className='text-black'>{<BusinessIcon />}My Organisation</span>
              </button></li>
              <li className='pb-4'><button className="btn btn-light w-100 ">
                <span className='text-black'>{<SettingsIcon />}Setting</span>
              </button></li>
              <li className='pb-4'><button className="btn btn-light w-100 ">
                <span className='text-black'>{<LogoutIcon />}Logout</span>
              </button></li>
            </ul>






          </div>
        </div>
      </div>
    </>

  );
}
