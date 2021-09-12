import React from 'react';
import { withRouter, NextRouter, useRouter } from 'next/router';
import Head from 'next/head';
import Skill from '~/components/skill';
import { skill as TypeSkill } from '~/interface/profile';
import { Profiles } from '~/utils/profiles';
interface Props {
  router: NextRouter;
  skills: TypeSkill[];
};

class SkillsPage extends React.Component<Props> {
  static getInitialProps() {
    const skills = Profiles.skills;
    return { skills }
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      route: props.router,
      skills: Profiles.skills
    };
  }

  render() {
    const data: any = this.state
    const route = this.props.router;
    const sourceText = route.pathname.replace('/', '');
    const text = sourceText.charAt(0).toUpperCase() + sourceText.slice(1);
    return (
      <div>
        <Head>
          <title>{text} | React Porto</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Skill skills={data.skills} />
        </main>
      </div>
    );
  }
}

export default withRouter(SkillsPage);
