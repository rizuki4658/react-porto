import React from 'react';
import axios, { CancelTokenSource } from 'axios';
import { User } from '~/interface/users';
import { CSSTransition } from 'react-transition-group';
import Table from '~/components/table';
import Head from 'next/head';
import LoaderSpinner from '~/components/loader/spinner';
interface Props {
  users: User[];
}

const defaultPosts: Props[] = [];

const ApiPage = () => {
  const [users, setUsers]: [Props[], (users: Props[]) => void] = React.useState(defaultPosts);

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ''
  );

  const cancelToken = axios.CancelToken;
  const [cancelTokenSource, setCancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source());

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('User cancelled operation');
    }
  };

  React.useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        cancelToken: cancelTokenSource.token,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response: any) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? 'Request Cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource Not Found'
          : 'An unexpected error has occurred';

        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <main>
        <Head>
          <title>API | React Porto</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="container overscroll-x-hidden">
          <div className="flex justify-center">
            <div className="lg:w-2/4">
              <div className="main-title">
                <h1 className="font-bold text-main">Example</h1>
              </div>
            </div>
          </div>

          <CSSTransition
            in={users.length ? true : false}
            timeout={500}
            classNames="fade">
            {
              () => {
                if (!!users && !!users.length && !loading) {
                  return(<Table users={users} />);
                }
                return (
                  <div className="h-80 bg-gray-700 bg-opacity-10 text-gray-400 rounded-lg flex justify-center items-center">
                    <LoaderSpinner />
                  </div>
                );
              }
            }
          </CSSTransition>
        </div>
      </main>
    </div>
  );
}

export default ApiPage;
