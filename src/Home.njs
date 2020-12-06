import Nullstack from 'nullstack';
import Snippet from './Snippet';
import Cog from 'poisonicon/cog/stroke';
import Refresh from 'poisonicon/refresh/stroke';
import Globe from 'poisonicon/globe/stroke';

class Component extends Nullstack {

  prepare({project, page}) {
    page.title = `${project.name} - Full-stack Javascript Components`;
    page.description = 'Nullstack is a full-stack framework for building progressive web applications';
  }

  renderHero() {
    return (
      <section class="x xx sm-p2x p20y">
        <h1 class="x12 sm-f8 md+f12"> Full-stack Javascript Components </h1>
        <div class="xx x8 m12b" style="background-image: linear-gradient(0deg, #fff 49%, #eee 50%, #fff 51%);"> 
          <p class="bgm1 f6 p2"> for one-dev armies </p>
        </div>
        <div style="letter-spacing: 1.2px; line-height: 120%;">
          <p class="x12 f4"> Nullstack is a full-stack framework for building <strong>progressive web applications</strong>. </p>
          <p class="x12 f4"> It connects a <strong>stateful UI</strong> layer to specialized <strong>microservices</strong> in the same component using <strong>vanilla javascript.</strong> </p>
          <p class="x12 f4 m4t"> Focus on solving your business logic instead of writing glue code. </p>
        </div>
      </section>
    )
  }

  renderFeature({title, key, link}) {
    return (
      <div class="sm-x12 md+x6 p1">
        {!!title && 
          <div class="xsb bgm2 p4">
            <h3 class="ff2 fw3 f4">
              <a href={link} class="ci1">{title}</a>
            </h3>
          </div>
        }
        <Snippet key={key} />
      </div>
    )
  }

  renderDemo() {
    return (
      <section class="x xl sm-p2x">
        <Feature key="Application" />
        <Feature key="TaskList" />
      </section>
    )
  }

  renderAbout() {
    return (
      <section class="x xx sm-p2x sm-p10y md+p20y">
        <h2 class="x12 sm-f8 md+f12 m2b"> Nullstack is your Application </h2>
        <p class="x12 f4"> Nullstack is not another part of your stack, it is your stack </p>
        <p class="x12 f4"> Your application can be exported from back-end to front-end as a component and mounted in another application </p>
      </section>
    )
  }

  renderStep({title, description, link, icon: Icon}) {
    return (
      <div class="md+x4 p1">
        <div class="xx bgm2 p8y p4x">
          <Icon height={40} class="cm3 m4b" />
          <h3 class="x12 f6">
            <a href={link} class="ci1">{title}</a>
          </h3>
          <p class="x12 f4 m4y"> {description} </p>
        </div>
      </div>
    )
  }

  renderCycle() {
    return (
      <section class="x xx sm-p2x md+bcm2y md+p10y">
        <Step 
          icon={Cog}
          title="Server-Side Rendering"
          description="Nullstack prerenders your route in a single request using local functions on the first visit and generates SEO ready HTML"
          link="/server-side-rendering"
        />
        <Step 
          icon={Refresh}
          title="Single Page Application"
          description="Subsequent requests will fetch JSON from an automatically generated API, update the application state, and rerender the page"
          link="/full-stack-lifecycle"
        />
        <Step 
          icon={Globe}
          title="Static Site Generation"
          description="Optionally you can use Nullstack to generate static websites for lightning-fast static applications using the full power of Nullstack"
          link="/static-site-generation"
        />
      </section>
    )
  }

  renderProductivity() {
    return (
      <section class="x xx sm-p2x sm-p10y md+p20y">
        <h2 class="x12 sm-f8 md+f12 m2b"> Productivity is in the Details </h2>
        <p class="x12 f4"> Nullstack features have been extracted from real life projects with convenience and consistency in mind </p>
      </section>
    )
  }

  renderFeatures() {
    return (
      <section class="x xl sm-p2x">
        <Feature 
          title="Stateful Components"
          key="Stateful"
          link="/stateful-components"
        />
        <Feature 
          title="Two-Way Binding"
          key="Binding"
          link="/two-way-bindings"
        />
        <Feature 
          title="Built-in Routes"
          key="Routes"
          link="/routes-and-params"
        />
        <Feature 
          title="Full-stack Lifecycle"
          key="Lifecycle"
          link="/full-stack-lifecycle"
        />
      </section>
    )
  }

  renderWhy() {
    return (
      <section class="bgm2 sm-p2x sm-m10t md+m20t p10y">
        <div class="x xx">
          <h2 class="x12 sm-f8 md+f12"> Why should you use Nullstack? </h2>
          <blockquote class="xl sm-x12 md+x10 bcm2 f4 p4 m4y"> 
            <p class="m3b"> 
              Nullstack was made for small teams or even one-dev armies that have to quickly adapt to scope changes.
            </p>
            <p class="m3b cm3 cl">
              When working as a freelance developer, it's customary to have to switch between a selection of projects on the same day, and to even start projects without the customer being fully aware of what they want.
            </p>
            <p class="m3b"> 
              Common patterns tend to enforce bureaucracy over flexibility. The code becomes so fragmented that overviewing a feature you implemented months ago takes longer than coding the requested update.
            </p>
            <p class="m3b cm3 cl"> 
              With the rise of front-end frameworks and microservices, the server and client worlds get more out of sync in terms of implementation, making componentization and code reusability between projects very tedious.
            </p>
            <p class="m3b">
              Frameworks tend to have mannerisms, making you waste your time whenever you have to change or upgrade technologies.
            </p>
            <p class="m3b cm3 cl">
              Nullstack is inspired by the concept of 'developer happiness' from Ruby and 'batteries included' from Ember.js.
            </p>
            <p class="m3b"> 
              The goal was to make something that could be easily overviewed and reused feature by feature while staying as close to vanilla as possible in order to use the existing ecosystem instead of having a framework version of each package.
            </p>
            <p class="cm3 cl"> 
              Nullstack makes no compromises but doesn't try to impress or enforce. It is made with an aim, and might not be for everyone. It is like a bicycle that removed the training wheels so you can go faster.
            </p>
          </blockquote>
          <p class="x12 f4 fw7 m3b"> Don't be afraid of testing a new ecosystem, because it's not new at all </p>
          <p class="x12 f4"> There is no "Nullstack Way" of doing things, it is just javascript and you can use any isomorphic vanilla package made throughout history </p>
          <a href="/documentation" class="ci1 bci1 cm1h bgi1h m6t p2y p4x"> Read the Documentation </a>
        </div>
      </section>
    )
  }
  
  render() {
    return (
      <div>
        <Hero />
        <Demo />
        <About />
        <Cycle />
        <Productivity />
        <Features />
        <Why />
      </div>
    )
  }

}

export default Component;