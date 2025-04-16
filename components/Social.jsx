import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/siddhx579' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/siddhant579/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/siddhx_21/' },
    { icon: <FaXTwitter />, path: 'https://x.com/siddhx_21' },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">{item.icon}</Link>
            })}
        </div>
    );
};

export default Social;