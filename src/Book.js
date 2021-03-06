import React, {
    Component
} from 'react';

class Book extends Component {

    state = {
        shelf: ''
    }

    updateShelf(value) {
        const {onUpdateShelf} = this.props;
        onUpdateShelf(this.props, value);
        this.setState({shelf: value});
    };

    componentDidMount() {
        const {shelf} = this.props;
        this.setState({shelf});
    }

    render() {
        let displayedThumbnail = this.props.imageLinks ? this.props.imageLinks.thumbnail : '';
        const {title,authors} = this.props;
        const {shelf} = this.state;
        return (
          <div className = "book" >
          <div className = "book-top" >
          <div className = "book-cover" style = {{width: 128, height: 193, backgroundImage: `url("${displayedThumbnail}")`}} >
            </div>
            <div className = "book-shelf-changer" >
            <select
              value = {shelf}
              onChange = {
                (event) => this.updateShelf(event.target.value)
            } >
              <option value = "move" disabled > Move to... < /option>
              <option value = "currentlyReading" > Currently Reading < /option>
              <option value = "wantToRead" > Want to Read < /option>
              <option value = "read" > Read < /option>
              <option value = "none" > None < /option>
            </select>
            </div>
            </div>
            <div className = "book-title" > {title} < /div>
            <div className = "book-authors" > {authors} < /div>
            </div>
        );
    }
}

export default Book;
