import React from 'react';
import Link from 'next/link';
import { Options as Menu } from '~/constant/menu';
import { withRouter, NextRouter } from 'next/router';

interface Props {
  router: NextRouter;
}

class Navigation extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      menu: Menu,
      show: false,
      imgMenu: 'application-menu.svg',
      classMenu: '',
      shadowActive: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e: any) {
    let shadow = false;
    const scrolled: number = e.target.scrollingElement.scrollTop;
    if (scrolled >= 56) {
      shadow = true;
    } else {
      shadow = false;
    }
    this.setState({
      shadowActive: shadow
    });
  }

  handleShowMenu() {
    const source:any = this.state;
    let active: boolean = false;
    let img: string = 'application-menu.svg';
    if (!source.show) {
      active = true;
      img = 'close.svg';
    }
    this.setState(() => ({
      show: active,
      imgMenu: img,
      classMenu: active ? 'active' : ''
    }));
  }

  classShadow() {
    const state: any = this.state;
    if (state.shadowActive) return ' shadow-xl';
    return '';
  }

  render() {
    const data: any = this.state;
    const routeActive: any = this.props.router;
    return (
      <header>
        <nav className={`flex items-center${ this.classShadow() }`}>
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
                data.menu.map((item: any) => {
                  let className = 'px-4 nav-item cursor-pointer uppercase text-sm';
                  if (item.url === routeActive.asPath) className += ' text-primary font-bold';

                  return (
                    <Link
                      key={item.id}  
                      href={item.url}>
                      <div
                        className={className}>
                        { item.label }
                      </div>
                    </Link>
                  );
                })
              }
            </div>

            <div className="md:hidden">
              <button onClick={() => { this.handleShowMenu() }}>
                <img src={`/img/${data.imgMenu}`} width="32" />
              </button>
            </div>
          </div>
        </nav>

        <div className={`nav-item-container md:hidden ${data.classMenu}`}>
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
  }
};

export default withRouter(Navigation);
