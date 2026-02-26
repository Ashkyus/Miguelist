import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return(
        <div className="w-full bg-white p-4 flex flex-column text-black border-b-2 border-gray-300 mb-4 cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="justify-self-center"> Miguelist </h1>
        </div>
    )
}

export default Header;