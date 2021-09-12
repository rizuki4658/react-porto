import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import Head from 'next/head';
import Work from '~/components/work';
import { work as TypePortofolio } from '~/interface/profile';
import { item as TypeFilter } from '~/interface/filter';
import { Profiles } from '~/utils/profiles';
import { Filter as Filters } from '~/utils/filter';

interface Props {
  router: NextRouter;
  works: TypePortofolio[];
  filters: TypeFilter[];
};

class PortofolioPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      route: props.router,
      works: Profiles.works,
      filters: Filters,
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
          <Work
            filters={data.filters}
            works={data.works}
          />
        </main>
      </div>
    );
  }
}

export default withRouter(PortofolioPage);
