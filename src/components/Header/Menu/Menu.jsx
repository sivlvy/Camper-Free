import { NavLink } from 'react-router-dom';
import scss from './Menu.module.scss';

const Menu = ({ items }) => {
    return (
        <ul className={scss.menu_list}>
            {items.map(({ item, path }) => (
                <li key={item}>
                    <NavLink to={path} className={scss.link}>
                        {item}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
