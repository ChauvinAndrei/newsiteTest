import Page from "../../../Page/Page";

const Account = ( { isActive } ) => {

    return (
        <Page>
            <h2 className={`menu--title${isActive ? ' active': ''}`}>Account</h2>
        </Page>
    )
}

export default Account;