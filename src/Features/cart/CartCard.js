import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import { useDispatch } from 'react-redux';
import "./gameCard.css"


const CartCard = (props) => {
    
    const dispatch = useDispatch();

    const platforms = props.game.platforms;

    //Build this reducer!!
    const removeFromCart = () => {
        // dispatch(removeFromCart())
    }

    return (
        <>
            <Card className='product'>
                <CardImg src={props.game.image} alt={props.game.name} className='products'/>
                <CardBody className = "cardBody">
                    <CardTitle className='cardText'>{props.game.name}</CardTitle>
                    <i class="fa fa-star fa-lg" > {props.game.rating}</i>
                    <CardText className='cardText'>Metacritic: {props.game.metacritic}</CardText>
                    <CardText className='cardText'><i class="fa fa-calendar fa-lg" > Released: {props.game.released}</i></CardText>
                    <CardText className='platformsCard'> Platforms: {platforms.map((e) => {
                        return (
                            <CardText className= 'platformsCard'>{e.platform.name}</CardText>
                        )
                    })}</CardText> 
                   
                </CardBody>
            </Card>
        </>
    )
}

export default CartCard;