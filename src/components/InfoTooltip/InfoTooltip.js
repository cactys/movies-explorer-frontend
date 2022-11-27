import './InfoTooltip.css';
import denied from '../../images/denied.svg';
import access from '../../images/access.svg';

const InfoTooltip = ({ isOpen, onClose, onInfoTooltip, messageTooltip }) => {
  return (
    <div
      className={`info-tooltip ${isOpen && 'info-tooltip_opened'}`}
      onClick={onClose}
    >
      <div
        className="info-tooltip__container"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button className="info-tooltip__close" type="button" onClick={onClose} />
        <img
          className="info-tooltip__icon-tooltip"
          src={onInfoTooltip ? access : denied}
          alt="Tooltip"
        />
        <p className="info-tooltip__tooltip-text">
          {messageTooltip}
        </p>
      </div>
    </div>
  )
}

export default InfoTooltip
