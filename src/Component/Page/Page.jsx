import './Page.scss';

const Page = ( { children } ) => {

    return (
        <main className="main--wrapper">
            {children}
        </main>
    )
}

export default Page;