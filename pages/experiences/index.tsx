import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import Head from 'next/head';
import Experience from '~/components/experience';
import { experience as TypeExperience} from '~/interface/profile';
import { Profiles } from '~/utils/profiles';

interface Props {
  router: NextRouter;
  experiences: TypeExperience[];
};

class ExperiencePage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      route: props.router,
      experiences: Profiles.experiences
    }
  }

  render() {
    const route = this.props.router;
    const sourceText = route.pathname.replace('/', '');
    const text = sourceText.charAt(0).toUpperCase() + sourceText.slice(1);
    const data: any = this.state;
    return (
      <div>
        <Head>
          <title>{text} | React Porto</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Experience
            experiences={data.experiences}
            selected={data.experiences[0]}
          />
        </main>
      </div>
    );
  }
}

export default withRouter(ExperiencePage);
