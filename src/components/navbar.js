import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-content bg-gray-100 text-black">
            {/* Header */}
            <header className="flex justify-between items-center font-bold text-black p-4 pt-5">
                <h1 className="text-3xl font-bold ml-10">DocRack</h1>
                <div className='flex items-center space-x-10 mr-10'>
                <div className="space-x-10 ">
                    <button className="hover:underline" >Connect Drive</button>
                    <button className="hover:underline" onClick={() => navigate("/upload-files")}>Upload Files</button>
                    <button className="hover:underline" onClick={() => navigate("/refactor-directory")}>Refactor Directory</button>
                    <button className="hover:underline">Manage Permissions</button>
                </div>
                <FaUserCircle size={30} onClick={() => navigate("/")} />
                </div>
            </header>
        </div>

    )
}

export default Navbar;