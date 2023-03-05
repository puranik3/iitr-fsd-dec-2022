import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const navigate = useNavigate(); // in v5 it was useHistory().push()
    
    const goHome = () => {
        navigate( '/' );
    };

    return (
        <div>
            <h1>Contact</h1>
            <hr />
            <p>
                Address:
                <br />
                #123, ABC Plaza,
                <br />
                Bengaluru - 560100
            </p>
            <div>
                <NavLink to="phone" className="me-2">Phone</NavLink>
                <NavLink to="email">Email</NavLink>
            </div>

            <Routes>
                <Route path="phone" element={<p>Phone: 1234567890</p>} />
                <Route path="email" element={<p>Email: john.doe@example.com</p>} />
            </Routes>

            <button onClick={goHome}>Go home</button>
        </div>
    );
}
 
export default ContactPage;