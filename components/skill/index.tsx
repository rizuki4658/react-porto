import React from 'react';
import { skill as TypeSkill } from '~/interface/profile';
interface Props {
  skills: TypeSkill[];
};

class Skill extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    const source: any = [];
    props.skills.map((x: any) => {
      source.push({...x, value: 0})
    })
    this.state = {
      skills: source
    }
    this.delay = this.delay.bind(this);
    this.classPrgressBar = this.classPrgressBar.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  async increase() {
    const source: any = [...this.props.skills];
    const temp: any = {...this.state};
    await source.map(async (item: any, key: number) => {
      await this.delay(200);
      temp.skills[key].value = item.value;
      this.setState(() => ({
        skills: temp.skills
      }));
    })
  }

  delay (time: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, time)
    })
  }

  classPrgressBar(value: number) {
    if (value <= 30) return 'bg-pink-500';
    if (value > 30 && value <= 50) return 'bg-yellow-400';
    if (value > 50 && value <= 70) return 'bg-indigo-500';
    return 'bg-green-400';
  }

  render() {
    const data: any = this.state;
    return(
      <div>
        <div className="container">
          <div className="flex justify-center">
            <div className="lg:w-2/4">
              <div className="main-title">
                <h1 className="font-bold text-main">Skills</h1>
                <p>
                  My experience provides new skills, took the skills I already had to the next level.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start -mx-4 flex-wrap">
            {
              data.skills.map((skill: any, key: number) => {
                return(
                  <div
                    key={key}
                    className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2.5">
                    <div className="flex justify-between items-center">
                      <div className="text-main text-sm font-semibold capitalize">
                        { skill.name }
                      </div>
                      <div className="text-xs text-main">
                        { skill.value }%
                      </div>
                    </div>

                    <div className="progress border">
                      <div
                        style={ {width: `${skill.value}%`}}
                        className={`progress-bar ${this.classPrgressBar(skill.value)}`}
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
