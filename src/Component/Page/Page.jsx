import './Page.scss';

// == Structure de base a la creation d'une route 
const Page = ( { children, isActive } ) => {

    return (
        <main className={`main--wrapper ${isActive ? 'active' : ''}`}>
            <div className='main--wrapper--div'>
                <div className="main--wrapper--div-inner">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Page;