import React from 'react';
import { withRouter, NextRouter } from 'next/router';
import Head from 'next/head';
import About from '~/components/about';
interface Props {
  router: NextRouter;
};

class AboutPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      route: props.router
    }
  }

  render() {
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
          <About />
        </main>
      </div>
    );
  }
}

export default withRouter(AboutPage);
