import Page from "../../../Page/Page";

const Wallet = ( { isActive } ) => {

    return (
        <Page>
            <h2 className={`menu--title${isActive ? ' active': ''}`}>Wallet</h2>
        </Page>
    )
}

export default Wallet;