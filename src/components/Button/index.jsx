


function Button({children, link}){
    return (
        <>
            <a href={link} className="btn-primary px-14 py-2 rounded-lg shadow-neu font-semibold btn-primary">{children}</a>
        </>
    );
}

export default Button;