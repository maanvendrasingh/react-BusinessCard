import React from 'react'
import facebook from "../icons/Facebook.png"
import github from "../icons/GitHub.png"
import twitter from "../icons/Twitter.png"
import insta from "../icons/Instagram.png"

export default function Footer(){
    return (
        <div className="footer">
            <a href='https://www.facebook.com' target="_blank" rel="noreferrer"><img src={facebook} alt="facebook-logo"/></a>
            <a href='https://twitter.com/maansinghh' target="_blank" rel="noreferrer"><img src={twitter} alt="twitter-logo" /></a>
            <a href='https://www.instagram.com/_m.a.a.n_/' target="_blank" rel="noreferrer"><img src={insta} alt="instagram-logo"/></a>
            <a href='https://github.com/maanvendrasingh' target="_blank" rel="noreferrer"><img src={github} alt="github-logo" /></a>
        </div>
    )
}