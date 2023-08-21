

// == COMPONENT
import { WidgetPopulaire } from "../../Widget/Widget";
import Slider from "../../Slider/Slider";
import withPageWrapper from "../PageWrapper";
import ActuMain from "./ActuMain/ActuMain";

const Home = ( { isActive, label } ) => {

    return (
        <>
            <section id="sliderHome" className="sliderHome grid-content">
                <Slider />
            </section>

            <aside id="WidgetPopulaire" className="widget-populaire grid-content">
                <WidgetPopulaire />
            </aside>

            <div id="main-content" className="main-content grid-content">

              <h2 className={`menu--title${isActive ? ' active': ''}`} >
              { label }
              </h2>

                <div className="duContenu">
                    <ActuMain />
                </div>

            </div>
        </>
    )
}



const WrapperHome = withPageWrapper(Home);

export default WrapperHome;