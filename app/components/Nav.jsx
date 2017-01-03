const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React App</li>
                    <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Link1</IndexLink></li>
                    <li><Link to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Link2</Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                </ul>
            </div>
        </div>
    );
};




module.exports = Nav;
