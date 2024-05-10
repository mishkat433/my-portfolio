
const ScrollToButton = ({ href, btnName }) => {
    return (
        <a href={href} className="btn bg-red duration-300 text-white bg-orange-500 mr-8 hover:bg-white hover:text-black border-red hover:border-red">{btnName} </a>
    );
};

export default ScrollToButton;