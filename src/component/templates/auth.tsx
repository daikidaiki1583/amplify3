import React , {FC} from 'react';
import { Auth } from 'aws-amplify';
import { useForm } from 'react-hook-form';

export type User ={
    username: string,
    password: string,
    email: string
}

const ManageAuth: FC = () => {
    const { register,handleSubmit,errors} = useForm();

    const signIn = async (userName: string,password: string,email: string) => {
        try {
            const {user} = await Auth.signUp({
                username:userName,
                password:password,
                attributes: {
                    email: email
                }
            });
            console.log(user)
        } catch (error) {
            console.log('error',error)
        }
    }

    const onSubmit = (data: User) => {
        const { username,password,email} = data;
        signIn(username,password,email);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name='username' ref={register({required:true})}/>
            <input type="password" name='password' ref={register({required:true})}/>
            <input type="email" name='email' ref={register({required:true})}/>
            <input type='submit'/>
        </form>
    )
}

export default ManageAuth;