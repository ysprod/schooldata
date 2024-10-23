import { role } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { MenuItem } from "./Menu";

type MonMenuProps = {
  menuItems: MenuItem[];
  orientation?: 'horizontal' | 'vertical';
};

export const MonMenu: React.FC<MonMenuProps> = ({ menuItems, orientation='horizontal' }) => {
  const flexDirection = orientation === 'horizontal' ? 'flex-row' : 'flex-col';
  return (
      <div className="mt-4 text-sm">
         <div className={`flex ${flexDirection} gap-2 justify-center`} >
           
            {menuItems.map((item) => {
              if (item.visible.includes(role)) {
                return (
                  <Link
                    href={item.href}
                    key={item.label}
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                  >
                    <Image src={item.icon} alt="" width={20} height={20} />
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                );
              }
            })}
          </div>       
      </div>
    );
  };
