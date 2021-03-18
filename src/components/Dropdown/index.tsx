import React from 'react';

const DropdownComponent = (props: {
    title: string;
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
        const page = props.onClickMenu(
            `${props.title.toLowerCase()}-${item
                .split(' ')
                .join('-')
                .toLowerCase()}`,
        );

        onClickButton();
    };

    return (
        <div className="dropdown">
            <a className="dropbtn" onClick={onClickButton} href="#">
                {props.title}
            </a>
            <div
                className="dropdown-content"
                id={`dropdown-container-${props.title}`}
            >
                {props.menuItems.map((item, index) => (
                    <div key={item + index}>
                        <a onClick={() => onClickHandeler(item)}>{item}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DropdownComponent;
