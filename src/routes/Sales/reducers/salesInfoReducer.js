// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
export const REFRESH_INFO = 'REFRESH_INFO';


// ------------------------------------
// Actions
// ------------------------------------

export const getNewInfo = {

  showNewInfo(newInfo) {
    return {
      type: REFRESH_INFO,
      payload: newInfo
    }
  },

  fetchData() {
    return (dispatch) => {
      setInterval(() => {
      console.log('fetched');
      return dispatch(getNewInfo.showNewInfo(updatedSalesInfo));
      }, 5000)
    }
  }
};

// Mocked up initial Data, and updated info

const updatedSalesInfo = {
  title: "VP of Sales",
  status: "warning",
  regionalInformation:[{
    region: 'North America',
    status: 'critical',
    salesLeads:[{
      leadArea: "Canada",
      status: 'warning',
      reps:[{
        location: 'Toronto',
        status: 'normal'
      },
        {
          location: 'Vancouver',
          status: 'critical'
        }
      ]
    },
      {
        leadArea: "USA",
        status: "warning",
        reps:[{
          location: 'New York',
          status: 'normal'
        },
          {
            location: 'Dallas',
            status: 'warning'
          },
          {
            location: 'Los Angeles',
            status: 'normal'
          }]
      }]
  },{
    region: 'Europe',
    status: 'normal',
    salesLeads:[{
      leadArea: 'Germany',
      status: 'warning',
      reps: [
        {
          location: 'Berlin',
          status: 'normal'
        },
        {
          location: 'Frankfurt',
          status: 'critical'
        }]
    },{
      leadArea: 'Italy',
      status: 'warning',
      reps:[{
        location: 'Milan',
        status: 'normal'
      }]
    }]
  }]
};


const salesInfo = {
  title: "VP of Sales",
  status: "critical",
  regionalInformation:[{
    region: 'North America',
    status: 'normal',
    salesLeads:[{
      leadArea: "Canada",
      status: 'normal',
      reps:[{
        location: 'Toronto',
        status: 'normal'
      },
        {
          location: 'Vancouver',
          status: 'normal'
        }
      ]
    },
      {
        leadArea: "USA",
        status: "critical",
        reps:[{
          location: 'New York',
          status: 'warning'
        },
          {
            location: 'Dallas',
            status: 'critical'
          },
          {
            location: 'Los Angeles',
            status: 'critical'
          }]
      }]
  },{
    region: 'Europe',
    status: 'warning',
    salesLeads:[{
      leadArea: 'Germany',
      status: 'warning',
      reps: [
        {
          location: 'Berlin',
          status: 'normal'
        },
        {
          location: 'Frankfurt',
          status: 'critical'
        }]
    },{
      leadArea: 'Italy',
      status: 'normal',
      reps:[{
        location: 'Milan',
        status: 'normal'
      }]
    }]
  }]
};
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2,
  [REFRESH_INFO] : (state, payload) => {
    return state = payload.payload;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function counterReducer (state = salesInfo, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
