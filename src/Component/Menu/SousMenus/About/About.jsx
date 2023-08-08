import Page from "../../../Page/Page";

const About = ( {isActive} ) => {
  
    return (
        <Page isActive={isActive}>
            <h2 className={`menu--title${isActive ? ' active': ''}`}>About</h2>
        </Page>
    )
}

export default About;