import React, { Component } from 'react';
import { experience } from '~/interface/profile';
import { CSSTransition } from 'react-transition-group';

interface Props {
  experiences: experience[];
  selected: experience | null;
}

export default class Experience extends Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      experiences: props.experiences,
      selected: props.experiences[0]
    }
    this.handleClick = this.handleClick.bind(this);
    this.delay = this.delay.bind(this);
  }

  async handleClick(n: any) {
    this.setState(() => ({
      selected: null
    }));
    await this.delay(300);
    const source: experience[] = this.props.experiences;
    const itemSelected: any = [...source].find(x => x.id === n);
    this.setState(() => ({
      selected: itemSelected
    }));
  }

  delay (time: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }

  render() {
    const data: any = {...this.state};
    return(
      <div>
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/4">
              <div className="main-title">
                <h1 className="font-bold text-main">Experience</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center px-10 flex-wrap gap-y-4">
            <CSSTransition
              in={!!data.selected}
              timeout={500}
              classNames="scale">
              {
                () => {
                  if (!!data.selected) {
                    return(
                      <div className="px-4 md:w-1/2 rounded-md">
                        <div className="text-4xl mb-2 text-gray-400 capitalize">
                          { data.selected.name }
                        </div>
                        <div className="text-xl mb-8 capitalize font-bold">
                          { data.selected.time }
                        </div>
                        <div className="text-gray-600 italic mb-6">
                          "{ data.selected.jobdesk }"
                        </div>
                        <div>
                          <a
                            href={data.selected.url}
                            target="_blank"
                            className="bg-primary text-white rounded-full px-6 py-2">
                            See Company
                          </a>
                        </div>
                      </div>
                    );
                  }
                  return (<div></div>);
                }
              }
            </CSSTransition>
            
            <div className="px-4 md:w-1/2">
              <div className="bg-white shadow-xl rounded-md border flex justify-center items-center p-6">
                <div
                  className="px-6 flex justify-center items-center -mx-4 mb-4">
                  {
                    data.experiences.map((item: any) => {
                      return(
                        <button
                          key={item.id}
                          className="px-4 cursor-pointer"
                          value={item.id}
                          onClick={() => { this.handleClick(item.id) }}>
                          <img src={`/img/${item.img}`} />
                        </button>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
