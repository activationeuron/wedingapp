import React, { useEffect, useMemo, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { useRoutes } from 'react-router-dom';
import styledComponents from 'styled-components';
import request from '../utils/request';
import { Table } from './Table';

function InviteOne() {
  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [events, setEvents] = useState([]);
  const [all, setAll] = useState([]);
  //   const handleChange = (e) => {
  //     let value = Array.from(e.target.selectedOptions, (option) => option.value);
  //     console.log(value);
  //   };

  const handleChange = (e) => {
    let target = e.target;
    //here
    let value = Array.from(target.selectedOptions, (option) => option.value);
    setEvents(value);
    console.log(value);
    // setEvents(value);
  };

  const createInvite = async (e) => {
    e.preventDefault();
    try {
      const response = await request.post('/event/create', {
        name,
        phone,
        events,
        limit: 12,
      });
      if (response.data.success) {
        alert('INVITATION SUCCESS');
        getAllIncitations();
      }
    } catch (error) {
      console.log(error.message);
      alert('INVITATION FAILED');
    }
  };

  const getAllIncitations = async () => {
    const alldata = await request.get('/event/all');
    if (alldata.data.success) {
      setAll(alldata.data.data);
    }
  };

  useEffect(() => {
    getAllIncitations();
  }, []);

  const deleteEntry = async (data) => {
    console.log(data, 'daa');
    const deleted = await request.delete(`/event/${data}`);
    getAllIncitations();
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
            accessor: 'phone',
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'in Events ',
            accessor: 'events',
          },
          {
            Header: 'Delete',
            Cell: (tableProps) => (
              <span
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                  textDecoration: 'underline',
                }}
                onClick={() => {
                  // ES6 Syntax use the rvalue if your data is an array.
                  // const dataCopy = [...data];
                  // It should not matter what you name tableProps. It made the most sense to me.
                  // dataCopy.splice(tableProps.row.index, 1);
                  // setData(dataCopy);
                  const dataCopy = [...all];

                  console.log(tableProps.row);
                  deleteEntry(tableProps.row.original._id);
                }}
              >
                Delete
              </span>
            ),
          },
        ],
      },
    ],
    []
  );

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
    <div>
      <div className='flex flex-col w-1/2 mx-auto space-y-10'>
        <div className='text-center text-2xl uppercase'>Create Invitations</div>
        <form
          onSubmit={createInvite}
          className='flex flex-col justify-center w-full  space-y-10'
        >
          <div className='w-full'>
            <PhoneInput
              country={'us'}
              onChange={(phone) => setPhone(phone)}
              className='w-full'
            />
          </div>
          <div className='w-full'>
            <input
              type='text'
              placeholder='name'
              required
              className='py-2 bg-slate-100 px-5 w-full'
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <select multiple={true} required onChange={handleChange}>
            <option value='HALDI'>HALDI</option>
            <option value='SANGEET'>SANGEET</option>
            <option value='WEDDING'>WEDDING</option>
            <option value='RECEPTIONS'>RECEPTIONS</option>
          </select>
          <button
            type='submit'
            className='py-2 bg-slate-800 text-center text-white'
          >
            Submit
          </button>
        </form>
      </div>
      <div className='flex justify-center my-10'>
        <Styles>
          <Table columns={columns} data={all} />
        </Styles>
      </div>
    </div>
  );
}

export default InviteOne;
