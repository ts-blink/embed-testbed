import React from 'react';
import DropdownComponent from '../Dropdown';
import Dropdownoptions from './dropdownOptions';

const Header = (props: { setPageId: Function }) => {
    const onCheckboxClick = () => {
        document.querySelector('#app-title')?.classList.toggle('title');
    };

    return (
        <header className="App-header">
            <span id="app-title">ThoughtSpot Everywhere Test Bed</span>
            <nav>
                <label htmlFor="id-show-menu" className="show-menu">
                    <div className="nav-icon">☰</div>
                </label>
                <input
                    type="checkbox"
                    id="id-show-menu"
                    className="checkbox-menu"
                    role="button"
                    onClick={onCheckboxClick}
                />
                <div className="menu-block">
                    <ul className="navUL">
                        {Dropdownoptions.map((obj) => {
                            return (
                                <DropdownComponent
                                    title={obj.title}
                                    menuItems={obj.tests}
                                    key={obj.title}
                                    onClickMenu={props.setPageId}
                                    otherTitles={Dropdownoptions.filter(
                                        (o) => o.title !== obj.title,
                                    ).map((o) => o.title)}
                                />
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
