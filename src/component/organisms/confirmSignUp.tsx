import React,{ FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router';

type Props = {
    username: string
}

const ConfirmSignUp: FC<Props> = (props) => {
    const {username}= props;

    const {register,handleSubmit,errors,reset} = useForm();
    const [isError,setIsError] = useState(false);
    const [isConfirmed,setIsComfirmed] = useState<boolean>(false);

    const confirmSignUp = async (username: string,code: string) => {
        try{
            const confirm = await Auth.confirmSignUp(username,code);
            if (confirm === 'SUCCESS'){
                setIsComfirmed(state => !state);
            }
        } catch (error) {
            const {code} = error;
            if (code === 'CodeMismatchException') {
                setIsError(true);
                return
            }
        }
    }
    
    const confirmUser = async (data: {code: string}) => {
        reset();
        const {code} = data;
        confirmSignUp(username,code);
    }

    return(
        <div className='confirm inner'>
            <form onSubmit={handleSubmit(confirmUser)}>
                <h1>{`${username}さん`}</h1>
                <p>{`登録したメールアドレスに届いた認証コードを入力し、ユーザー登録を完了してください。`}</p>
                <input type="text" name='code' ref={register} placeholder='認証コード' disabled={isConfirmed}/>
                {isError?<div className='error'>認証コードが合致しません。</div>:<></>}
                {errors.code && <span className='error'>認証コードを入力してください。</span>}
                <button className={`button confirm
                    ${
                        isConfirmed?
                        'success':
                        ''
                    }
                `} type='submit' disabled={isConfirmed}>
                    {
                        isConfirmed?
                        '認証成功':
                        '認証'
                    }
                    </button>
            </form>
        </div>
    )
} 

export default ConfirmSignUp;
// 認証コード成功した場合の処理　成功したとユーザーに認識させる
// サインアウト処理書く
// ログイン後に右上の「ログイン」をログアウトにする。
