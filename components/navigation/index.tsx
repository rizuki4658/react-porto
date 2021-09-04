import Link from 'next/link';
import { NextPage } from 'next';
import { Options as Menu } from '~/constant/menu';

const Navigation: NextPage = (props) => {
  return (
    <header>
      <nav className="flex items-center">
        <div className="flex-1 flex justify-between items-center">
          <div>
            <Link href="/">
              <img
                src="/vercel.svg"
                width="100"
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="md:flex hidden justify-end items-center -mx-4">
            {
              Menu.map((item: any) => {
                return (
                  <Link
                    key={item.id}  
                    href={item.url}>
                    <div className="px-4 nav-item cursor-pointer uppercase text-sm">
                      { item.label }
                    </div>
                  </Link>
                );
              })
            }
          </div>

          <div className="md:hidden">
            <button>Show</button>
          </div>
        </div>
      </nav>

      <div className="nav-item-container md:hidden">
        {
          Menu.map((item: any) => {
            return (
              <Link
                key={item.id}  
                href={item.url}>
                <div className="px-4 nav-item cursor-pointer uppercase text-sm">
                  { item.label }
                </div>
              </Link>
            );
          })
        }
      </div>
    </header>
  );
};

export default Navigation;