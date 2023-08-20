import withPageWrapper from "../PageWrapper";

const Account = ( { isActive, positionTitle } ) => {

    return (
            <div id="main-content" className="main-content grid-content">

                    <h2 
                    className={`menu--title${isActive ? ' active': ''}`}
                    style={positionTitle}
                    >
                        Account
                    </h2>

                    <div className="duContenu">
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laboriosam voluptate doloribus nesciunt necessitatibus aut quas nulla harum saepe, amet sint beatae et mollitia sapiente deleniti. Maxime provident sit id!
                        Quos deserunt quo officiis dicta sunt iure recusandae, beatae omnis ex eaque perspiciatis eius facere iusto delectus accusantium modi veniam unde nam. Laboriosam reiciendis vitae aspernatur hic, cum neque voluptatibus?
                        Eaque tenetur, ex fuga exercitationem facilis earum ut et libero doloribus reprehenderit sint atque quos, rerum est placeat repellendus ipsum. Sequi odio molestias quis ipsa nemo veniam quasi dignissimos cumque?
                        </p>
                    </div>
            </div>
    )
}

const WrapperAccount = withPageWrapper(Account);
export default WrapperAccount;