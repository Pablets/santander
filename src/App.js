import React from 'react';
import './App.css';
import ResidentsList from './Components/molecules/ResidentsList';
import Search from './Components/molecules/Search';
import Error from './Components/atoms/Error';
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
