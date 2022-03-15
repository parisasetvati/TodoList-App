import styles from "./Navbar.module.css";
import Select from "react-select";
import { useState } from "react";
const options=[{ value: "All", label: "All" },
{ value: "Complete", label: "Complete" },
{ value: "unComplete", label: "unComplete" }
]
const Navbar = ({unComplete,select,onchange}) => {
   
    
    
    return ( 
        <header className={styles.header}>
<div className={styles.navbar}>
    <div className={styles.titr}>
    <h2>
                TodoList
            </h2>
            <span className={styles.unComplete}>{unComplete}</span>
    </div>

            <div>

           
            <Select className={styles.Select} value={select} onChange={onchange} options={options} />
            </div>
</div>
           
        </header>
     );
}
 
export default Navbar;