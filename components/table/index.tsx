import React from 'react';

interface Props {
  users: object[];
}

interface State {
  users: object[];
  columns: any;
}

class Table extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: props.users,
      columns: []
    };
    this.column = this.column.bind(this);
  }

  componentDidMount() {
    this.column();
  }

  column() {
    const user: any = [...this.props.users].find((item: any, key: number) => key === 0);
    if (!!user) {
      const columns: any = Object.keys(user);
      const result: any[] = [];
      for (let i = 0; i < columns.length; i++) {
        result.push(columns[i])
      }
      this.setState(() => ({
        columns: result
      }))
    }
  }

  render() {
    const data: any = this.state;
    return(
      <table
        className="w-full border-collapse border rounded-lg">
        <thead className="bg-dark">
          <tr>
            {
              data.columns.map((column: string, key: number) => {
                return(
                  <th
                    key={key}
                    className="px-4 text-left text-sm py-2 text-white uppercase">
                    {column}
                  </th>
                );
              })
            }
          </tr>
        </thead>
        <tbody>
          {
            data.users.map((user: any) => {
              return(
                <tr key={user.id}>
                  {
                    data.columns.map((column: string) => {
                      const classColumn = `px-4 py-4 text-main text-sm border-b`
                      if (column === 'address') {
                        return (
                          <td
                            key={`${user.id}-${column}`}
                            className={classColumn}>
                            {`${user[column].street}, ${user[column].suite}, ${user[column].city}, ${user[column].zipcode}`}
                          </td>
                        );
                      } else if (column === 'company') {
                        return (
                          <td
                            key={`${user.id}-${column}`}
                            className={classColumn}>
                            {`${user[column].name}`}
                          </td>
                        );
                      } else {
                        return (
                          <td
                            key={`${user.id}-${column}`}
                            className={classColumn}>
                            {`${user[column]}`}
                          </td>
                        );
                      }
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

export default Table;
