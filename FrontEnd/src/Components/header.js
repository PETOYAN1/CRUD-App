import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const style = {
    display : 'flex',
    flexDirection : 'column'
}

export const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <h1 onClick={() => navigate('/')}>Sales.</h1>
            <div className="dashboard" style={style}>
                <Link to={'/user'}>Admin Page</Link>
                <Link to={'/home'}>Home Page</Link>
            </div>
        </div>
    )
}