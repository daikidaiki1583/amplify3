import React , {FC} from 'react';
import SignIn  from '../organisms/signIn';
import SignUp from '../organisms/signUp';
import './auth.scss';

export type User ={
    username: string,
    password: string,
    email: string
}

const ManageAuth: FC = () => {

    return(
        <div className='page-auth'>
            <div className='auth'>
                <SignIn/>
                <SignUp/>
            </div>
        </div>


    )
}

export default ManageAuth;

