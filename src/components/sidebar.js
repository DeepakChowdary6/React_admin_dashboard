import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {
    faGauge,
    faTags,
    faCalendarDays,
    faUser,
    faGear,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar(){
    const [activeItem, setActiveItem] = useState(0);
    const menuItems = [
        { icon: faGauge, text: 'Dashboard' },
        { icon: faTags, text: 'Transactions' },
        { icon: faCalendarDays, text: 'Schedules' },
        { icon: faUser, text: 'Users' },
        { icon: faGear, text: 'Settings' },
    ];
    function handleItemClick(index) {
        setActiveItem(index);
        // You can also perform additional actions or navigation here
    }
return (
    <div className="sidebar">
         <div className="top">
             <h >{"Board."}</h>
             <ul>
                 {/* Map through your menu items */}
                 {menuItems.map((item, index) => (
                     <li
                         key={index}
                         className={index === activeItem ? 'active' : ''}
                         onClick={() => handleItemClick(index)}
                     >
                         <FontAwesomeIcon icon={item.icon} /> {item.text}
                     </li>
                 ))}
             </ul>


         </div>

        <div className="bottom">
            <ul>
                <li>{"Help"}</li>
                 <li>{"Contact Us"}</li>
            </ul>
        </div>


    </div>);

}