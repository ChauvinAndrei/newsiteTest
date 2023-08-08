import Page from "../../../Page/Page";

const Home = ( { isActive }) => {

    return (
        <Page>
           <h2 className={`menu--title${isActive ? ' active': ''}`}>Home</h2>
        </Page>
    )
}

export default Home;