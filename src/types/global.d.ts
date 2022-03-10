/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

interface SVGProps {
	className?: string;
}

interface ArrowButtonProps {
	clickHandler: () => void;
	ArrowSVG: (props: SVGProps) => JSX.Element;
}

interface ReviewProps {
	id: number;
	name: string;
	job: string;
	image: string;
	text: string;
}
