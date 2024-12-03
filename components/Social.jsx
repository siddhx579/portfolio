import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/siddhx579'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/siddhant579/'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/siddhx_211/'},
];

const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">{item.icon}</Link>
            })}
        </div>
    );
};

export default Social;