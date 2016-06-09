var React = require('react');
var Header = require('./Header.jsx');

var ContentManager = React.createClass({
    render: function() {
        return (
            <div className="contentManager">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            Hello from main
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ContentManager;