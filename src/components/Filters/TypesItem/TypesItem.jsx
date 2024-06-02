import { icons } from 'assets/icons';

import scss from './TypesItem.module.scss';

const TypesItem = ({ icon, title, backendName, register }) => {
    return (
        <div className={scss.item_radio}>
            <input
                {...register('type')}
                type="radio"
                id={icon}
                value={backendName}
                className={`${scss.visually_hidden} ${scss.item_input}`}
            />
            <label htmlFor={icon} className={scss.item_label}>
                <svg className={scss.item_icon}>
                    <use href={`${icons}#icon-${icon}`}></use>
                </svg>
                {title}
            </label>
        </div>
    );
};

export default TypesItem;
