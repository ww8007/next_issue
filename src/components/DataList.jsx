import React from 'react';
import useGetList from '../hooks/useGetList';
import Loading from './Loading';
function DataList() {
	const { data, isLoading } = useGetList();
	console.log(data);
	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div>userId : {data.userId}</div>
					<div>id : {data.id}</div>
					<div>title : {data.title}</div>
				</>
			)}
		</>
	);
}

export default DataList;
