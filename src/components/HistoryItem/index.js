const HistoryItem = props => {
  const {historyDetails, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="history-list-container">
      <div>
        <p className="paragraph">{timeAccessed}</p>

        <img src={logoUrl} className="logo-pic" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default HistoryItem
