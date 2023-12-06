import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import Favorites from '../user/Favorites';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import "./gameCard.css"
import { formatCurrency } from '../../utils/formatCurrency';
import { addCartItem, selectAllCartItems, increaseCartQuantity } from '../cart/cartSlice';
// import FontAwesomeIcon from 'font-awesome';

const GameCard = (props) => { //image, title, genre, rating, etc
    // console.log("ncreaseCartQuantity", increaseCartQuantity)
    // console.log("addCartItem", addCartItem)
    const dispatch = useDispatch();
    const cartItems = useSelector(selectAllCartItems);
    const price = 60;

    const parentPlatforms = props.game.parent_platforms

    const game = {
        id: props.game.id,
        image: props.game.background_image,
        name: props.game.name,
        rating: props.game.rating,
        metacritic: props.game.metacritic,
        released: props.game.released,
        platforms: parentPlatforms.map((e) => {
            return (
                e.platform.name
            )
        }),
        // date: new Date(Date.now())
    }

    const addToCart = () => {
        console.log('Game:', game);
        dispatch(addCartItem(game));

    }

    const increaseQuantity = () => {
        console.log(game.id, "Game.id")
        dispatch(increaseCartQuantity(game.id))
    }

    // const increaseCartQuantiti = (id) => {
    //     if(cartItems.find(item => item.id === id) == null){
    //         return [...cartItems, {id, quantity: 1}]
    //     } else {
    //         return cartItems.map(item => {
    //             if (item.id === id){
    //                 return { ...item, quantity: item.quantity + 1}
    //             } else {
    //                 return item
    //             }
    //         })
    //     }
    // }
    const decreaseCartQuantitiy = (id) => {
        if(cartItems.find(item => item.id === id)?.quantity === 1){
            return cartItems.filter(item => item.id !== id)
        } else {
            return cartItems.map(item => {
                if (item.id === id){
                    return { ...item, quantity: item.quantity - 1}
                } else {
                    return item
                }
            })
        }
    }
    const quantity = cartItems.length;

    return (
        <>
            <Card className="h-100" >
                <CardImg
                    variant='top'
                    src={props.game.background_image} 
                    alt={props.game.name} 
                    height="200px"
                    style={{ objectFit: "cover"}}
                    // className='products'
                />
                <CardBody className = "d-flex flex-column">
                    <CardTitle className="d-flex justify-content-between
                    align-items-baseline mb-4">
                        <span className='fs-2'>{props.game.name}</span>
                        <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                    </CardTitle>
                    <i className="fa fa-star fa-lg" > {props.game.rating}</i>
                    <CardText className='cardText'>Metacritic: {props.game.metacritic}</CardText>
                    <CardText className='cardText'><i className="fa fa-calendar fa-lg" > Released: {props.game.released}</i></CardText>
                    <CardText className='platformsCard'> Platforms: {parentPlatforms.map((e) => {
                        return (
                            <CardText className= 'platformsCard' key={e.platform.name}>
                                {e.platform.name}
                            </CardText>
                        )
                    })}</CardText> 

                {/* <div className="buttons">

                    <Button>Favorite</Button>
                    <Button>See More</Button>
                    <Button onClick={addToCart}> Add to Cart</Button>
                    
                </div> */}
                   
                   {quantity <= 10 ? (
                    <Button className= "w-100" onClick={addToCart}>+ Add to Cart</Button>
                   ) : <div className = "d-flex align-items-center flex-column"
                            style={{gap: ".5rem"}}
                        >
                            <div
                                className='d-flex align-items-center
                                justify-content-center'
                                style= {{ gap : ".5rem" }}
                            >
                                <Button>-</Button>
                                <div>
                                    <span classNAme="fs-3">{quantity}</span> in cart
                                </div>
                                <Button onClick={increaseQuantity}>+</Button>
                            </div>
                            <Button variant="danger" size='sm'>
                                Remove
                            </Button>
                       </div>}
                </CardBody>
            </Card>
        </>

        
    )

}

export default GameCard