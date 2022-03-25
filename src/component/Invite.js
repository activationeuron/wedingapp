import React, { useMemo, useState } from 'react';
import styledComponents from 'styled-components';
import request from '../utils/request';
import { Table } from './Table';

function Invite() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const getDetails = async (data) => {
    const value = Object.values(data);
    console.log(!value[1]);
    if (!value[1]) {
      alert('Name not Found');
      return;
    }
    if (!value[2]) {
      alert('Phone not Found');
      return;
    }

    const insert = {
      name: value[1],
      phone: String(value[2]).replace(/[\(\)\-\s]+/g, ''),
      events: String(value[6]).split('-'),
      limit: 0,
    };

    try {
      const response = await request.post('/event/create', {
        ...insert,
      });
      if (response.data.success) {
        alert('INVITATION SUCCESS');
      }
    } catch (error) {
      console.log(error.message);
      alert('INVITATION FAILED');
    }

    console.log(insert);
  };
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: 'invitations Info',
        // First group columns
        columns: [
          {
            Header: 'Phone',
            accessor: 'Phone',
          },
          {
            Header: 'Name',
            accessor: 'Name',
          },
          {
            Header: 'event',
            accessor: 'Event ',
          },
        ],
      },
    ],
    []
  );

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf('\n')).split(',');
    const csvRows = string.slice(string.indexOf('\n') + 1).split('\n');

    const array = csvRows.map((i) => {
      const values = i.split(',');
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];

        return object;
      }, {});
      console.log(obj);
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));
  const Styles = styledComponents.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input
          type={'file'}
          id={'csvFileInput'}
          accept={'.csv'}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>

      <br />

      <table>
        <thead>
          <tr key={'header'}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => {
                return (
                  <td className='border-2'>
                    <div>{val}</div>
                  </td>
                );
              })}
              <div onClick={(e) => getDetails(item)}>Invite</div>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='border-t-2'>
        <tbody>
          <Styles>
            <Table columns={columns} data={array} />
          </Styles>
        </tbody>
      </div>
    </div>
  );
}

export default Invite;
