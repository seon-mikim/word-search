import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { onValue, ref } from "firebase/database";

function useGetWord() {
	const [gameList, setGameList] = useState(null)
	const wordRef = ref(database, 'word/')
	const wordData = () => {
		onValue(wordRef, (snapshot) => {
			const data = snapshot.val();
			const wordItems = Object.values(data)
			setGameList(wordItems)
		})
	}
	
	useEffect(() => {
		wordData()
	}, [])
  return { gameList }

	

}

export default useGetWord