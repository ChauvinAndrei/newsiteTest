import Slider from "../../Slider/Slider";
import { WidgetPopulaire } from "../../Widget/Widget";
import withPageWrapper from "../PageWrapper";

const Home = ( { isActive, positionTitle } ) => {

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
                Home
              </h2>

                <div className="duContenu">
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                    Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                    Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                    Aut inventore neque, natus adipisci distinctio quia delectus, et aliquam quisquam assumenda ad temporibus sit dolorum debitis repellendus ipsam repudiandae dolor, eum quo vitae fugit sequi reprehenderit. Officiis, expedita doloribus.
                    Consectetur commodi eius magni architecto sunt eos eveniet distinctio omnis quae molestias fugiat laboriosam libero ullam, tempora voluptate tenetur voluptatibus sit eum. Maiores unde voluptates velit cumque eius. Dolores, suscipit!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                    Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                    Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                    Aut inventore neque, natus adipisci distinctio quia delectus, et aliquam quisquam assumenda ad temporibus sit dolorum debitis repellendus ipsam repudiandae dolor, eum quo vitae fugit sequi reprehenderit. Officiis, expedita doloribus.
                    Consectetur commodi eius magni architecto sunt eos eveniet distinctio omnis quae molestias fugiat laboriosam libero ullam, tempora voluptate tenetur voluptatibus sit eum. Maiores unde voluptates velit cumque eius. Dolores, suscipit!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                    Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                    Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                    Aut inventore neque, natus adipisci distinctio quia delectus, et aliquam quisquam assumenda ad temporibus sit dolorum debitis repellendus ipsam repudiandae dolor, eum quo vitae fugit sequi reprehenderit. Officiis, expedita doloribus.
                    Consectetur commodi eius magni architecto sunt eos eveniet distinctio omnis quae molestias fugiat laboriosam libero ullam, tempora voluptate tenetur voluptatibus sit eum. Maiores unde voluptates velit cumque eius. Dolores, suscipit!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                    Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                    Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                    Aut inventore neque, natus adipisci distinctio quia delectus, et aliquam quisquam assumenda ad temporibus sit dolorum debitis repellendus ipsam repudiandae dolor, eum quo vitae fugit sequi reprehenderit. Officiis, expedita doloribus.
                    Consectetur commodi eius magni architecto sunt eos eveniet distinctio omnis quae molestias fugiat laboriosam libero ullam, tempora voluptate tenetur voluptatibus sit eum. Maiores unde voluptates velit cumque eius. Dolores, suscipit! test
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                    Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                    Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                    Aut inventore neque, natus adipisci distinctio quia delectus, et aliquam quisquam assumenda ad temporibus sit dolorum debitis repellendus ipsam repudiandae dolor, eum quo vitae fugit sequi reprehenderit. Officiis, expedita doloribus.
                    Consectetur commodi eius magni architecto sunt eos eveniet distinctio omnis quae molestias fugiat laboriosam libero ullam, tempora voluptate tenetur voluptatibus sit eum. Maiores unde voluptates velit cumque eius. Dolores, suscipit!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                    Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                    Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                    Aut inventore neque, natus adipisci distinctio quia delectus, et aliquam quisquam assumenda ad temporibus sit dolorum debitis repellendus ipsam repudiandae dolor, eum quo vitae fugit sequi reprehenderit. Officiis, expedita doloribus.
                    Consectetur commodi eius magni architecto sunt eos eveniet distinctio omnis quae molestias fugiat laboriosam libero ullam, tempora voluptate tenetur voluptatibus sit eum. Maiores unde voluptates velit cumque eius. Dolores, suscipit!

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                    Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                    Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                    Aut inventore neque, natus adipisci distinctio quia delectus, et aliquam quisquam assumenda ad temporibus sit dolorum debitis repellendus ipsam repudiandae dolor, eum quo vitae fugit sequi reprehenderit. Officiis, expedita doloribus.
                    Consectetur commodi eius magni architecto sunt eos eveniet distinctio omnis quae molestias fugiat laboriosam libero ullam, tempora voluptate tenetur voluptatibus sit eum. Maiores unde voluptates velit cumque eius. Dolores, suscipit!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                    Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                    Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                    Aut inventore neque, natus adipisci distinctio quia delectus, et aliquam quisquam assumenda ad temporibus sit dolorum debitis repellendus ipsam repudiandae dolor, eum quo vitae fugit sequi reprehenderit. Officiis, expedita doloribus.
                    Consectetur commodi eius magni architecto sunt eos eveniet distinctio omnis quae molestias fugiat laboriosam libero ullam, tempora voluptate tenetur voluptatibus sit eum. Maiores unde voluptates velit cumque eius. Dolores, suscipit! test
                    </p>
                </div>

            </div>
        </>
    )
}



const WrapperHome = withPageWrapper(Home);

export default WrapperHome;