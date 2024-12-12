import { Link } from '@inertiajs/react';
import React from 'react';

type SidebarItemProps = {
  icon: React.ReactNode; // The icon element passed as a prop
  label: string; // The label text for the sidebar item
  href?: string; // Optional href for navigation
};

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href = "#" }) => {
  return (
    <li>
      <Link
        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        href={href}
      >
        <span className="icon">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;