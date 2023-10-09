import PropTypes from 'prop-types';

export const userList = [
    {
        id : 1,
        name : 'Airi Satou',
        position : 'Technical Author',
        office : 'London',
        age : 27
    },
    {
        id : 2,
        name : 'Gavin Cortez',
        position : 'Team Leader',
        office : 'San Francisco',
        age : 22
    },
    {
        id : 3,
        name : 'Gloria Little',
        position : 'Systems Administrator',
        office : 'New York',
        age : 33
    }
];

userList.propTypes = {
    id : PropTypes.number,
    name : PropTypes.string,
    position : PropTypes.string,
    office : PropTypes.string,
    age : PropTypes.number
}
