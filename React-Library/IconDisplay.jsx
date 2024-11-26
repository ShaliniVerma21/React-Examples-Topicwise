import React from 'react';
import { 
    FaBeer, FaCoffee, FaCode, FaDatabase, FaCog, FaUser , 
    FaSearch, FaBell, FaHome, FaEnvelope, FaTrash, FaEdit, 
    FaSave, FaUpload, FaDownload, FaLock, FaUnlock, 
    FaChartBar, FaChartPie, FaFileAlt, FaClipboardList, 
    FaMapMarkerAlt, FaPhone, FaShoppingCart, FaHeart, 
    FaStar, FaComments, FaSignInAlt, 
    FaSignOutAlt, FaClipboardCheck, FaSync, FaPlay, 
    FaPause, FaStop, FaVolumeUp, FaVolumeMute, 
    FaLightbulb, FaQuestionCircle, FaExclamationTriangle, 
    FaCheckCircle, FaTimesCircle, FaArrowRight, FaArrowLeft, 
    FaArrowUp, FaArrowDown, FaShareAlt, FaClipboard, 
    FaCalendarAlt, FaClock, FaMap, FaTags 
} from 'react-icons/fa'; // Font Awesome icons
import { AiFillLike, AiFillDislike } from 'react-icons/ai'; // Ant Design icons
import { GiPoliceBadge } from 'react-icons/gi'; // Game Icons
import { MdAndroid, MdWeb } from 'react-icons/md'; // Material Design icons
import './IconDisplay.css'; // Importing CSS for styling

const IconDisplay = () => {
    return (
        <div className="icon-display-container">
            <h2>React Icons Example</h2>
            <div className="icon-group">
                <div className="icon-item"><FaBeer size="50" color="gold" /><p>Beer</p></div>
                <div className="icon-item"><FaCoffee size="50" color="brown" /><p>Coffee</p></div>
                <div className="icon-item"><AiFillLike size="50" color="blue" /><p>Like</p></div>
                <div className="icon-item"><AiFillDislike size="50" color="red" /><p>Dislike</p></div>
                <div className="icon-item"><GiPoliceBadge size="50" color="purple" /><p>Police Badge</p></div>
                <div className="icon-item"><MdAndroid size="50" color="green" /><p>Android</p></div>
                <div className="icon-item"><FaCode size="50" color="blue" /><p>Code</p></div>
                <div className="icon-item"><FaDatabase size="50" color="orange" /><p>Database</p></div>
                <div className="icon-item"><FaCog size="50" color="gray" /><p>Settings</p></div>
                <div className="icon-item"><FaUser  size="50" color="teal" /><p>User</p></div>
                <div className="icon-item"><MdWeb size="50" color="darkblue" /><p>Web</p></div>
                <div className="icon-item"><FaSearch size="50" color="black" /><p>Search</p></div>
                <div className="icon-item"><FaBell size="50" color="orange" /><p>Notifications</p></div>
                <div className="icon-item"><FaHome size="50" color="blue" /><p>Home</p></div>
                <div className="icon-item"><FaEnvelope size="50" color="purple" /><p>Messages</p></div>
                <div className="icon-item"><FaTrash size="50" color="red" /><p>Delete</p></div>
                <div className="icon-item"><FaEdit size="50" color="blue" /><p>Edit</p></div>
                <div className="icon-item"><FaSave size="50" color="green" /><p>Save</p></div>
                <div className="icon-item"><FaUpload size="50" color="blue" /><p>Upload</p></div>
                <div className="icon-item"><FaDownload size="50" color="blue" /><p>Download</p></div>
                <div className="icon-item"><FaLock size="50" color="gray" /><p>Lock</p></div>
                <div className="icon-item"><FaUnlock size="50" color="gray" /><p>Unlock</p></div>
                <div className="icon-item"><FaChartBar size="50" color="purple" /><p>Bar Chart</p></div>
                <div className="icon-item"><FaChartPie size="50" color="orange" /><p>Pie Chart</p></div>
                <div className="icon-item"><FaFileAlt size="50" color="blue" /><p>File</p></div>
                <div className="icon-item"><FaClipboardList size="50" color="green" /><p>Checklist</p></div>
                <div className="icon-item"><FaMapMarkerAlt size="50" color="red" /><p>Location</p></div>
                <div className="icon-item"><FaPhone size="50" color="green" /><p>Phone</p></div>
                <div className="icon-item"><FaShoppingCart size="50" color="orange" /><p>Cart</p></div>
                <div className="icon-item"><FaHeart size="50" color="red" /><p>Favorite</p></div>
                <div className="icon-item"><FaStar size="50" color="gold" /><p>Star</p></div>
                <div className="icon-item"><FaComments size="50" color="blue" /><p>Comments</p></div>
                <div className="icon-item"><FaUser Friends size="50" color="teal" /><p>Friends</p></div>
                <div className="icon-item"><FaSignInAlt size="50" color="green" /><p>Login</p></div>
                <div className="icon-item"><FaSignOutAlt size="50" color="red" /><p>Logout</p></div>
                <div className="icon-item"><FaClipboardCheck size="50" color="blue" /><p>Approval</p></div>
                <div className="icon-item"><FaSync size="50" color="gray" /><p>Refresh</p></div>
                <div className="icon-item"><FaPlay size="50" color="green" /><p>Play</p></div>
                <div className="icon-item"><FaPause size="50" color="orange" /><p>Pause</p></div>
                <div className="icon-item"><FaStop size="50" color="red" /><p>Stop</p></div>
                <div className="icon-item"><FaVolumeUp size="50" color="black" /><p>Volume Up</p></div>
                <div className="icon-item"><FaVolumeMute size="50" color="gray" /><p>Mute</p></div>
                <div className="icon-item"><FaLightbulb size="50" color="yellow" /><p>Idea</p></div>
                <div className="icon-item"><FaQuestionCircle size="50" color="blue" /><p>Help</p></div>
                <div className="icon-item"><FaExclamationTriangle size="50" color="orange" /><p>Warning</p></div>
                <div className="icon-item"><FaCheckCircle size="50" color="green" /><p>Success</p></div>
                <div className="icon-item"><FaTimesCircle size="50" color="red" /><p>Error</p></div>
                <div className="icon-item"><FaArrowRight size="50" color="black" /><p>Next</p></div>
                <div className="icon-item"><FaArrowLeft size="50" color="black" /><p>Previous</p></div>
                <div className="icon-item"><FaArrowUp size="50" color="black" /><p>Up</p></div>
                <div className="icon-item"><FaArrowDown size="50" color="black" /><p>Down</p></div>
                <div className="icon-item"><FaShareAlt size="50" color="blue" /><p>Share</p></div>
                <div className="icon-item"><FaClipboard size="50" color="gray" /><p>Clipboard</p></div>
                <div className="icon-item"><FaCalendarAlt size="50" color="purple" /><p>Calendar</p></div>
                <div className="icon-item"><FaClock size="50" color="black" /><p>Time</p></div>
                <div className="icon-item"><FaMap size="50" color="green" /><p>Map</p></div>
                <div className="icon-item"><FaTags size="50" color="blue" /><p>Tags</p></div>
            </div>
        </div>
    );
};

export default IconDisplay;