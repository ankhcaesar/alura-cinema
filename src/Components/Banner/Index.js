import Styles from "./Banner.module.css"

function Banner({ img, color }) {
    return (
        <div className={Styles.capa} style={{ backgroundImage: `url("/img/banner-${img}.png")` }}>
            <div className={Styles.gradient} style={{ background: `${color}` }}></div>

        </div>
    )
}
export default Banner