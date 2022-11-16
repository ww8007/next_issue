import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getChannelListAPI = async () => {
	const { data } = await axios.get('/todos/1');
	return data;
};
