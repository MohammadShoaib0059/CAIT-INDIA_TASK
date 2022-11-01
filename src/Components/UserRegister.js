import axios from "axios"
import { useFormik } from "formik"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
export function UserRegister() {
    let navigate = useNavigate();
    const [errorClass, setErrorClass] = useState('');
    const [userMsg, setUserMsg] = useState('');
    const formik = useFormik({

        initialValues: {
            UserName: '',
            Password: '',
            Email: '',

        },
        onSubmit: (values) => {
            axios({
                method: "POST",
                url: "https://gorest.co.in/public/v2/users",
                data: values
            })
                .catch((err) => {
                    console.log(err);
                })
            alert("Register Successfully..");
            navigate("/login");
        }
    })
    function VerifyUser(e) {
        axios({
            method: "GET",
            url: "https://gorest.co.in/public/v2/posts",
        }).then((response) => {
            for (var user of response.data) {
                if (user.UserName == e.target.value) {
                    setUserMsg('User Name Taken - Try Another');
                    setErrorClass('text-danger');
                    break;
                } else {
                    setUserMsg('User Name Available');
                    setErrorClass('text-success');
                }
            }
        })
    }
    return (
        <div className="register-main">
            <div className="d-flex justify-content-center align-items-center">
                <form className="bg-light border rounded rounded-4 p-4" style={{ marginTop: "100px", width: "40%" }} onSubmit={formik.handleSubmit}>
                    <h3 className="text-center">Register User</h3>
                    <dl >
                        <dt>UserName</dt>
                        <dd class="mb-4"><input name="UserName" onKeyUp={VerifyUser} onChange={formik.handleChange} required className="form-control" type="text" /></dd>
                        <dd className={errorClass}>{userMsg}</dd>
                        <dt>Password</dt>
                        <dd class="mb-4"><input name="Password" onChange={formik.handleChange} required className="form-control" type="password" /></dd>
                        <dt>Email</dt>
                        <dd class="mb-4"><input name="Email" onChange={formik.handleChange} required className="form-control" type="email" /></dd>
                    </dl>
                    <button className="btn btn-primary w-100 mb-4">Register</button>
                    <div className="pb-2">
                        <button className="btn btn-success w-100"><Link to="/login" style={{ textDecoration: "none", color: "white" }}><span className="bi bi-person-workspace p-2"></span>Existing User</Link></button>
                    </div>

                </form>
            </div>
        </div>
    )
}