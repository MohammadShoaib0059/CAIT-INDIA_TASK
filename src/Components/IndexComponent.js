import { Header } from "./Header";
import { Taskbar } from "./Taskbar";
import './Style/Taskheader.css'
import { UserLogin } from "./UserLogin";
import { UserRegister } from "./UserRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function IndexComponent() {


    return (
        <div className="container-fluid">
            <div className="main-component">
                <BrowserRouter>
                    <header>
                        <Header />
                        {/* <Taskbar /> */}
                        {/* <UserLogin /> */}
                        {/* <UserRegister /> */}
                    </header>
                    <section>
                        <Routes>
                            <Route path="/" element={<UserRegister />}></Route>
                            <Route path="/login" element={<UserLogin />}></Route>
                            <Route path="/myapp" element={<Taskbar />}></Route>
                            <Route path="/error" element={"Not Found"}></Route>
                        </Routes>
                    </section>


                </BrowserRouter>
            </div>


        </div>
    )
} 