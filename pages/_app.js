import '../assets/styles/main.scss';
import { Layout } from '../cmps/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
