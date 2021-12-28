import React from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = 'Hacker Dormitory';
function App() {
	const [residents, setResidents] = React.useState([]);
	const [error, setError] = React.useState(null);

	const addToResident = (newResident) => {
		setResidents([...residents, newResident]);
	};

	const notifyError = (msg) => {
		setError(msg);
	};

	React.useEffect(() => {
		console.log(residents);
	}, [residents, error]);

	return (
		<div className="App">
			<h8k-navbar header={title}></h8k-navbar>
			<div className="layout-column justify-content-center align-items-center w-50 mx-auto">
				<Search addToResident={addToResident} notifyError={notifyError} />
				{error && <Error msg={error} />}
				<ResidentsList residents={residents} />
			</div>
		</div>
	);
}

export default App;
