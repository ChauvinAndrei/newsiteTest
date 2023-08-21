import withPageWrapper from "../PageWrapper";

const Actualités = ( { isActive, positionTitle, label } ) => {

    return (
            <div id="main-content" className="main-content grid-content">

                <h2 
                className={`menu--title${isActive ? ' active': ''}`}
                style={positionTitle}
                >
                   { label }
                </h2>

                <div className="duContenu">
                    <p>
                    Wallet Content, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                    Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                    Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                    Aut inventore neque, natus adipisci distinctio quia delectus, et aliquam quisquam assumenda ad temporibus sit dolorum debitis repellendus ipsam repudiandae dolor, eum quo vitae fugit sequi reprehenderit. Officiis, expedita doloribus.
                    Consectetur commodi eius magni architecto sunt eos eveniet distinctio omnis quae molestias fugiat laboriosam libero ullam, tempora voluptate tenetur voluptatibus sit eum. Maiores unde voluptates velit cumque eius. Dolores, suscipit!
                    </p>
                </div>
                
            </div>
    )
}

const WrapperWallet = withPageWrapper(Actualités);

export default WrapperWallet;