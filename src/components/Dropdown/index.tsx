import React from 'react';
import { generatePageId, getSelectedTitle } from '../../utils/index';

const DropdownComponent = (props: {
    title: string;
    pageId: string;
    menuItems: string[];
    otherTitles: string[];
    onClickMenu: Function;
}) => {
    const onClickButton = () => {
        document
            .querySelector('#dropdown-container-' + props.title)
            ?.classList.toggle('display-block');
        props.otherTitles.forEach((title) => {
            const element = document.querySelector(
                '#dropdown-container-' + title,
            );
            if (element?.classList.contains('display-block')) {
                element.classList.remove('display-block');
            }
        });
    };

    const onClickHandeler = (item: string) => {
        const page = props.onClickMenu(generatePageId(props.title, item));
        onClickButton();
    };

    return (
        <div className="dropdown">
            <a
                className={`dropbtn ${
                    getSelectedTitle(props.pageId) === props.title.toLowerCase()
                        ? 'active-menu'
                        : ''
                }`}
                onClick={onClickButton}
                href="#"
            >
                {props.title}
            </a>
            <div
                className="dropdown-content"
                id={`dropdown-container-${props.title}`}
            >
                {props.menuItems.map((item, index) => (
                    <div
                        key={item + index}
                        className={`${
                            props.pageId === generatePageId(props.title, item)
                                ? 'active-menu-item'
                                : ''
                        }`}
                    >
                        <a onClick={() => onClickHandeler(item)}>{item}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownComponent;
