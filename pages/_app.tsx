import 'tailwindcss/tailwind.css';
import '~/styles/index.scss';
import Layout from '~/layouts/default';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from '~/utils/transition/page-fade';

function MyApp({ Component, pageProps, router }: AppProps) {
  const fadeInUp = FadeInUp;
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          variants={fadeInUp}
          initial='initial'
          animate='animate'
          exit='exit'>
          <Component {...pageProps} key={router.route} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
export default MyApp
