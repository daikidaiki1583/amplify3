import React, { FC } from 'react';
import { Auth } from 'aws-amplify';
import { useForm } from 'react-hook-form';

const SignIn: FC = () => {
    const { register,handleSubmit,errors} = useForm();

    const signIn = async (email: string,password: string) => {
        try{
            const user = await Auth.signIn(email,password)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    const signInUser = (data:{signInUserName: string,signInPassword: string}) => {
        const {signInUserName,signInPassword} = data;
        console.log(signInUserName,signInPassword)
        signIn(signInUserName,signInPassword)
    }

    return(
        <div className='inputform'>
        <h1>ログイン</h1>
        <form className='signin inner' onSubmit={handleSubmit(signInUser)}>
            <input type="text" name='signInUserName' ref={register({required:true})} placeholder='ユーザー名'/>
            {errors.signInUserName && <span className='error'>ユーザー名を入力してください。</span>}
            <input type="password" name='signInPassword' ref={register({required:true})} placeholder='パスワード'/>
            {errors.signInPassword && <span className='error'>パスワードを入力してください。</span>}
            <button className='button signin' type='submit'>ログイン</button>
        </form>
        </div>

    )
}

export default SignIn;