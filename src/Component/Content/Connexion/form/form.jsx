import './form.scss';

const FormConnexion = () => {
    return (
        <div className='form--wrapper'>
            <form action="" method="get" className="form--login">
                <div className="form--login-user">
                    <label htmlFor="username">Enter your username: </label>
                    <input type="text" name="username" id="username" required />
                </div>
                <div className="form--login-password">
                    <label htmlFor="password">Enter your password: </label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-example">
                    <button type='submit'>
                        Connexion
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormConnexion;