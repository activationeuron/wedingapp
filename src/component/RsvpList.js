import React, { useEffect, useMemo, useState } from 'react';
import request from '../utils/request';
import { useTable } from 'react-table';
import styled from 'styled-components';
import { Table } from './Table';

function RsvpList() {
  const [rsvpList, setRsvpList] = useState([]);

  const getRsvp = async () => {
    const response = await request.get('/event/rsvp');
    console.log(response.data.data);
    if (response.data.success) {
      setRsvpList(response.data.data);
    }
  };
  useEffect(() => {
    getRsvp();
  }, []);

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: 'Contact Info',
        // First group columns
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Phone Number',
            accessor: 'phone',
          },
        ],
      },
      // {
      //   // Second group - Details
      //   Header: 'Guests  Count',
      //   // Second group columns
      //   columns: [
      //     {
      //       Header: 'Adults',
      //       accessor: 'adults',
      //     },
      //     {
      //       Header: 'Kids',
      //       accessor: 'kids',
      //     },
      //   ],
      // },
      {
        // Second group - Details
        Header: 'event',
        // Second group columns
        columns: [
          {
            Header: 'Events',

            accessor: 'events',
          },
        ],
      },
      {
        // Second group - Details
        Header: 'Plus One',
        // Second group columns
        columns: [
          {
            accessor: 'plusName',
          },
        ],
      },
    ],
    []
  );

  const Styles = styled.div`
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
    <div className='flex justify-center'>
      {rsvpList.length ? (
        <div>
          <div>
            <Styles>
              <Table columns={columns} data={rsvpList} />
            </Styles>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default RsvpList;
