import React from 'react'
import "./login.css"

export default function login() {
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
                        ログインはこちらから
                    </div>
                    <input type="text" className='loginInput' placeholder='Eメール'/>
                    <input type="text" className='loginInput' placeholder='パスワード'/>
                    <button className='loginButton'>ログイン</button>
                    <span className="loginForgot">パスワードを忘れた方へ</span>
                    <button className="loginRegisterButton">アカウント作成</button>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
