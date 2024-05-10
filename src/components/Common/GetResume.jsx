import { FaCloudDownloadAlt } from "react-icons/fa";

const GetResume = () => {
    return (
        <a
            download="Mishkat Resume"
            href="https://drive.google.com/file/d/1Jkce3SipOUtyooiKTPO-FmpDppJJLqKq/view?pli=1"
            target="_blank" rel="noopener noreferrer"
            className="btn bg-red duration-300 text-white bg-orange-500 mr-8 hover:bg-white hover:text-black group border-red hover:border-red">
            Get Resume
            <FaCloudDownloadAlt className='ml-2 text-2xl group-hover:text-red duration-300' />
        </a>
    );
};

export default GetResume;