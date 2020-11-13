import React, {useEffect, useState} from 'react'
import styles from "./RegisteredUserProfile.module.scss";
import pen from "../../assets/img/pen.svg";
import BoyChick from "../../assets/img/AddChick/BoyChick.svg"



export const RegisteredUserProfile = (props) => {
    const [profileUser, setProfileUser] = useState("");
    const {user} = props;
    console.log(profileUser.displayName);
    useEffect(() => {
        setProfileUser(user);
    }, []);



return (
    <div>
        <section className={styles.formContainer}>
            <h2>Profile</h2>
                <div>
                    <h3>{profileUser.displayName}</h3>
                    <img src={pen} alt=""/>
                </div>
                <div>
                    <h3>{profileUser.email}</h3>
                    <img src={pen} alt=""/>
                </div>   
                
        </section>
  
    </div>
);
}

export default RegisteredUserProfile;