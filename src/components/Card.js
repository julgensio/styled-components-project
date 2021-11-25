import { StyledCard } from './styles/Card.styled';

export default function Card({ item: { id, title, body, image } }) {
	// layout is used to reverse the Card layout (for arrays, objects)
	return (
		<StyledCard layout={id % 2 === 0 && 'row-reverse'}>
			<div>
				<img className='Card' src={`./images/${image}`} alt='' />
			</div>
			<div>
				<h2> {title}</h2>
				<p>{body}</p>
			</div>
		</StyledCard>
	);
}
