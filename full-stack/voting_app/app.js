

const ProductList = () => {
    return (
        <div className="ui items">
            <Product />
        </div>

    );
};



const Product = () => {
    return (
        <div className='item'>
            <div className='image'>
                <img src='images/products/image-aqua.png' />
            </div>
            <div className='middle aligned content'>
                <div className='description'>
                    <a>Fort Knight</a>
                    <p>Authentic renaissance actors, delivered in just two weeks.</p>
                </div>
                <div className='extra'>
                    <span>Submitted by:</span>
                    <img
                        className='ui avatar image'
                        src='images/avatars/daniel.jpg'
                    />
                </div>
            </div>
        </div>
    );
};

let Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(
    <Hello name="GeoBar" />,
    document.getElementById('content')
);