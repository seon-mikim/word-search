import { Outlet } from 'react-router'
import Header from '../Header'
import * as S from './style' 
function Layout() {
	return (
		<S.Layout>
			<Header title='Word Search'/>
			<Outlet/>
		</S.Layout>
	)
}

export default Layout