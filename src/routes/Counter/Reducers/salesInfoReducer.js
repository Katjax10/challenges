// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
export const REFRESH_INFO = 'REFRESH_INFO';


// ------------------------------------
// Actions
// ------------------------------------
export function increment() {
  return {
    type    : COUNTER_INCREMENT,
    payload : salesInfo
  }
}

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

const updatedSalesInfo = {
  title: "VP of Sales",
  status: "critical",
  regionalInformation:[{
    region: 'North America',
    status: 'critical',
    salesLeads:[{
      leadArea: "Canada",
      status: 'warning',
      reps:[{
        location: 'toronto',
        status: 'normal'
      },
        {
          location: 'vancouver',
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
  },{}
    ]
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
        location: 'toronto',
        status: 'normal'
      },
        {
          location: 'vancouver',
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
    region: 'Europe'
  }
  ]
};

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
//
// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().salesInfo
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }

export const actions = {
  increment
}

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
