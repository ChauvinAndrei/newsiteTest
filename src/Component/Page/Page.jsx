import './Page.scss';

const Page = ( { children } ) => {

    return (
        <main className="main--wrapper">
            <div className='main--wrapper-div'>
            {children}
            </div>
        </main>
    )
}

export default Page;