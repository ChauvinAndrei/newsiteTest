// == styles
import './Widget.scss'

// import TicketSVG from '../../Assets/ticket.svg';
import TicketBigSVG from '../../Assets/ticketbig.svg';

const WidgetPopulaire = () => {

    return (
            <div className="widgetPopulaire--wrapper">

                <div className='widget--title'>
                    <h3>Populaire</h3>
                </div>

                 <div className='widgetPopulaire--content'>

                 </div>
            </div>
    )
    
}

const WidgetMessage = () => {

}

export {WidgetPopulaire, WidgetMessage};