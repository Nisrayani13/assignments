export function BusinessCard(props){
    return <>
        <div style={styles.card}>
        <h1 style={styles.name}>{props.name}</h1>
        <p style={styles.about}>{props.about}</p>
        <h3 style={styles.interestHeading}>{props.interestHeading}</h3>
        <ul style={styles.interestsList}>
            {props.interests.map(function(interest){
                return <li style={styles.interest}>{interest}</li>
            })}
        </ul>
        <div style={styles.socialLinks}>
            <a href={props.linkedIn} style={styles.linkBox}>LinkedIn</a>
            <a href={props.twitter} style={styles.linkBox}>Twitter</a>
        </div>
    </div>
    </>
}
const styles={
  card:{
    border:"1px solid #ddd",
    borderRadius:"5px",
    boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)',
    padding:"18px",
  },

  socialLinks:{
    display:"flex",
    margin:"5px",
  },
  linkBox:{
    textDecoration:"none",
    margin:"5px",
    backgroundColor:"#007BFF",
    color:"#fff",
    padding:"10px",
    borderRadius:"5px",
    fontSize:"16px"
  }
}