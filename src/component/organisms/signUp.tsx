import React, { FC ,useState} from 'react';
import { Auth } from 'aws-amplify';
import { useForm } from 'react-hook-form';
import { Loader } from 'semantic-ui-react';

// import { useHistory } from 'react-router-dom'; 

import ConfirmSignUp from './confirmSignUp';

export type User ={
    name: string,
    password: string,
    email: string,
}

const SignUp: FC = () => {
    const { register,handleSubmit,reset,errors,getValues} = useForm();
    const [isSignedUp,setIsSignedUp] = useState<boolean>(false);
    const [userName,setUserName] = useState<string>('');

    // const history = useHistory();

    const signUp = async (name: string,passWord: string,email: string) => {
        try {
            const {user} = await Auth.signUp({
                username:name,
                password:passWord,
                attributes: {
                    email: email
                }
            });
            console.log(user)
            setIsSignedUp(true);

        } catch (error) {
            console.log('error',error);
        }
    }

    const signUpUser = (data: User) => {
        const {name,password,email} = data;
        signUp(name,password,email);
        setUserName(name);
        // setDisabled(state => !state);
        reset();
    }

    return(
        <>
            <div className='inputform'>
                <h1>ユーザー登録</h1>
                <form className='signup inner' onSubmit={handleSubmit(signUpUser)}> 

                        <input type="text" name='name' ref={register({required:true})} placeholder='ユーザー名' disabled={isSignedUp}/>
                        {errors.name && <span className='error'>ユーザー名を入力してください。</span>}
                
                        <input type="email" name='email' ref={register({required:true})}　placeholder='メールアドレス' disabled={isSignedUp}/>
                        {errors.email && <span className='error'>パスワードを入力してください。</span>}
                
                        <input type="password" name='password' ref={register({required:true})} placeholder='パスワード' disabled={isSignedUp}/>
                        <input type="password" 
                               name='confirmpassword' 
                               ref={
                                register({
                                    required:true,
                                    validate:value => value === getValues("password")
                                })} 
                                placeholder='パスワード(確認用)'
                                disabled={isSignedUp}
                        />
                        {errors.confirmpassword && <span className='error'>パスワードが一致しません。</span>}
                
                        <button className={`button confirm
                                            ${isSignedUp?
                                                'success':
                                                ''}
                                           `} 
                        type='submit' disabled={isSignedUp}>{
                            isSignedUp?
                            '認証コードを入力してください':
                            '登録'
                        }</button>
                </form>
                {
                isSignedUp ?
                <ConfirmSignUp username={userName}/>            
                : <></>
                }
            </div>


        </>
    )
}

export default SignUp;