export function CreateCard(props){
    return <div style={styles.card}>
        <h1> {props.name} </h1>
        <div style={styles.about}> {props.about} </div>
        <h2>Interests</h2>
        <ul style={styles.list}>
            {props.interests.map(function(interest){
                return <li style={styles.listItem}>{interest}</li>
            })}
        </ul>
        <br></br>
        <a style={styles.links} href="https://github.com/Nisrayani13" target="_blank">Github</a>
        <a style={styles.links} href="https://www.linkedin.com/feed/" target="_blank">LinkedIn</a>
    </div>
}

const styles={
    card:{
        border:"1px solid",
        borderRadius:"3px",
        padding:"15px",
        margin:"10px",
    },
    about:{
        fontSize:"26px",
    },
    list:{
        textAlign:"left",
        margin:"0px",
        padding:"0px",
        marginBottom:"10px"

    },
    listItem:{
        listStyle:"none",
        fontSize:"18px",
    },
    links:{
        backgroundColor:"blue",
        color:"white",
        padding:"10px",
        marginTop:"10px",
        textDecoration: "none",
        marginRight:"10px",
        borderRadius:"3px"
    }
}