/**
 * Provides a global auth state
 */
import { createContext, useState } from "react"

const NavClassContext = createContext({});

// Parent component to provide auth state to all children
export function NavClassProvider ({children}) {
    const active = 'w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium w3-text-red';
    const inactive = 'w3-cell w3-button w3-border-right w3-border-white w3-hide-small w3-hide-medium';
    const endLink = 'w3-cell w3-button w3-hide-small w3-hide-medium';
    const activeM = "w3-button w3-round-large w3-card-2 w3-text-red";
    const inactiveM = "w3-button w3-round-large w3-card-2";
    const myTitle = ['LHS | Home', 'LHS | About', 'LHS | Admission', 'LHS | Payments', 'LHS | Calendar', 'LHS | Results', 'LHS | Alumni']

    // Navigation classes for all available top nav elements
    // const [topNav, setTopNav] = useState([active, inactive, inactive, inactive, inactive, inactive, endLink]);
    // const [topNavM, setTopNavM] = useState([activeM, inactiveM, inactiveM, inactiveM, inactiveM, inactiveM, inactiveM]);

    // Navigation classes for all available top nav elements
    const [topNav, setTopNav] = useState({desk: [active, inactive, inactive, inactive, inactive, inactive, endLink], mob: [activeM, inactiveM, inactiveM, inactiveM, inactiveM, inactiveM, inactiveM]});
 
    // Change active tab to red 
    // Change all tabs to no color when active page does not have a top tab link
    function switchTabIndicator (n) {
        setTopNav(prev => {
            let newState = {desk:[], mob:[]};
            for (let i = 0; i < prev.desk.length; i++) {
                //resolve desktop viewport
                let tmp1 = active;
                let tmp2 = inactive;
                // remove border line from last navigation link
                if (i === prev.desk.length - 1) {
                    tmp1 = tmp1.replace('w3-border-right w3-border-white', '');
                    tmp2 = tmp2.replace('w3-border-right w3-border-white', '');
                }
                if (i === n) {
                    newState.desk.push(tmp1);
                } else {
                    newState.desk.push(tmp2);
                }

                // resolve mobile viewport 
                let tmp3 = activeM;
                let tmp4 = inactiveM;
                if (i === n) {
                    newState.mob.push(tmp3);
                } else {
                    newState.mob.push(tmp4);
                }
            };
            document.title = myTitle[n];
            return newState;
        });
      }

    // Change active tab to red for mobile viewports
    // Change all tabs to no color when active page does not have a top tab link for mobile viewports
    // function switchTabIndicatorMobile (n) {
    // setTopNavM(p => {
    //     const prev = p.mob;
    //     let newState = [];
    //     for (let i = 0; i < prev.length; i++) {
    //         let tmp = activeM;
    //         let tmp2 = inactiveM;
    //         if (i === n) {
    //             newState.push(tmp);
    //         } else {
    //             newState.push(tmp2);
    //         }
    //     };
    //     document.title = myTitle[n];
    //     return newState
    // });
    // }

    return(
        <NavClassContext.Provider value={{ topNav, setTopNav, switchTabIndicator}}>
            { children }
        </NavClassContext.Provider>

    )
}

export default NavClassContext