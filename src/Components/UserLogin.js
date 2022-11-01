import axios from "axios";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function UserLogin() {
    let navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            "UserName": '',
            "Password": '',
        },
        onSubmit: (values) => {
            axios({
                method: "GET",
                url: 'https://gorest.co.in/public/v2/posts'
            }).then(response => {
                for (var user of response.data) {
                    if (user.UserName == values.UserName && user.Password == values.Password) {
                        setCookie('Username', values.UserName);
                        navigate("/myapp");
                        break;
                    } else {
                        // navigate("/error")
                    }
                }
            })

        }
    });
    return (
        <div className="d-flex justify-content-center align-items-center">
            <form className="bg-light border rounded rounded-4 p-4" style={{ marginTop: "100px", width: "40%" }} onSubmit={formik.handleSubmit}>
                <h2 className="text-center">UserLogin</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd className="mb-4">
                        <input type="text" required className="form-control" name="UserName" onChange={formik.handleChange} />
                    </dd>
                    <dt>Password</dt>
                    <dd className="mb-4">
                        <input type="password" required className="form-control" name="Password" onChange={formik.handleChange} />
                    </dd>
                </dl>
                <Link to="/myapp"><button className="btn btn-primary w-100 mt-4">Login </button></Link>
                <div className="pb-2 pt-4 ">
                    <button className="btn btn-success w-100"><Link to="/" style={{ textDecoration: "none", color: "white" }}><span className="bi bi-person-plus-fill p-2"></span>New User</Link></button>
                </div>
            </form>
        </div>
    )
}