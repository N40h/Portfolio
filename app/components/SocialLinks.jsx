import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinkItem from './SocialLinkItem';

export default function SocialLinks() {
	return (
		<div className="flex items-center gap-5 p-2.5">
			<SocialLinkItem href="https://github.com/N40h" title="GitHub">
				<FontAwesomeIcon
					icon={faGithub}
					className="flex size-6 rounded-full border border-solid border-darken fill-darken p-2.5 transition-all delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:bg-sunny"
				/>
			</SocialLinkItem>
			<SocialLinkItem
				href="https://www.linkedin.com/in/marc-villevieille/"
				title="LinkedIn"
			>
				<FontAwesomeIcon
					icon={faLinkedinIn}
					className="flex size-6 rounded-full border border-solid border-darken fill-darken p-2.5 transition-all delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:bg-sunny"
				/>
			</SocialLinkItem>
		</div>
	);
}
