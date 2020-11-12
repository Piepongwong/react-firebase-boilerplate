import "./Notification.scss";
export default function Notification(props) {
    return (
        <div className="notification">
            <h1>{props.children}</h1>
        </div>
    )
}
