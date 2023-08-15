
import { Link } from "react-router-dom";
import useGetWord from "../hook/useGetWord";



function SelectGamePage() {
	const { gameList } = useGetWord()
	return (
		<div>
			{gameList && gameList.map((gameListData) =>
				<Link to={{pathname:`/playGame/${gameListData.title}`}}
					key={gameListData.title}>
					<div>
					{gameListData.title}
					</div>
					<div>
						{ gameListData.description}
					</div>
				</Link>)}
		</div>
	)
}

export default SelectGamePage