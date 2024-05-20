import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinkItem from './SocialLinkItem';

export default function SocialLinks() {
	return (
		<div className="flex items-center gap-5 p-2.5">
			<SocialLinkItem href="https://github.com/N40h" title="GitHub">
				<FontAwesomeIcon
					icon={faGithub}
					className="flex size-6 rounded-50% border border-solid border-mauve-text fill-mauve-text p-2.5 lg:transition-all lg:delay-100 lg:duration-300 lg:ease-in-out lg:hover:bg-cherry-blossom"
				/>
			</SocialLinkItem>
			<SocialLinkItem
				href="https://www.linkedin.com/in/marc-villevieille/"
				title="LinkedIn"
			>
				<FontAwesomeIcon
					icon={faLinkedinIn}
					className="flex size-6 rounded-50% border border-solid border-mauve-text fill-mauve-text p-2.5 lg:transition-all lg:delay-100 lg:duration-300 lg:ease-in-out lg:hover:bg-cherry-blossom"
				/>
			</SocialLinkItem>
		</div>
	);
}
