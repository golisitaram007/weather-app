import * as actions from '../store/activities/actions';

describe('actions', () => {
  it('should create an action to add an activity', () => {
    const payload = {
        title: "New Year Resolution",
        acitivity: "Cycling",
        date: "01/01/2019"
    }
    const expectedAction = {
      type: actions.ADD_ACTIVITY,
      payload
    }
    expect(actions.addActivity(payload)).toEqual(expectedAction)
  });

  it('should create an action to update an activity', () => {
    const payload = {
        title: "New Year Resolution",
        acitivity: "Cycling and Joggin",
        date: "01/01/2020"
    }
    const expectedAction = {
      type: actions.UPDATE_ACTIVITY,
      payload
    }
    expect(actions.updateActivity(payload)).toEqual(expectedAction)
  });

  it('should create an action to delete an activity', () => {
    const payload = {
        title: "New Year Resolution",
        date: "01/01/2019"
    }
    const expectedAction = {
      type: actions.DELETE_ACTIVITY,
      payload
    }
    expect(actions.deleteActivity(payload)).toEqual(expectedAction)
  });

  it('should create an action to fetch activities', () => {
    const expectedAction = {
      type: actions.FETCH_ACTIVITIES,
    }
    expect(actions.readActivities()).toEqual(expectedAction)
  });

});