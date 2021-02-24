import styles from "../styles/components/Profile.module.css"

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEZS1dJeGPvRA/profile-displayphoto-shrink_200_200/0/1540300287396?e=1619654400&v=beta&t=7akkWncPa6bYxxZH_5TeWke4pLYI6_8gAReVccN3Ig8" alt="Diego Veiga" />
            <div>
                <strong>Diego Veiga</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}