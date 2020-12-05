import Nullstack from 'nullstack';
import Documentation from './Documentation';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import './Application.scss';

class Application extends Nullstack {

  static async start(context) {
    const {project} = context;
    project.name = 'Nullstack';
    project.domain = 'nullstack.app';
    project.color = '#d22365';
  }

  prepare({page}) {
    page.locale = 'en';
  }

  render() {
    return (
      <main>
        <Header />
        <Home route="/" />
        <Documentation route="/documentation" />
        <div route="/examples">examples</div>
        <div route="/components">components</div>
        <Article route="/:slug" />
        <Footer />
      </main>
    )
  }


}

export default Application;