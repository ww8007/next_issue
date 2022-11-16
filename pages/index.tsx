import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import DataList from '../src/components/DataList';
import Loading from '../src/components/Loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
	const queryClientRef = useRef<QueryClient>();
	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient({
			defaultOptions: {
				queries: {
					retry: false,
					suspense: true,
					useErrorBoundary: true,
					cacheTime: 1000 * 60 * 5,
					staleTime: 1000 * 60 * 3
				}
			}
		});
	}
	return (
		<QueryClientProvider client={queryClientRef.current}>
			<QueryErrorResetBoundary>
				{({ reset }) => (
					<ErrorBoundary
						onReset={reset}
						fallbackRender={({ resetErrorBoundary }) => (
							<div>
								There was an error!
								<button onClick={() => resetErrorBoundary()}>Try again</button>
							</div>
						)}
					>
						<Suspense fallback={<Loading />}>
							<DataList />
						</Suspense>
					</ErrorBoundary>
				)}
			</QueryErrorResetBoundary>
		</QueryClientProvider>
	);
}
