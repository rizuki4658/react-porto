import React from 'react';
import { Props } from '~/interface/default';
import { Filter as Filters } from '~/utils/filter';
import { Profiles } from '~/utils/profiles';
import Hero from '~/components/hero';
import Work from '~/components/work';
import About from '~/components/about';
import Experience from '~/components/experience';

export default class Home extends React.Component<Props> {
  static getInitialProps() {
    const profiles = Profiles;
    const filters = Filters;
    return { profiles, filters }
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      filters: Filters,
      profiles: Profiles
    };
  }

  render() {
    const data: any = this.state;
    return (
      <main>
        <Hero name={data.profiles.name} profession={data.profiles.profession} />
        <Work filters={data.filters} works={data.profiles.works} />
        <About />
        <Experience experiences={data.profiles.experiences} selected={data.profiles.experiences[0]} />
      </main>
    );
  }
}
