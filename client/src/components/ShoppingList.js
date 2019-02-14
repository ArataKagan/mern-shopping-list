import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'; 
import { getItems, deleteItem, purchasedItem} from '../actions/itemActions';
import PropTypes from 'prop-types'


class ShoppingList extends Component {

    state = {
        itemChecked: {}
    }

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    } 

    onPurchasedClick = (id, e) => {
        let itemChecked = this.state.itemChecked;
        itemChecked[id] = e.target.checked;

        const purchasedItemId = {
            id : this.state.itemChecked
        } 

        console.log(Object.keys(purchasedItemId.id));
        // return item's object and object's key
        this.props.purchasedItem(purchasedItemId, Object.keys(purchasedItemId.id));
    }
 
    render() {
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                >&times;</Button>
                                <input name="isPurchased" type="checkbox" onChange={this.onPurchasedClick.bind(this, _id)}/>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired 
}

const mapStateToProps = (state) => ({
    item: state.item
}); 

export default connect(
    mapStateToProps, 
    { getItems, deleteItem, purchasedItem }
)(ShoppingList);
