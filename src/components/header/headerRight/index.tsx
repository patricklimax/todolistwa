import './menuRight.css';
import { IconBookmarkPlus, IconCoffee } from '@tabler/icons-react';
export const MenuRight = () => {
  return (
    <nav className="flex items-center justify-center py-1 font-light">
      <ul className="navRight">
        <li>
          <a href="https://patricklima.vercel.app/" target='_blank'>
            <IconBookmarkPlus stroke={2} size={22} color='#84cc16' />
            <p className='hidden md:inline-block'>Mais</p>
          </a>
        </li>
        <li>
          <a href="https://patricklima.vercel.app/" target='_blank'>
            <IconCoffee stroke={2} size={22} color='#84cc16' />
            <p className='hidden md:inline-block'>Café</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};
