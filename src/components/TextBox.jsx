function TextBox({ position, title, content }) {
    return (
        <div className={`textbox textbox-${position}`}>
            <div className="textbox-title">{title}</div>
            <div className="textbox-content">{content}</div>
        </div>
    );
}

window.TextBox = TextBox;
