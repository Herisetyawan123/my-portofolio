


function Button({children, link}){
    return (
        <>
            <a href={link} className="px-20 py-3 rounded-lg shadow-neu font-semibold">{children}</a>
        </>
    );
}

export default Button;