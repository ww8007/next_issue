import { useQuery } from '@tanstack/react-query';
import { getChannelListAPI } from '../../lib/apis/dummy';

const useGetList = () => {
	return useQuery(['channelList'], async () => getChannelListAPI(), {
		refetchOnWindowFocus: true,
		retry: 0,
		suspense: true,
		useErrorBoundary: true
	});
};

export default useGetList;
