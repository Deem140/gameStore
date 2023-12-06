import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';
import "../games/gameCard.css"


const CartCard = (props) => {
    
    const dispatch = useDispatch();

    const platforms = props.game.platforms;

    const remove = () => {
        console.log("item removed!")
        dispatch(removeFromCart())
    }

    return (
        //<Stack direct
        <>
            <Card className='product'>
                <CardImg src={props.game.image} alt={props.game.name} className='products'/>
                <CardBody className = "cardBody">
                    <CardTitle className='cardText'>{props.game.name}</CardTitle>
                    <i className="fa fa-star fa-lg" > {props.game.rating}</i>
                    <CardText className='cardText'>Metacritic: {props.game.metacritic}</CardText>
                    <CardText className='cardText'><i className="fa fa-calendar fa-lg" > Released: {props.game.released}</i></CardText>
                    <CardText className='platformsCard'> Platforms: {platforms.map((e) => {
                       
                        return (
                            <CardText className= 'platformsCard' key={e}>
                                {e}
                            </CardText>
                        )
                    })}</CardText> 

                    <div className='buttons'>
                        <Button onClick={remove}>X</Button>
                    </div>
                   
                </CardBody>
            </Card>
        </>
    )
}

export default CartCard;