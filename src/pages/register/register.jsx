import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <>
     <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Real SNS</h3>
                <span className="loginDesc">
                   SNSサイトがどうなっているか、実際に作成して学習
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <div className="loginMsg">
                        新規登録はこちら
                    </div>
                    <input type="text" className='loginInput' placeholder='ユーザー名'/>
                    <input type="text" className='loginInput' placeholder='Eメール'/>
                    <input type="text" className='loginInput' placeholder='パスワード'/>
                    <input type="text" className='loginInput' placeholder='確認用パスワード'/>
                    <button className='loginButton'>サインアップ</button>
                    <button className="loginRegisterButton">ログイン</button>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
