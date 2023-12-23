export default function Dot({color}) {
    const style = {
      height: 10,
      width: 10,
      margin: "0px 10px",
      backgroundColor : color,
      borderRadius: "50%",
      display: "inline-block"
    }
  
    return <span style={style}></span>
  }