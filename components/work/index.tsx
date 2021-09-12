import React from 'react';
import { work as TypePortofolio } from '~/interface/profile';
import { item as TypeFilter } from '~/interface/filter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
interface Props {
  works: TypePortofolio[];
  filters: TypeFilter[];
}
interface State {
  works: TypePortofolio[];
  filters: TypeFilter[];
  selectedFilter: number;
  loadingFilter: boolean;
}
export default class Work extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      works: props.works,
      filters: props.filters,
      selectedFilter: 0,
      loadingFilter: false
    }

    this.classActive = this.classActive.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  classActive(n: number) {
    const source = this.state;
    if (source.selectedFilter === n) return 'text-primary border-b';
    return '';
  }

  async handleFilter(n: number) {
    this.setState(() => ({
      loadingFilter: true
    }));

    const source = [...this.props.works];
    const filtered = [...source].filter((x: any) => {
      const types = [...x.type_id].find((y: number) => n === y);
      if (!!types) return x;
    });

    this.setState(() => ({
      selectedFilter: n,
      works: n ? filtered : source,
      loadingFilter: false
    }));
  }

  render() {
    const data: any = {...this.state};
    return(
      <div>
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/4">
              <div className="main-title">
                <h1 className="font-bold text-main">
                  Latest Works
                </h1>
                <p>
                  When I have free time, I learn new things or make something. for example, learning React.js or expanding my knowledge of Vue.js and implementing it.  This is not a project or what I have done in a company
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="lg:w-3/4 w-full">
              <div className="works-filter rounded-md mx-4">
                <ul className="filter list mb-20 py-4 text-center relative">
                  {
                    data.filters.map((item: any) => {
                      return(
                        <li
                          key={item.id}
                          className={`list-item cursor-pointer my-1 sm:my-0 capitalize ${this.classActive(item.id)}`}
                          onClick={() => { this.handleFilter(item.id) }}>
                          { item.name }
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </div>
          </div>

          <TransitionGroup
            className="flex flex-wrap justify-center -mx-2">
            {
              data.works.map((work: any) => {
                return(
                <CSSTransition
                  key={work.id}
                  timeout={500}
                  classNames="scale">
                  <div className="xl:w-1/3 lg:w-2/4 w-full px-2 py-1.5">
                    <div className="work-item overflow-y-hidden relative rounded-md border lg:h-64 h-96 p-2">
                      <img
                        src={`/img/${work.img}`}
                        className="rounded-md h-full lg:h-auto w-full"
                      />
                      <div className="
                        work-overlay
                        overflow-hidden
                        absolute left-0 right-0
                        bottom-0 rounded-md flex
                        justify-center items-center
                        bg-opacity-10 cursor-pointer
                      ">
                        <div className="flex-1 text-center">
                          <div className="font-bold uppercase text-white"> {work.name} </div>
                          <div className="my-4">
                            <a
                              href={work.url}
                              target="_blank"
                              className="
                              text-sm rounded-full
                              bg-primary text-white py-2 px-4
                              flex-inline jutify-center
                              items-center">
                              <img
                                src="/img/github-two.svg"
                                width="16"
                                className="inline mr-2"
                              />
                              github
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
                );
              })
            }
          </TransitionGroup>
        </div>
      </div>
    );
  }
};
