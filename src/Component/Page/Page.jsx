import './Page.scss';

const Page = ( { children } ) => {

    return (
        <main className="main--wrapper">
            <div className='main--wrapper-div'>
                <div className="main--wrapper-inner">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Page;